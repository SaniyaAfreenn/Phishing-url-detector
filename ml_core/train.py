import os
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
import joblib

def train_and_save_model():
    base_dir = os.path.dirname(os.path.abspath(__file__))
    project_root = os.path.abspath(os.path.join(base_dir, ".."))
    dataset_path = os.path.join(project_root, "dataset", "Training.csv")
    model_path = os.path.join(base_dir, "phishing_model.joblib")

    if not os.path.exists(dataset_path):
        raise FileNotFoundError(f"Training dataset not found at {dataset_path}")

    print(f"Loading dataset from {dataset_path}...")
    df = pd.read_csv(dataset_path)

    # Required 5 features
    feature_columns = ['length_url', 'ip', 'nb_hyphens', 'nb_at', 'nb_qm']
    
    X = df[feature_columns]
    # Map status to 'Safe' and 'Phishing'
    y = df['status'].map({'legitimate': 'Safe', 'phishing': 'Phishing'})

    print(f"Training RandomForestClassifier on {len(X)} samples with features: {feature_columns}...")
    model = RandomForestClassifier(n_estimators=100, random_state=42)
    model.fit(X, y)

    print(f"Saving model to {model_path}...")
    joblib.dump(model, model_path)
    print("Model successfully trained and saved!")

if __name__ == "__main__":
    train_and_save_model()
