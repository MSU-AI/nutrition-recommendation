import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Auth/AuthContext';
import CreateUserForm from '../../components/CreateUser/CreateUser';

const RegistrationPage = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate('/'); // Redirect to home if already logged in
    }
  }, [currentUser, navigate]);

  return (
    <div>
      <h1>Create a New Account</h1>
      <CreateUserForm />
    </div>
  );
};

export default RegistrationPage;
