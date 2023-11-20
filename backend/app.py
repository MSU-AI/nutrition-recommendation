
from flask import Flask
from flask_cors import CORS
from db import db

app = Flask(__name__)
CORS(app, supports_credentials=True)
app.secret_key = "secret"
app.config['SQLALCHEMY_DATABASE_URI'] = "placeholder"
db.init_app(app)

@app.route('/api/auth/login')
def login():
    """
    :param data: 
    { Optional[email]: email of user if not using 3rd party oath,
    Optional[password]: password entered if not using 3rd party oath,
    timestamp: current date and time for logging,
    login_option: type of login (email/pass, google, ect)
    }
    :return: 
    { code: status code for request,
    UID: User ID for use in state management to be used in other API calls
    }
    """
    return "login"

@app.route('/api/auth/create_account')
def create_account():
    """
    :param data:
    { Optional[email]: email of user if not using 3rd party oath,
    Optional[password]: password of user if not using 3rd party oath,
    timestamp: current date and time for logging,
    account_option: option chosen for how to make account (email/pass, google, ect)
    :return:
    { code: status code for request,
    UID: User ID for use in state management
    }
    """
    return "create_account"

@app.route('/api/auth/delete_account')
def delete_account():
    """
    :param data: 
    { UID: ID of currently logged in user, used to check for proper perms,
    email: email of user,
    }
    :return code: 201 if sucessful, 500 if not
    """
    return "delete_account"

@app.route('/api/auth/change_password')
def change_password():
    """
    :param data: 
    { email: email of account to change,
    old_password: old password of user,
    new_password: new password of user
    }
    :return code: 201 if sucessful, 500 if not
    """
    return "change_password"





if __name__ == '__main__':
    app.run()
