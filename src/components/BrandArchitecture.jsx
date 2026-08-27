import React from 'react';
import { motion } from 'motion/react';

export default function BrandArchitecture() {
  return (
    <section id="brands" className="py-24 sm:py-32 px-6 bg-primary border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 md:mb-32 max-w-xl"
        >

          <h2 className="font-sans text-5xl sm:text-7xl font-bold tracking-tighter text-primary-text mb-6 leading-[0.9] uppercase">
            Kerala & Beyond
          </h2>
          <p className="text-sm text-primary-text/80 leading-relaxed font-sans text-pretty max-w-md">
            We run two separate teams. U4U shoots local weddings in Kerala. MTLC travels for outstation and destination weddings.
          </p>
        </motion.div>

        {/* Broken Grid / Asymmetric Layout without generic card borders */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-24 md:gap-x-12 lg:gap-x-20 relative">
          
          {/* U4U */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: "spring", stiffness: 90, damping: 20, mass: 1 }}
            className="md:col-span-6 flex flex-col group"
          >
            <div className="relative aspect-[4/5] overflow-hidden mb-10 bg-border">
              <img
                src="/u4u-brand.jpg"
                alt="U4U Concepts - Kerala Wedding Photography"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.2s] ease-[0.16,1,0.3,1] mix-blend-multiply ring-1 ring-black/10"
              />
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-muted block mb-3">
                01. Kerala
              </span>
              <h3 className="font-sans font-bold tracking-tighter text-4xl sm:text-5xl text-primary-text mb-4 uppercase leading-none">
                U4U
              </h3>
              <p className="text-sm leading-relaxed text-muted mb-8 max-w-sm">
                Documenting traditional weddings across all 14 districts of Kerala.
              </p>

              <div className="space-y-4 pt-6 text-xs font-mono border-t border-border max-w-sm">
                <div className="flex justify-between border-b border-border pb-4">
                  <span className="text-muted uppercase tracking-wide">Focus</span>
                  <span className="text-primary-text">Kerala State</span>
                </div>
                <div className="flex justify-between pb-4">
                  <span className="text-muted uppercase tracking-wide">Style</span>
                  <span className="text-primary-text">Traditional & Fine Art</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* MTLC */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-6 flex flex-col group"
          >
            <div className="relative aspect-[4/5] overflow-hidden mb-10 bg-border">
              <img
                src="/mtlc-brand.png"
                alt="MTLC - Destination Wedding Photography"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.2s] ease-[0.16,1,0.3,1] mix-blend-multiply ring-1 ring-black/10"
              />
            </div>

            <div className="md:ml-auto md:max-w-sm w-full">
              <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-muted block mb-3">
                02. Destination
              </span>
              <h3 className="font-sans font-bold tracking-tighter text-4xl sm:text-5xl text-primary-text mb-4 uppercase leading-none">
                MTLC
              </h3>
              <p className="text-sm leading-relaxed text-muted mb-8">
                Traveling for destination weddings across North India and international venues.
              </p>

              <div className="space-y-4 pt-6 text-xs font-mono border-t border-border">
                <div className="flex justify-between border-b border-border pb-4">
                  <span className="text-muted uppercase tracking-wide">Focus</span>
                  <span className="text-primary-text">Worldwide</span>
                </div>
                <div className="flex justify-between pb-4">
                  <span className="text-muted uppercase tracking-wide">Style</span>
                  <span className="text-primary-text">Documentary</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
