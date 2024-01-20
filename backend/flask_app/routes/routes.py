from flask_restx import Resource

def init_api(api):
    @api.route('/')
    class Home(Resource):
        def get(self):
            return "home"
