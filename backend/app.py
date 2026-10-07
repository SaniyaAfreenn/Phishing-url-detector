import os
import sys
import logging
import joblib
import pandas as pd
from flask import Flask, request, jsonify
from flask_cors import CORS

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s [%(levelname)s] %(message)s'
)
logger = logging.getLogger(__name__)

# Initialize Flask App
app = Flask(__name__)

# Enable CORS for all routes to allow frontend communication
CORS(app)

# Resolve path to the pre-trained model in ml_core directory
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_PATH = os.path.abspath(os.path.join(BASE_DIR, "..", "ml_core", "phishing_model.joblib"))

# Load the machine learning model
model = None
try:
    if os.path.exists(MODEL_PATH):
        model = joblib.load(MODEL_PATH)
        logger.info(f"Successfully loaded ML model from {MODEL_PATH}")
    else:
        logger.warning(f"Model file not found at {MODEL_PATH}. Prediction endpoint will return an error until model is available.")
except Exception as e:
    logger.error(f"Error loading model from {MODEL_PATH}: {str(e)}")


def extract_features(url: str) -> dict:
    """
    Feature Extraction Engine:
    Replicates exact feature extraction logic used during training.
    
    Features:
    1. Feature 1: Total length of the URL string.
    2. Feature 2: Presence of an IP address indicator (1 if digits are present and there are >= 3 dots, else 0).
    3. Feature 3: Special character counts (-, @, ?).
    """
    url_str = str(url).strip()
    
    # Feature 1: Total length of the URL string
    url_length = len(url_str)
    
    # Feature 2: Presence of an IP address indicator (1 if digits are present and >= 3 dots, else 0)
    has_digits = any(char.isdigit() for char in url_str)
    dot_count = url_str.count('.')
    ip_indicator = 1 if (has_digits and dot_count >= 3) else 0
    
    # Feature 3: Special character counts (-, @, ?)
    count_hyphens = url_str.count('-')
    count_at = url_str.count('@')
    count_qm = url_str.count('?')
    
    return {
        'length_url': url_length,
        'ip': ip_indicator,
        'nb_hyphens': count_hyphens,
        'nb_at': count_at,
        'nb_qm': count_qm
    }


@app.route('/', methods=['GET'])
def index():
    """Root route providing API status and model information."""
    return jsonify({
        'name': 'Phishing URL Detector API',
        'status': 'running',
        'model_loaded': model is not None,
        'endpoints': {
            '/predict': 'POST - Accepts JSON {"url": "https://example.com"} to predict Phishing or Safe',
            '/health': 'GET - Health check endpoint'
        }
    }), 200


@app.route('/health', methods=['GET'])
def health():
    """Health check endpoint."""
    return jsonify({
        'status': 'healthy',
        'model_loaded': model is not None
    }), 200


@app.route('/predict', methods=['POST'])
def predict():
    """
    Predict endpoint:
    - Accepts a JSON body containing a 'url' key.
    - Extracts features from the URL.
    - Passes the features into the loaded Random Forest model.
    - Returns a JSON response containing the prediction result ('Safe' or 'Phishing').
    """
    global model
    
    # Check if model is loaded; try reloading if not
    if model is None:
        if os.path.exists(MODEL_PATH):
            try:
                model = joblib.load(MODEL_PATH)
                logger.info(f"Model reloaded successfully from {MODEL_PATH}")
            except Exception as e:
                return jsonify({
                    'error': f"Model loading failed: {str(e)}"
                }), 500
        else:
            return jsonify({
                'error': f"Model file not found at {MODEL_PATH}. Please ensure phishing_model.joblib exists."
            }), 500

    # Parse and validate incoming JSON request
    data = request.get_json(silent=True)
    if not data or not isinstance(data, dict):
        return jsonify({
            'error': 'Invalid request body. Expected JSON object with a "url" key.'
        }), 400

    url = data.get('url')
    if not url or not isinstance(url, str) or not url.strip():
        return jsonify({
            'error': 'The "url" field is required and must be a non-empty string.'
        }), 400

    url = url.strip()

    try:
        # Extract features
        features = extract_features(url)
        
        # Prepare feature DataFrame for the model
        feature_columns = ['length_url', 'ip', 'nb_hyphens', 'nb_at', 'nb_qm']
        features_df = pd.DataFrame([[
            features['length_url'],
            features['ip'],
            features['nb_hyphens'],
            features['nb_at'],
            features['nb_qm']
        ]], columns=feature_columns)

        # Predict using the loaded model
        raw_prediction = model.predict(features_df)[0]
        
        # Normalize prediction label to 'Safe' or 'Phishing'
        if str(raw_prediction).lower() in ['1', 'phishing']:
            prediction_label = 'Phishing'
        elif str(raw_prediction).lower() in ['0', 'safe', 'legitimate']:
            prediction_label = 'Safe'
        else:
            prediction_label = str(raw_prediction)

        # Calculate prediction probabilities/confidence if available
        confidence = None
        probabilities = None
        if hasattr(model, "predict_proba"):
            try:
                proba = model.predict_proba(features_df)[0]
                classes = [str(c) for c in model.classes_]
                confidence = float(max(proba))
                probabilities = {c: round(float(p), 4) for c, p in zip(classes, proba)}
            except Exception:
                pass

        # Build response payload
        response = {
            'url': url,
            'prediction': prediction_label,
            'is_phishing': prediction_label == 'Phishing',
            'features': features
        }
        
        if confidence is not None:
            response['confidence'] = round(confidence, 4)
        if probabilities is not None:
            response['probabilities'] = probabilities

        return jsonify(response), 200

    except Exception as e:
        logger.error(f"Prediction failed for url {url}: {str(e)}")
        return jsonify({
            'error': f'Prediction failed: {str(e)}'
        }), 500


if __name__ == '__main__':
    # Run the server on port 5000
    app.run(host='0.0.0.0', port=5001, debug=True)
