import React, { useState } from "react";
import axios from "axios";

const SentimentAnalysis = () => {
  const [reviewText, setReviewText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Function to handle sentiment analysis
  const handleAnalyze = async () => {
    setLoading(true);
    setError("");

    try {
      // Sending request to FastAPI backend
      const response = await axios.post("http://localhost:8000/analyze", {
        review_text: reviewText,
      });

      // Get response data
      const { base_sentiment, user_trust_score, trust_weighted_sentiment, trust_level } = response.data;

      // Set result in state
      setResult({
        base_sentiment,
        user_trust_score,
        trust_weighted_sentiment,
        trust_level,
      });
    } catch (err) {
      setError("Failed to fetch analysis. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Sentiment Analysis with Trust Score</h1>

      <div>
        <textarea
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          placeholder="Enter review text"
          rows="5"
          cols="40"
        />
      </div>

      <button onClick={handleAnalyze} disabled={loading}>
        {loading ? "Analyzing..." : "Analyze Sentiment"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {result && (
        <div>
          <h3>Analysis Results</h3>
          <p><strong>Base Sentiment:</strong> {result.base_sentiment}</p>
          <p><strong>User Trust Score:</strong> {result.user_trust_score}</p>
          <p><strong>Trust-Weighted Sentiment:</strong> {result.trust_weighted_sentiment}</p>
          <p><strong>Trust Level:</strong> {result.trust_level}</p>
        </div>
      )}
    </div>
  );
};

export default SentimentAnalysis;
