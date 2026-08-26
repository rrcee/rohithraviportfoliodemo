import React, { useState } from 'react';
import { motion } from 'motion/react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    location: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateWhatsAppLink = () => {
    const { name, date, location, message } = formData;
    const text = `Hi Rohith! I'm reaching out regarding a booking.
*Name:* ${name || 'N/A'}
*Date:* ${date || 'N/A'}
*Location:* ${location || 'N/A'}
*Message:* ${message || 'N/A'}

Looking forward to connecting!`;
    return `https://wa.me/919745978666?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-6 bg-inverse-text border-t border-border">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-muted block mb-4">
            Bookings
          </span>
          <h2 className="font-sans text-5xl sm:text-7xl font-bold tracking-tighter text-primary-text mb-6 uppercase leading-[0.9]">
            Inquire
          </h2>
          <p className="text-sm text-muted max-w-lg mx-auto leading-relaxed">
            Currently accepting bookings for 2026-2027. Fill out the details below to message us directly on WhatsApp.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="bg-primary border border-border p-10 lg:p-14 rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.02)]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 mb-8">
            <div className="relative pt-4">
              <label 
                htmlFor="name" 
                className={`absolute left-0 top-0 text-[10px] uppercase tracking-widest font-mono transition-colors duration-300 ${focusedField === 'name' ? 'text-primary-text' : 'text-muted'}`}
              >
                Couple's Names
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                className="w-full bg-transparent border-b border-border py-2 text-sm text-primary-text focus:outline-none focus:border-primary-text transition-colors rounded-none"
                placeholder="Rohit & Anjali"
              />
            </div>
            
            <div className="relative pt-4">
              <label 
                htmlFor="date" 
                className={`absolute left-0 top-0 text-[10px] uppercase tracking-widest font-mono transition-colors duration-300 ${focusedField === 'date' ? 'text-primary-text' : 'text-muted'}`}
              >
                Wedding Dates
              </label>
              <input
                type="text"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                onFocus={() => setFocusedField('date')}
                onBlur={() => setFocusedField(null)}
                className="w-full bg-transparent border-b border-border py-2 text-sm text-primary-text focus:outline-none focus:border-primary-text transition-colors rounded-none"
                placeholder="Dec 15 - Dec 17, 2026"
              />
            </div>
          </div>

          <div className="relative pt-4 mb-10">
            <label 
              htmlFor="location" 
              className={`absolute left-0 top-0 text-[10px] uppercase tracking-widest font-mono transition-colors duration-300 ${focusedField === 'location' ? 'text-primary-text' : 'text-muted'}`}
            >
              Venue / Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              onFocus={() => setFocusedField('location')}
              onBlur={() => setFocusedField(null)}
              className="w-full bg-transparent border-b border-border py-2 text-sm text-primary-text focus:outline-none focus:border-primary-text transition-colors rounded-none"
              placeholder="e.g. Grand Hyatt Kochi / Suryagarh Jaisalmer"
            />
          </div>

          <div className="relative pt-4 mb-12">
            <label 
              htmlFor="message" 
              className={`absolute left-0 top-0 text-[10px] uppercase tracking-widest font-mono transition-colors duration-300 ${focusedField === 'message' ? 'text-primary-text' : 'text-muted'}`}
            >
              Event Details & Vision
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setFocusedField('message')}
              onBlur={() => setFocusedField(null)}
              rows="3"
              className="w-full bg-transparent border-b border-border py-2 text-sm text-primary-text focus:outline-none focus:border-primary-text transition-colors resize-none rounded-none"
              placeholder="Tell us about your events, guest count, and coverage needs..."
            />
          </div>

          <a
            href={generateWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-primary-text text-inverse-text rounded-full px-6 py-4 text-xs uppercase tracking-widest text-center flex items-center justify-center space-x-3 font-bold shadow-[0_6px_0_0_#a3a3a3] md:hover:translate-y-[2px] md:hover:shadow-[0_4px_0_0_#a3a3a3] active:translate-y-[6px] active:shadow-[0_0px_0_0_#a3a3a3] transition-all"
          >
            <span>Send Direct WhatsApp Inquiry</span>
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
