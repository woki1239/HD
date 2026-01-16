import React from 'react';
import { motion } from 'framer-motion';
import { Translation } from '../types';

interface GalleryProps {
  t: Translation;
}

// Placeholder architectural images
const IMAGES = [
  'https://i.postimg.cc/qMgNWY2V/Home-Of-Design-Studio-com-new.png', // Project 1: User provided image
  'https://i.postimg.cc/cCrfDzXg/Home-Of-Design-Studio-com.png', // Project 2: User provided image
  'https://i.postimg.cc/RVLY56RT/Home-Of-Design-Studio-(1).png', // Project 3: User provided image
  'https://i.postimg.cc/c1vKb2Rs/Home-Of-Design-Studio-com-new.png', // Project 4: User provided image
  'https://i.postimg.cc/DyKX45Xg/new-2.png', // Project 5: User provided image
  'https://i.postimg.cc/XvNhjwLp/Home-Of-Design-Studio-com-new.png', // Project 6: User provided image
];

const Gallery: React.FC<GalleryProps> = ({ t }) => {
  return (
    <section id="gallery" className="py-32 bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-6xl font-heading font-black text-white"
          >
            {t.gallery.titleSelected} <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">{t.gallery.titleWorks}</span>
          </motion.h2>
          <div className="h-1 flex-1 bg-slate-800 mx-8 hidden md:block" />
          <p className="text-slate-400 mt-4 md:mt-0 font-light">
            {t.gallery.subtitle}
          </p>
        </div>

        {/* Masonry Grid Simulation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {IMAGES.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-lg cursor-none ${index === 1 ? 'md:mt-12' : index === 3 ? 'md:-mt-12' : ''}`}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-slate-900">
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src={src} 
                  alt={`Project ${index + 1}`}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-80 group-hover:opacity-100"
                  onError={(e) => {
                    // Fallback if image isn't found
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1542206395-9feb3edaa68d?q=80&w=800&auto=format&fit=crop';
                  }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{t.gallery.projectLabel} {index + 1}</h3>
                  <p className="text-blue-400 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{t.gallery.serviceLabel}</p>
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