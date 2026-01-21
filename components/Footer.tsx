
import React from 'react';
import { Instagram, Facebook, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-12 px-4 border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <div className="heading-font text-xl font-black text-orange-600 mb-2 uppercase tracking-tighter">
            Hambúrguer <span className="text-gray-900">Master Class</span>
          </div>
          <p className="text-sm text-gray-500">© 2024 Todos os direitos reservados.</p>
        </div>

        <div className="flex gap-6">
            <a href="#" className="p-2 bg-gray-50 rounded-full hover:bg-orange-50 hover:text-orange-600 transition-colors">
                <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="p-2 bg-gray-50 rounded-full hover:bg-orange-50 hover:text-orange-600 transition-colors">
                <Facebook className="w-6 h-6" />
            </a>
            <a href="mailto:suporte@receitaburger.com" className="p-2 bg-gray-50 rounded-full hover:bg-orange-50 hover:text-orange-600 transition-colors">
                <Mail className="w-6 h-6" />
            </a>
        </div>

        <div className="text-center md:text-right space-y-1">
            <p className="text-xs text-gray-400 max-w-xs leading-tight">
                Aviso Legal: Os resultados podem variar de pessoa para pessoa. Este produto não substitui o conselho de um profissional de saúde.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
