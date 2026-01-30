import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Services from './components/Services';
import Founders from './components/Founders';
import Differentiators from './components/Differentiators';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-brand-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Manifesto />
        <Services />
        <Differentiators />
        <Founders />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;