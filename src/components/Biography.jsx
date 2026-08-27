import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function Biography() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 1.05]);

  return (
    <section id="about" ref={containerRef} className="py-24 sm:py-32 px-6 bg-inverse-text border-t border-border overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Parallax Profile Photo Frame */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="bg-primary border border-border rounded-xl overflow-hidden p-2 sm:p-3 relative z-10 bg-clip-padding">
              <div className="relative rounded-lg overflow-hidden bg-secondary">
                <motion.img
                  style={{ y: y1, scale }}
                  src="/rohith-ravi.png"
                  alt="Rohith Ravi"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-[120%] object-cover grayscale opacity-90 hover:opacity-100 hover:grayscale-0 transition-all duration-700 mix-blend-multiply origin-center -my-[10%] ring-1 ring-black/10"
                />
              </div>
            </div>
            
            <motion.div 
              style={{ y: useTransform(scrollYProgress, [0, 1], [-20, 20]) }}
              className="absolute -top-6 -left-6 w-32 h-32 border border-border rounded-full opacity-50 z-0 pointer-events-none" 
            />
          </motion.div>

          {/* Right Column: Biography Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-10 relative z-10"
          >
            <div>

              <h2 className="font-sans text-4xl sm:text-5xl font-bold tracking-tighter text-primary-text leading-[1.1] uppercase">
                From IT to Wedding Documentation
              </h2>
            </div>

            <div className="space-y-6 text-sm leading-relaxed text-muted">
              <p>
                Born and raised in Kerala, Rohith Ravi started his career as an IT systems engineer. He began taking photos casually during travels, shooting streets and landscapes.
              </p>
              
              <p>
                He switched to weddings after seeing his own wedding photos, shot by Phalgun Polepalli. He saw what unscripted, honest documentation could do, and left engineering to shoot full-time.
              </p>
            </div>

            {/* Editorial Quote Callout */}
            <div className="pl-6 border-l border-border">
              <p className="font-serif-editorial text-2xl italic text-primary-text mb-3">
                "We focus on real stories. We want to capture moments that couples will actually care about in ten years."
              </p>
              <span className="text-[10px] font-mono tracking-widest text-muted uppercase">
                — Rohith Ravi
              </span>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 pt-8 border-t border-border font-mono tabular-nums">
              <div>
                <span className="text-3xl font-sans font-bold tracking-tighter text-primary-text block mb-1">8+ Years</span>
                <span className="text-muted uppercase tracking-widest text-[10px]">Shooting</span>
              </div>
              <div>
                <span className="text-3xl font-sans font-bold tracking-tighter text-primary-text block mb-1">2 Brands</span>
                <span className="text-muted uppercase tracking-widest text-[10px]">U4U & MTLC</span>
              </div>
              <div>
                <span className="text-3xl font-sans font-bold tracking-tighter text-primary-text block mb-1">Pan-India</span>
                <span className="text-muted uppercase tracking-widest text-[10px]">Kerala & Beyond</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
