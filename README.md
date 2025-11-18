# AI Powered Personalized Restaurant/Hotel Ranking System

# Trust Weighted Sentiment Analysis Model

## Overview

The **Sentiment Analysis** project analyzes user comments and generates valuable insights by identifying the expressed sentiment and calculating a **trust score** to measure comment reliability. This module is part of a larger **AI-Powered Personalized Restaurant/Hotel Recommendation System**, which combines NLP, clustering, and preference modeling to produce personalized hotel rankings.

---

## Dataset

The dataset used to train and evaluate the sentiment analysis model is available here:

👉 **Dataset Download:** **https://www.kaggle.com/datasets/snap/amazon-fine-food-reviews**

This dataset contains:

* User review text
* Review ratings
* Timestamps
* Additional metadata used to compute trust scores and train the model

---

## Features

* **Sentiment Analysis:** Predicts whether a review is **Positive**, **Neutral**, or **Negative**.
* **Trust Score Generation:** Measures the reliability of a user comment using linguistic and behavioral metrics.
* **Preprocessing Pipeline:** Cleans and prepares text data (tokenization, stopword removal, etc.).
* **Model Evaluation:** Includes accuracy, precision, recall, and F1-score reporting.
* **Interactive Notebook:** Full workflow inside an `.ipynb` file for transparency and reproducibility.

---

## Technology Stack

* **Frontend:** React.js
* **Backend:** Python (Flask / FastAPI)
* **ML & NLP:** BERT, LSTM, Word2Vec, Tokenizers
* **Data Handling:** Pandas, NumPy
* **Visualization:** Matplotlib, Seaborn
* **Version Control:** Git & GitHub

---

## 📌 Contents of the `sentiment_trust_complete_v2.ipynb` File

The notebook contains the **entire pipeline** for building, training, and evaluating your sentiment model.

### It includes:

### **1. Dataset Loading & Exploration**

* Loads `Reviews.csv`
* Shows data statistics (missing values, length distribution, class distribution)

### **2. Data Preprocessing**

* Cleaning text
* Removing punctuation, stopwords
* Lemmatization
* Tokenization
* Preparing data for BERT or LSTM input

### **3. Sentiment Classification Model**

* Implementation of BERT / LSTM model
* Train-test split
* Training loop with evaluation metrics
* Saving the trained model

### **4. Trust Score Calculation (Your Main Contribution)**

Detailed logic for calculating trust score, including:

* **Review length weight**
* **Sentiment polarity confidence**
* **Keyword analysis (positive/negative intensity)**
* **Grammar correctness score**
* **Engagement indicators** (optional)
* Final trust score formula

### **5. Model Evaluation & Visualization**

* Confusion matrix
* Accuracy, Precision, Recall, F1-score
* Sample predictions

### **6. Exporting the Model**

* Saving model weights
* Saving tokenizer
* Preparing files for API integration

This notebook is the core file that demonstrates your contribution to the final-year research project.

---

## AI Powered Personalized Restaurant/Hotel Recommendation System (Final-Year Research)

A **Personalized Hotel Recommendation System** improves accuracy by using real user data, sentiment patterns, and contextual information. It consists of three main models:

---

### **1. Sentiment Analysis Model (My Contribution)**

* Analyzes hotel reviews
* Predicts sentiment (Positive/Neutral/Negative)
* Generates trust scores
* Outputs data for the ranking model

This repository contains **all code for this model**.

---

### **2. Geolocation-Based Clustering Model**

* Groups nearby hotels
* Uses clustering algorithms like K-Means / DBSCAN
* Ensures recommendations are location-aware

---

### **3. User Preference-Based Recommendation Model**

* Considers user behavior, ratings, budget, and preferences
* Learns patterns from user profiles
* Produces highly personalized rankings

---

### **How All Models Work Together**

* Sentiment Model → Provides sentiment & trust scores
* Clustering Model → Filters hotels based on location
* Preference Model → Ranks hotels using preferences + sentiment insights

The system then displays the **top hotel recommendations** tailored to each user.
