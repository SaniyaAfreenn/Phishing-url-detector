# Phishing URL Detection using Machine Learning

A Machine Learning based web application that detects and classifies URLs as legitimate or phishing. Built for the REVA University Abhinava Hackathon.

## 1. Problem Statement

Phishing URLs are malicious or deceptive web addresses designed to trick users into visiting fraudulent websites and sharing sensitive information. This project aims to identify whether a URL is legitimate or phishing using Machine Learning.

## 2. Proposed Solution

The system uses labelled URL data and URL-based features to train classification models. The trained model analyzes URL characteristics and predicts whether a URL is legitimate or phishing.

## 3. Dataset

**Dataset:** A Dataset for Detecting Phishing URLs  
**Source:** Kaggle

The dataset contains:

- `Training.parquet`
- `Testing.parquet`

The training dataset contains **7,658 records** and **87 URL-based features**.

**Target column:** `status`

- `legitimate`
- `phishing`

| Category | Records |
|---|---:|
| Legitimate | 3,829 |
| Phishing | 3,829 |
| **Total** | **7,658** |

**Missing values:** 0

## 4. Important URL Features

The dataset includes features such as:

- URL length
- Hostname length
- Number of dots and hyphens
- `@` and `?` symbols
- HTTPS information
- IP address
- Number of subdomains
- URL shortening service
- Phishing hints
- Suspicious TLD
- Domain age
- Web traffic
- Google index
- Page rank

## 5. Project Goal

The model learns patterns from labelled URLs and classifies new URLs as:

**LEGITIMATE / SAFE**

or

**PHISHING**

## 6. System Workflow

1. **Dataset Collection** – Collect labelled legitimate and phishing URLs.
2. **Feature Extraction** – Use URL-based features for detection.
3. **Data Preparation** – Separate features and the `status` target column.
4. **Model Training** – Train classification models using the training data.
5. **Model Evaluation** – Test and compare model performance.
6. **Confusion Matrix** – Analyze correct and incorrect predictions.
7. **URL Prediction** – Enter a URL and receive a phishing or legitimate prediction.

## 7. Technologies Used

- **Language:** Python
- **Environment:** Google Colab
- **Libraries:** Pandas, Scikit-learn, Matplotlib, Seaborn
- **Machine Learning:** Classification Models
- **Dataset:** Kaggle

## 8. Expected Output

**Input:** URL entered by the user.

**Output:** Prediction as:

**SAFE / LEGITIMATE**

or

**PHISHING**

## 9. Model Performance

Model performance will be evaluated using accuracy and other evaluation metrics.

- **Decision Tree:** To be added after testing
- **Random Forest:** To be added after testing
- **Best Model:** To be selected based on performance

## 10. Demo

The final application will allow users or judges to enter a URL and receive a prediction indicating whether it is legitimate or phishing.

## 11. Future Scope

- Real-time URL checking
- Browser extension integration
- Additional URL and domain features
- Larger datasets for improved detection
- Further improvement of model performance
