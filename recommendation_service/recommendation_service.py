from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import json

# Load product data
with open("C:/Users/Renuka/Downloads/product.json", 'r') as f:

    products_1 = json.load(f)
with open("C:/Users/Renuka/Downloads/product2.json", 'r') as f:


    products_2 = json.load(f)

# Combine data into a single DataFrame
products_df = pd.concat([pd.DataFrame(products_1), pd.DataFrame(products_2)], ignore_index=True)
products_df.fillna("", inplace=True)
products_df['combined_features'] = (
    products_df['productName'] + " " + products_df['category'] +
    " " + products_df['mrp'].astype(str) + " " + products_df['discountPrice'].astype(str)
)

# Vectorize features for similarity calculation
vectorizer = TfidfVectorizer(stop_words='english')
tfidf_matrix = vectorizer.fit_transform(products_df['combined_features'])
cosine_sim = cosine_similarity(tfidf_matrix, tfidf_matrix)

app = Flask(__name__)
CORS(app)

@app.route('/recommend', methods=['POST'])
def recommend():
    search_query = request.json.get('query')
    if not search_query:
        return jsonify({"recommendations": []})

    # Transform the search query
    search_vector = vectorizer.transform([search_query])
    search_similarities = cosine_similarity(search_vector, tfidf_matrix).flatten()

    # Get top 5 recommendations
    recommended_indices = search_similarities.argsort()[-5:][::-1]
    recommended_products = products_df.iloc[recommended_indices]['productName'].tolist()
    return jsonify({"recommendations": recommended_products})

if __name__ == '__main__':
    app.run(port=5001)  # Runs on port 5001
