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
              className="group bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-brand-500/50 hover:bg-slate-800/50 transition-all duration-300 hover-lift glow-on-hover"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="w-14 h-14 bg-brand-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="text-brand-400" size={32} />
              </div>
              
              <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-300 transition-colors">
                {service.title}
              </h4>
              
              <p className="text-slate-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm">
                    <Check className="text-brand-500 flex-shrink-0 mt-0.5" size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;