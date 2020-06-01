import os
import time
import flask
import random


app = flask.Flask(__name__)
app.config['SECRET_KEY'] = os.urandom(0x400)


@app.route('/')
def index():
    return flask.render_template('index.html')


@app.route('/send', methods=['POST'])
def send():
    time.sleep(random.randint(2, 6))
    return flask.jsonify({'status': 0})


if __name__ == '__main__':
    app.run()
