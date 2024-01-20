from flask_restx import Resource, Namespace, fields
from flask_app import db
from flask_app.models.User import User
from flask import request
import uuid

api = Namespace('users', description='User related operations')

user_model = api.model('User', {
    'name': fields.String(required=True, description='The user name'),
    'firebase_uuid': fields.String(required=True, description='The user Firebase UUID')
})

@api.route('/')
class UserList(Resource):
    @api.marshal_list_with(user_model)
    def get(self):
        users = User.query.all()
        return users

    @api.expect(user_model)
    def post(self):
        data = request.json
        user = User(name=data['name'], firebase_uuid=data['firebase_uuid'])
        db.session.add(user)
        db.session.commit()
        return {'message': 'User created successfully.'}, 201

    @api.expect(user_model)
    def delete(self):
        data = request.json
        firebase_uuid = data.get('firebase_uuid')
        user = User.query.filter_by(firebase_uuid=firebase_uuid).first_or_404()
        db.session.delete(user)
        db.session.commit()
        return {'message': 'User deleted successfully.'}, 200

    @api.expect(user_model)
    def put(self):
        data = request.json
        firebase_uuid = data.get('firebase_uuid')
        user = User.query.filter_by(firebase_uuid=firebase_uuid).first_or_404()
        user.name = data.get('name', user.name)
        db.session.commit()
        return {'message': 'User updated successfully.'}, 200