from flask import Flask, render_template, request, jsonify
import os.path

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('home.html')

if __name__=="__main__":
    app.debug = True
    app.secret_key = "p0NZLhPzCbjSJxxo"
    app.run(host='0.0.0.0',
        port=(8080 if os.path.isfile('cloudy') else 8000)
        # (Account for the fact that Cloud9 doesn't do port 8000
        #  with an arbitrary file check. Don't worry, Git ignores it.)
    )