import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import About from './pages/About';
import Home from './pages/Home';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
      <App />
    </Router>
);
