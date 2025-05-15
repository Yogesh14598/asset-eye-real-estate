import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Villa from './pages/Villa';
import Site from './pages/Site';
import Flat from './pages/Flat';
import AboutUs from './pages/AboutUs';

const App = () => {
  return (
    <Router basename="/asset-eye-real-estate">
      <div className="d-flex flex-column min-vh-100 bg-black">
        <Header />
        <main className="flex-fill">
          <Routes> 
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/villa" element={<Villa />} />
            <Route path="/site" element={<Site />} />
            <Route path="/flat" element={<Flat />} />
            <Route path="/aboutus" element={<AboutUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
