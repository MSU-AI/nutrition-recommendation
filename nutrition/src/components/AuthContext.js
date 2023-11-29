import React, { createContext, useState, useContext, useEffect } from 'react';
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        user.getIdToken().then(setAuthToken);
        setCurrentUser(user);
      } else {
        setAuthToken(null);
        setCurrentUser(null);
      }
    });
    return unsubscribe;
  }, []);

  const storeToken = (token) => {
    setAuthToken(token);
  };

  const logout = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      setAuthToken(null);
      console.log('User logged out');
    }).catch((error) => {
      console.error('Logout failed', error);
    });
  };

  return (
    <AuthContext.Provider value={{ authToken, currentUser, storeToken, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
