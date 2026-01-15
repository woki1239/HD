import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Translation, ServiceCategory } from '../types';
import { Palette, Printer, Megaphone, Monitor, ChevronRight, X, Target } from 'lucide-react';

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

const Services: React.FC<ServicesProps> = ({ t }) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const categories = Object.values(t.services.categories) as ServiceCategory[];

  return (
    <section id="services" className="py-32 bg-slate-950 relative">
       {/* Background noise texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-white mb-4"
          >
            {t.services.title}
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto">{t.services.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat: ServiceCategory, index) => {
            const Icon = Icons[cat.icon];
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveCategory(cat.id)}
                className="group relative h-96 bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 rounded-2xl p-8 cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/20"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/90 z-0" />
                
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    {Icon && <Icon size={28} />}
                  </div>

                  <div>
                    <h3 className="text-2xl font-heading font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {cat.title}
                    </h3>
                    <div className="w-12 h-1 bg-slate-700 group-hover:w-full group-hover:bg-blue-500 transition-all duration-500 rounded-full" />
                  </div>
                </div>

                {/* Hover Reveal Items */}
                <div className="absolute inset-0 bg-slate-950/95 translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex flex-col p-8 z-20">
                  <h4 className="text-blue-400 font-bold mb-6 text-lg">{cat.title}</h4>
                  <ul className="space-y-3">
                    {cat.items.slice(0, 4).map((item, i) => ( // Show first 4 on hover card
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
              onClick={() => setActiveCategory(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            
            <motion.div 
              layoutId={activeCategory}
              className="relative w-full max-w-3xl bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl z-10"
            >
              <div className="p-8 md:p-12">
                <button 
                  onClick={() => setActiveCategory(null)}
                  className="absolute top-6 right-6 rtl:right-auto rtl:left-6 text-slate-400 hover:text-white"
                >
                  <X size={24} />
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
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors"
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