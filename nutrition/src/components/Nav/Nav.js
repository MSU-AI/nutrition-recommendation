import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Auth/AuthContext';
import Modal from '../Modal/Modal';
import LoginPage from '../../pages/LoginPage/LoginPage';
import LogoutButton from '../Logout/Logout';
import './Nav.css'

const Nav = () => {
  const { currentUser } = useAuth();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

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
          <img src="/healthgenie.png" alt="Logo" />
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
          {!currentUser ? (
            <li className="navbar-item">
              <button onClick={openLoginModal} className="navbar-link">Sign In</button>
            </li>
          ) : (
            <li className="navbar-item">
              <LogoutButton />
            </li>
          )}
        </ul>
      </div>

      <Modal isOpen={isLoginModalOpen} onClose={closeLoginModal}>
        <LoginPage onClose={closeLoginModal} />
      </Modal>
    </nav>
  );
};

export default Nav;
