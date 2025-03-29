from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/home')
def return_home():
    return jsonify({
        'message': 'Is this working?'
    })

if __name__ == '__main__':
    app.run(debug = True)