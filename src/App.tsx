import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Calculator from './components/Calculator';
import Weather from './components/Weather';
import LoveCalculator from './components/LoveCalculator';

function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Blog />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/love-calculator" element={<LoveCalculator />} />
      </Routes>
    </Router>
  );
}

export default App;