// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import CategoryBar from './Components/CategoryBar/CategoryBar';
import Footer from './Components/Footer/Footer';

import Home from './Pages/Home/Home';
import ManOfWeek from './Pages/ManOfWeek/ManOfWeek';
import ContactPage from './Pages/Contact/Contact'; // ✅ NEW IMPORT
import ArticlesPage from './Pages/ArticlesPage/ArticlesPage';
import About from "./Pages/About/About";

export default function App() {
  return (
    <Router>
      <Navbar />
      <CategoryBar />

      <main className="container" style={{ minHeight: '60vh' }}>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Man of the week */}
          <Route path="/man-of-week" element={<ManOfWeek />} />

          <Route path="/articlesPage" element={<ArticlesPage/>} />

          <Route path="/about" element={<About />} />


          {/* Contact Page */}
          <Route path="/contact" element={<ContactPage />} /> {/* ✅ NEW ROUTE */}

          {/* Category pages */}
          <Route path="/programming" element={<Home category="Programming" />} />
          <Route path="/ai-ml" element={<Home category="AI & Machine Learning" />} />
          <Route path="/cloud" element={<Home category="Cloud Computing" />} />
          <Route path="/gadgets" element={<Home category="Gadgets" />} />
          <Route path="/tech-news" element={<Home category="Tech News" />} />
          <Route path="/devops" element={<Home category="DevOps" />} />
          <Route path="/women-in-tech" element={<Home category="Women in Tech" />} />
          <Route path="/productivity" element={<Home category="Productivity Tools" />} />
        </Routes>
      </main>

      {/* Footer shown on every page */}
      <Footer />
    </Router>
  );
}
