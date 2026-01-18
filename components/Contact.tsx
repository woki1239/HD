import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Translation } from '../types';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

interface ContactProps {
  t: Translation;
}

const Contact: React.FC<ContactProps> = ({ t }) => {
  // State kept for visual input handling (typing), but no submission logic is attached
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Info Side */}
          <div className="lg:w-1/3">
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-heading font-bold text-white mb-8"
            >
              {t.contact.title}
            </motion.h2>
            
            <div className="space-y-8">
              {[
                { icon: MapPin, label: t.contact.hqLabel, content: `${t.contact.address}\n${t.contact.country}` },
                { icon: Mail, label: t.contact.emailLabel, content: 'info@homeofdesignstudio.com' },
                { icon: Phone, label: t.contact.phoneLabel, content: '+46766166570' }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="flex items-start gap-4 text-slate-400 hover:text-blue-400 transition-colors duration-300 group"
                >
                  <item.icon className="mt-1 group-hover:text-blue-500 transition-colors" size={20} />
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-wider mb-1">{item.label}</h4>
                    <p className="whitespace-pre-line">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-2/3">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="bg-slate-900/50 p-8 md:p-10 rounded-3xl border border-slate-800 backdrop-blur-sm min-h-[500px] flex flex-col justify-center"
            >
              {/* Pure UI Mockup Form - No Action/Method */}
              <motion.form 
                onSubmit={(e) => e.preventDefault()}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-full flex flex-col"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <label className="text-xs text-slate-500 uppercase font-bold tracking-widest">
                      {t.contact.name}
                    </label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg p-4 text-white focus:outline-none focus:border-blue-500 transition-colors duration-300" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-slate-500 uppercase font-bold tracking-widest">
                      {t.contact.email}
                    </label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg p-4 text-white focus:outline-none focus:border-blue-500 transition-colors duration-300" 
                    />
                  </div>
                </div>
                
                <div className="space-y-2 mb-8 flex-1">
                  <label className="text-xs text-slate-500 uppercase font-bold tracking-widest">
                    {t.contact.message}
                  </label>
                  <textarea 
                    rows={5} 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-4 text-white focus:outline-none focus:border-blue-500 transition-colors duration-300 resize-none h-full min-h-[150px]" 
                  />
                </div>

                <div className="flex flex-col gap-4">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full md:w-auto bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-lg flex items-center justify-center gap-3 transition-colors duration-300 shadow-lg shadow-blue-900/20"
                  >
                    <span>{t.contact.submit}</span>
                    <Send size={18} className="rtl:rotate-180" />
                  </motion.button>
                </div>
              </motion.form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;