import React from 'react';
import { useAuth } from '../../Auth/AuthContext';
import './Logout.css'

const LogoutButton = () => {
  const { logout } = useAuth();

  return (
    <button class="logout-button" onClick={logout}>Logout</button>
  );
};

export default LogoutButton;
