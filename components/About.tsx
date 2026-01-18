import React from 'react';
import { motion } from 'framer-motion';
import { Translation } from '../types';

interface AboutProps {
  t: Translation;
}

const EASE_SMOOTH: [number, number, number, number] = [0.16, 1, 0.3, 1];

const About: React.FC<AboutProps> = ({ t }) => {
  return (
    <section id="about" className="py-32 bg-slate-900 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true, margin: "-10%" }}
               transition={{ duration: 0.8, ease: EASE_SMOOTH }}
               className="relative"
             >
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur-lg opacity-20" />
                <div className="relative bg-slate-950 p-8 rounded-2xl border border-slate-800">
                  <h3 className="text-2xl font-bold text-white mb-6">{t.about.cardTitle}</h3>
                  <div className="space-y-4 text-slate-400">
                    <p>{t.about.cardDesc1}</p>
                    <p>{t.about.cardDesc2}</p>
                  </div>
                  <div className="mt-8 grid grid-cols-2 gap-4 border-t border-slate-800 pt-8">
                    {t.about.stats.map((stat, idx) => (
                      <div key={idx} className="text-center">
                         <div className="text-3xl font-heading font-bold text-white">{stat.value}</div>
                         <div className="text-xs text-slate-500 uppercase tracking-widest mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
             </motion.div>
          </div>

          <div className="lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: EASE_SMOOTH }}
              className="text-4xl md:text-5xl font-heading font-bold text-white mb-6"
            >
              {t.about.title}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: EASE_SMOOTH }}
              className="text-lg text-slate-300 leading-relaxed"
            >
              {t.about.description}
            </motion.p>
            
            <div className="mt-10 flex gap-4">
              <motion.div 
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: EASE_SMOOTH }}
                className="h-16 w-1 bg-blue-500 origin-top" 
              />
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 1 }}
                className="text-slate-500 italic text-sm max-w-sm"
              >
                {t.about.quote}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;