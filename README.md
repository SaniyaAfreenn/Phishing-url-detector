# Phishing URL Detection Using Machine Learning

A Machine Learning-based web application that analyzes URL characteristics and classifies URLs as **Legitimate** or **Phishing**.

**Developed for the REVA University Abhinava Hackathon 2026.**

## 🚀 Live Demo

**GitHub Pages:**  
https://saniyaafreenn.github.io/Phishing-url-detector/

**Vercel:**  
https://phishing-url-detector-frontend-iota.vercel.app

The GitHub Pages deployment provides a live frontend for the project, while the application communicates with the deployed Flask backend for URL prediction.

---

## 📌 Project Overview

Phishing is a major cybersecurity threat in which attackers use deceptive URLs to redirect users to fraudulent websites and potentially steal sensitive information.

This project uses **Machine Learning classification techniques** to analyze URL characteristics and identify patterns commonly associated with phishing attempts.

The system allows a user to enter a URL and receive a prediction indicating whether the URL is likely to be **Legitimate** or **Phishing**.

---

## 🎯 Problem Statement

Phishing URLs can be created and distributed rapidly, making them difficult to identify using simple rule-based techniques alone.

The objective of this project is to develop a Machine Learning-based system that can:

- Analyze important characteristics of a URL
- Identify patterns associated with phishing URLs
- Classify URLs as legitimate or phishing
- Predict the classification of previously unseen URLs
- Provide users with an easy-to-use interface for URL analysis

---

## 💡 Proposed Solution

The system uses a labelled dataset containing examples of legitimate and phishing URLs.

Relevant URL characteristics are extracted and provided to Machine Learning classification models. The trained model then analyzes a new URL and generates a classification.

### System Workflow

```text
User enters URL
       ↓
Frontend
       ↓
Flask REST API
       ↓
URL Feature Extraction
       ↓
Trained ML Model
       ↓
Prediction + Confidence
       ↓
Frontend Result
```

---

## 🔍 URL Features

The system extracts URL-based characteristics such as:

- URL length
- Presence of an IP address
- Number of hyphens
- Presence of `@`
- Number of question marks
- Other URL characteristics used by the trained model

These features are converted into a format suitable for Machine Learning prediction.

---

## 🤖 Machine Learning

The project uses Python and **scikit-learn** for Machine Learning.

### Models

The project supports Machine Learning classification using models such as:

- Decision Tree Classifier
- Random Forest Classifier

The models are trained using labelled URL data containing legitimate and phishing examples.

### Model Workflow

```text
Dataset
   ↓
Data Preprocessing
   ↓
Feature Extraction
   ↓
Model Training
   ↓
Model Evaluation
   ↓
Save Trained Model
   ↓
Prediction API
```

The trained model is saved using **Joblib** and loaded by the Flask backend.

---

## 🧩 Project Structure

```text
Phishing-url-detector/
│
├── backend/
│   ├── app.py
│   ├── phishing_model.joblib
│   └── requirements.txt
│
├── dataset/
│   ├── Training.csv
│   └── Testing.csv
│
├── frontend/
│   ├── index.html
│   ├── script.js
│   └── style.css
│
├── ml_core/
│   ├── train.py
│   └── phishing_model.joblib
│
├── docs/
│
├── README.md
└── .github/
    └── workflows/
        └── deploy-pages.yml
```

---

## 🌐 API

The Flask backend provides the following endpoints.

### Health Check

```text
GET /health
```

Used to check whether the backend and trained model are available.

### URL Prediction

```text
POST /predict
```

Example request:

```json
{
  "url": "https://example.com"
}
```

The API processes the URL and returns the model's prediction and related information.

---

## 🖥️ Frontend

The frontend is developed using:

- HTML5
- CSS3
- JavaScript
- Fetch API

The interface allows users to enter a URL and view the Machine Learning prediction.

The frontend communicates with the Flask backend through HTTP requests.

---

## ⚙️ Backend

The backend is developed using **Flask**.

Responsibilities include:

1. Receiving the URL from the frontend
2. Extracting URL features
3. Loading the trained Machine Learning model
4. Generating a prediction
5. Returning the prediction to the frontend

**CORS** is enabled to allow communication between the deployed frontend and backend.

---

## 🗂️ Dataset

The project uses labelled URL data containing examples of:

- Legitimate URLs
- Phishing URLs

The dataset is divided into training and testing data.

```text
Training.csv
Testing.csv
```

The training data is used to train the Machine Learning model, while the testing data is used to evaluate its performance.

---

## 🛠️ Technology Stack

| Component | Technology |
|---|---|
| Programming Language | Python |
| Machine Learning | scikit-learn |
| Data Processing | pandas |
| Model Storage | Joblib |
| Backend | Flask |
| Frontend | HTML, CSS, JavaScript |
| API Communication | Fetch API |
| Dataset | CSV |
| Development | Google Colab / VS Code |
| Version Control | Git & GitHub |
| Frontend Deployment | GitHub Pages / Vercel |
| Backend Deployment | Vercel |

---

## 👥 Team

**REVA University – B.Tech Artificial Intelligence & Data Science, Section C**

| Member | Role |
|---|---|
| Saniya Afreen | Core ML / Backend Logic |
| Vaishnavi | Integration / API |
| T Pallavi | Frontend / UI |
| Soumya | Documentation / Testing / Research |

---

## 🔐 Security Note

The application provides a Machine Learning-based prediction using URL characteristics.

A **LEGITIMATE** prediction does not guarantee that a website is completely safe, and a **PHISHING** prediction represents the model's assessment based on the available features.

Users should always verify unfamiliar websites before entering passwords, financial information, or other sensitive data.

---

## 🚀 Future Scope

Possible improvements include:

- More advanced URL feature extraction
- Larger and more diverse datasets
- Additional Machine Learning models
- Explainable prediction results
- Risk-factor analysis
- Real-time threat intelligence integration
- Browser extension integration
- Improved model accuracy through continuous training

---

## 📊 Expected Outcome

The project provides a simple web-based interface through which users can submit a URL and receive an automated Machine Learning-based classification.

The system demonstrates how Machine Learning can be applied to cybersecurity to assist in identifying potentially malicious URLs.

---

## 🔗 Project Links

**GitHub Repository:**  
https://github.com/SaniyaAfreenn/Phishing-url-detector

**Live GitHub Pages:**  
https://saniyaafreenn.github.io/Phishing-url-detector/

**Live Vercel Frontend:**  
https://phishing-url-detector-frontend-iota.vercel.app

**Live Backend API:**  
https://phishing-url-detector-zuoo.vercel.app

---

## ⚠️ Disclaimer

This project is developed for educational and hackathon purposes. The predictions generated by the Machine Learning model should not be considered a definitive security verdict. Always exercise caution when accessing unfamiliar websites.
