import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useAuth } from '../../Auth/AuthContext';    

const LoginForm = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // State to store error messages
  const { storeToken } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error message
    const auth = getAuth();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      onClose();
      
      if (!user.emailVerified) {
        setError('Please verify your email before logging in.');
        return; // Prevent login
      }

      const token = await user.getIdToken();
      storeToken(token); // Store the token using Context
      console.log('Logged in successfully!');
    } catch (error) {
      console.error('Authentication failed:', error);
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
    </form>
  );
};

export default LoginForm;
