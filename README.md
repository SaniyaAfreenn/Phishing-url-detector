# Phishing URL Detection Using Machine Learning

A Machine Learning-based web application that analyzes URL characteristics and classifies websites as **legitimate or phishing**. This project was developed for the **REVA University Abhinava Hackathon**.

## 1. Overview

Phishing attacks use deceptive URLs to redirect users to fraudulent websites and potentially expose sensitive information. This project applies Machine Learning techniques to analyze URL-based characteristics and identify potentially malicious URLs.

## 2. Problem Statement

Traditional phishing detection methods may not always identify newly created or modified phishing URLs. Therefore, an intelligent system is required to analyze URL patterns and classify them effectively.

The objective of this project is to develop a Machine Learning-based solution that can distinguish between **legitimate and phishing URLs**.

## 3. Proposed Solution

The system uses a labelled dataset containing legitimate and phishing URLs. Relevant URL-based features are used to train classification models.

After training, the models analyze the characteristics of a new URL and predict whether it is **SAFE / LEGITIMATE** or **PHISHING**.

## 4. Dataset

**Dataset:** A Dataset for Detecting Phishing URLs  
**Source:** Kaggle

The dataset contains:

- `Training.parquet`
- `Testing.parquet`

The training dataset consists of **7,658 records** and **87 URL-based features**.

**Target Variable:** `status`

- `legitimate`
- `phishing`

### Dataset Distribution

| Category | Records |
|---|---:|
| Legitimate | 3,829 |
| Phishing | 3,829 |
| **Total** | **7,658** |

**Missing Values:** 0

## 5. Key Features

The system uses various URL and domain-related characteristics, including:

- URL length
- Hostname length
- Number of dots and hyphens
- Special characters such as `@` and `?`
- HTTPS usage
- IP address presence
- Number of subdomains
- URL shortening services
- Phishing indicators
- Suspicious TLDs
- Domain age
- Web traffic
- Google indexing
- Page rank

## 6. System Architecture

The project follows the following pipeline:

**Dataset → Feature Analysis → Data Preparation → Model Training → Model Evaluation → URL Prediction**

### Workflow

1. **Dataset Collection**  
   Obtain labelled legitimate and phishing URL data.

2. **Feature Analysis**  
   Analyze URL characteristics and identify relevant features.

3. **Data Preparation**  
   Separate input features and the `status` target variable and prepare the data for training.

4. **Model Training**  
   Train classification models using the prepared dataset.

5. **Model Evaluation**  
   Evaluate the trained models using accuracy and other performance metrics.

6. **Confusion Matrix**  
   Analyze correct and incorrect classifications.

7. **URL Prediction**  
   Provide a prediction for a newly entered URL.

## 7. Machine Learning Models

The project explores classification algorithms such as:

- **Decision Tree**
- **Random Forest**

The models will be compared based on their evaluation performance, and the best-performing model will be selected for the final prediction system.

## 8. Technologies Used

| Technology | Purpose |
|---|---|
| **Python** | Programming and model development |
| **Google Colab** | Development environment |
| **Pandas** | Data processing and analysis |
| **Scikit-learn** | Machine Learning |
| **Matplotlib** | Data visualization |
| **Seaborn** | Visualization and confusion matrix |
| **Kaggle** | Dataset source |

## 9. Prediction

### Input

A URL entered by the user.

### Output

The trained model classifies the URL as:

**🟢 SAFE / LEGITIMATE**

or

**🔴 PHISHING**

## 10. Model Evaluation

Model performance will be evaluated using:

- Accuracy
- Confusion Matrix
- Classification Metrics

| Model | Performance |
|---|---|
| Decision Tree | To be evaluated |
| Random Forest | To be evaluated |
| **Best Model** | To be selected |

> Final performance values will be added after model testing.

## 11. Application Demo

The final application provides an interface where users or judges can enter a URL and receive a prediction indicating whether the URL is **legitimate or phishing**.

## 12. Future Scope

Future improvements may include:

- Real-time URL detection
- Browser extension integration
- Additional URL and domain features
- Larger and more diverse datasets
- Improved model accuracy and reliability
- Integration with real-time threat intelligence
- Deployment as a web-based security tool

## 13. Conclusion

This project demonstrates the application of Machine Learning for phishing URL detection. By analyzing URL-based features and applying classification algorithms, the system aims to provide an efficient approach for identifying potentially malicious URLs and improving awareness of phishing threats.
