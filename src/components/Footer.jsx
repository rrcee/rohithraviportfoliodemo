import React from 'react';
import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="bg-inverse text-primary py-20 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12 text-left">
        
        <div className="space-y-4">
          <motion.a 
            href="#" 
            className="font-sans font-bold text-4xl tracking-tighter block hover:opacity-80 transition-opacity uppercase"
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
          >
            Rohith Ravi
          </motion.a>
          <p className="text-[10px] text-muted font-mono uppercase tracking-widest">
            Fine Art Wedding Documentation
          </p>
        </div>

        <div className="flex flex-col md:items-end space-y-4">
          <a
            href="https://wa.me/919745978666"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-mono text-primary hover:text-muted transition-colors tracking-widest relative group inline-block"
          >
            +91 97459 78666
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#787774] transition-all duration-300 group-hover:w-full" />
          </a>
          <p className="text-[10px] text-muted font-mono uppercase tracking-widest flex items-center space-x-2">
            <span className="w-1.5 h-1.5 bg-inverse-text rounded-full animate-pulse" />
            <span>Based in Kochi, Available Worldwide</span>
          </p>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-border flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 text-[10px] text-muted font-mono uppercase tracking-widest">
        <p>&copy; {new Date().getFullYear()} Rohith Ravi Photography. All Rights Reserved.</p>
        
        <div className="flex flex-wrap gap-x-8 gap-y-4">
          <a href="/privacy-policy" className="hover:text-primary transition-colors relative group">
            Privacy Policy
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="/terms-of-service" className="hover:text-primary transition-colors relative group">
            Terms of Service
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors relative group">
            Instagram
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="/journal" className="hover:text-primary transition-colors relative group">
            Journal
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
          </a>
        </div>
      </div>
    </footer>
  );
}
