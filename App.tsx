import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Language } from './types';
import { getTranslation, LANGUAGES } from './constants';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');

  const t = getTranslation(lang);
  const currentLangConfig = LANGUAGES.find(l => l.code === lang);

  // Handle Text Direction (RTL/LTR)
  useEffect(() => {
    document.documentElement.dir = currentLangConfig?.dir || 'ltr';
    document.documentElement.lang = lang;
  }, [lang, currentLangConfig]);

  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-blue-500 selection:text-white">
      <Navbar lang={lang} setLang={setLang} t={t} />
      
      <div className="relative">
          {/* Global background effects */}
        <Hero t={t} />
        <Services t={t} />
        <Gallery t={t} />
        <About t={t} />
        <Contact t={t} />
      </div>

      <Footer t={t} />
    </main>
  );
};

export default App;