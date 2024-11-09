from flask import Flask, request, jsonify
from pymongo import MongoClient, errors
from flask_cors import CORS
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)
# Configure CORS to allow requests from any origin for all endpoints
CORS(app, resources={r"/*": {"origins": "*"}}, methods=["GET", "POST", "OPTIONS"])

# Retrieve MongoDB connection string and database name from environment variables
mongo_uri = os.getenv("MONGO_URI")
db_name = os.getenv("DB_NAME", "ML")  # Default to "ML" if not set
collection_name = os.getenv("COLLECTION_NAME", "RATNA_SUPERMARKET")  # Default to "RATNA_SUPERMARKET" if not set

# Verify that the MongoDB URI is set correctly
if not mongo_uri:
    raise ValueError("Missing environment variable 'MONGO_URI'. Please check your .env file.")

# MongoDB connection setup with error handling
try:
    client = MongoClient(mongo_uri)
    db = client[db_name]
    collection = db[collection_name]
    print("MongoDB connected successfully")
except errors.ConfigurationError as e:
    print(f"Error connecting to MongoDB: {e}")

@app.route('/')
def index():
    return jsonify({'message': 'Welcome to the Ratna Supermarket API!'})

# Handling requests for favicon to avoid 404 error in the browser
@app.route('/favicon.ico')
def favicon():
    return '', 204  # Returns a 204 No Content response for favicon

# Signup route
@app.route('/signup', methods=['POST', 'OPTIONS'])
def signup():
    if request.method == 'OPTIONS':
        # Handles the CORS preflight request
        return '', 204

    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return jsonify({'message': 'Username and password are required!'}), 400

    login_data = {'username': username, 'password': password}
    
    try:
        result = collection.insert_one(login_data)
        response = {'message': 'Login data saved successfully!', 'inserted_id': str(result.inserted_id)}
        return jsonify(response), 201
    except Exception as e:
        return jsonify({'message': str(e)}), 500

# Test route
@app.route('/trail', methods=['GET'])
def trail():
    return "Hello World!"

# Login route
@app.route('/login', methods=['POST', 'OPTIONS'])
def login():
    if request.method == 'OPTIONS':
        # Handles the CORS preflight request
        return '', 204

    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return jsonify({'message': 'Username and password are required!'}), 400

    login_data = collection.find_one({'username': username, 'password': password})

    if login_data:
        response = {'message': 'Login successful!'}
    else:
        response = {'message': 'Invalid login credentials!'}

    return jsonify(response)

if __name__ == '__main__':
    # Set the port from environment or default to 5000
    app.run(port=int(os.getenv("PORT", 5000)), debug=True)
