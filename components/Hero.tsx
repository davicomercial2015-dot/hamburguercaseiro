
import React from 'react';
import { ChevronRight, ShieldCheck, Leaf } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToPricing = () => {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-orange-600 to-red-700 text-white pt-16 pb-24 px-4 overflow-hidden">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-orange-400 rounded-full blur-[100px] opacity-30"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-1.5 rounded-full backdrop-blur-sm border border-white/30 text-sm font-semibold uppercase tracking-wider">
            <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
            Receita 100% Testada e Aprovada
          </div>
          
          <h1 className="heading-font text-4xl md:text-5xl lg:text-6xl font-black leading-tight drop-shadow-lg">
            O Segredo do Hambúrguer Caseiro <span className="text-yellow-400">Suculento</span> e 100% Sem Glúten!
          </h1>
          
          <p className="text-lg md:text-xl text-orange-50 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Descubra como preparar um hambúrguer com textura profissional, fofinho e com sabor irresistível, sem gastar horas na cozinha ou abrir mão da sua saúde.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button 
              onClick={scrollToPricing}
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-orange-950 font-extrabold text-xl rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-[0_8px_20px_-4px_rgba(251,191,36,0.5)] active:scale-95"
            >
              QUERO MINHA RECEITA AGORA
              <ChevronRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-4 text-orange-100 text-sm font-semibold">
            <div className="flex items-center gap-1"><ShieldCheck className="w-5 h-5 text-green-400" /> Acesso Imediato</div>
            <div className="w-1 h-1 bg-white/50 rounded-full"></div>
            <div>Pagamento 100% Seguro</div>
          </div>
        </div>

        <div className="relative flex justify-center items-center group">
          <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-[80px] animate-pulse"></div>
          
          {/* Enhanced Product Mockup */}
          <div className="relative w-full max-w-[480px] group-hover:scale-[1.02] transition-transform duration-500">
            <div className="relative aspect-[4/5] bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden border-[12px] border-white transform rotate-1 group-hover:rotate-0 transition-all duration-500">
              <img 
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop" 
                alt="Hambúrguer Gourmet Suculento" 
                className="w-full h-full object-cover"
              />
              
              {/* Overlay Content on Mockup */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8 text-white">
                <div className="flex items-center gap-2 mb-3">
                    <span className="bg-yellow-400 text-orange-900 text-[10px] font-black px-2 py-0.5 rounded-full uppercase">Premium Edition</span>
                    <span className="bg-green-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full uppercase flex items-center gap-1">
                        <Leaf className="w-3 h-3" /> Gluten Free
                    </span>
                </div>
                <h3 className="heading-font text-3xl font-black leading-none mb-1">Manual do Burger</h3>
                <p className="text-orange-400 font-bold text-lg mb-2">O Segredo da Suculência</p>
                <div className="w-12 h-1 bg-yellow-400 rounded-full mb-4"></div>
                <p className="text-xs opacity-70 font-medium">GUIA DIGITAL EXCLUSIVO • ACESSO IMEDIATO</p>
              </div>

              {/* Shine Effect */}
              <div className="absolute top-0 -inset-full h-full w-1/2 z-20 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shine" />
            </div>
          </div>

          {/* Price Badge */}
          <div className="absolute -top-6 -right-4 md:-right-6 bg-yellow-400 text-orange-900 p-6 rounded-full shadow-2xl font-black text-center border-4 border-white transform -rotate-12 animate-bounce hover:scale-110 transition-transform cursor-default z-30">
            <p className="text-xs leading-none mb-1">SÓ HOJE</p>
            <span className="text-sm">R$</span><span className="text-4xl">7</span>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shine {
          100% {
            left: 125%;
          }
        }
        .animate-shine {
          animation: shine 1.5s infinite;
        }
      `}} />
    </section>
  );
};

export default Hero;
