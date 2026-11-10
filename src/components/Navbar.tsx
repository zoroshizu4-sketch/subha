import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, QrCode, Menu, X, MapPin, Instagram, Sparkles } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

interface NavbarProps {
  onOpenQR: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQR }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Categories', href: '#categories' },
    { label: 'Collections', href: '#featured' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'About Us', href: '#about' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Instagram', href: '#instagram' },
    { label: 'Contact & Map', href: '#contact' },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-[#0F0F0F] text-[#E8D9BF] border-b border-[#2A261F] text-xs py-2 px-4 transition-all">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1.5 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center bg-[#C5A059] text-black text-[10px] font-bold px-2 py-0.5 rounded tracking-wider uppercase">
              {STORE_INFO.tagline}
            </span>
            <span className="hidden sm:inline text-neutral-300">|</span>
            <span className="text-neutral-200">
              Coimbatore's Complete Family Clothing Store in Aathupalam
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <a
              href={`tel:${STORE_INFO.phoneClean}`}
              className="flex items-center gap-1 text-[#E5C378] hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span>{STORE_INFO.phone}</span>
            </a>
            <span className="text-neutral-600">•</span>
            <span className="text-neutral-300 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              Store Open in Aathupalam
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#121212]/95 backdrop-blur-md shadow-lg border-b border-[#2D2820]'
            : 'bg-[#141414] border-b border-[#231F18]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo & Tagline */}
            <a href="#hero" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#E2C37A] via-[#C5A059] to-[#8E6E2D] p-0.5 shadow-md flex items-center justify-center">
                <div className="w-full h-full bg-[#121212] rounded-[6px] flex items-center justify-center">
                  <span className="font-display font-extrabold text-[#ECC876] text-xl tracking-tight group-hover:scale-105 transition-transform">
                    SG
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-display text-xl sm:text-2xl font-bold tracking-wider text-white">
                    {STORE_INFO.name}
                  </span>
                </div>
                <span className="text-[10px] tracking-widest text-[#C5A059] uppercase font-medium">
                  {STORE_INFO.tagline} • Coimbatore
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-7 text-sm font-medium text-neutral-300">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-[#E2C37A] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C5A059] hover:after:w-full after:transition-all"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Header Right Actions */}
            <div className="hidden sm:flex items-center gap-3">
              {/* QR Code Button */}
              <button
                onClick={onOpenQR}
                className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-neutral-200 bg-[#221E18] hover:bg-[#2F2920] border border-[#443B2E] rounded-md transition-colors"
                title="View & Scan Store QR Code"
              >
                <QrCode className="w-4 h-4 text-[#ECC876]" />
                <span className="hidden md:inline">Store QR</span>
              </button>

              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Hello%20Subha%20Garments,%20I%20would%20like%20to%20enquire%20about%20your%20clothing%20collection.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-600 rounded-md transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="hidden xl:inline">WhatsApp</span>
              </a>

              {/* Call Button */}
              <a
                href={`tel:${STORE_INFO.phoneClean}`}
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-black gold-gradient-bg hover:opacity-95 rounded-md transition-all shadow-md"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Store</span>
              </a>
            </div>

            {/* Mobile menu trigger */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={onOpenQR}
                className="p-2 text-neutral-200 bg-[#221E18] border border-[#3E3528] rounded-md"
                aria-label="Open Store QR"
              >
                <QrCode className="w-5 h-5 text-[#ECC876]" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-neutral-300 hover:text-white bg-[#221E18] border border-[#3E3528] rounded-md focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-[#ECC876]" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#161616] border-b border-[#332C22] px-5 py-6 space-y-4">
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-[#2B251D]">
              <a
                href={`tel:${STORE_INFO.phoneClean}`}
                className="flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-bold text-black gold-gradient-bg rounded-md"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Hello%20Subha%20Garments,%20I%20would%20like%20to%20enquire%20about%20your%20clothing.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-semibold text-white bg-emerald-700 rounded-md"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>

            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-neutral-300 hover:text-[#E2C37A] font-medium text-base py-1.5 transition-colors border-b border-[#221E18] flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-neutral-600 text-xs">→</span>
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQR();
                }}
                className="w-full py-2.5 px-4 text-xs font-semibold text-[#ECC876] bg-[#231E18] border border-[#4A3D2A] rounded-md flex items-center justify-center gap-2"
              >
                <QrCode className="w-4 h-4" />
                Scan & Share Website QR Code
              </button>

              <div className="text-[11px] text-neutral-400 text-center pt-2">
                📍 1, KM Colony Road, Aathupalam, Coimbatore 641023
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
