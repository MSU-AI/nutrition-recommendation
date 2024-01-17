import React, { useState } from 'react';
import LoginForm from '../../components/Login/Login';
import CreateUserForm from '../../components/CreateUser/CreateUser';
import './LoginPage.css'

const LoginPage = ({ onClose }) => {
  const [showLoginForm, setShowLoginForm] = useState(true);

  return (
    <div>
      {showLoginForm ? (
        <>
          <h2>Sign In</h2>
          <LoginForm onClose={onClose} />
          <p>
            Don't have an account? <button onClick={() => setShowLoginForm(false)}>Register here</button>
          </p>
        </>
      ) : (
        <>
          <h2>Create a New Account</h2>
          <CreateUserForm onClose={onClose} />
          <p>
            Already have an account? <button onClick={() => setShowLoginForm(true)}>Sign In here</button>
          </p>
        </>
      )}
    </div>
  );
};

export default LoginPage;
