
import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Como recebo a receita?",
      a: "Imediatamente após a confirmação do pagamento, você receberá um link de download no e-mail cadastrado. Se pagar por PIX ou Cartão, o acesso é instantâneo."
    },
    {
      q: "Preciso de ingredientes caros ou raros?",
      a: "Não! O foco desta receita é acessibilidade. Você encontrará tudo o que precisa no mercado mais próximo da sua casa."
    },
    {
      q: "Não sei cozinhar, vou conseguir fazer?",
      a: "Com certeza. O guia é passo a passo, escrito de forma simples e didática. É impossível errar se seguir as instruções."
    },
    {
      q: "O pagamento é seguro?",
      a: "Sim, utilizamos a plataforma de pagamentos mais segura do Brasil, com criptografia de ponta a ponta. Seus dados estão 100% protegidos."
    },
    {
      q: "A receita serve para celíacos?",
      a: "Sim, todos os ingredientes selecionados são naturalmente sem glúten. No entanto, sempre recomendamos verificar os rótulos dos produtos comprados para garantir a ausência de contaminação cruzada."
    }
  ];

  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex p-3 bg-orange-100 rounded-2xl mb-2">
            <HelpCircle className="w-8 h-8 text-orange-600" />
          </div>
          <h2 className="heading-font text-3xl md:text-4xl font-black text-gray-900">
            Dúvidas Frequentes
          </h2>
          <p className="text-gray-500">Ainda está na dúvida? Talvez sua pergunta esteja aqui.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl border transition-all duration-300 ${openIndex === index ? 'border-orange-500 shadow-md' : 'border-gray-200 shadow-sm'}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-bold text-gray-900">{faq.q}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-orange-500 shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-400 shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 animate-fadeIn">
                  <div className="w-full h-px bg-gray-100 mb-4"></div>
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
