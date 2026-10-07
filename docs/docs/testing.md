# Testing Documentation

## Purpose

The prototype is tested to check whether the system can classify URLs as legitimate or phishing.

## Test Categories

### 1. Legitimate URLs

Test with known legitimate websites to check whether the model identifies them as safe.

Examples:

- `https://www.google.com`
- `https://www.wikipedia.org`
- `https://www.microsoft.com`
- `https://www.github.com`

### 2. Phishing-Style URLs

Test with safe, fictional phishing-style URL strings to check the prediction workflow.

Examples:

- `http://google-login-verify.example.com`
- `http://secure-account-verify.example.com`
- `http://paypal-login-check.example.com`

These are example test strings and should not be visited.

## Testing Checklist

- [ ] Test a legitimate URL
- [ ] Test a phishing-style URL
- [ ] Check that the URL is accepted by the application
- [ ] Check that a prediction is displayed
- [ ] Check that the result is clearly labelled
- [ ] Record unexpected predictions or errors

## Expected Output

The system should classify the input URL as either:

**LEGITIMATE / SAFE**

or

**PHISHING / UNSAFE**
