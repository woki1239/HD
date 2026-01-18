import React, { useState, useEffect, useRef } from 'react';
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

// Premium easing for UI elements
const EASE_CUSTOM: [number, number, number, number] = [0.16, 1, 0.3, 1];

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, t }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [showMobileLang, setShowMobileLang] = useState(false);
  
  const overlayRef = useRef<HTMLDivElement>(null);
  const desktopLangRef = useRef<HTMLDivElement>(null);
  const mobileLangRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --------------------------------------------------------------------------
  // DROPDOWN CLICK OUTSIDE & ESCAPE LOGIC
  // --------------------------------------------------------------------------
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      
      // Desktop Dropdown
      if (showLangMenu && desktopLangRef.current && !desktopLangRef.current.contains(target)) {
        setShowLangMenu(false);
      }

      // Mobile Dropdown
      if (showMobileLang && mobileLangRef.current && !mobileLangRef.current.contains(target)) {
        setShowMobileLang(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setShowLangMenu(false);
        setShowMobileLang(false);
      }
    };

    if (showLangMenu || showMobileLang) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [showLangMenu, showMobileLang]);

  // --------------------------------------------------------------------------
  // SCROLL BLOCKING LOGIC (Preserved)
  // --------------------------------------------------------------------------
  useEffect(() => {
    const overlay = overlayRef.current;
    if (!isOpen || !overlay) return;

    const handleTouchMove = (e: TouchEvent) => {
      const target = e.target as HTMLElement;
      const scrollable = target.closest('.menu-scroll-container');

      if (!scrollable) {
        if (e.cancelable) e.preventDefault();
      } else {
        e.stopPropagation(); 
      }
    };

    overlay.addEventListener('touchmove', handleTouchMove, { passive: false });
    return () => {
      overlay.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isOpen]);

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 400); // Slightly adjusted to match new exit animation
  };

  const currentLang = LANGUAGES.find(l => l.code === lang);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isScrolled 
          ? 'bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer group" 
          onClick={() => handleLinkClick('home')}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Logo className="w-10 h-10" />
          </motion.div>
          <span className="text-2xl font-heading font-bold tracking-wider text-white hidden sm:block group-hover:text-blue-400 transition-colors duration-300">HD</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
          {Object.entries(t.nav).map(([key, label]) => (
            <motion.button 
              key={key} 
              onClick={() => handleLinkClick(key)} 
              whileHover={{ scale: 1.05, color: '#60a5fa' }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="text-slate-300 transition-colors uppercase text-sm tracking-widest font-medium"
            >
              {label}
            </motion.button>
          ))}
          
          {/* Desktop Language Switcher */}
          <div className="relative" ref={desktopLangRef}>
            <motion.button 
              onClick={() => setShowLangMenu(!showLangMenu)}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(30, 41, 59, 0.8)' }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-3 py-1 rounded-full border border-slate-700 bg-slate-900/50 transition-colors text-sm"
            >
              <Globe size={14} />
              <span>{currentLang?.code.toUpperCase()}</span>
            </motion.button>

            <AnimatePresence>
              {showLangMenu && (
                <motion.div 
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: EASE_CUSTOM }}
                  className="absolute top-full right-0 mt-2 w-48 bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-xl shadow-2xl overflow-hidden"
                >
                  {LANGUAGES.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code);
                        setShowLangMenu(false);
                      }}
                      className="w-full px-4 py-2 text-left hover:bg-slate-800 flex items-center justify-between group transition-colors duration-200"
                    >
                      <span className="text-slate-300 group-hover:text-white transition-colors">{l.label}</span>
                      <span className="text-lg">{l.flag}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-3 md:hidden">
          <div className="relative" ref={mobileLangRef}>
            <motion.button
              onClick={() => setShowMobileLang(!showMobileLang)}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-3 py-2 rounded-full border border-slate-700 bg-slate-900/50 hover:bg-slate-800 transition text-xs font-bold uppercase tracking-wider text-white"
            >
              <span className="text-sm">{currentLang?.flag}</span>
              <span>{currentLang?.code.toUpperCase()}</span>
            </motion.button>

            <AnimatePresence>
              {showMobileLang && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: EASE_CUSTOM }}
                  className="absolute top-full right-0 mt-2 w-48 bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-xl shadow-2xl overflow-hidden z-50"
                >
                  <div className="max-h-[60vh] overflow-y-auto">
                    {LANGUAGES.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => {
                          setLang(l.code);
                          setShowMobileLang(false);
                        }}
                        className="w-full px-4 py-3 text-left hover:bg-slate-800 flex items-center justify-between group border-b border-slate-800/50 last:border-0"
                      >
                        <span className={`text-sm ${lang === l.code ? 'text-blue-400 font-bold' : 'text-slate-300'}`}>{l.label}</span>
                        <span className="text-base">{l.flag}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.button 
            className="text-white p-1" 
            onClick={() => setIsOpen(true)}
            whileTap={{ scale: 0.9 }}
          >
            <Menu size={28} />
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            ref={overlayRef}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            // Snappy spring physics for "drawer" feel
            transition={{ type: "spring", damping: 35, stiffness: 350, mass: 0.8 }}
            className="fixed inset-0 h-[100vh] w-[100vw] z-[100] bg-slate-950 pointer-events-auto flex flex-col"
          >
            <motion.button 
              className="absolute top-6 right-6 text-white z-20 p-2" 
              onClick={() => setIsOpen(false)}
              whileTap={{ scale: 0.9 }}
            >
              <X size={32} />
            </motion.button>
            
            <div className="menu-scroll-container flex-1 w-full overflow-y-auto overflow-x-hidden overscroll-contain flex flex-col items-center justify-center py-10 min-h-0">
              <div className="flex flex-col items-center justify-center space-y-8 w-full shrink-0">
                {Object.entries(t.nav).map(([key, label], i) => (
                  <motion.button 
                    key={key} 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + (i * 0.05), duration: 0.4, ease: EASE_CUSTOM }}
                    onClick={() => handleLinkClick(key)} 
                    whileTap={{ scale: 0.95 }}
                    className="text-3xl font-heading text-white hover:text-blue-500 uppercase tracking-widest font-bold"
                  >
                    {label}
                  </motion.button>
                ))}
              </div>

              <div className="flex flex-wrap justify-center gap-4 mt-12 px-6 max-w-sm shrink-0">
                {LANGUAGES.map((l) => (
                  <motion.button
                    key={l.code}
                    onClick={() => {
                      setLang(l.code);
                      setIsOpen(false);
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-3 py-2 rounded-lg border text-sm flex items-center gap-2 ${lang === l.code ? 'border-blue-500 bg-blue-500/20 text-white' : 'border-slate-800 text-slate-400'}`}
                  >
                    <span>{l.flag}</span> {l.code.toUpperCase()}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;