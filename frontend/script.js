/**
 * Phishing URL Detector - Frontend Controller
 */

// Configuration - Primary endpoint as specified in requirements
const API_PRIMARY_URL = 'https://phishing-url-detector-zuoo.vercel.app/predict';
const API_FALLBACK_URL = 'https://phishing-url-detector-zuoo.vercel.app/predict';

// DOM Elements
const urlForm = document.getElementById('url-form');
const urlInput = document.getElementById('url-input');
const analyzeBtn = document.getElementById('analyze-btn');
const btnText = analyzeBtn.querySelector('.btn-text');
const btnSpinner = analyzeBtn.querySelector('.btn-spinner');
const clearBtn = document.getElementById('clear-btn');
const inputError = document.getElementById('input-error');

// Result Card Elements
const resultCard = document.getElementById('result-card');
const resultIconWrapper = document.getElementById('result-icon-wrapper');
const predictionText = document.getElementById('prediction-text');
const confidenceScore = document.getElementById('confidence-score');
const confidenceBarFill = document.getElementById('confidence-bar-fill');
const scannedUrl = document.getElementById('scanned-url');

// Feature Breakdown Elements
const featLength = document.getElementById('feat-length');
const featIp = document.getElementById('feat-ip');
const featHyphens = document.getElementById('feat-hyphens');
const featAt = document.getElementById('feat-at');
const featQm = document.getElementById('feat-qm');

// Error Banner Elements
const errorCard = document.getElementById('error-card');
const errorTitle = document.getElementById('error-title');
const errorMessage = document.getElementById('error-message');

// Example Chips
const exampleChips = document.querySelectorAll('.example-chip');

// SVG Icon Templates
const ICONS = {
  safe: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <path d="m9 12 2 2 4-4"/>
    </svg>
  `,
  phishing: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
      <line x1="12" y1="9" x2="12" y2="13"/>
      <line x1="12" y1="17" x2="12.01" y2="17"/>
    </svg>
  `
};

/**
 * Main Async Analysis Function
 */
async function analyzeUrl(urlToAnalyze) {
  const url = (urlToAnalyze || urlInput.value).trim();

  // Reset UI State
  hideError();
  hideInputError();
  resultCard.classList.add('hidden');

  // Prevent submission if the input is empty
  if (!url) {
    showInputError('Please enter a valid website URL to analyze.');
    urlInput.focus();
    return;
  }

  // Show loading state
  setLoading(true);

  try {
    let response;
    let data;

    // Send POST request with JSON payload: { "url": "user_input_here" }
    try {
      response = await fetch(API_PRIMARY_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url: url })
      });
      data = await response.json();
    } catch (primaryErr) {
      // Automatic fallback to port 5000 if 5001 is unreachable
      try {
        response = await fetch(API_FALLBACK_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ url: url })
        });
        data = await response.json();
      } catch (fallbackErr) {
        throw new Error('Backend server is unreachable. Please ensure the Flask app is running locally on port 5001 or 5000.');
      }
    }

    if (!response.ok || data.error) {
      throw new Error(data.error || `Server responded with status code ${response.status}`);
    }

    // Render the successful result
    renderResult(data, url);

  } catch (err) {
    showError('Analysis Failed', err.message || 'An unexpected error occurred while communicating with the server.');
  } finally {
    // Reset loading state
    setLoading(false);
  }
}

/**
 * Update DOM with prediction results
 * @param {Object} result - Response payload { prediction, confidence, is_phishing, features }
 * @param {string} url - Analyzed URL
 */
function renderResult(result, url) {
  const isPhishing = Boolean(result.is_phishing || String(result.prediction).toLowerCase() === 'phishing');
  const prediction = isPhishing ? 'Phishing' : 'Safe';

  // Format confidence score as percentage
  let confidencePct = 'N/A';
  let confidenceNumeric = 0;

  if (typeof result.confidence === 'number') {
    confidenceNumeric = Math.min(Math.max(result.confidence * 100, 0), 100);
    confidencePct = `${confidenceNumeric.toFixed(1)}%`;
  } else if (result.confidence) {
    confidencePct = String(result.confidence);
  }

  // Update text content
  predictionText.textContent = prediction;
  confidenceScore.textContent = confidencePct;
  scannedUrl.textContent = url;

  // Apply appropriate CSS class (green for safe, red for phishing)
  resultCard.classList.remove('safe', 'phishing');
  if (isPhishing) {
    resultCard.classList.add('phishing');
    resultIconWrapper.innerHTML = ICONS.phishing;
  } else {
    resultCard.classList.add('safe');
    resultIconWrapper.innerHTML = ICONS.safe;
  }

  // Update progress fill bar
  confidenceBarFill.style.width = typeof result.confidence === 'number' ? `${confidenceNumeric}%` : '100%';

  // Update features if available
  if (result.features) {
    featLength.textContent = result.features.length_url ?? '-';
    featIp.textContent = result.features.ip ? 'Yes (1)' : 'No (0)';
    featHyphens.textContent = result.features.nb_hyphens ?? '0';
    featAt.textContent = result.features.nb_at ?? '0';
    featQm.textContent = result.features.nb_qm ?? '0';
  } else {
    featLength.textContent = url.length;
    featIp.textContent = (/\d/.test(url) && (url.split('.').length - 1) >= 3) ? 'Yes (1)' : 'No (0)';
    featHyphens.textContent = (url.match(/-/g) || []).length;
    featAt.textContent = (url.match(/@/g) || []).length;
    featQm.textContent = (url.match(/\?/g) || []).length;
  }

  // Display the Result Card
  resultCard.classList.remove('hidden');

  // Smooth scroll to result
  resultCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

/**
 * UI State Helpers
 */
function setLoading(isLoading) {
  if (isLoading) {
    analyzeBtn.disabled = true;
    btnText.textContent = 'Analyzing...';
    btnSpinner.classList.remove('hidden');
  } else {
    analyzeBtn.disabled = false;
    btnText.textContent = 'Analyze URL';
    btnSpinner.classList.add('hidden');
  }
}

function showInputError(msg) {
  inputError.textContent = msg;
  inputError.classList.remove('hidden');
}

function hideInputError() {
  inputError.textContent = '';
  inputError.classList.add('hidden');
}

function showError(title, message) {
  errorTitle.textContent = title;
  errorMessage.textContent = message;
  errorCard.classList.remove('hidden');
}

function hideError() {
  errorCard.classList.add('hidden');
}

/**
 * Event Listeners
 */
// Form submission (handles button click & Enter key)
urlForm.addEventListener('submit', (e) => {
  e.preventDefault();
  analyzeUrl();
});

// Direct button click (as specified in requirements)
analyzeBtn.addEventListener('click', (e) => {
  if (e.target.type !== 'submit') {
    e.preventDefault();
    analyzeUrl();
  }
});

// Input change & clear button visibility
urlInput.addEventListener('input', () => {
  hideInputError();
  if (urlInput.value.trim().length > 0) {
    clearBtn.classList.remove('hidden');
  } else {
    clearBtn.classList.add('hidden');
  }
});

// Clear button
clearBtn.addEventListener('click', () => {
  urlInput.value = '';
  clearBtn.classList.add('hidden');
  hideInputError();
  urlInput.focus();
});

// Example chips
exampleChips.forEach((chip) => {
  chip.addEventListener('click', () => {
    const exampleUrl = chip.getAttribute('data-url');
    urlInput.value = exampleUrl;
    clearBtn.classList.remove('hidden');
    hideInputError();
    analyzeUrl(exampleUrl);
  });
});
