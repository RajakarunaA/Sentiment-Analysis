import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [userId, setUserId] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [actualRating, setActualRating] = useState(0);
  const [responseData, setResponseData] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle form submission and send data to FastAPI
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await axios.post('http://127.0.0.1:8000/predict_sentiment', {
        user_id: userId,
        review_text: reviewText,
        actual_rating: actualRating,
      });

      // Set response data in state
      setResponseData(result.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setResponseData(null);
    }

    setLoading(false); // Set loading to false after response is received
  };

  // Handle refresh button click to reset form
  const handleRefresh = () => {
    setUserId('');
    setReviewText('');
    setActualRating(0);
    setResponseData(null); // Optionally clear the result display
  };

  return (
    
    <div className="App">
      <div className="container">
        {/* Left Section (Form) */}
        <div className="left-section">
          <h1>Sentiment Analysis</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="user_id">User ID:</label>
              <input
                type="text"
                id="user_id"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="review_text">Review Text:</label>
              <textarea
                id="review_text"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                required
              />
            </div>

            {/* Star Rating System */}
            <div className="rating">
              <label>Rating:</label>
              <div className="stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`star ${actualRating >= star ? 'filled' : ''}`}
                    onClick={() => setActualRating(star)}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>

            <button type="submit" className="submit-btn">
              {loading ? 'Loading...' : 'Submit'}
            </button>
            <button type="button" className="refresh-btn" onClick={handleRefresh}>
              Refresh
            </button>
          </form>
        </div>

        {/* Right Section (Results) */}
        {responseData && (
          <div className="right-section">
            <h2>Result:</h2>
            <table>
              <thead>
                <tr>
                  <th>Attribute</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>User ID</strong></td>
                  <td>{responseData.user_id}</td>
                </tr>
                <tr>
                  <td><strong>Review Text</strong></td>
                  <td>{responseData.review_text}</td>
                </tr>
                <tr>
                  <td><strong>Actual Rating</strong></td>
                  <td>{responseData.actual_rating}</td>
                </tr>
                <tr>
                  <td><strong>Base Sentiment</strong></td>
                  <td>{responseData.base_sentiment.toFixed(2)}</td>
                </tr>
                <tr>
                  <td><strong>User Trust Score</strong></td>
                  <td>{responseData.user_trust_score.toFixed(2)}</td>
                </tr>
                <tr>
                  <td><strong>Trust-Weighted Sentiment</strong></td>
                  <td>{responseData.trust_weighted_sentiment.toFixed(2)}</td>
                </tr>
                <tr>
                  <td><strong>Trust Level</strong></td>
                  <td>{responseData.trust_level}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
