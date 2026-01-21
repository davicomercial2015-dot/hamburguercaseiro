
import React from 'react';
import { XCircle, CheckCircle2 } from 'lucide-react';

const Identification: React.FC = () => {
  const pains = [
    "Cansado de pães sem glúten que esfarelam na primeira mordida?",
    "Frustrado com hambúrgueres industriais cheios de conservantes?",
    "Sente falta de comer um 'lanche de verdade' sem passar mal depois?",
    "Acha que comer saudável é sinônimo de comida sem tempero?",
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <div className="space-y-4">
          <h2 className="heading-font text-3xl md:text-4xl font-black text-gray-900">
            Isso parece familiar para você?
          </h2>
          <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {pains.map((pain, index) => (
            <div key={index} className="flex items-start gap-4 p-6 bg-red-50 rounded-2xl border border-red-100 group hover:bg-red-100 transition-colors">
              <XCircle className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
              <p className="text-gray-700 font-medium text-lg leading-relaxed">{pain}</p>
            </div>
          ))}
        </div>

        <div className="bg-orange-50 p-8 md:p-12 rounded-[2.5rem] border-2 border-dashed border-orange-200 relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-6 py-2 rounded-full font-bold shadow-lg">
                VOCÊ NÃO ESTÁ SOZINHO!
            </div>
            <p className="text-xl md:text-2xl text-gray-800 font-bold leading-relaxed">
                "Eu já estive no seu lugar. Passei meses testando farinhas caras e receitas mirabolantes que só resultavam em desperdício de dinheiro e frustração... <span className="text-orange-600 italic">Até que eu descobri o equilíbrio perfeito.</span>"
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-orange-200 rounded-full overflow-hidden">
                    <img src="https://picsum.photos/seed/chef/200" alt="Chef" />
                </div>
                <div className="text-left">
                    <p className="font-bold text-gray-900">Chef Ricardo Santos</p>
                    <p className="text-sm text-gray-500 italic">Especialista em Cozinha Funcional</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Identification;
