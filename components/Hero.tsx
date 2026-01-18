import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Translation } from '../types';
import { Logo } from './Logo';

interface HeroProps {
  t: Translation;
}

// Premium ease-out-expo curve for UI entrances
const EASE_ENTRANCE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const Hero: React.FC<HeroProps> = ({ t }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Parallax with subtle movement
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  // Mouse move parallax effect
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Reduced rotation range for classier feel
    const rotateXValue = ((y - centerY) / centerY) * -8; 
    const rotateYValue = ((x - centerX) / centerX) * 8;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: EASE_ENTRANCE }
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-20">
      {/* Background Abstract Grids - Smoother mask */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_30%,transparent_100%)] opacity-20 pointer-events-none" />
      
      {/* Ambient Orbs - Slower animation */}
      <motion.div 
        animate={{ opacity: [0.5, 0.3, 0.5], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] pointer-events-none" 
      />
      <motion.div 
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[128px] pointer-events-none" 
      />

      <motion.div 
        ref={ref}
        style={{ y, opacity }}
        className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between"
      >
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-start mb-12 md:mb-0 rtl:md:text-right">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 variants={itemVariants} className="text-blue-500 font-bold tracking-widest text-sm uppercase mb-4">
              {t.hero.label}
            </motion.h2>
            
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-heading font-black text-white leading-[1.1] md:leading-[1.1] lg:leading-tight mb-6 break-words max-w-full">
              {t.hero.headline.split('|').map((line, i) => (
                <span key={i} className="block">
                  {line.split(' ').map((word, j) => (
                    <span 
                      key={j} 
                      className="inline-block mr-2 sm:mr-4 last:mr-0 rtl:ml-2 rtl:sm:ml-4 rtl:mr-0 rtl:last:ml-0 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400"
                    >
                      {word}
                    </span>
                  ))}
                </span>
              ))}
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-slate-400 text-xl md:text-2xl max-w-lg mx-auto md:mx-0 font-light mb-8">
              {t.hero.subheadline}
            </motion.p>
            
            <motion.div variants={itemVariants}>
              <motion.button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-none border border-blue-500/50 hover:border-blue-400 transition-colors duration-300"
              >
                <div className="absolute inset-0 w-0 bg-blue-600 transition-all duration-[400ms] ease-out group-hover:w-full opacity-10"></div>
                <span className="relative text-blue-400 group-hover:text-white font-bold tracking-widest uppercase transition-colors duration-300">
                  {t.hero.cta}
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* 3D Interactive Card */}
        <div className="md:w-1/2 flex justify-center perspective-1000">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, ease: EASE_ENTRANCE, delay: 0.4 }}
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ 
              rotateX, 
              rotateY,
              transformStyle: 'preserve-3d' 
            }}
            className="relative w-80 h-80 md:w-[500px] md:h-[500px] bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-slate-700 rounded-3xl backdrop-blur-xl shadow-2xl flex items-center justify-center cursor-default"
          >
            {/* Motion logic for physics is handled via style prop binding above, 
                but we use a spring transition for the return-to-center animation in CSS/style-binding via framer-motion defaults */}
            
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.5, repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;