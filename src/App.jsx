import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandArchitecture from './components/BrandArchitecture';
import Biography from './components/Biography';
import Gallery from './components/Gallery';
import Packages from './components/Packages';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import Journal from './components/Journal';

function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    if (currentPath === '/') {
      if (!hasEntered) {
        document.body.style.overflow = 'hidden';
        window.scrollTo(0, 0);
      } else {
        setTimeout(() => {
          document.body.style.overflow = 'auto';
        }, 1200);
      }
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [hasEntered, currentPath]);

  const titleText = "ROHITH RAVI".split('');
  
  if (currentPath === '/privacy-policy') {
    return <PrivacyPolicy />;
  }
  if (currentPath === '/terms-of-service') {
    return <TermsOfService />;
  }
  if (currentPath === '/journal') {
    return <Journal />;
  }
  if (currentPath !== '/') {
    return <NotFound />;
  }
  
  return (
    <div className="relative font-sans text-primary-text bg-primary min-h-screen selection:bg-primary-text selection:text-inverse-text">
      <div className="paper-grain" />
      
      {/* Cinematic Split-Reveal Entry Screen */}
      <AnimatePresence>
        {!hasEntered && (
          <motion.div
            key="entry-overlay"
            className="fixed inset-0 z-[9999] flex flex-col cursor-pointer"
            onClick={() => setHasEntered(true)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setHasEntered(true);
              }
            }}
          >
            <motion.div
              exit={{ y: '-100%' }}
              transition={{ duration: 1.4, ease: [0.83, 0, 0.17, 1] }}
              className="flex-1 bg-primary"
            />
            <motion.div
              exit={{ y: '100%' }}
              transition={{ duration: 1.4, ease: [0.83, 0, 0.17, 1] }}
              className="flex-1 bg-primary"
            />

            {/* Central Content */}
            <motion.div
              exit={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
            >
              <div className="text-center space-y-6 flex flex-col items-center overflow-hidden p-8 w-full max-w-5xl">
                
                {/* Structural Typography: Ultra-tight tracking for display */}
                <h1 className="font-sans text-[12vw] sm:text-[8vw] font-bold tracking-tighter text-primary-text flex justify-center space-x-1 leading-none uppercase">
                  {titleText.map((char, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 50, scaleY: 1.5 }}
                      animate={{ opacity: 1, y: 0, scaleY: 1 }}
                      transition={{ 
                        duration: 1.2, 
                        delay: index * 0.04, 
                        ease: [0.16, 1, 0.3, 1] 
                      }}
                      className={char === ' ' ? 'w-[2vw]' : 'inline-block origin-bottom'}
                    >
                      {char}
                    </motion.span>
                  ))}
                </h1>
                
                <motion.div
                  initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
                  animate={{ opacity: 1, clipPath: 'inset(0 0% 0 0)' }}
                  transition={{ delay: 0.8, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center space-x-4 w-full justify-center"
                >
                  <div className="h-[1px] w-12 sm:w-24 bg-primary-text"></div>
                  <p className="text-[9px] sm:text-[11px] uppercase tracking-[0.4em] font-mono text-primary-text">
                    Fine Art Documentation
                  </p>
                  <div className="h-[1px] w-12 sm:w-24 bg-primary-text"></div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 1 }}
                  className="pt-12"
                >
                  <button className="inline-block bg-primary-text text-inverse-text rounded-full px-6 py-3 text-[10px] uppercase tracking-widest font-bold shadow-[0_4px_0_0_#999999] md:hover:translate-y-[2px] md:hover:shadow-[0_2px_0_0_#999999] active:translate-y-[4px] active:shadow-[0_0px_0_0_#999999] transition-all pointer-events-auto">
                    Click to Enter
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.1 }}
      >
        <Navbar />
        
        <main>
          <Hero hasEntered={hasEntered} />
          <BrandArchitecture />
          <Gallery />
          <Biography />
          <Packages />
          <ContactSection />
        </main>

        <Footer />
      </motion.div>
    </div>
  );
}

export default App;
