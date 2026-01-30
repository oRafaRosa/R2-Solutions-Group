import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { SLOGAN } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-brand-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] -right-[10%] w-[60%] h-[60%] bg-accent-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-slate-700 bg-slate-900/50 backdrop-blur-sm">
          <span className="text-brand-400 text-xs sm:text-sm font-semibold tracking-wider uppercase">
            R² Solutions Group
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8 leading-tight">
          Mais do que tecnologia.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-accent-400">
            Soluções com propósito.
          </span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10">
          Unimos estratégia, tecnologia e criatividade para transformar desafios complexos em resultados claros.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#servicos"
            className="group flex items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg shadow-brand-900/40"
          >
            Nossas Soluções
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#manifesto"
            className="flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500 transition-all bg-slate-900/30 backdrop-blur-sm"
          >
            Conheça o Manifesto
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-600">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;