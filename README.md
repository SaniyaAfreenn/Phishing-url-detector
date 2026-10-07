# Phishing URL Detection Using Machine Learning

A Machine Learning-based web application designed to analyze URL characteristics and classify URLs as **Legitimate** or **Phishing**. The project was developed as part of the **REVA University Abhinava Hackathon**.

---

## 📌 Project Overview

Phishing is a major cybersecurity threat in which attackers use deceptive URLs to redirect users to fraudulent websites and potentially obtain sensitive information.

This project applies **Machine Learning classification techniques** to analyze URL-based features and identify potentially malicious URLs.

The system provides an automated approach for distinguishing between **legitimate and phishing URLs**.

---

## 🎯 Problem Statement

Phishing URLs can be newly created or frequently modified, making detection challenging using traditional rule-based approaches.

The objective of this project is to develop a Machine Learning-based system that can:

- Analyze URL characteristics
- Identify patterns associated with phishing URLs
- Classify URLs as legitimate or phishing
- Provide a prediction for a newly entered URL

---

## 💡 Proposed Solution

The system uses a **labelled dataset** containing both legitimate and phishing URLs.

Relevant URL-based features are extracted and processed before being provided to Machine Learning classification models. The trained models learn patterns from the dataset and use those patterns to classify previously unseen URLs.

### 🔍 Prediction Classes

The system provides one of the following predictions:

- 🟢 **LEGITIMATE** – The URL is classified as safe based on the analyzed features.
- 🔴 **PHISHING** – The URL shows characteristics associated with phishing activity.

The prediction is generated automatically by the trained Machine Learning model based on the URL features.
