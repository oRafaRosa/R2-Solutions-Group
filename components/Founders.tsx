import React from 'react';
import { FOUNDERS } from '../constants';
import { Linkedin } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

const Founders: React.FC = () => {
  return (
    <section id="quem-somos" className="py-32 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `
          linear-gradient(rgba(14, 165, 233, 1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(14, 165, 233, 1) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-brand-400 font-medium tracking-wide uppercase mb-4 text-sm">Time</h2>
          <h3 className="text-5xl md:text-6xl font-semibold text-white mb-6" style={{ letterSpacing: '-0.02em' }}>Quem somos</h3>
          <p className="max-w-3xl mx-auto text-slate-400 text-xl leading-relaxed">
            Tecnologia, dados e estratégia de um lado. Criatividade, comunicação e marketing do outro.
          </p>
        </div>

        <div className="space-y-12">
          {FOUNDERS.map((founder, idx) => (
            <div 
              key={idx} 
              className="group backdrop-blur-xl bg-white/[0.03] rounded-3xl overflow-hidden border border-white/[0.05] hover:bg-white/[0.05] hover:border-white/[0.1] transition-all duration-500 flex flex-col md:flex-row relative"
              data-aos="fade-up"
              data-aos-delay={idx * 200}
              style={{ boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)' }}
            >
              {/* Background image for mobile only */}
              <div className="absolute inset-0 z-0 md:hidden">
                <OptimizedImage
                  src={founder.imageUrl} 
                  alt={founder.name} 
                  className="w-full h-full object-cover object-[center_10%] opacity-90 scale-90"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/70 to-slate-950/90"></div>
              </div>

              {/* Image for desktop - lateral */}
              <div className="hidden md:block md:w-2/5 relative overflow-hidden">
                <OptimizedImage
                  src={founder.imageUrl} 
                  alt={founder.name} 
                  className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-950/20 to-slate-950"></div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/0 to-brand-500/0 group-hover:from-brand-500/5 group-hover:to-transparent transition-all duration-500 pointer-events-none"></div>
              
              <div className="p-10 md:p-12 md:w-3/5 flex flex-col justify-center relative z-10">
                <h4 className="text-3xl font-semibold text-white mb-2" style={{ letterSpacing: '-0.02em' }}>{founder.name}</h4>
                <p className="text-brand-400 text-sm font-medium mb-8 uppercase tracking-wider">{founder.role}</p>
                
                <div className="space-y-4 mb-8">
                  {founder.description.map((desc, i) => (
                    <p key={i} className="text-slate-300 md:text-slate-400 leading-relaxed" style={{ fontSize: '15px' }}>
                      {desc}
                    </p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {founder.skills.map((skill, i) => (
                    <span key={i} className="text-xs bg-white/10 text-slate-300 px-4 py-2 rounded-full border border-white/20 backdrop-blur-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;