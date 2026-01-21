
import React, { useState } from 'react';
import { MessageCircle, X, Send, Loader2, Sparkles } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const AISupport: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([
    {role: 'bot', text: 'Olá! Sou o assistente gourmet. Tem alguma dúvida técnica sobre o nosso hambúrguer sem glúten antes de garantir sua receita?'}
  ]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    
    const userMsg = input;
    setMessages(prev => [...prev, {role: 'user', text: userMsg}]);
    setInput("");
    setLoading(true);

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error('API key not configured');
      }

      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: "Você é um assistente de vendas especialista em gastronomia funcional para uma página de vendas de uma receita de hambúrguer caseiro sem glúten de R$ 7,00. Seu objetivo é tirar dúvidas técnicas de forma simpática e encorajar a compra. A receita foca em: pão sem glúten que não esfarela, blend de carne suculento e molho especial. Seja breve e convincente.",
          temperature: 0.7,
        }
      });

      const botResponse = response.text || "Desculpe, tive um problema para processar sua dúvida. Pode tentar novamente?";
      setMessages(prev => [...prev, {role: 'bot', text: botResponse}]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, {role: 'bot', text: "Opa! Estou com muita demanda agora. Mas não se preocupe, a oferta de R$ 7 é garantida!"}]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Bubble */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[60] p-4 bg-orange-600 hover:bg-orange-500 text-white rounded-full shadow-2xl transition-all transform hover:scale-110 active:scale-95 group"
      >
        {isOpen ? <X className="w-8 h-8" /> : <MessageCircle className="w-8 h-8 group-hover:animate-wiggle" />}
        <span className="absolute -top-2 -right-2 bg-green-500 w-4 h-4 rounded-full border-2 border-white"></span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-[60] w-[calc(100vw-3rem)] sm:w-96 max-h-[500px] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-gray-100 animate-slideIn">
          <div className="bg-orange-600 p-4 flex items-center gap-3 text-white">
            <div className="p-2 bg-white/20 rounded-xl">
                <Sparkles className="w-5 h-5" />
            </div>
            <div>
                <p className="font-bold">Assistente Gourmet IA</p>
                <p className="text-xs opacity-80">Respondendo agora</p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  m.role === 'user' 
                    ? 'bg-orange-600 text-white rounded-tr-none' 
                    : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-tl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 rounded-tl-none">
                  <Loader2 className="w-5 h-5 animate-spin text-orange-600" />
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-gray-100 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Digite sua dúvida..."
              className="flex-1 bg-gray-100 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button 
              onClick={handleSend}
              disabled={loading}
              className="p-2 bg-orange-600 text-white rounded-xl hover:bg-orange-500 transition-colors disabled:opacity-50"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AISupport;
