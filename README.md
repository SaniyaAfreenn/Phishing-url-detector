# Phishing URL Detection Using Machine Learning

A Machine Learning-based web application designed to detect and classify URLs as either legitimate or phishing. This project was developed as part of the **REVA University Abhinava Hackathon**.

## 1. Problem Statement

Phishing URLs are malicious or deceptive web addresses designed to mislead users into visiting fraudulent websites and potentially exposing sensitive information.

The objective of this project is to identify whether a given URL is **legitimate or phishing** using Machine Learning techniques and URL-based features.

## 2. Proposed Solution

The proposed system uses labelled URL data and various URL-based features to train Machine Learning classification models.

The trained models analyze the characteristics of a URL and predict whether it belongs to the **legitimate** or **phishing** category.

## 3. Dataset

**Dataset:** A Dataset for Detecting Phishing URLs  
**Source:** Kaggle

The dataset consists of:

- `Training.parquet`
- `Testing.parquet`

The training dataset contains **7,658 records** with **87 URL-based features**.

**Target Variable:** `status`

- `legitimate`
- `phishing`

### Dataset Distribution

| Category | Number of Records |
|---|---:|
| Legitimate | 3,829 |
| Phishing | 3,829 |
| **Total** | **7,658** |

**Missing Values:** 0

## 4. Key URL Features

The dataset includes several features that help identify suspicious URLs, including:

- URL length
- Hostname length
- Number of dots and hyphens
- Number of `@` and `?` symbols
- HTTPS information
- IP address usage
- Number of subdomains
- URL shortening services
- Phishing-related indicators
- Suspicious TLDs
- Domain age
- Web traffic
- Google indexing
- Page rank

## 5. Project Objective

The Machine Learning models learn patterns from labelled URL data and classify new URLs into one of the following categories:

**LEGITIMATE / SAFE**

or

**PHISHING**

## 6. System Workflow

The project follows the workflow below:

1. **Dataset Collection**  
   Collect labelled legitimate and phishing URL data.

2. **Feature Extraction**  
   Analyze URL characteristics and extract relevant features.

3. **Data Preparation**  
   Separate input features from the `status` target variable and prepare the dataset for training.

4. **Model Training**  
   Train Machine Learning classification models using the training dataset.

5. **Model Evaluation**  
   Evaluate and compare model performance using accuracy and other evaluation metrics.

6. **Confusion Matrix**  
   Analyze correct and incorrect predictions using a confusion matrix.

7. **URL Prediction**  
   Allow users to enter a URL and receive a prediction indicating whether it is legitimate or phishing.

## 7. Technologies Used

| Technology | Purpose |
|---|---|
| **Python** | Model development and data processing |
| **Google Colab** | Development environment |
| **Pandas** | Data processing and analysis |
| **Scikit-learn** | Machine Learning models |
| **Matplotlib** | Data visualization |
| **Seaborn** | Visualization and confusion matrix |
| **Kaggle** | Dataset source |

## 8. Expected Output

### Input
A URL provided by the user.

### Output
The trained model predicts whether the URL is:

**SAFE / LEGITIMATE**

or

**PHISHING**

## 9. Model Performance

The Machine Learning models will be evaluated using accuracy and other relevant performance metrics.

- **Decision Tree:** To be evaluated
- **Random Forest:** To be evaluated
- **Best Model:** Selected based on evaluation results

> Actual performance results will be added after model testing.

## 10. Application Demo

The final application will provide an interface where users or judges can enter a URL and receive a prediction indicating whether the URL is **legitimate or phishing**.

## 11. Future Scope

The project can be further enhanced by:

- Implementing real-time URL detection
- Developing a browser extension
- Incorporating additional URL and domain-based features
- Training with larger and more diverse datasets
- Improving model accuracy and reliability
- Integrating the system with real-time threat intelligence sources

## 12. Conclusion

The project demonstrates how Machine Learning can be applied to identify phishing URLs using URL-based characteristics. By analyzing different features of URLs and applying classification models, the system aims to provide an effective approach for detecting potentially malicious websites.
