import React from 'react';
import { Link } from 'react-router-dom';
import AuthWrapper from './AuthWrapper';
import { useAuth } from './AuthContext';

const Nav = () => {
  const { currentUser } = useAuth();

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/features">Features</Link>
        </li>
        <li>
          <Link to="/chat">Chat</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        {!currentUser && (
          <li>
            <Link to="/register">Register</Link>
          </li>
        )}
        <li>
          <AuthWrapper />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
