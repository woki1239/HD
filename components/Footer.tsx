import React from 'react';
import { Logo } from './Logo';
import { Translation } from '../types';

interface FooterProps {
  t: Translation;
}

const Footer: React.FC<FooterProps> = ({ t }) => {
   const year = new Date().getFullYear();
   
   return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Logo className="w-8 h-8 opacity-70" />
          <span className="text-slate-500 font-heading font-bold">Home of Design</span>
        </div>
        <div className="text-slate-600 text-sm">
          &copy; {year} HD. {t?.footer.rights || "All rights reserved."}
        </div>
      </div>
    </footer>
  );
};

export default Footer;