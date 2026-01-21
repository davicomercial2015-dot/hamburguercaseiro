
import React from 'react';
import { ShieldCheck, RefreshCcw, Smile } from 'lucide-react';

const Guarantee: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-white border-y border-gray-100">
      <div className="max-w-5xl mx-auto">
        <div className="bg-gray-50 rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 shadow-sm">
          <div className="relative shrink-0">
            <div className="absolute inset-0 bg-green-200 rounded-full blur-[40px] opacity-50"></div>
            <img 
              src="https://cdn-icons-png.flaticon.com/512/6045/6045145.png" 
              alt="Selo de Garantia" 
              className="w-48 h-48 md:w-64 md:h-64 object-contain relative z-10 drop-shadow-2xl"
            />
          </div>

          <div className="space-y-6 text-center md:text-left">
            <h2 className="heading-font text-3xl font-black text-gray-900 uppercase">
              7 Dias de Garantia Incondicional
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              O risco é todo meu. Se por qualquer motivo você achar que a receita não é para você, ou se simplesmente não gostar da cor do PDF, eu devolvo 100% do seu dinheiro. 
              <span className="font-bold text-gray-900 block mt-4">Sem perguntas, sem letras miúdas, sem enrolação. Basta um e-mail.</span>
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
                <div className="flex items-center gap-2 text-sm font-bold text-green-600 bg-green-50 px-4 py-2 rounded-full">
                    <ShieldCheck className="w-5 h-5" /> Proteção Total
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
                    <RefreshCcw className="w-5 h-5" /> Estorno Rápido
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-orange-600 bg-orange-50 px-4 py-2 rounded-full">
                    <Smile className="w-5 h-5" /> Satisfação Real
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
