import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS, COMPANY_NAME } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-slate-950/80 backdrop-blur-2xl border-b border-white/[0.05] py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="font-bold text-2xl tracking-tighter text-white hover:text-brand-400 transition-colors">
              R<sup className="text-brand-500">2</sup> <span className="text-sm font-normal text-slate-400 ml-2 hidden sm:inline-block">TECH & CONSULTING</span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-10">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-slate-400 hover:text-white transition-colors text-[15px] font-medium relative group"
                style={{ letterSpacing: '-0.01em' }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a href="#contato" className="group relative bg-white text-slate-950 px-6 py-2.5 rounded-full font-semibold transition-all duration-300 hover:scale-[1.02]" style={{ fontSize: '15px', boxShadow: '0 2px 12px rgba(255, 255, 255, 0.1)' }}>
              <span className="relative z-10">Fale Conosco</span>
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4">
               <a 
                href="#contato" 
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-brand-600 hover:bg-brand-500 text-white px-5 py-3 rounded-md text-base font-semibold"
              >
                Fale Conosco
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;