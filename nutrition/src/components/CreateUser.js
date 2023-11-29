import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const CreateUserForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      sendVerificationEmail(userCredential.user);
      navigate('/'); // Redirect to home page
    } catch (error) {
      console.error('Account creation failed:', error);
    }
  };

  const sendVerificationEmail = (user) => {
    sendEmailVerification(user)
      .then(() => {
        console.log('Verification email sent.');
      }).catch((error) => {
        console.error('Error sending verification email:', error);
      });
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
      <button type="submit">Create Account</button>
    </form>
  );
};

export default CreateUserForm;