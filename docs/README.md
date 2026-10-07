# Phishing URL Detection using Machine Learning

A Machine Learning based web application to detect and classify phishing URLs. Built for the REVA University Abhinava Hackathon.

## Problem Statement

Phishing URLs are malicious or deceptive web addresses designed to trick users into visiting fraudulent websites and revealing sensitive information.

Our project aims to automatically classify URLs as either legitimate or phishing using Machine Learning.

## Proposed Solution

The system analyzes URL-based features and uses a trained Machine Learning classification model to predict whether a given URL is:

- **LEGITIMATE / SAFE**
- **PHISHING / UNSAFE**

## Dataset

The project uses the **A Dataset for Detecting Phishing URLs!** dataset from Kaggle.

### Dataset Details

| Dataset | Number of URLs |
|---|---:|
| Training | 7,658 |
| Testing | 3,772 |
| Total | 11,430 |

### Training Dataset Distribution

| Class | Number |
|---|---:|
| Legitimate | 3,829 |
| Phishing | 3,829 |

### Testing Dataset Distribution

| Class | Number |
|---|---:|
| Legitimate | 1,886 |
| Phishing | 1,886 |

The training dataset contains **87 URL-based features** and has **no missing values**.

## Important URL Features

Some important features used in phishing detection include:

- URL length
- Hostname length
- Number of dots
- Number of hyphens
- Number of `@` symbols
- HTTPS token
- IP address
- Number of subdomains
- URL shortening service
- Phishing hints
- Suspicious TLD
- Domain age
- Web traffic
- Google index
- Page rank

## System Workflow

```text
Dataset
   ↓
Feature Extraction
   ↓
Data Preparation
   ↓
Model Training
   ↓
Model Evaluation
   ↓
URL Prediction
   ↓
SAFE / LEGITIMATE or PHISHING
