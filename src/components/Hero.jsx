import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { LiquidGlass } from 'liquid-glass-web-react';

export default React.memo(function Hero({ hasEntered }) {
  const [titleSize, setTitleSize] = useState({ width: 0, height: 0 });
  const titleRef = useRef(null);

  useEffect(() => {
    if (!titleRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setTitleSize({
          width: entry.contentRect.width,
          height: entry.contentRect.height
        });
      }
    });
    observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, [hasEntered]);

  return (
    <section className="relative w-full h-[100svh] flex items-center justify-center overflow-hidden bg-inverse">
      
      <motion.div 
        initial={{ scale: 1.4, opacity: 0 }}
        animate={hasEntered ? { scale: 1, opacity: 0.85 } : { scale: 1.4, opacity: 0 }}
        transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="absolute inset-0 w-full h-full gpu-accelerate pointer-events-none"
      >
        {hasEntered && (
          <iframe
            src={`https://www.youtube.com/embed/2BlPuiV8pLY?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=2BlPuiV8pLY&modestbranding=1&playsinline=1`}
            title="Rohith Ravi Reel"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-[300vw] h-[300vh] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:w-[150vw] sm:h-[150vh] object-cover pointer-events-none grayscale"
          />
        )}
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/80 via-[#000000]/20 to-transparent pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 px-6 w-full max-w-7xl mx-auto flex flex-col justify-end h-full pb-16 sm:pb-24">
        
        <div className="flex flex-col w-full max-w-3xl gap-10">
          <div className="relative inline-block w-fit" ref={titleRef}>
            
            {hasEntered && titleSize.width > 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 1 }}
                className="absolute inset-0 -mx-8 -my-10 z-0 pointer-events-none"
              >
                <LiquidGlass
                  width={titleSize.width + 64}
                  height={titleSize.height + 80}
                  radius={32}
                  depth={0.2}
                  curvature={0.3}
                  refraction={0.6}
                  className="bg-inverse-text/20 backdrop-blur-md rounded-[32px] shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
                />
              </motion.div>
            )}

            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
                animate={hasEntered ? { opacity: 1, clipPath: 'inset(0 0% 0 0)' } : { opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 1.2 }}
                className="mb-6 flex items-center"
              >
                <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.4em] font-mono text-inverse-text block">
                  Kerala & Worldwide
                </span>
              </motion.div>

              <h1 className="font-sans text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-inverse-text leading-[0.9] uppercase flex flex-col">
                <motion.span className="flex whitespace-nowrap">
                  {"Emotional".split("").map((char, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 60, filter: 'blur(8px)' }}
                      animate={hasEntered ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 60, filter: 'blur(8px)' }}
                      transition={{ type: "spring", stiffness: 100, damping: 20, mass: 1, delay: 1.2 + index * 0.04 }}
                      className="inline-block will-change-transform"
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.span>
                <motion.span className="flex whitespace-nowrap text-inverse-text/80">
                  {"Documentation".split("").map((char, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 60, filter: 'blur(8px)' }}
                      animate={hasEntered ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 60, filter: 'blur(8px)' }}
                      transition={{ type: "spring", stiffness: 100, damping: 20, mass: 1, delay: 1.4 + index * 0.03 }}
                      className="inline-block will-change-transform"
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.span>
              </h1>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={hasEntered ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 1.8 }}
            className="flex flex-row gap-6 items-center z-10"
          >
            <a
              href="#gallery"
              className="inline-block bg-inverse-text text-primary-text rounded-full px-6 py-3 text-[10px] uppercase tracking-widest font-bold shadow-[0_4px_0_0_#999999] md:hover:translate-y-[2px] md:hover:shadow-[0_2px_0_0_#999999] active:translate-y-[4px] active:shadow-[0_0px_0_0_#999999] transition-all"
            >
              View Archive
            </a>
            <a
              href="https://wa.me/919745978666?text=Hi%20Rohith%2C%20I%20would%20like%20to%20inquire%20about%20your%20wedding%20photography%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-inverse-text text-primary-text rounded-full px-6 py-3 text-[10px] uppercase tracking-widest font-bold shadow-[0_4px_0_0_#999999] md:hover:translate-y-[2px] md:hover:shadow-[0_2px_0_0_#999999] active:translate-y-[4px] active:shadow-[0_0px_0_0_#999999] transition-all"
            >
              Inquire Now
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
});
