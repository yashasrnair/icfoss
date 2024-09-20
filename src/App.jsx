import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react"
// import Services from './components/pages/Services';
// import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import About from './components/About';
import Mission from './components/Mission';
import Footer from './components/Footer';
import Cards from './components/Cards';
import Events from './components/Events';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Analytics />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/aboutus" element={<About />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/team" element={<Cards />} />
          <Route path="/events" element={<Events />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;