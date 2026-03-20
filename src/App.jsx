import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Services from './components/Services';
import CTA from './components/CTA';
import Footer from './components/Footer';
function App() {
  return (
    <div className="bg-white">
      <Hero />
      <Intro />
      <Services />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;