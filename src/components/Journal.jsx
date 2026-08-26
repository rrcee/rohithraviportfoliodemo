import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Journal() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative font-sans text-primary-text bg-primary min-h-screen selection:bg-primary-text selection:text-inverse-text">
      <div className="paper-grain" />
      <Navbar />
      <main className="pt-40 pb-32 px-6 max-w-7xl mx-auto min-h-[70vh] flex flex-col items-center justify-center text-center">
        <h1 className="font-sans text-5xl sm:text-7xl font-bold tracking-tighter text-primary-text mb-12 uppercase leading-[0.9]">
          Journal
        </h1>
        <div className="py-20 border-t border-border w-full max-w-2xl">
          <p className="text-sm font-mono tracking-widest text-muted uppercase">
            Entries coming soon.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
