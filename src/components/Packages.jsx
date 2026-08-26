import React from 'react';
import { motion } from 'motion/react';

export default function Packages() {
  const standardPackages = [
    {
      title: "Core Photography",
      description: "Coverage for standard wedding ceremonies and rituals.",
      deliverables: ["1 Principal Photographer", "1 Traditional Photographer", "500+ Edited High-Res Images", "Online Gallery Delivery"],
      ideal: "Local weddings (Under 150 guests)",
    },
    {
      title: "Photo & Film",
      description: "Complete team for both photography and cinematic video.",
      deliverables: ["2 Principal Photographers", "2 Cinematographers", "Traditional Team", "3-5 Min Trailer", "20-30 Min Highlight Film", "800+ Edited Images"],
      ideal: "Standard scale (150-400 guests)",
    }
  ];

  const destinationPackage = {
    title: "Destination Suite",
    description: "Full coverage for multi-day outstation and destination weddings.",
    deliverables: ["Director-Level Team", "Drone & Aerial Coverage", "Same-Day Edit (SDE)", "Full Documentary Film", "Premium Printed Album", "Pre/Post Wedding Sessions"],
    ideal: "Multi-day / Destination",
  };

  return (
    <section id="packages" className="py-24 sm:py-32 px-6 bg-primary border-t border-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24 flex flex-col gap-6 max-w-2xl"
        >
          <div>

            <h2 className="font-sans text-5xl sm:text-7xl font-bold tracking-tighter text-primary-text leading-[0.9] uppercase">
              Deliverables
            </h2>
          </div>
          <p className="text-sm text-muted max-w-md text-balance leading-relaxed">
            Standard rates for single-day events up to multi-day destination weddings.
          </p>
        </motion.div>

        {/* Full-width Destination Suite Feature Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="bg-inverse text-inverse-text p-8 sm:p-16 lg:p-20 rounded-[2rem] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-16"
        >
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] font-mono text-inverse-text/50 mb-4">
              {destinationPackage.ideal}
            </div>
            <h3 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-inverse-text mb-6 uppercase">
              {destinationPackage.title}
            </h3>
            <p className="text-sm text-inverse-text/70 leading-relaxed max-w-sm mb-12">
              {destinationPackage.description}
            </p>
            <a
              href={`https://wa.me/919745978666?text=Hi%20Rohith%2C%20I%20would%20like%20to%20get%20a%20quote%20for%20the%20${encodeURIComponent(destinationPackage.title)}%20package.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-inverse-text text-primary-text rounded-full px-8 py-4 text-[10px] sm:text-xs uppercase tracking-widest font-bold shadow-[0_6px_0_0_#999999] md:hover:translate-y-[2px] md:hover:shadow-[0_4px_0_0_#999999] active:translate-y-[6px] active:shadow-[0_0px_0_0_#999999] transition-all"
            >
              Inquire Now
            </a>
          </div>
          
          <div className="space-y-6 self-center">
            {destinationPackage.deliverables.map((item, i) => (
              <div key={i} className="flex items-start text-xs text-inverse-text/90 font-mono tracking-wide border-b border-inverse-text/10 pb-6">
                <span className="text-inverse-text/30 mr-6 w-4">0{i + 1}</span>
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Asymmetric Layout: 2 Columns Bottom */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16 border-t border-border pt-12">
          {standardPackages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col group"
            >
              <div className="text-[10px] uppercase tracking-[0.2em] font-mono text-muted mb-4">
                {pkg.ideal}
              </div>
              
              <h3 className="font-sans text-3xl sm:text-4xl font-bold tracking-tighter text-primary-text mb-4 uppercase">
                {pkg.title}
              </h3>
              <p className="text-sm text-muted mb-8 leading-relaxed max-w-sm">
                {pkg.description}
              </p>

              <div className="space-y-4 mb-10 flex-grow">
                {pkg.deliverables.map((item, i) => (
                  <div key={i} className="flex items-start text-xs text-primary-text font-mono tracking-wide border-b border-border pb-4">
                    <span className="text-muted mr-4 w-4">0{i + 1}</span>
                    {item}
                  </div>
                ))}
              </div>

              <a
                href={`https://wa.me/919745978666?text=Hi%20Rohith%2C%20I%20would%20like%20to%20get%20a%20quote%20for%20the%20${encodeURIComponent(pkg.title)}%20package.`}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start inline-block bg-primary-text text-inverse-text rounded-full px-6 py-3 text-[10px] sm:text-xs uppercase tracking-widest font-bold shadow-[0_6px_0_0_#a3a3a3] md:hover:translate-y-[2px] md:hover:shadow-[0_4px_0_0_#a3a3a3] active:translate-y-[6px] active:shadow-[0_0px_0_0_#a3a3a3] transition-all"
              >
                Request Quote
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
