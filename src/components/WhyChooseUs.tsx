import React from 'react';
import { BadgePercent, Users, Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      title: "Affordable Fashion",
      tagline: "Direct Pocket Savings",
      description: "Fashionable, durable clothing should be accessible to everyone. We deliver premium looks at honest everyday prices.",
      icon: BadgePercent,
      number: "01"
    },
    {
      title: "Clothing for the Whole Family",
      tagline: "Men, Women & Kids",
      description: "No need to run between different shops. Find comfortable daily wear, formal outfits, and festive clothes for all ages in one visit.",
      icon: Users,
      number: "02"
    },
    {
      title: "Stylish & Trendy Collections",
      tagline: "Updated Continuously",
      description: "Fresh designs featuring vibrant colors, modern cuts, and seasonal trends suited for Coimbatore's climate and lifestyle.",
      icon: Sparkles,
      number: "03"
    },
    {
      title: "Great Value for Money",
      tagline: "Buy More & Pay Less",
      description: "Our core motto reflects our commitment: high quality cotton, robust stitching, and long-lasting fabric that stretches your shopping budget.",
      icon: ShieldCheck,
      number: "04"
    },
    {
      title: "Friendly Shopping Experience",
      tagline: "Warm Local Hospitality",
      description: "Enjoy welcoming, patient customer service where our team helps you find the right fit and comfortable styles with a smile.",
      icon: HeartHandshake,
      number: "05"
    }
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#121212] text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#E5C378] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE SUBHA GARMENTS PROMISE</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            WHY CHOOSE <span className="gold-gradient-text font-serif italic font-normal">US</span>
          </h2>
          <p className="mt-3 text-neutral-400 text-sm sm:text-base leading-relaxed">
            Discover why families across Coimbatore trust Subha Garments for everyday wardrobe essentials and festive occasions.
          </p>
        </div>

        {/* 5 Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.slice(0, 3).map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group p-8 rounded-2xl bg-[#1A1814] border border-[#332A1E] hover:border-[#C5A059]/60 hover:bg-[#221E18] transition-all duration-300 relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-[#262016] border border-[#524430] flex items-center justify-center text-[#ECC876] group-hover:scale-110 group-hover:bg-[#C5A059] group-hover:text-black transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-display text-2xl font-bold text-neutral-600 group-hover:text-[#C5A059] transition-colors">
                      {item.number}
                    </span>
                  </div>

                  <span className="text-[11px] font-bold text-[#D4AF37] uppercase tracking-wider">
                    {item.tagline}
                  </span>
                  <h3 className="font-display text-xl font-bold text-white mt-1 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#292217] flex items-center gap-1.5 text-xs text-neutral-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"></span>
                  <span>Subha Garments Standard</span>
                </div>
              </div>
            );
          })}

          {/* Second Row: 2 items centered */}
          <div className="md:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto w-full">
            {reasons.slice(3, 5).map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="group p-8 rounded-2xl bg-[#1A1814] border border-[#332A1E] hover:border-[#C5A059]/60 hover:bg-[#221E18] transition-all duration-300 relative flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-xl bg-[#262016] border border-[#524430] flex items-center justify-center text-[#ECC876] group-hover:scale-110 group-hover:bg-[#C5A059] group-hover:text-black transition-all">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-display text-2xl font-bold text-neutral-600 group-hover:text-[#C5A059] transition-colors">
                        {item.number}
                      </span>
                    </div>

                    <span className="text-[11px] font-bold text-[#D4AF37] uppercase tracking-wider">
                      {item.tagline}
                    </span>
                    <h3 className="font-display text-xl font-bold text-white mt-1 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#292217] flex items-center gap-1.5 text-xs text-neutral-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"></span>
                    <span>Subha Garments Standard</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Brand Slogan Callout */}
        <div className="mt-16 py-8 px-6 sm:px-12 rounded-2xl bg-gradient-to-r from-[#201A10] via-[#2D2416] to-[#201A10] border border-[#5E4E35] text-center flex flex-col items-center justify-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#E5C378] font-semibold mb-2">
            OUR GUIDING SLOGAN
          </p>
          <div className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-wider">
            &ldquo;{STORE_INFO.tagline}&rdquo;
          </div>
          <p className="mt-3 text-sm text-neutral-300 max-w-xl">
            Because looking your sharpest and feeling your best should be affordable for every family in Coimbatore.
          </p>
        </div>
      </div>
    </section>
  );
};
