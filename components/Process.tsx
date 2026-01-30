import React from 'react';
import { PROCESS_STEPS } from '../constants';
import { ArrowRight } from 'lucide-react';

const Process: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-brand-500 font-semibold tracking-wide uppercase mb-3">Como Trabalhamos</h2>
          <h3 className="text-3xl font-bold text-white">Do conceito ao código</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROCESS_STEPS.map((step, idx) => (
            <div 
              key={idx} 
              className="relative p-6 rounded-xl bg-slate-800/50 border border-slate-700 hover:bg-slate-800 transition-colors hover-lift"
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              <div className="text-6xl font-black text-slate-800 absolute top-2 right-4 z-0 opacity-50 select-none">
                {step.number}
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold text-lg mb-6 shadow-lg shadow-brand-900/50">
                  {step.number}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{step.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
              {idx < PROCESS_STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 text-slate-600 z-20">
                  <ArrowRight size={24} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;