import React, { useState } from 'react';
import { Phone, MapPin, Instagram, MessageCircle, Navigation, Send, Clock, Sparkles, CheckCircle2 } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

export const ContactSection: React.FC = () => {
  const [formName, setFormName] = useState('');
  const [formCategory, setFormCategory] = useState("Men's Wear");
  const [formMessage, setFormMessage] = useState('');

  const handleSendWhatsAppInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello Subha Garments!\nMy Name: ${formName || 'Customer'}\nLooking For: ${formCategory}\nMessage: ${formMessage || 'I would like to inquire about current stock and size availability in your Aathupalam store.'}`
    );
    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FAF8F5] text-[#141414] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#A67C2E] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>VISIT & GET IN TOUCH</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111]">
            CONTACT <span className="font-serif italic text-[#A67C2E] font-normal">&amp; LOCATION</span>
          </h2>
          <p className="mt-3 text-neutral-600 text-sm sm:text-base leading-relaxed">
            We are conveniently located in Aathupalam, Coimbatore. Stop by our showroom or connect with us directly.
          </p>
        </div>

        {/* Contact Information & Action Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-14">
          {/* Left Info Panel */}
          <div className="lg:col-span-6 space-y-6">
            {/* Store Information Card */}
            <div className="p-8 rounded-2xl bg-white border border-[#E0D5C1] shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#141414] text-[#ECC876] font-display font-black flex items-center justify-center text-lg shadow">
                  SG
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-neutral-900">
                    {STORE_INFO.name}
                  </h3>
                  <p className="text-xs font-bold text-[#A67C2E] uppercase tracking-wider">
                    {STORE_INFO.tagline} &bull; {STORE_INFO.category}
                  </p>
                </div>
              </div>

              {/* Address details */}
              <div className="space-y-4 pt-2 border-t border-[#F0E8D8]">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#F5EFE4] text-[#A67C2E] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                      Store Address
                    </h4>
                    <p className="text-sm font-semibold text-neutral-900 mt-0.5 leading-relaxed">
                      {STORE_INFO.address}
                    </p>
                    <p className="text-xs text-neutral-500 mt-1">
                      Landmark: Near Aathupalam Bridge / KM Colony Road, Coimbatore
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#F5EFE4] text-[#A67C2E] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                      Direct Phone Number
                    </h4>
                    <a
                      href={`tel:${STORE_INFO.phoneClean}`}
                      className="text-base font-bold text-neutral-900 hover:text-[#A67C2E] transition-colors mt-0.5 block"
                    >
                      {STORE_INFO.phone}
                    </a>
                    <span className="text-xs text-emerald-700 font-medium">
                      ✓ Instant Phone Support &amp; WhatsApp Enabled
                    </span>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#F5EFE4] text-[#A67C2E] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                      Instagram Profile
                    </h4>
                    <a
                      href={STORE_INFO.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-neutral-900 hover:text-[#A67C2E] transition-colors mt-0.5 block"
                    >
                      {STORE_INFO.instagramHandle}
                    </a>
                  </div>
                </div>
              </div>

              {/* 4 Required Action Buttons */}
              <div className="mt-8 pt-6 border-t border-[#F0E8D8] grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* 1. Click-to-Call */}
                <a
                  href={`tel:${STORE_INFO.phoneClean}`}
                  className="py-3 px-4 rounded-xl text-xs font-bold text-black gold-gradient-bg hover:opacity-95 shadow-md flex items-center justify-center gap-2 uppercase tracking-wider transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {STORE_INFO.phone}</span>
                </a>

                {/* 2. Google Maps Directions */}
                <a
                  href={STORE_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl text-xs font-bold text-white bg-[#141414] hover:bg-[#252018] shadow-md flex items-center justify-center gap-2 uppercase tracking-wider transition-all"
                >
                  <Navigation className="w-4 h-4 text-[#ECC876]" />
                  <span>Get Directions</span>
                </a>

                {/* 3. WhatsApp Enquiry */}
                <a
                  href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Hello%20Subha%20Garments,%20I%20would%20like%20to%20enquire%20about%20your%20clothing%20collection.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-600 shadow-md flex items-center justify-center gap-2 uppercase tracking-wider transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Enquiry</span>
                </a>

                {/* 4. Instagram Profile */}
                <a
                  href={STORE_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl text-xs font-bold text-neutral-800 bg-[#F4EFE6] hover:bg-[#EAE1D3] border border-neutral-300 shadow-sm flex items-center justify-center gap-2 uppercase tracking-wider transition-all"
                >
                  <Instagram className="w-4 h-4 text-[#C13584]" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>

            {/* In-Store Experience Tips */}
            <div className="p-6 rounded-2xl bg-[#F4EFE6] border border-[#DDD3C2] text-xs text-neutral-700 space-y-2">
              <div className="font-bold text-neutral-900 text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#A67C2E]" />
                Visiting from around Coimbatore?
              </div>
              <p className="leading-relaxed">
                We are situated right in Aathupalam on 1, KM Colony Road — easy to reach via public buses, two-wheelers, and autos from Ukkadam bus stand and Pollachi Main Road.
              </p>
            </div>
          </div>

          {/* Right Panel: Interactive Quick Inquiry Form */}
          <div className="lg:col-span-6 bg-white p-8 rounded-2xl border border-[#E0D5C1] shadow-md">
            <div className="mb-6">
              <h3 className="font-display text-xl font-bold text-neutral-900">
                Send an Instant Store Enquiry
              </h3>
              <p className="text-xs text-neutral-500 mt-1">
                Have a question about sizes, daily wear, or family festival clothing? Send a direct WhatsApp message to our Coimbatore shop.
              </p>
            </div>

            <form onSubmit={handleSendWhatsAppInquiry} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  placeholder="e.g. Karthik, Priya..."
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] text-sm bg-[#FAF8F5] outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                  Collection Interested In
                </label>
                <select
                  value={formCategory}
                  onChange={(e) => setFormCategory(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] text-sm bg-[#FAF8F5] outline-none transition-colors"
                >
                  <option value="Men's Wear (Shirts, T-Shirts, Jeans, Trousers)">Men&apos;s Wear (Shirts, T-Shirts, Jeans, Trousers)</option>
                  <option value="Women's Wear (Kurtis, Tops, Casuals)">Women&apos;s Wear (Kurtis, Tops, Casuals)</option>
                  <option value="Kids' Clothing (Boys & Girls)">Kids&apos; Clothing (Boys &amp; Girls)</option>
                  <option value="Traditional & Festive Wear">Traditional &amp; Festive Wear</option>
                  <option value="Complete Family Bulk Purchase">Complete Family Purchase</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                  Message / Specific Size Request
                </label>
                <textarea
                  rows={4}
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  placeholder="Ask about sizes (e.g. L, XL, 32 waist), colors, or in-store offers..."
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] text-sm bg-[#FAF8F5] outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-emerald-700 hover:bg-emerald-600 transition-colors shadow-md flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send WhatsApp Enquiry (+91 7395952206)</span>
              </button>
            </form>

            <div className="mt-5 text-center text-[11px] text-neutral-500">
              ⚡ Replies sent directly from our Subha Garments shop team in Coimbatore.
            </div>
          </div>
        </div>

        {/* Embedded Interactive Map for Aathupalam Coimbatore */}
        <div className="rounded-2xl overflow-hidden border border-[#DED3BD] shadow-lg bg-neutral-900">
          <div className="bg-[#141414] p-4 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#ECC876]" />
              <span className="text-xs font-bold tracking-wider uppercase text-neutral-200">
                Store Location Map: Aathupalam, Coimbatore (641023)
              </span>
            </div>
            <a
              href={STORE_INFO.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-lg text-xs font-bold text-black gold-gradient-bg hover:opacity-90 flex items-center gap-1.5"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Open in Google Maps App</span>
            </a>
          </div>

          <div className="w-full h-80 sm:h-96 relative">
            <iframe
              title="Subha Garments Aathupalam Coimbatore Location Map"
              src="https://maps.google.com/maps?q=1,+KM+Colony+Road,+KM+Colony,+Aathupalam,+Coimbatore,+Tamil+Nadu+641023&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
