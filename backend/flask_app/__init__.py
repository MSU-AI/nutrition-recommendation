from flask import Flask
from flask_restx import Api
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from .env import ENV_VARS

db = SQLAlchemy()
migrate = Migrate()

def create_app():
    app = Flask(__name__)
    api = Api(app, doc='/api/docs')

    app.config['SQLALCHEMY_DATABASE_URI'] = ENV_VARS['DATABASE_URI']
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.init_app(app)
    migrate.init_app(app, db)

    with app.app_context():
        from . import routes
        routes.init_api(api)
        db.create_all()
        return app
