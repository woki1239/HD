import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { Language, Translation } from '../types';
import { LANGUAGES } from '../constants';
import { Logo } from './Logo';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translation;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, t }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentLang = LANGUAGES.find(l => l.code === lang);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('home')}>
          <Logo className="w-10 h-10" />
          <span className="text-2xl font-heading font-bold tracking-wider text-white hidden sm:block">HD</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
          {Object.entries(t.nav).map(([key, label]) => (
            <button 
              key={key} 
              onClick={() => scrollTo(key)} 
              className="text-slate-300 hover:text-blue-400 transition-colors uppercase text-sm tracking-widest font-medium"
            >
              {label}
            </button>
          ))}
          
          {/* Language Switcher */}
          <div className="relative">
            <button 
              onClick={() => setShowLangMenu(!showLangMenu)}
              className="flex items-center gap-2 px-3 py-1 rounded-full border border-slate-700 bg-slate-900/50 hover:bg-slate-800 transition text-sm"
            >
              <Globe size={14} />
              <span>{currentLang?.code.toUpperCase()}</span>
            </button>

            <AnimatePresence>
              {showLangMenu && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full right-0 mt-2 w-48 bg-slate-900 border border-slate-800 rounded-xl shadow-xl overflow-hidden"
                >
                  {LANGUAGES.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code);
                        setShowLangMenu(false);
                      }}
                      className="w-full px-4 py-2 text-left hover:bg-slate-800 flex items-center justify-between group"
                    >
                      <span className="text-slate-300 group-hover:text-white transition">{l.label}</span>
                      <span className="text-lg">{l.flag}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(true)}>
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-slate-950 z-50 flex flex-col items-center justify-center space-y-8"
          >
            <button className="absolute top-6 right-6 text-white" onClick={() => setIsOpen(false)}>
              <X size={32} />
            </button>
            
            {Object.entries(t.nav).map(([key, label]) => (
              <button 
                key={key} 
                onClick={() => scrollTo(key)} 
                className="text-2xl font-heading text-white hover:text-blue-500 uppercase tracking-widest"
              >
                {label}
              </button>
            ))}

            <div className="flex flex-wrap justify-center gap-4 mt-8 px-6">
              {LANGUAGES.map((l) => (
                <button
                  key={l.code}
                  onClick={() => {
                    setLang(l.code);
                    setIsOpen(false);
                  }}
                  className={`px-4 py-2 rounded-lg border ${lang === l.code ? 'border-blue-500 bg-blue-500/20 text-white' : 'border-slate-800 text-slate-400'}`}
                >
                  {l.flag} {l.code.toUpperCase()}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
