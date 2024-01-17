import React from 'react';
import { useAuth } from './AuthContext';
import LoginForm from './Login';
import LogoutButton from './Logout';

const AuthWrapper = () => {
  const { currentUser } = useAuth();

  console.log("Current user in AuthWrapper:", currentUser);

  return (
    <div>
      {currentUser ? <LogoutButton /> : <LoginForm />}
    </div>
  );
};

export default AuthWrapper;