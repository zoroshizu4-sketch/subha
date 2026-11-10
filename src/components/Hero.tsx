import React from 'react';
import { ArrowRight, Phone, MapPin, Star, Sparkles, QrCode } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

interface HeroProps {
  onOpenQR: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQR }) => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
      {/* Background Fashion Imagery with High-End Editorial Lighting */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=2000&q=85"
          alt="Subha Garments Coimbatore Fashion Apparel Collection"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.42] contrast-[1.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#C5A059]/15 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center sm:text-left flex flex-col items-center sm:items-start justify-center">
        {/* Brand Prestige Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#241E15]/90 border border-[#C5A059]/40 text-[#E5C378] text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm shadow-md animate-fade-in">
          <Sparkles className="w-3.5 h-3.5 text-[#ECC876]" />
          <span>{STORE_INFO.tagline}</span>
          <span className="w-1 h-1 rounded-full bg-[#C5A059]" />
          <span className="text-white/80 font-normal">Coimbatore</span>
        </div>

        {/* Store Name & Crest */}
        <div className="mb-4 flex items-center gap-3">
          <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-[#C5A059] hidden sm:block"></div>
          <span className="text-xs sm:text-sm uppercase tracking-[0.3em] font-semibold text-[#D4AF37]">
            {STORE_INFO.name} • CLOTHING STORE
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.08] max-w-4xl">
          STYLE FOR <br className="hidden sm:inline" />
          <span className="gold-gradient-text italic font-serif font-normal">EVERYONE.</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg sm:text-xl md:text-2xl text-neutral-300 max-w-2xl font-light leading-relaxed">
          Discover stylish and affordable fashion for{' '}
          <strong className="text-white font-medium">Men, Women & Kids</strong> in Aathupalam, Coimbatore.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="#categories"
            className="w-full sm:w-auto px-8 py-4 text-sm font-bold text-black gold-gradient-bg hover:opacity-95 rounded-full shadow-lg hover:shadow-[#C5A059]/20 transition-all flex items-center justify-center gap-2 group tracking-wider uppercase"
          >
            <span>Explore Collection</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 text-sm font-bold text-white bg-[#1C1813]/90 hover:bg-[#2A2319] border border-[#554734] rounded-full transition-all flex items-center justify-center gap-2 tracking-wider uppercase backdrop-blur-sm"
          >
            <span>Contact Us</span>
          </a>

          <button
            onClick={onOpenQR}
            className="w-full sm:w-auto px-6 py-4 text-sm font-semibold text-[#ECC876] bg-transparent hover:bg-white/5 border border-[#443825] rounded-full transition-all flex items-center justify-center gap-2"
          >
            <QrCode className="w-4 h-4 text-[#ECC876]" />
            <span>Store QR Code</span>
          </button>
        </div>

        {/* Trust & Location Strip */}
        <div className="mt-14 pt-8 border-t border-white/10 w-full grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-left">
          {/* Rating */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#221B10] border border-[#C5A059]/30 flex items-center justify-center text-[#E5C378]">
              <Star className="w-5 h-5 fill-[#E5C378]" />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-white font-bold text-base">{STORE_INFO.googleRating}</span>
                <span className="text-neutral-400 text-xs">/ 5.0</span>
              </div>
              <p className="text-[11px] text-neutral-400">Google Rating ({STORE_INFO.totalReviews} Reviews)</p>
            </div>
          </div>

          {/* Pricing Value */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#221B10] border border-[#C5A059]/30 flex items-center justify-center text-[#E5C378]">
              <span className="font-display font-bold text-xs text-[#ECC876]">₹₹</span>
            </div>
            <div>
              <div className="text-white font-bold text-sm">Buy More & Pay Less</div>
              <p className="text-[11px] text-neutral-400">Honest Value Pricing</p>
            </div>
          </div>

          {/* Family Wardrobe */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#221B10] border border-[#C5A059]/30 flex items-center justify-center text-[#E5C378]">
              <span className="text-xs font-bold text-[#ECC876]">M•W•K</span>
            </div>
            <div>
              <div className="text-white font-bold text-sm">Men, Women & Kids</div>
              <p className="text-[11px] text-neutral-400">Complete Readymade Wear</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-3 col-span-2 md:col-span-1">
            <div className="w-10 h-10 rounded-lg bg-[#221B10] border border-[#C5A059]/30 flex items-center justify-center text-[#E5C378]">
              <MapPin className="w-5 h-5 text-[#ECC876]" />
            </div>
            <div>
              <div className="text-white font-bold text-sm">Aathupalam, Coimbatore</div>
              <p className="text-[11px] text-neutral-400">1, KM Colony Road</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
