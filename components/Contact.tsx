import React from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div data-aos="fade-right">
            <h2 className="text-brand-500 font-semibold tracking-wide uppercase mb-3">Vamos conversar?</h2>
            <h3 className="text-4xl font-bold text-white mb-6">Transforme sua ideia em realidade.</h3>
            <p className="text-slate-400 text-lg mb-10">
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

          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-2xl" data-aos="fade-left">
            <h4 className="text-xl font-bold text-white mb-6">Envie uma mensagem</h4>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1 uppercase">Nome</label>
                  <input type="text" className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors" placeholder="Seu nome" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1 uppercase">Empresa</label>
                  <input type="text" className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors" placeholder="Sua empresa" />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1 uppercase">Email</label>
                <input type="email" className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors" placeholder="seu@email.com" />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1 uppercase">Mensagem</label>
                <textarea rows={4} className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors" placeholder="Conte sobre seu projeto ou desafio..."></textarea>
              </div>

              <button type="submit" className="w-full bg-brand-600 hover:bg-brand-500 text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 mt-4">
                Enviar Mensagem
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;