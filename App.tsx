
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Identification from './components/Identification';
import Benefits from './components/Benefits';
import Pricing from './components/Pricing';
import Guarantee from './components/Guarantee';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import AISupport from './components/AISupport';

const App: React.FC = () => {
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating CTA after scrolling past the hero
      if (window.scrollY > 600) {
        setShowFloatingCTA(true);
      } else {
        setShowFloatingCTA(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <Identification />
      <Benefits />
      <Pricing />
      <Guarantee />
      <FAQ />
      <Footer />
      {showFloatingCTA && <FloatingCTA />}
      <AISupport />
    </div>
  );
};

export default App;
