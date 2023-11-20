import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Features from './pages/Features';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/features" element={<Features />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
