import React from 'react';
import { Phone, MapPin, Instagram, MessageCircle, QrCode, ArrowUp, Sparkles, Navigation } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

interface FooterProps {
  onOpenQR: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQR }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: "Men's Collection", href: '#categories' },
    { label: "Women's Collection", href: '#categories' },
    { label: "Kids' Collection", href: '#categories' },
    { label: 'Featured Apparel', href: '#featured' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'About Our Store', href: '#about' },
    { label: 'Customer Reviews', href: '#reviews' },
    { label: 'Instagram Gallery', href: '#instagram' },
    { label: 'Location & Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#0D0D0D] text-white border-t border-[#262016] relative pt-16 pb-24 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#241F18]">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#E2C37A] to-[#8E6E2D] p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-[#121212] rounded-[6px] flex items-center justify-center">
                  <span className="font-display font-extrabold text-[#ECC876] text-lg">SG</span>
                </div>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold tracking-wider text-white">
                  {STORE_INFO.name}
                </h3>
                <p className="text-[10px] uppercase tracking-widest text-[#C5A059] font-medium">
                  {STORE_INFO.tagline}
                </p>
              </div>
            </div>

            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Coimbatore&apos;s trusted clothing store in Aathupalam offering affordable, stylish and complete readymade wear for Men, Women and Kids.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={onOpenQR}
                className="px-3.5 py-2 text-xs font-semibold text-[#ECC876] bg-[#1E1913] hover:bg-[#2B2319] border border-[#443825] rounded-lg transition-colors flex items-center gap-1.5"
              >
                <QrCode className="w-3.5 h-3.5" />
                <span>Store QR Code</span>
              </button>

              <a
                href={STORE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 text-xs font-semibold text-white bg-[#1E1913] hover:bg-[#2B2319] border border-[#443825] rounded-lg transition-colors flex items-center gap-1.5"
              >
                <Instagram className="w-3.5 h-3.5 text-[#E5C378]" />
                <span>{STORE_INFO.instagramHandle}</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#C5A059] mb-4">
              QUICK NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs text-neutral-300">
              {navLinks.slice(0, 6).map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#ECC876] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#A67C2E]">&bull;</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Store Address & Contact */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#C5A059] mb-4">
              VISIT OUR SHOWROOM
            </h4>

            <div className="space-y-2.5 text-xs text-neutral-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#ECC876] flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {STORE_INFO.address}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#ECC876] flex-shrink-0" />
                <a
                  href={`tel:${STORE_INFO.phoneClean}`}
                  className="hover:text-[#ECC876] font-semibold text-white transition-colors"
                >
                  {STORE_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-[#ECC876] flex-shrink-0" />
                <a
                  href={STORE_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ECC876] transition-colors"
                >
                  https://www.instagram.com/subhagarments/
                </a>
              </div>
            </div>

            <div className="pt-3">
              <a
                href={STORE_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#221C14] hover:bg-[#31281C] text-[#ECC876] text-xs font-bold rounded-lg border border-[#4E3F29] transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open Google Maps Directions</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <span>&copy; {new Date().getFullYear()} SUBHA GARMENTS. All rights reserved.</span>
            <span className="hidden sm:inline">&bull;</span>
            <span className="text-[#C5A059] font-medium">{STORE_INFO.tagline}</span>
            <span className="hidden sm:inline">&bull;</span>
            <span>Aathupalam, Coimbatore, Tamil Nadu</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors group"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <div className="w-7 h-7 rounded-full bg-[#1C1813] border border-[#3E3424] flex items-center justify-center group-hover:bg-[#C5A059] group-hover:text-black transition-all">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};
