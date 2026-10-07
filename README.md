# Phishing URL Detection using Machine Learning

Machine Learning based web application to detect and classify phishing URLs. Built for REVA University Abhinava Hackathon.


## 1. Problem Statement

Phishing URLs are malicious or deceptive web addresses designed to trick users into visiting fraudulent websites and potentially revealing sensitive information. The project aims to identify whether a given URL is legitimate or phishing using Machine Learning.

## 2. Proposed Solution

The system uses labelled URL data and URL-based features to train machine learning classification models. The trained model analyzes the characteristics of a URL and predicts whether it is legitimate or phishing.

## 3. Dataset

**Dataset:** A Dataset for Detecting Phishing URLs!

**Source:** Kaggle

The dataset contains:

- `Training.parquet`
- `Testing.parquet`

The training dataset contains **7,658 records** and **87 URL-based features**.

The target column is `status`, with two classes:

- `legitimate`
- `phishing`

### Dataset Distribution

| Category | Number of Records |
|---|---:|
| Legitimate | 3,829 |
| Phishing | 3,829 |
| Total | 7,658 |

**Missing values:** 0

## 4. Important URL Features

The dataset contains several URL-based features, including:

- URL length
- Hostname length
- Number of dots
- Number of hyphens
- Number of `@` symbols
- Number of question marks
- HTTPS token
- IP address
- Number of subdomains
- URL shortening service
- Phishing hints
- Suspicious TLD
- Number of hyperlinks
- Domain age
- Web traffic
- Google index
- Page rank

## 5. Project Goal

The machine learning model learns patterns from labelled URLs and classifies a new URL as either:

**LEGITIMATE / SAFE**

or

**PHISHING**

## 6. System Workflow

**Step 1 – Collect Dataset**

Use labelled URLs containing both legitimate and phishing examples.

**Step 2 – Feature Extraction**

Use URL-based features such as URL length, number of dots, HTTPS information, IP address, suspicious keywords, subdomains, and other available features.

**Step 3 – Data Preparation**

Separate the URL features from the target column (`status`) and prepare the data for machine learning.

**Step 4 – Model Training**

Train machine learning classification models using the training dataset.

**Step 5 – Model Evaluation**

Evaluate the models using the testing dataset and compare their performance using accuracy and other evaluation metrics.

**Step 6 – Confusion Matrix**

Generate a confusion matrix to understand correct and incorrect phishing/legitimate predictions.

**Step 7 – URL Prediction Demo**

Allow the user/judge to enter a URL and display whether the URL is predicted as legitimate/safe or phishing.

## 7. Technologies Used

- **Programming Language:** Python
- **Development Environment:** Google Colab
- **Libraries:** pandas, scikit-learn, matplotlib, seaborn
- **Machine Learning:** Classification models
- **Dataset Source:** Kaggle

## 8. Expected Output

**Input:** A URL entered by the user.

**Output:** The system predicts whether the URL is:

**SAFE / LEGITIMATE**

or

**PHISHING**

## 9. Model Performance

> Add the actual results after model testing.

**Decision Tree:** To be added after model testing.

**Random Forest:** To be added after model testing.

**Best Model:** To be decided based on testing results.

## 10. Demo

The final system will allow the user/judge to enter a URL and receive a prediction indicating whether the URL is legitimate/safe or phishing.

## 11. Future Scope

- Real-time URL checking
- Browser extension integration
- Improved phishing detection using additional features
- Further improvement of model performance using larger datasets
