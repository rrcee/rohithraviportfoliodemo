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
          <p>By booking Rohith Ravi Photography (including U4U Concepts and MTLC Destinations), you agree to the following terms.</p>
          
          <h2 className="text-xl font-bold text-primary-text uppercase mt-12 mb-4 tracking-tight">Bookings & Payments</h2>
          <p>A non-refundable retainer is required to secure your date. The remaining balance is due as outlined in your specific contract prior to the event.</p>
          
          <h2 className="text-xl font-bold text-primary-text uppercase mt-12 mb-4 tracking-tight">Deliverables</h2>
          <p>Delivery timelines vary depending on the package selected. Standard photography delivery is typically 4-8 weeks. Raw files are not provided unless explicitly agreed upon in writing.</p>
          
          <h2 className="text-xl font-bold text-primary-text uppercase mt-12 mb-4 tracking-tight">Copyright</h2>
          <p>Rohith Ravi retains the copyright to all images and footage. Clients receive a license for personal use and printing. We reserve the right to use the content for portfolio and marketing purposes unless a non-disclosure agreement (NDA) is signed prior to the event.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
