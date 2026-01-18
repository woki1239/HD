import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Translation, ServiceCategory } from '../types';
import { Palette, Printer, Megaphone, Monitor, X, Target } from 'lucide-react';

interface ServicesProps {
  t: Translation;
}

const Icons: Record<string, any> = {
  Palette,
  Printer,
  Megaphone,
  Monitor,
  Target
};

// Custom ease for cards
const EASE_CARD: [number, number, number, number] = [0.25, 1, 0.5, 1];

const Services: React.FC<ServicesProps> = ({ t }) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const categories = Object.values(t.services.categories) as ServiceCategory[];

  return (
    <section id="services" className="py-32 bg-slate-950 relative">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease: EASE_CARD }}
            className="text-4xl md:text-5xl font-heading font-bold text-white mb-4"
          >
            {t.services.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            {t.services.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat: ServiceCategory, index) => {
            const Icon = Icons[cat.icon];
            return (
              <motion.div
                key={cat.id}
                layoutId={`card-${cat.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: EASE_CARD }}
                onClick={() => setActiveCategory(cat.id)}
                whileHover={{ y: -5, transition: { duration: 0.3, ease: "easeOut" } }}
                whileTap={{ scale: 0.98 }}
                className="group relative h-96 bg-slate-900/50 border border-slate-800 hover:border-blue-500/30 rounded-2xl p-8 cursor-pointer overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-900/10"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/90 z-0" />
                
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <motion.div 
                    className="w-14 h-14 bg-slate-800/80 rounded-xl flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    {Icon && <Icon size={28} />}
                  </motion.div>

                  <div>
                    <h3 className="text-2xl font-heading font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                      {cat.title}
                    </h3>
                    <div className="w-12 h-1 bg-slate-700 group-hover:w-full group-hover:bg-blue-500 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] rounded-full" />
                  </div>
                </div>

                {/* Hover Reveal Items */}
                <div className="absolute inset-0 bg-slate-950/95 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col p-8 z-20">
                  <h4 className="text-blue-400 font-bold mb-6 text-lg">{cat.title}</h4>
                  <ul className="space-y-3">
                    {cat.items.slice(0, 4).map((item, i) => (
                      <li key={i} className="text-sm text-slate-300 flex items-start gap-2">
                        <span className="text-blue-500 mt-1 rtl:ml-2">▹</span>
                        {item.title}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto text-center text-xs text-slate-500 uppercase tracking-widest">
                    {t.services.clickDetails}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal for Details */}
      <AnimatePresence>
        {activeCategory && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setActiveCategory(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />
            
            <motion.div 
              layoutId={`card-${activeCategory}`}
              transition={{ type: "spring", damping: 30, stiffness: 350 }}
              className="relative w-full max-w-3xl bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[90vh]"
            >
              <div className="p-8 md:p-12 overflow-y-auto custom-scrollbar">
                <button 
                  onClick={() => setActiveCategory(null)}
                  className="absolute top-6 right-6 rtl:right-auto rtl:left-6 text-slate-400 hover:text-white transition-colors bg-slate-800/50 p-2 rounded-full"
                >
                  <X size={20} />
                </button>

                {(() => {
                  const cat = categories.find(c => c.id === activeCategory);
                  if (!cat) return null;
                  const Icon = Icons[cat.icon];
                  
                  return (
                    <div className="flex flex-col h-full">
                      <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-blue-600/20 rounded-lg text-blue-400">
                          {Icon && <Icon size={32} />}
                        </div>
                        <h3 className="text-3xl md:text-4xl font-heading font-bold text-white">
                          {cat.title}
                        </h3>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        {cat.items.map((item, idx) => (
                          <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + (idx * 0.1), duration: 0.4 }}
                            className="bg-slate-800/40 p-6 rounded-xl border border-slate-700/50 hover:border-blue-500/30 transition-colors"
                          >
                            <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                            <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  );
                })()}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;