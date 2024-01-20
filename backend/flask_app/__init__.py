import os
from flask import Flask


def create_app():
    app = Flask(__name__)
    with app.context():
        from . import routes
        return app