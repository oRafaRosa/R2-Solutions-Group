import React from 'react';
import { PROBLEMS_SOLVED, VALUES } from '../constants';
import { CheckCircle2, XCircle } from 'lucide-react';

const Differentiators: React.FC = () => {
  return (
    <section id="diferencial" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-brand-900/40 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Problems Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <div data-aos="fade-right">
            <h2 className="text-brand-500 font-semibold tracking-wide uppercase mb-3">O Problema</h2>
            <h3 className="text-3xl font-bold text-white mb-8">Se você se viu aqui, é com a gente mesmo.</h3>
            <div className="space-y-4">
              {PROBLEMS_SOLVED.map((problem, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-lg border-l-4 border-red-500"
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                >
                  <XCircle className="text-red-500 flex-shrink-0" size={24} />
                  <span className="text-slate-200 font-medium">{problem}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center" data-aos="fade-left">
            <h2 className="text-brand-500 font-semibold tracking-wide uppercase mb-3">Nossos Valores</h2>
            <h3 className="text-3xl font-bold text-white mb-8">Por que escolher a R²?</h3>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {VALUES.map((value, idx) => (
                <div 
                  key={idx} 
                  className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-brand-500 transition-colors hover-lift"
                  data-aos="zoom-in"
                  data-aos-delay={idx * 100}
                >
                  <value.icon className="text-brand-400 mb-4" size={28} />
                  <h4 className="text-lg font-bold text-white mb-2">{value.title}</h4>
                  <p className="text-slate-400 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Big Statement */}
        <div className="text-center bg-gradient-to-r from-brand-900 to-slate-900 p-10 md:p-16 rounded-3xl border border-slate-700 shadow-2xl" data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
            "Tecnologia sem estratégia vira custo. <br className="hidden md:block"/>
            <span className="text-brand-400">Aqui, vira investimento."</span>
          </h3>
          <p className="text-slate-300 mt-4 max-w-2xl mx-auto">
            Automatizamos o repetitivo para você focar no que realmente importa: o crescimento do seu negócio.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Differentiators;