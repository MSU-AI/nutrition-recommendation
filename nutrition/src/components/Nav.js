import React from 'react';
import { Link } from 'react-router-dom';
import AuthWrapper from './AuthWrapper';

const Nav = () => {
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
        <li>
          <AuthWrapper />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
