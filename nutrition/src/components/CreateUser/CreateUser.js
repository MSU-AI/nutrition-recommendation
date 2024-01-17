import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import './CreateUser.css'

const CreateUserForm = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isVerificationEmailSent, setIsVerificationEmailSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await sendVerificationEmail(userCredential.user);
      setIsVerificationEmailSent(true);
      onClose();
    } catch (error) {
      console.error('Account creation failed:', error);
    }
  };

  const sendVerificationEmail = async (user) => {
    try {
      await sendEmailVerification(user);
      console.log('Verification email sent.');
    } catch (error) {
      console.error('Error sending verification email:', error);
    }
  };

  return (
    <div>
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
      {isVerificationEmailSent && (
        <p>Please verify your email then proceed to login.</p>
      )}
    </div>
  );
};

export default CreateUserForm;
