import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-950/20 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
        <div className="text-center md:text-left">
          <p className="font-bold text-xl tracking-tighter text-white hover:text-brand-400 transition-colors cursor-pointer">
            R<sup className="text-brand-500">2</sup> SOLUTIONS
          </p>
          <p className="text-slate-500 text-sm mt-1">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </div>
        
        <div className="flex gap-6 text-slate-400 text-sm">
          <a href="#" className="hover:text-brand-400 transition-all hover:-translate-y-1">LinkedIn</a>
          <a href="#" className="hover:text-brand-400 transition-all hover:-translate-y-1">Instagram</a>
          <a href="#" className="hover:text-brand-400 transition-all hover:-translate-y-1">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;