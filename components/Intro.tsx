import React from 'react';
import { motion } from 'framer-motion';
import { Logo } from './Logo';

const Intro: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 2.5, ease: "easeInOut" }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-[100] bg-slate-950 flex items-center justify-center"
    >
      <div className="relative">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Logo className="w-32 h-32 md:w-48 md:h-48" />
        </motion.div>
        
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
          className="h-1 bg-blue-600 mt-8 mx-auto rounded-full"
        />
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-center mt-4 text-blue-400 font-heading tracking-[0.5em] text-sm uppercase"
        >
          Initializing HD System
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Intro;
