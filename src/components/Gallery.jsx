import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function Gallery({ activeBrand, setActiveBrand }) {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-20%", "0%"]);

  const portfolioItems = [
    {
      id: 1,
      title: "The Prism & The Bride",
      src: "/bride-prism.jpg",
      aspect: "aspect-[4/5] w-[70vw] sm:w-[40vw] md:w-[30vw]",
    },
    {
      id: 2,
      title: "First Dance",
      src: "/couple-dance-spotlight.png",
      aspect: "aspect-[16/10] w-[85vw] sm:w-[50vw] md:w-[40vw]",
    },
    {
      id: 3,
      title: "Floral Reverie",
      src: "/couple-floral.jpg",
      aspect: "aspect-[4/5] w-[70vw] sm:w-[40vw] md:w-[30vw]",
    },
    {
      id: 4,
      title: "Royal Heritage",
      src: "/couple-royal.png",
      aspect: "aspect-[16/10] w-[85vw] sm:w-[50vw] md:w-[40vw]",
    }
  ];

  return (
    <section id="gallery" className="py-32 bg-primary border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="flex flex-col gap-6 max-w-2xl">
          <div>

            <h2 className="font-sans text-5xl sm:text-7xl font-bold tracking-tighter text-primary-text leading-[0.9] uppercase">
              Visual Record
            </h2>
          </div>
          <p className="text-sm text-muted max-w-md text-balance leading-relaxed">
            Unscripted moments captured across Kerala and international destinations.
          </p>
        </div>
      </div>

      {/* Cinematic Horizontal Scroll Tracks (Contact Sheet aesthetic) */}
      <div ref={containerRef} className="space-y-8 sm:space-y-12 py-10 relative">
        
        {/* Track 1: Moving Left */}
        <motion.div 
          style={{ x: x1 }}
          className="flex space-x-8 sm:space-x-12 px-6 sm:px-12 w-max"
        >
          {portfolioItems.map((item, idx) => (
            <div key={`t1-${idx}`} className={`relative group ${item.aspect} flex-shrink-0`}>
              <div className="absolute inset-0 bg-border animate-pulse rounded-sm" />
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                decoding="async"
                className="relative z-10 w-full h-full object-cover rounded-sm grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 mix-blend-multiply ring-1 ring-black/10"
              />
              <div className="mt-4 flex justify-between items-start font-mono text-[10px] uppercase tracking-widest text-muted">
                <span>0{item.id} // {item.title}</span>
                <span>[View Print]</span>
              </div>
            </div>
          ))}
          {/* Duplicate for infinite feel */}
          {portfolioItems.map((item, idx) => (
            <div key={`t1-dup-${idx}`} className={`relative group ${item.aspect} flex-shrink-0`}>
              <div className="absolute inset-0 bg-border animate-pulse rounded-sm" />
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                decoding="async"
                className="relative z-10 w-full h-full object-cover rounded-sm grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 mix-blend-multiply ring-1 ring-black/10"
              />
              <div className="mt-4 flex justify-between items-start font-mono text-[10px] uppercase tracking-widest text-muted">
                <span>0{item.id} // {item.title}</span>
                <span>[View Print]</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Track 2: Moving Right */}
        <motion.div 
          style={{ x: x2 }}
          className="flex space-x-8 sm:space-x-12 px-6 sm:px-12 w-max -ml-[50vw]"
        >
          {[...portfolioItems].reverse().map((item, idx) => (
            <div key={`t2-${idx}`} className={`relative group ${item.aspect} flex-shrink-0`}>
              <div className="absolute inset-0 bg-border animate-pulse rounded-sm" />
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                decoding="async"
                className="relative z-10 w-full h-full object-cover rounded-sm grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 mix-blend-multiply"
              />
              <div className="mt-4 flex justify-between items-start font-mono text-[10px] uppercase tracking-widest text-muted">
                <span>0{item.id} // {item.title}</span>
                <span>[View Print]</span>
              </div>
            </div>
          ))}
          {/* Duplicate for infinite feel */}
          {[...portfolioItems].reverse().map((item, idx) => (
            <div key={`t2-dup-${idx}`} className={`relative group ${item.aspect} flex-shrink-0`}>
              <div className="absolute inset-0 bg-border animate-pulse rounded-sm" />
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                decoding="async"
                className="relative z-10 w-full h-full object-cover rounded-sm grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 mix-blend-multiply"
              />
              <div className="mt-4 flex justify-between items-start font-mono text-[10px] uppercase tracking-widest text-muted">
                <span>0{item.id} // {item.title}</span>
                <span>[View Print]</span>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
