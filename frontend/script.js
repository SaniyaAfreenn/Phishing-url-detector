async function analyzeUrl() {
    const urlInput = document.getElementById('urlInput').value.trim();
    const resultCard = document.getElementById('resultCard');
    const predictionResult = document.getElementById('predictionResult');
    const confidenceScore = document.getElementById('confidenceScore');

    if (!urlInput) {
        alert("Please enter a valid URL!");
        return;
    }

    predictionResult.innerText = "Analyzing...";
    confidenceScore.innerText = "";
    resultCard.className = "result-card";

    try {
        const response = await fetch('http://localhost:5001/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url: urlInput })
        });

        const data = await response.json();

        if (data.prediction) {
            predictionResult.innerText = `Status: ${data.prediction}`;
            confidenceScore.innerText = `Confidence: ${(data.confidence * 100).toFixed(1)}%`;
            
            if (data.is_phishing) {
                resultCard.className = "result-card phishing";
            } else {
                resultCard.className = "result-card safe";
            }
        } else {
            predictionResult.innerText = "Error analyzing URL";
        }
    } catch (error) {
        console.error("Error:", error);
        predictionResult.innerText = "Failed to connect to backend server";
    }
}