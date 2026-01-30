import React from 'react';
import { PROBLEMS_SOLVED, VALUES } from '../constants';
import { CheckCircle2, XCircle } from 'lucide-react';

const Differentiators: React.FC = () => {
  return (
    <section id="diferencial" className="py-32 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `
          linear-gradient(rgba(14, 165, 233, 1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(14, 165, 233, 1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Problems Grid */}
        <div className="grid lg:grid-cols-2 gap-20 mb-32">
          <div data-aos="fade-right">
            <h2 className="text-brand-400 font-medium tracking-wide uppercase mb-4 text-sm">O Problema</h2>
            <h3 className="text-5xl font-semibold text-white mb-10" style={{ letterSpacing: '-0.02em' }}>Se você se viu aqui, é com a gente mesmo</h3>
            <div className="space-y-5">
              {PROBLEMS_SOLVED.map((problem, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-4 backdrop-blur-xl bg-red-500/5 p-5 rounded-2xl border border-red-500/20"
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                >
                  <XCircle className="text-red-400 flex-shrink-0" size={24} strokeWidth={2} />
                  <span className="text-slate-200 font-medium text-base">{problem}</span>
                </div>
              ))}
            </div>
            
            {/* Reforço */}
            <div className="mt-10 p-8 backdrop-blur-xl bg-white/[0.02] border border-white/[0.05] rounded-3xl" data-aos="fade-up" data-aos-delay="500">
              <p className="text-xl font-semibold text-white mb-3" style={{ letterSpacing: '-0.01em' }}>Não é sobre ter mais ferramentas.</p>
              <p className="text-slate-400 leading-relaxed" style={{ fontSize: '15px' }}>É sobre ter as ferramentas certas, no momento certo. A R² entende o problema, desenha a solução ideal e executa com foco em resultado real.</p>
            </div>
          </div>

          <div className="flex flex-col justify-center" data-aos="fade-left">
            <h2 className="text-brand-400 font-medium tracking-wide uppercase mb-4 text-sm">Nossos Valores</h2>
            <h3 className="text-5xl font-semibold text-white mb-10" style={{ letterSpacing: '-0.02em' }}>Por que escolher a R²?</h3>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {VALUES.map((value, idx) => (
                <div 
                  key={idx} 
                  className="group relative backdrop-blur-xl bg-white/[0.03] p-8 rounded-3xl border border-white/[0.05] hover:bg-white/[0.05] hover:border-white/[0.1] transition-all duration-500 overflow-hidden"
                  data-aos="zoom-in"
                  data-aos-delay={idx * 100}
                  style={{ boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-500/0 to-brand-500/0 group-hover:from-brand-500/5 group-hover:to-transparent transition-all duration-500"></div>
                  <div className="relative z-10">
                  <value.icon className="text-brand-400 group-hover:text-brand-300 mb-6 transition-all group-hover:scale-110 duration-300" size={32} strokeWidth={1.5} />
                  <h4 className="text-xl font-semibold text-white mb-3" style={{ letterSpacing: '-0.01em' }}>{value.title}</h4>
                  <p className="text-slate-400 text-base group-hover:text-slate-300 transition-colors leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Big Statement */}
        <div className="text-center backdrop-blur-xl bg-gradient-to-r from-brand-500/10 to-accent-500/10 p-12 md:p-20 rounded-3xl border border-white/10" data-aos="fade-up" data-aos-delay="200" style={{ boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)' }}>
          <h3 className="text-3xl md:text-5xl font-semibold text-white mb-6" style={{ letterSpacing: '-0.02em' }}>
            “Tecnologia sem estratégia vira custo. <br className="hidden md:block"/>
            <span className="text-brand-400">Aqui, vira investimento.”</span>
          </h3>
          <p className="text-slate-300 text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
            Automatizamos o repetitivo para você focar no que realmente importa: o crescimento do seu negócio.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Differentiators;