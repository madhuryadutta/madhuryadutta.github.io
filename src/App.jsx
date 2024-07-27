import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Portfolio from './Portfolio.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import GenericPage from './GenericPage.jsx';
import Footer from './Footer.jsx'; //
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Include your CSS for global styling

const App = () => {
  return (
    <Router>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/generic">Generic Page</Link></li>
          </ul>
        </nav>
      </header>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/generic" element={<GenericPage />} />
        </Routes>
      </div>
      <Footer /> {/* Add the Footer component here */}
    </Router>
  );
};

export default App;


