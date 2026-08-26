import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function PrivacyPolicy() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative font-sans text-primary-text bg-primary min-h-screen selection:bg-primary-text selection:text-inverse-text">
      <div className="paper-grain" />
      <Navbar />
      <main className="pt-40 pb-32 px-6 max-w-4xl mx-auto min-h-[70vh]">
        <h1 className="font-sans text-5xl sm:text-7xl font-bold tracking-tighter text-primary-text mb-16 uppercase leading-[0.9]">
          Privacy Policy
        </h1>
        <div className="space-y-8 text-sm leading-relaxed text-muted max-w-2xl">
          <p className="font-mono text-[10px] uppercase tracking-widest">Last updated: {new Date().getFullYear()}</p>
          <p>We respect your privacy. Any information collected through this website, such as your name, email, and wedding details, is used strictly for communication regarding our photography services. We do not sell or share your data with third parties.</p>
          
          <h2 className="text-xl font-bold text-primary-text uppercase mt-12 mb-4 tracking-tight">Data Collection</h2>
          <p>We collect information you voluntarily provide when filling out the contact form or reaching out via WhatsApp. This includes contact details and event specifics required to provide an accurate quote.</p>
          
          <h2 className="text-xl font-bold text-primary-text uppercase mt-12 mb-4 tracking-tight">Cookies</h2>
          <p>This portfolio uses minimal cookies strictly for functional purposes. We do not use intrusive third-party tracking scripts.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
