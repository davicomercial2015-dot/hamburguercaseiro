
import React, { useState, useEffect } from 'react';
import { Timer, CheckCircle, CreditCard, Apple, Wallet } from 'lucide-react';

const Pricing: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes in seconds

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <section id="oferta" className="py-24 px-4 bg-gray-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-600 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12 space-y-4">
            <span className="bg-orange-600 text-white px-4 py-1 rounded-full text-sm font-black uppercase tracking-widest animate-pulse">
                Oferta Exclusiva de Lançamento
            </span>
          <h2 className="heading-font text-4xl md:text-5xl font-black">
            Pronto para transformar seus <span className="text-orange-500">finais de semana?</span>
          </h2>
        </div>

        <div className="bg-white text-gray-900 rounded-[3rem] p-8 md:p-12 shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-black heading-font text-orange-600">O que você vai receber:</h3>
                <ul className="mt-6 space-y-4">
                  {[
                    "Receita do Pão de Burger que não quebra",
                    "Blend Secreto de Carne suculenta",
                    "Molho Especial Casa (Brinde)",
                    "Dicas de Conservação e Congelamento",
                    "Lista de Substitutos Saudáveis"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 font-semibold text-gray-700">
                      <CheckCircle className="w-6 h-6 text-green-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100 flex items-center gap-4">
                <Timer className="w-10 h-10 text-orange-500 animate-bounce" />
                <div>
                  <p className="text-sm font-bold text-orange-800 uppercase tracking-tight">O preço sobe em:</p>
                  <p className="text-3xl font-black tabular-nums text-orange-600">{formatTime(timeLeft)}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center text-center p-8 bg-gray-50 rounded-3xl border-2 border-orange-500 shadow-inner">
                <p className="text-gray-400 line-through text-xl font-bold italic">De R$ 47,00</p>
                <p className="text-gray-500 font-bold mb-2">Por apenas</p>
                <div className="flex items-start gap-1">
                    <span className="text-2xl font-bold mt-2">R$</span>
                    <span className="text-8xl font-black text-orange-600 leading-none">7</span>
                    <span className="text-3xl font-bold mt-2">,00</span>
                </div>
                <p className="text-sm text-gray-500 font-medium mt-4">Pagamento único. Sem mensalidades.</p>
                
                <button className="w-full mt-8 py-5 px-8 bg-green-600 hover:bg-green-500 text-white font-black text-2xl rounded-2xl transition-all shadow-lg hover:scale-105 active:scale-95 group">
                    SIM! QUERO MEU ACESSO
                    <div className="text-xs font-normal opacity-80 group-hover:opacity-100 transition-opacity">Acesso Liberado no E-mail</div>
                </button>

                <div className="mt-8 space-y-4 w-full">
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Formas de Pagamento</p>
                    <div className="flex justify-center gap-4 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
                        <CreditCard className="w-6 h-6" />
                        <Wallet className="w-6 h-6" />
                        <Apple className="w-6 h-6" />
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
