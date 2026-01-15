import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Translation } from '../types';
import { Logo } from './Logo';

interface HeroProps {
  t: Translation;
}

const Hero: React.FC<HeroProps> = ({ t }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.9]);

  // Mouse move parallax effect
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = React.useState(0);
  const [rotateY, setRotateY] = React.useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateXValue = ((y - centerY) / centerY) * -10; // Max rotation 10 deg
    const rotateYValue = ((x - centerX) / centerX) * 10;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-20">
      {/* Background Abstract Grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
      
      {/* Ambient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[128px] pointer-events-none animate-pulse delay-1000" />

      <motion.div 
        ref={ref}
        style={{ y, opacity, scale }}
        className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between"
      >
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-start mb-12 md:mb-0 rtl:md:text-right">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-blue-500 font-bold tracking-widest text-sm uppercase mb-4">
              {t.hero.label}
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-white leading-tight mb-6">
              {t.hero.headline.split(' ').map((word, i) => (
                <span key={i} className="inline-block mr-4 rtl:ml-4 rtl:mr-0 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                  {word}
                </span>
              ))}
            </h1>
            <p className="text-slate-400 text-xl md:text-2xl max-w-lg mx-auto md:mx-0 font-light mb-8">
              {t.hero.subheadline}
            </p>
            
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-none border border-blue-500/50 hover:border-blue-400 transition-colors"
            >
              <div className="absolute inset-0 w-0 bg-blue-600 transition-all duration-[250ms] ease-out group-hover:w-full opacity-10"></div>
              <span className="relative text-blue-400 group-hover:text-white font-bold tracking-widest uppercase">
                {t.hero.cta}
              </span>
            </button>
          </motion.div>
        </div>

        {/* 3D Interactive Card */}
        <div className="md:w-1/2 flex justify-center perspective-1000">
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ 
              rotateX, 
              rotateY,
              transformStyle: 'preserve-3d' 
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative w-80 h-80 md:w-[500px] md:h-[500px] bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-slate-700 rounded-3xl backdrop-blur-xl shadow-2xl flex items-center justify-center"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-500/10 to-transparent pointer-events-none" />
            
            <motion.div 
              style={{ transform: "translateZ(50px)" }}
              className="relative"
            >
              <Logo className="w-40 h-40 md:w-64 md:h-64 drop-shadow-[0_0_35px_rgba(59,130,246,0.5)]" />
            </motion.div>

            {/* Floating Elements for Depth */}
            <motion.div 
              style={{ transform: "translateZ(80px)" }}
              className="absolute top-10 right-10 w-20 h-1 bg-blue-500 rounded-full opacity-50" 
            />
            <motion.div 
              style={{ transform: "translateZ(60px)" }}
              className="absolute bottom-20 left-10 w-12 h-1 bg-cyan-500 rounded-full opacity-50" 
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;