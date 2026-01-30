import React from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-32 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `
          linear-gradient(rgba(14, 165, 233, 1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(14, 165, 233, 1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          <div data-aos="fade-right">
            <h2 className="text-brand-400 font-medium tracking-wide uppercase mb-4 text-sm">Vamos conversar?</h2>
            <h3 className="text-5xl md:text-6xl font-semibold text-white mb-8" style={{ letterSpacing: '-0.02em' }}>Transforme sua ideia em realidade</h3>
            <p className="text-slate-400 text-xl mb-12 leading-relaxed">
              Se existe um jeito melhor de fazer, a gente encontra. Entre em contato para um diagnóstico do seu negócio.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center border border-slate-800 text-brand-500">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <p className="font-medium">contato@r2solutions.com.br</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-slate-300">
                 <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center border border-slate-800 text-brand-500">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Localização</p>
                  <p className="font-medium">São Paulo, SP</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-slate-300">
                 <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center border border-slate-800 text-brand-500">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">WhatsApp</p>
                  <p className="font-medium">(11) 99999-9999</p>
                </div>
              </div>
            </div>
          </div>

          <div className="backdrop-blur-xl bg-white/[0.02] p-12 rounded-3xl border border-white/[0.05]" data-aos="fade-left" style={{ boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)' }}>
            <h4 className="text-2xl font-semibold text-white mb-10" style={{ letterSpacing: '-0.02em' }}>Envie uma mensagem</h4>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1 uppercase">Nome</label>
                  <input type="text" className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all duration-300" placeholder="Seu nome" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1 uppercase">Empresa</label>
                  <input type="text" className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all duration-300" placeholder="Sua empresa" />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1 uppercase">Email</label>
                <input type="email" className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all duration-300" placeholder="seu@email.com" />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1 uppercase">Mensagem</label>
                <textarea rows={4} className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all duration-300 resize-none" placeholder="Conte sobre seu projeto ou desafio..."></textarea>
              </div>

              <button type="submit" className="group relative w-full bg-white text-slate-950 font-semibold py-4 rounded-full transition-all duration-300 hover:scale-[1.01] flex items-center justify-center gap-2 mt-6" style={{ fontSize: '17px', boxShadow: '0 4px 24px rgba(255, 255, 255, 0.12)' }}>
                <span className="relative z-10">Enviar Mensagem</span>
                <Send size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;