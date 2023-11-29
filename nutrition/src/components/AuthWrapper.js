import React from 'react';
import { useAuth } from './AuthContext';
import LoginForm from './Login';
import LogoutButton from './Logout';

const AuthWrapper = () => {
  const { currentUser } = useAuth();

  return (
    <div>
      {currentUser ? <LogoutButton /> : <LoginForm />}
    </div>
  );
};

export default AuthWrapper;