import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Property from './pages/Property';
import ErrorPage from './pages/ErrorPage';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import About from './pages/Apropos';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property/:id" element={<Property />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
