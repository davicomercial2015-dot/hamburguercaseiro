
import React from 'react';
import { Heart, DollarSign, Zap, Utensils, Award, Clock } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "100% Livre de Inflamação",
      description: "Esqueça o inchaço abdominal. Nossa receita usa ingredientes naturais que seu corpo entende e digere facilmente."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-green-600" />,
      title: "Economia Real",
      description: "Pare de pagar R$ 50 em um único lanche artesanal. Faça em casa o equivalente a 5 burgers pelo preço de um."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Rápido e Prático",
      description: "Preparo simples em menos de 20 minutos. Ideal para quem tem rotina corrida mas não abre mão da qualidade."
    },
    {
      icon: <Utensils className="w-8 h-8 text-orange-500" />,
      title: "Textura Incomparável",
      description: "O segredo da liga que não esfarela. Um pão fofinho e uma carne que derrete na boca."
    },
    {
      icon: <Award className="w-8 h-8 text-blue-500" />,
      title: "Para Toda a Família",
      description: "Crianças e adultos amam. É a forma perfeita de incluir opções saudáveis no final de semana."
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-500" />,
      title: "Acesso Vitalício",
      description: "Compre uma vez e tenha a receita salva para sempre no seu celular, tablet ou computador."
    }
  ];

  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="heading-font text-3xl md:text-5xl font-black text-gray-900 leading-tight">
            Por que este é o ÚNICO guia <br className="hidden md:block"/> que você precisa hoje?
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Mais do que uma receita, é a liberdade de comer bem sem preocupações.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2">
              <div className="mb-6 p-4 bg-gray-50 rounded-2xl w-fit group-hover:bg-orange-50 transition-colors">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
