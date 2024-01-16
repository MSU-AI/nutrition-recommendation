import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import '../index.css'; // Adjust the path as needed
import React, { useEffect } from 'react';
const Nav = () => {
  const { currentUser } = useAuth();
    useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 100;
      const navbar = document.querySelector('.navbar');
      if (show) {
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/healthgenie.png" alt="Logo"/>
        </Link>

        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/chat" className="navbar-link">Chat</Link>
          </li>
          <li className="navbar-item">
            <Link to="/profile" className="navbar-link">Profile</Link>
          </li>
          {!currentUser && (
              <li className="navbar-item">
                <a href="/register" className="navbar-link" target="_blank" rel="noopener noreferrer">Register</a>
              </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;