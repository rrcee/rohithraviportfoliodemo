import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function AnimatedIntro({ onComplete }) {
  const [step, setStep] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer1 = setTimeout(() => setStep(1), 700);
    const timer2 = setTimeout(() => setStep(2), 1600);
    const timer3 = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 700);
    }, 2600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-50 bg-[#3B4953] text-[#EBF4DD] flex flex-col items-center justify-center p-6 select-none gpu-accelerate"
        >
          <div className="text-center max-w-xl">
            {/* Step 0: Fine Art Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-xs uppercase tracking-[0.3em] text-[#90AB8B] mb-4 font-mono"
            >
              Fine Art & Editorial Visuals
            </motion.p>

            {/* Step 1: Main Title */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl font-normal tracking-wide text-[#EBF4DD] mb-4"
            >
              ROHITH RAVI
            </motion.h1>

            {/* Step 2: Sub-brands reveal */}
            {step >= 2 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center justify-center space-x-3 text-sm text-[#90AB8B] tracking-widest font-light"
              >
                <span>U4U CONCEPTS</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#5A7863]" />
                <span>MTLC DESTINATIONS</span>
              </motion.div>
            )}
          </div>

          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 right-0 h-1 bg-[#90AB8B] origin-left"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
