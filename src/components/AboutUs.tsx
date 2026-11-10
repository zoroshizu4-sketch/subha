import React from 'react';
import { MapPin, Phone, CheckCircle2, Sparkles, Navigation, Clock } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FBF9F5] text-[#141414] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Composition with Fashion Image and Prestige Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#DED4C1] bg-[#141414]">
              <img
                src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=1000&q=80"
                alt="Subha Garments Clothing Store in Aathupalam Coimbatore"
                className="w-full h-[480px] object-cover filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              {/* Bottom Badge Over Photo */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#141414]/90 backdrop-blur-md border border-[#C5A059]/40 text-white">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#C5A059] text-black font-display font-extrabold flex items-center justify-center text-sm">
                    SG
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-white">
                      {STORE_INFO.name}
                    </h4>
                    <p className="text-[11px] text-[#ECC876]">
                      1, KM Colony Road, Aathupalam, Coimbatore
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Overlapping Floating Tag */}
            <div className="absolute -top-4 -right-4 hidden sm:flex flex-col items-center justify-center p-4 rounded-xl bg-white border border-[#D5C7B0] shadow-xl text-center">
              <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider">Customer Trust</span>
              <span className="font-display text-2xl font-black text-[#A67C2E]">4.8 ★</span>
              <span className="text-[10px] text-neutral-600 font-medium">Google Rating</span>
            </div>
          </div>

          {/* Right Column: Narrative & Details */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#A67C2E] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ABOUT SUBHA GARMENTS</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111] leading-tight">
              A COMPLETE WEAR SHOP IN <span className="font-serif italic text-[#A67C2E] font-normal">AATHUPALAM, COIMBATORE</span>
            </h2>

            <div className="mt-6 space-y-4 text-neutral-700 text-sm sm:text-base leading-relaxed">
              <p>
                <strong>SUBHA GARMENTS</strong> is a trusted clothing store situated at 1, KM Colony Road, KM Colony, Aathupalam, Coimbatore. We specialize in providing a complete wear shopping experience, offering modern, durable, and stylish readymade apparel for <strong>men, women, and kids</strong>.
              </p>
              <p>
                Rooted in our signature philosophy of <span className="font-bold text-[#A67C2E]">&ldquo;BUY MORE & PAY LESS&rdquo;</span>, we strive to make quality clothing accessible without compromising on comfort or tailoring. Whether you need crisp shirts and stretch jeans for daily work, breathable casual t-shirts and trousers, graceful women&apos;s attire, or cheerful, sturdy kidswear, our showroom brings together an extensive assortment under one roof.
              </p>
              <p>
                We invite Coimbatore families, students, and working professionals to step in, experience the fabric firsthand, and discover wardrobe choices that bring confidence every day.
              </p>
            </div>

            {/* Key Store Highlights */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-[#E8DEC9]">
                <CheckCircle2 className="w-4 h-4 text-[#A67C2E] mt-0.5 flex-shrink-0" />
                <div className="text-xs">
                  <span className="font-bold text-neutral-900 block">Complete Family Shopping</span>
                  <span className="text-neutral-600">Men, Women & Kids collections</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-[#E8DEC9]">
                <CheckCircle2 className="w-4 h-4 text-[#A67C2E] mt-0.5 flex-shrink-0" />
                <div className="text-xs">
                  <span className="font-bold text-neutral-900 block">Convenient Coimbatore Location</span>
                  <span className="text-neutral-600">KM Colony Road, Aathupalam</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-[#E8DEC9]">
                <CheckCircle2 className="w-4 h-4 text-[#A67C2E] mt-0.5 flex-shrink-0" />
                <div className="text-xs">
                  <span className="font-bold text-neutral-900 block">Friendly Assistance</span>
                  <span className="text-neutral-600">Helpful local in-store team</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-[#E8DEC9]">
                <CheckCircle2 className="w-4 h-4 text-[#A67C2E] mt-0.5 flex-shrink-0" />
                <div className="text-xs">
                  <span className="font-bold text-neutral-900 block">Value-Driven Pricing</span>
                  <span className="text-neutral-600">Buy More & Pay Less promise</span>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={STORE_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-[#141414] hover:bg-[#252018] text-[#ECC876] text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 shadow-md"
              >
                <Navigation className="w-4 h-4" />
                <span>Visit Our Store</span>
              </a>

              <a
                href={`tel:${STORE_INFO.phoneClean}`}
                className="px-6 py-3 rounded-xl bg-white hover:bg-neutral-100 text-neutral-900 border border-neutral-300 text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 shadow-sm"
              >
                <Phone className="w-4 h-4 text-[#A67C2E]" />
                <span>Call +91 7395952206</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
