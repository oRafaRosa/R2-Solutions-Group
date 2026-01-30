import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { SLOGAN } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden pt-20">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(14, 165, 233, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14, 165, 233, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950"></div>
      </div>
      
      {/* Animated Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div 
          className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-brand-500/20 rounded-full blur-[120px]"
          style={{ animation: 'float 8s ease-in-out infinite' }}
        />
        <div 
          className="absolute top-[40%] -right-[10%] w-[60%] h-[60%] bg-accent-500/20 rounded-full blur-[120px]"
          style={{ animation: 'float 10s ease-in-out infinite reverse' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div 
          className="inline-block mb-6 px-4 py-1.5 rounded-full border border-slate-700 bg-slate-900/50 backdrop-blur-sm"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <span className="text-brand-400 text-xs sm:text-sm font-semibold tracking-wider uppercase">
            R² Solutions Group
          </span>
        </div>
        
        <h1 
          className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8 leading-tight"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Mais do que tecnologia.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-accent-400 to-brand-400 animate-gradient-x bg-[length:200%_auto]">
            Soluções com propósito.
          </span>
        </h1>
        
        <p 
          className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Unimos estratégia, tecnologia e criatividade para transformar desafios complexos em resultados claros.
        </p>
        
        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <a 
            href="#servicos"
            className="group relative flex items-center gap-2.5 bg-white text-slate-950 px-9 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-[1.02]"
            style={{ fontSize: '17px', boxShadow: '0 4px 24px rgba(255, 255, 255, 0.12)' }}
          >
            <span>Nossas Soluções</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
          </a>
          <a 
            href="#manifesto"
            className="group flex items-center gap-2.5 px-9 py-4 rounded-full font-semibold text-white backdrop-blur-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300"
            style={{ fontSize: '17px' }}
          >
            <span>Conheça o Manifesto</span>
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