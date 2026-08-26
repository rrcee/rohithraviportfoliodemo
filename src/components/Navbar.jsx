import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LiquidGlass } from 'liquid-glass-web-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [navWidth, setNavWidth] = useState(1024);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!navRef.current) return;
    
    // Initial size
    setNavWidth(navRef.current.offsetWidth);
    
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setNavWidth(entry.contentRect.width);
      }
    });
    
    resizeObserver.observe(navRef.current);
    
    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  // Prevent scroll and trap focus when menu is open
  useEffect(() => {
    const mainContent = document.querySelector('main');
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      if (mainContent) mainContent.setAttribute('inert', '');
    } else {
      document.body.style.overflow = 'auto';
      if (mainContent) mainContent.removeAttribute('inert');
    }
    return () => {
      document.body.style.overflow = 'auto';
      if (mainContent) mainContent.removeAttribute('inert');
    };
  }, [menuOpen]);

  const links = [
    { name: 'Teams', href: '/#brands' },
    { name: 'Archive', href: '/#gallery' },
    { name: 'Bio', href: '/#about' },
    { name: 'Inquire', href: '/#contact' },
  ];

  return (
    <>
      <nav 
        ref={navRef}
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-[100] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          scrolled 
            ? 'w-[90%] max-w-5xl rounded-[32px]' 
            : 'w-full max-w-7xl rounded-none'
        }`}
      >
        <LiquidGlass
          width={navWidth}
          height={scrolled ? 64 : 72}
          radius={scrolled ? 32 : 0}
          depth={0.1}
          curvature={0.2}
          refraction={0.5}
          shadow={scrolled ? '0 20px 40px -15px rgba(0,0,0,0.1)' : false}
          className={`transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            scrolled ? 'bg-primary-text/90 border border-primary-text rounded-[32px]' : 'bg-transparent border-transparent rounded-none'
          }`}
        >
          <div className={`flex justify-between items-center w-full h-full transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${scrolled ? 'py-3 px-6' : 'py-4 px-6'}`}>
            {/* Brand */}
            <a 
              href="/" 
              className={`font-sans font-bold tracking-tighter text-xl transition-colors duration-500 z-50 relative ${
                menuOpen ? 'text-primary-text' : 'text-inverse-text'
              }`}
            >
              ROHITH RAVI
            </a>

            {/* Hamburger Toggle (Universal) */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`group relative w-10 h-10 rounded-full flex flex-col items-center justify-center space-y-[4px] z-50 transition-all duration-500 active:scale-[0.96] ${
                menuOpen ? 'bg-primary-text/5' : 'bg-inverse-text/10 hover:bg-inverse-text/20'
              }`}
              aria-label="Toggle Menu"
              aria-expanded={menuOpen}
            >
              <span 
                className={`block w-4 h-[1.5px] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                  menuOpen ? 'rotate-45 translate-y-[2.75px] bg-primary-text' : 'bg-inverse-text'
                }`}
              />
              <span 
                className={`block w-4 h-[1.5px] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                  menuOpen ? '-rotate-45 -translate-y-[2.75px] bg-primary-text' : 'bg-inverse-text'
                }`}
              />
            </button>
          </div>
        </LiquidGlass>
      </nav>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.32,0.72,0,1] }}
            className="fixed inset-0 z-[90] bg-primary/95 backdrop-blur-3xl flex flex-col justify-center px-8 sm:px-16 lg:px-24"
          >
            <div className="flex flex-col items-end space-y-4 sm:space-y-6 w-full max-w-7xl mx-auto mt-16">
              {links.map((link, i) => (
                <div key={i} className="overflow-hidden py-2 -my-2">
                  <motion.a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: i * 0.1, 
                      ease: [0.32,0.72,0,1] 
                    }}
                    className="font-sans font-bold text-6xl sm:text-7xl lg:text-8xl tracking-tighter text-primary-text uppercase hover:text-muted transition-colors block active:scale-[0.98] text-right"
                  >
                    {link.name}
                  </motion.a>
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute bottom-12 right-8 sm:right-16 lg:right-24 flex space-x-6 text-[10px] uppercase tracking-[0.2em] font-mono text-muted"
            >
              <a href="https://wa.me/919745978666" className="hover:text-primary-text transition-colors">+91 97459 78666</a>
              <span>Kochi, India</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
