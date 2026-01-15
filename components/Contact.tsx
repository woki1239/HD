import React from 'react';
import { motion } from 'framer-motion';
import { Translation } from '../types';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

interface ContactProps {
  t: Translation;
}

const Contact: React.FC<ContactProps> = ({ t }) => {
  return (
    <section id="contact" className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Info Side */}
          <div className="lg:w-1/3">
            <h2 className="text-4xl font-heading font-bold text-white mb-8">{t.contact.title}</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4 text-slate-400 hover:text-blue-400 transition-colors">
                <MapPin className="mt-1" />
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wider mb-1">{t.contact.hqLabel}</h4>
                  <p>{t.contact.address}<br/>{t.contact.country}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 text-slate-400 hover:text-blue-400 transition-colors">
                <Mail className="mt-1" />
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wider mb-1">{t.contact.emailLabel}</h4>
                  <p>hello@homeofdesign.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 text-slate-400 hover:text-blue-400 transition-colors">
                <Phone className="mt-1" />
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wider mb-1">{t.contact.phoneLabel}</h4>
                  <p dir="ltr" className="text-left md:text-start">+971 4 123 4567</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-2/3">
            <motion.form 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900/50 p-8 md:p-10 rounded-3xl border border-slate-800 backdrop-blur-sm"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label className="text-xs text-slate-500 uppercase font-bold tracking-widest">{t.contact.name}</label>
                  <input type="text" className="w-full bg-slate-950 border border-slate-800 rounded-lg p-4 text-white focus:outline-none focus:border-blue-500 transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-slate-500 uppercase font-bold tracking-widest">{t.contact.email}</label>
                  <input type="email" className="w-full bg-slate-950 border border-slate-800 rounded-lg p-4 text-white focus:outline-none focus:border-blue-500 transition-colors" />
                </div>
              </div>
              
              <div className="space-y-2 mb-8">
                <label className="text-xs text-slate-500 uppercase font-bold tracking-widest">{t.contact.message}</label>
                <textarea rows={5} className="w-full bg-slate-950 border border-slate-800 rounded-lg p-4 text-white focus:outline-none focus:border-blue-500 transition-colors" />
              </div>

              <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg flex items-center justify-center gap-3 transition-all">
                <span>{t.contact.submit}</span>
                <Send size={18} className="rtl:rotate-180" />
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;