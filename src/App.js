import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Courses from './pages/Courses';
import Training from './pages/Training';
import AboutUs from './pages/AboutUs';

const App = () => {
  return (
    <Router basename="/code-2-dream">
      <div className="d-flex flex-column min-vh-100 bg-black">
        <Header />
        <main className="flex-fill">
          <Routes> 
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/training" element={<Training />} />
            <Route path="/aboutus" element={<AboutUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
