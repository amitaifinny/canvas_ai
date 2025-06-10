from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  
# change this later to add greater security that only specifies a certain origin can access

@app.route('/get_classes')
def get_classes():
    classes = ["MATH100B", "CSE210", "CSE310"]
    return jsonify(classes)

if __name__ == '__main__': 
    app.run(debug=True)