import React from 'react';
import './App.css';
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
