import React from 'react';
import { PROCESS_STEPS } from '../constants';
import { ArrowRight } from 'lucide-react';

const Process: React.FC = () => {
  return (
    <section className="py-32 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `
          linear-gradient(rgba(14, 165, 233, 1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(14, 165, 233, 1) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-brand-400 font-medium tracking-wide uppercase mb-4 text-sm">Como Trabalhamos</h2>
          <h3 className="text-5xl md:text-6xl font-semibold text-white mb-4" style={{ letterSpacing: '-0.02em' }}>Do conceito ao código</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROCESS_STEPS.map((step, idx) => (
            <div 
              key={idx} 
              className="group relative p-10 rounded-3xl backdrop-blur-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-white/[0.08] transition-all duration-500 overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={idx * 150}
              style={{ boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/0 to-brand-500/0 group-hover:from-brand-500/5 group-hover:to-transparent transition-all duration-500"></div>
              <div className="text-9xl font-black text-white/[0.015] absolute -top-6 -right-6 z-0 select-none" style={{ fontWeight: 900 }}>
                {step.number}
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-500/15 to-accent-500/15 backdrop-blur-xl text-white flex items-center justify-center font-semibold text-lg mb-8 group-hover:scale-105 transition-all duration-500 border border-white/10">
                  {step.number}
                </div>
                <h4 className="text-xl font-semibold text-white mb-4 group-hover:text-brand-300 transition-colors" style={{ letterSpacing: '-0.02em' }}>{step.title}</h4>
                <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors" style={{ fontSize: '15px' }}>
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