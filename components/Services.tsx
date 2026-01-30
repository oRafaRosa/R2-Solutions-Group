import React from 'react';
import { SERVICES } from '../constants';
import { Check } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-brand-500 font-semibold tracking-wide uppercase mb-3">O Que Fazemos</h2>
          <h3 className="text-4xl font-bold text-white">Ecossistemas Digitais Completos</h3>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Não entregamos soluções isoladas. Integramos estratégia, execução e comunicação no mesmo lugar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={service.id}
              className="group relative backdrop-blur-xl bg-white/[0.02] border border-white/[0.05] p-12 rounded-3xl hover:bg-white/[0.04] hover:border-white/[0.08] transition-all duration-500 overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              style={{ boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/0 to-brand-500/0 group-hover:from-brand-500/10 group-hover:to-transparent transition-all duration-500"></div>
              <div className="relative z-10">
              <div className="relative w-16 h-16 bg-gradient-to-br from-brand-500/10 to-accent-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-105 transition-all duration-500 backdrop-blur-xl border border-white/5">
                <service.icon className="text-brand-400 group-hover:text-brand-300 transition-colors relative z-10" size={32} strokeWidth={1.5} />
              </div>
              
              <h4 className="text-3xl font-semibold text-white mb-5 group-hover:text-brand-300 transition-colors" style={{ letterSpacing: '-0.02em' }}>
                {service.title}
              </h4>
              
              <p className="text-slate-400 mb-10 leading-relaxed" style={{ fontSize: '17px' }}>
                {service.description}
              </p>

              <ul className="space-y-4">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-300">
                    <Check className="text-brand-400 flex-shrink-0 mt-1" size={18} strokeWidth={2} />
                    <span style={{ fontSize: '15px' }}>{item}</span>
                  </li>
                ))}
              </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;