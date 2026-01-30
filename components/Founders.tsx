import React from 'react';
import { FOUNDERS } from '../constants';
import { Linkedin } from 'lucide-react';

const Founders: React.FC = () => {
  return (
    <section id="quem-somos" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-brand-500 font-semibold tracking-wide uppercase mb-3">Quem Somos</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">A união de dois mundos</h3>
          <p className="max-w-3xl mx-auto text-slate-400 text-lg">
            Tecnologia, dados e estratégia de um lado. Criatividade, comunicação e marketing do outro.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {FOUNDERS.map((founder, idx) => (
            <div 
              key={idx} 
              className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-slate-600 transition-all flex flex-col md:flex-row hover-lift glow-on-hover"
              data-aos="fade-up"
              data-aos-delay={idx * 200}
            >
              <div className="md:w-2/5 h-64 md:h-auto relative overflow-hidden">
                <img 
                  src={founder.imageUrl} 
                  alt={founder.name} 
                  className="w-full h-full object-cover object-center transition-all duration-500 hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent md:bg-gradient-to-r md:from-transparent md:to-slate-900"></div>
              </div>
              <div className="p-8 md:w-3/5">
                <h4 className="text-2xl font-bold text-white mb-1">{founder.name}</h4>
                <p className="text-brand-400 text-sm font-semibold mb-4 uppercase tracking-wider">{founder.role}</p>
                
                <div className="space-y-3 mb-6">
                  {founder.description.map((desc, i) => (
                    <p key={i} className="text-slate-400 text-sm leading-relaxed">
                      {desc}
                    </p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {founder.skills.map((skill, i) => (
                    <span key={i} className="text-xs bg-slate-800 text-slate-300 px-3 py-1 rounded-full border border-slate-700">
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