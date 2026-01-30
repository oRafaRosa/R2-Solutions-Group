import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="font-bold text-xl tracking-tighter text-white">
            R<sup className="text-brand-500">2</sup> SOLUTIONS
          </p>
          <p className="text-slate-500 text-sm mt-1">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </div>
        
        <div className="flex gap-6 text-slate-400 text-sm">
          <a href="#" className="hover:text-brand-400 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-brand-400 transition-colors">Instagram</a>
          <a href="#" className="hover:text-brand-400 transition-colors">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;