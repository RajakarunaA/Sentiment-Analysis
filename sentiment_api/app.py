from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware  # Import the CORS middleware
from pydantic import BaseModel
import torch
from transformers import DistilBertForSequenceClassification, DistilBertTokenizer

# Initialize FastAPI app
app = FastAPI(
    title="Sentiment Analysis API",
    description="A simple API to predict the sentiment of text using a fine-tuned DistilBERT model.",
    version="1.0.0",
)

# Enable CORS to allow frontend requests (e.g., React app on port 3000)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # You can specify specific domains like ['http://localhost:3000'] in production
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)

# Load the pre-trained model and tokenizer
model_path = "./sentiment_model"  # Ensure your model path is correct
sentiment_model = DistilBertForSequenceClassification.from_pretrained(model_path)
sentiment_tok = DistilBertTokenizer.from_pretrained(model_path)

# Ensure the model is in evaluation mode
sentiment_model.eval()

# Define the data model for the request body
class SentimentRequest(BaseModel):
    user_id: str
    review_text: str
    actual_rating: float

# Define the data model for the response
class SentimentResponse(BaseModel):
    user_id: str
    review_text: str
    actual_rating: float
    base_sentiment: float
    user_trust_score: float
    trust_weighted_sentiment: float
    trust_level: str

# Define the prediction function
def predict_sentiment(text: str):
    inputs = sentiment_tok(text, return_tensors="pt", padding=True, truncation=True, max_length=128)
    with torch.no_grad():
        outputs = sentiment_model(**inputs)
    
    logits = outputs.logits
    probabilities = torch.nn.functional.softmax(logits, dim=-1)
    
    predicted_class_id = torch.argmax(probabilities, dim=1).item()
    confidence = probabilities[0][predicted_class_id].item()
    
    # Base sentiment is the probability of being positive
    base_sentiment = confidence
    
    return base_sentiment

# Sample function to calculate user trust score (this can be adjusted according to your business logic)
def calculate_user_trust_score(rating: float):
    # Placeholder for the trust score logic
    return round(rating * 0.08, 3)  # Simulate some calculation

# Sample function for trust-weighted sentiment (this can be adjusted according to your logic)
def calculate_trust_weighted_sentiment(base_sentiment: float, trust_score: float):
    # Placeholder logic for trust-weighted sentiment
    return round(base_sentiment * trust_score, 3)

# Define the API endpoint
@app.post("/predict_sentiment", response_model=SentimentResponse)
def get_sentiment(request: SentimentRequest):
    """
    Predicts the sentiment of the provided text and returns sentiment-related information.
    """
    # Predict base sentiment
    base_sentiment = predict_sentiment(request.review_text)

    # Calculate user trust score based on actual rating
    user_trust_score = calculate_user_trust_score(request.actual_rating)

    # Calculate trust-weighted sentiment based on base sentiment and trust score
    trust_weighted_sentiment = calculate_trust_weighted_sentiment(base_sentiment, user_trust_score)

    # Determine trust level based on the trust score
    trust_level = "Low" if user_trust_score < 0.5 else "High"

    # Return the response with the calculated values
    return SentimentResponse(
        user_id=request.user_id,
        review_text=request.review_text,
        actual_rating=request.actual_rating,
        base_sentiment=base_sentiment,
        user_trust_score=user_trust_score,
        trust_weighted_sentiment=trust_weighted_sentiment,
        trust_level=trust_level
    )
