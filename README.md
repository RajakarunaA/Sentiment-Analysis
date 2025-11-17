# AI Powered Personalized Resturant/Hotel Ranking System
# Sentiment Analysis Module

## Overview
The **Sentiment Analysis** project is a tool designed to analyze user comments and generate insights based on their sentiment. It also calculates a **trust score** for each comment to assess reliability. This project combines natural language processing (NLP) techniques with machine learning to provide accurate sentiment classification and trust scoring.

---

## Features
- **Sentiment Analysis**: Classifies user comments as **Positive**, **Neutral**, or **Negative**.
- **Trust Score Generation**: Evaluates the reliability of a user comment based on predefined metrics.
- **User-Friendly Interface**: Easy-to-use frontend for inputting comments and viewing results.
- **Backend Processing**: Efficient backend to handle sentiment computation and trust score generation.

---

## Technology Stack
- **Frontend**: React.js
- **Backend**: Python / Flask (or your backend framework)
- **Machine Learning / NLP**: BERT, LSTM, or other advanced models
- **Data Handling**: Pandas, NumPy
- **Version Control**: Git & GitHub



## AI Powered Personalized Resturant/Hotel Ranking System (Final year Research Project)

A **Personalized Hotel Recommendation System** is designed to help users find hotels that best match their preferences by combining multiple data sources, such as **user reviews, ratings, locations, and personal preferences**. Unlike traditional recommendation systems, it is **context-aware** and uses both explicit and implicit feedback to improve the suggestions for each user.

### Core Components / Models

1. **Sentiment Analysis Model**  
   - **Purpose:** Understand the opinion expressed in user reviews (Positive, Neutral, Negative).  
   - **Function:** Extracts sentiment from hotel reviews to assess **user satisfaction** with food, service, cleanliness, ambiance, etc.  
   - **Your Contribution:** This is the part of the system implemented in this repository. The code classifies user comments and generates a **trust score** for each comment.

2. **Geolocation-Based Clustering Model**  
   - **Purpose:** Group hotels based on geographic location.  
   - **Function:** Ensures recommendations are relevant to the user’s current location or preferred travel area.  
   - **Benefit:** Makes suggestions **context-aware**, reducing irrelevant hotel recommendations far from the user.

3. **User Preference-Based Recommendation Model**  
   - **Purpose:** Factor in user-specific preferences like price range, amenities, and past behavior.  
   - **Function:** Uses ratings, review history, and explicit preferences to rank hotels.  
   - **Benefit:** Creates **personalized recommendations** tailored to the user’s unique requirements.

**How the Models Work Together:**  
- The **Sentiment Analysis model** evaluates user reviews to detect positivity or negativity and assigns trust scores.  
- The **Geolocation-Based Clustering model** filters hotels near the user’s location.  
- The **User Preference-Based Recommendation model** ranks hotels based on personal preferences and integrates the sentiment scores to improve recommendation quality.  

---


