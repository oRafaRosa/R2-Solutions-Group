import React from 'react';
import { Quote } from 'lucide-react';
import { MANIFESTO_TEXTS } from '../constants';

const Manifesto: React.FC = () => {
  return (
    <section id="manifesto" className="py-32 bg-slate-900 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-brand-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent-500/5 rounded-full blur-[120px]"></div>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20" data-aos="fade-down">
          <Quote className="mx-auto text-brand-400 mb-6" size={56} strokeWidth={1.5} />
          <h2 className="text-5xl md:text-6xl font-semibold text-white mb-2" style={{ letterSpacing: '-0.02em' }}>Manifesto R²</h2>
          <div className="h-0.5 w-16 bg-brand-400 mx-auto rounded-full mt-6" />
        </div>

        <div className="space-y-12 text-center">
          {MANIFESTO_TEXTS.map((text, index) => (
            <p 
              key={index} 
              className={`text-2xl md:text-3xl leading-relaxed ${
                index === MANIFESTO_TEXTS.length - 1 
                  ? "font-semibold text-brand-400" 
                  : "text-slate-300 font-light"
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              style={{ letterSpacing: '-0.01em' }}
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Manifesto;