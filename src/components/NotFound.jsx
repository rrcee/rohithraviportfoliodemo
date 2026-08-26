import React from 'react';
import { motion } from 'motion/react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-primary text-primary-text selection:bg-primary-text selection:text-primary relative overflow-hidden">
      <div className="paper-grain" />
      
      <div className="flex-grow flex flex-col items-center justify-center p-6 text-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-muted block mb-4 flex items-center justify-center space-x-2">
            <span className="w-1.5 h-1.5 bg-primary-text rounded-full inline-block"></span>
            <span>Error 404</span>
          </span>
          <h1 className="font-sans text-5xl sm:text-8xl font-bold tracking-tighter text-primary-text mb-6 leading-[0.9] uppercase">
            Not Found
          </h1>
          <p className="text-sm text-muted max-w-sm mx-auto leading-relaxed mb-12">
            The page you are looking for has been moved, deleted, or never existed in the archive.
          </p>
          
          <a
            href="/"
            className="inline-block border border-border px-8 py-4 text-[10px] uppercase tracking-[0.2em] font-medium text-primary-text hover:bg-primary-text hover:text-primary transition-all active:scale-[0.96]"
          >
            Return to Archive
          </a>
        </motion.div>
      </div>
      
      {/* Absolute positioning background element to give it depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vh] bg-gradient-radial from-transparent via-primary/50 to-primary pointer-events-none z-0" />
    </div>
  );
}
