import os
from dotenv import load_dotenv
from flask import Flask, request, jsonify
from flask_cors import CORS
from google import genai
from google.genai import types

load_dotenv()  # Load .env

app = Flask(__name__)
CORS(app)

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY"),
)

model = "gemini-1.5-flash"

@app.route('/chat', methods=['POST'])

def chat():
    user_message = request.json.get('message', '')
    
    contents = [
        types.Content(role="user", parts=[
            types.Part.from_text(text=user_message)
        ]),
    ]

    generate_content_config = types.GenerateContentConfig(
        response_mime_type="text/plain",
        system_instruction="You are CallGuard Chatbot. You only need to answer questions related to cyber crime.",
    )

    response_text = ""
    for chunk in client.models.generate_content_stream(
        model=model,
        contents=contents,
        config=generate_content_config,
    ):
        if hasattr(chunk, 'text'):
            response_text += chunk.text

    return jsonify({'reply': response_text})


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
