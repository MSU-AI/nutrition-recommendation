from flask import Flask
from flask_restx import Api

def create_app():
    app = Flask(__name__)
    api = Api(app, doc='/api/docs')

    with app.app_context():
        from . import routes
        routes.init_api(api)
        return app
