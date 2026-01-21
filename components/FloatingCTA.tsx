
import React from 'react';
import { ShoppingCart } from 'lucide-react';

const FloatingCTA: React.FC = () => {
  const scrollToPricing = () => {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-4 md:px-0 animate-bounceIn">
      <button 
        onClick={scrollToPricing}
        className="w-full bg-green-600 hover:bg-green-500 text-white font-black py-4 px-6 rounded-2xl shadow-2xl flex items-center justify-center gap-3 transition-transform hover:scale-105 active:scale-95 border-2 border-white/20"
      >
        <ShoppingCart className="w-6 h-6" />
        APROVEITAR OFERTA POR R$ 7,00
      </button>
    </div>
  );
};

export default FloatingCTA;
