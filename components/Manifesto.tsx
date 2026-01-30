import React from 'react';
import { Quote } from 'lucide-react';
import { MANIFESTO_TEXTS } from '../constants';

const Manifesto: React.FC = () => {
  return (
    <section id="manifesto" className="py-24 bg-slate-900 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Quote className="mx-auto text-brand-500 mb-6 opacity-50" size={48} />
          <h2 className="text-3xl font-bold text-white uppercase tracking-wider mb-2">Manifesto R²</h2>
          <div className="h-1 w-20 bg-brand-500 mx-auto rounded-full" />
        </div>

        <div className="space-y-8 text-center">
          {MANIFESTO_TEXTS.map((text, index) => (
            <p 
              key={index} 
              className={`text-xl md:text-2xl leading-relaxed ${
                index === MANIFESTO_TEXTS.length - 1 
                  ? "font-bold text-brand-400" 
                  : "text-slate-300 font-light"
              }`}
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