import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function TermsOfService() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative font-sans text-primary-text bg-primary min-h-screen selection:bg-primary-text selection:text-inverse-text">
      <div className="paper-grain" />
      <Navbar />
      <main className="pt-40 pb-32 px-6 max-w-4xl mx-auto min-h-[70vh]">
        <h1 className="font-sans text-5xl sm:text-7xl font-bold tracking-tighter text-primary-text mb-16 uppercase leading-[0.9]">
          Terms of Service
        </h1>
        <div className="space-y-8 text-sm leading-relaxed text-muted max-w-2xl">
          <p className="font-mono text-[10px] uppercase tracking-widest">Last updated: {new Date().getFullYear()}</p>
          <p>By booking Rohith Ravi Photography (including U4U Concepts and MTLC Destinations), you agree to these terms.</p>
          
          <h2 className="text-xl font-bold text-primary-text uppercase mt-12 mb-4 tracking-tight">Bookings & Payments</h2>
          <p>You secure your date with a non-refundable retainer. The remaining balance is due before the event, as outlined in your contract.</p>
          
          <h2 className="text-xl font-bold text-primary-text uppercase mt-12 mb-4 tracking-tight">Deliverables</h2>
          <p>Delivery timelines depend on your package. We usually deliver standard photography in 4 to 8 weeks. We do not provide raw files unless we agree in writing.</p>
          
          <h2 className="text-xl font-bold text-primary-text uppercase mt-12 mb-4 tracking-tight">Copyright</h2>
          <p>Rohith Ravi retains the copyright to all images and footage. You receive a license for personal use and printing. We use the content for our portfolio and marketing unless you sign an NDA before the event.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
