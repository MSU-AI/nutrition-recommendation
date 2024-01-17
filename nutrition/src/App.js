import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Chat from './pages/Chat/Chat';
import Profile from './pages/Profile/Profile';
import RegistrationPage from './pages/Registration/Registration';
import LoginPage from './pages/LoginPage/LoginPage';

import { initializeApp } from 'firebase/app';
import { AuthProvider } from './Auth/AuthContext';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};
// eslint-disable-next-line
const app = initializeApp(firebaseConfig);

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/register" element={<RegistrationPage />} />
              <Route path="/login" element={<LoginPage />} />
            </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
