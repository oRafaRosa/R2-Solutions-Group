import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/[0.05] py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
        <div className="text-center md:text-left">
          <p className="font-semibold text-2xl tracking-tight text-white" style={{ letterSpacing: '-0.02em' }}>
            R<sup className="text-brand-400">2</sup> <span className="text-slate-500">SOLUTIONS</span>
          </p>
          <p className="text-slate-500 text-sm mt-2">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </div>
        
        <div className="flex gap-8 text-slate-400 text-base">
          <a href="#" className="hover:text-white transition-colors duration-300">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors duration-300">Instagram</a>
          <a href="#" className="hover:text-white transition-colors duration-300">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;