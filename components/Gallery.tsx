import React from 'react';
import { motion } from 'framer-motion';
import { Translation } from '../types';

interface GalleryProps {
  t: Translation;
}

const IMAGES = [
  'https://i.postimg.cc/qMgNWY2V/Home-Of-Design-Studio-com-new.png',
  'https://i.postimg.cc/cCrfDzXg/Home-Of-Design-Studio-com.png',
  'https://i.postimg.cc/RVLY56RT/Home-Of-Design-Studio-(1).png',
  'https://i.postimg.cc/c1vKb2Rs/Home-Of-Design-Studio-com-new.png',
  'https://i.postimg.cc/DyKX45Xg/new-2.png',
  'https://i.postimg.cc/XvNhjwLp/Home-Of-Design-Studio-com-new.png',
];

const Gallery: React.FC<GalleryProps> = ({ t }) => {
  return (
    <section id="gallery" className="py-32 bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl font-heading font-black text-white"
          >
            {t.gallery.titleSelected} <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">{t.gallery.titleWorks}</span>
          </motion.h2>
          <div className="h-1 flex-1 bg-slate-800 mx-8 hidden md:block" />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-slate-400 mt-4 md:mt-0 font-light"
          >
            {t.gallery.subtitle}
          </motion.p>
        </div>

        {/* Masonry Grid Simulation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {IMAGES.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: index * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={`relative group overflow-hidden rounded-lg cursor-none ${index === 1 ? 'md:mt-12' : index === 3 ? 'md:-mt-12' : ''}`}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-slate-900 rounded-lg">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  src={src} 
                  alt={`Project ${index + 1}`}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-80 group-hover:opacity-100"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1542206395-9feb3edaa68d?q=80&w=800&auto=format&fit=crop';
                  }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    {t.gallery.projectLabel} {index + 1}
                  </h3>
                  <p className="text-blue-400 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    {t.gallery.serviceLabel}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;