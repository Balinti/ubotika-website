import React from 'react';
import './App.css';
import logo from './ubotika-logo.jpg';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Calculator from './components/Calculator';
import Stats from './components/Stats';
import Contact from './components/Contact';
import TaraWidget from './components/TaraWidget';

function App() {
  return (
    <div className="App">
      <img src={logo} alt="Ubotica Logo" className="app-logo" />
      <Hero />
      <About />
      <Services />
      <Calculator />
      <Stats />
      <Contact />
      <TaraWidget />
    </div>
  );
}

export default App;
