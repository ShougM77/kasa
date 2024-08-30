import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Property from './pages/Property';
import ErrorPage from './pages/ErrorPage';
import Apropos from './pages/Apropos';
import './App.scss';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property/:id" element={<Property />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/apropos" element={<Apropos />} />
       
      </Routes>
    </>
  );
}

export default App;
