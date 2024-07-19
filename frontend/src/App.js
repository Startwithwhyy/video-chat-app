import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import VideoChatPage from './VideoChatPage';
import Upcoming from './Upcoming';
import Previous from './Previous';
import './App.css'; // Global styles

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/video" element={<VideoChatPage />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/previous" element={<Previous />} />
      </Routes>
    </Router>
  );
}

export default App;
