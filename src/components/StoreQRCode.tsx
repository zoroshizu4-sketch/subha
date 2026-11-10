import React, { useState, useEffect, useRef } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { QrCode, Download, Copy, Check, Share2, Sparkles, Smartphone, X } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

interface StoreQRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StoreQRCodeModal: React.FC<StoreQRCodeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [websiteUrl, setWebsiteUrl] = useState('');
  const qrRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWebsiteUrl(window.location.href);
    }
  }, []);

  if (!isOpen) return null;

  const currentUrl = websiteUrl || 'https://subhagarments.coimbatore.app';

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadQR = () => {
    const svg = qrRef.current?.querySelector('svg');
    if (!svg) return;

    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.onload = () => {
      canvas.width = 1000;
      canvas.height = 1000;
      if (ctx) {
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 100, 100, 800, 800);
        
        // Add Subha Garments branding text on canvas
        ctx.fillStyle = '#141414';
        ctx.font = 'bold 36px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('SUBHA GARMENTS • COIMBATORE', 500, 80);
        ctx.font = '24px sans-serif';
        ctx.fillStyle = '#8E6E2D';
        ctx.fillText('BUY MORE & PAY LESS', 500, 940);

        const pngFile = canvas.toDataURL('image/png');
        const downloadLink = document.createElement('a');
        downloadLink.download = 'subha-garments-coimbatore-qr.png';
        downloadLink.href = pngFile;
        downloadLink.click();
      }
    };

    img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgData)));
  };

  const shareViaWhatsApp = () => {
    const text = encodeURIComponent(
      `Check out SUBHA GARMENTS clothing store in Aathupalam, Coimbatore! "BUY MORE & PAY LESS" for Men, Women & Kids: ${currentUrl}`
    );
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-md bg-[#FAF8F5] rounded-3xl shadow-2xl border border-[#DCD0BB] p-6 sm:p-8 text-[#141414]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-neutral-200 hover:bg-neutral-300 text-neutral-800 flex items-center justify-center transition-colors"
          aria-label="Close QR Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE8DA] text-[#8E6E2D] text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Official Store QR</span>
          </div>
          <h3 className="font-display text-2xl font-bold text-[#141414]">
            {STORE_INFO.name}
          </h3>
          <p className="text-xs text-neutral-600 mt-1">
            Scan to explore collections, save contact or share with family in Coimbatore
          </p>
        </div>

        {/* QR Code Container */}
        <div
          ref={qrRef}
          className="bg-white p-6 rounded-2xl border-2 border-[#DCD0BB] shadow-inner mx-auto max-w-[260px] flex flex-col items-center justify-center"
        >
          <QRCodeSVG
            value={currentUrl}
            size={200}
            level="H"
            includeMargin={true}
            fgColor="#111111"
            bgColor="#FFFFFF"
          />
          <div className="mt-3 text-center">
            <span className="text-[10px] font-bold text-[#A67C2E] uppercase tracking-widest block">
              {STORE_INFO.tagline}
            </span>
            <span className="text-[9px] text-neutral-500">
              Aathupalam, Coimbatore
            </span>
          </div>
        </div>

        {/* Scan instruction */}
        <div className="mt-5 flex items-center justify-center gap-2 text-xs text-neutral-600 text-center">
          <Smartphone className="w-4 h-4 text-[#A67C2E]" />
          <span>Point your smartphone camera to open website</span>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 grid grid-cols-2 gap-2.5">
          <button
            onClick={handleDownloadQR}
            className="py-2.5 px-3 bg-[#17140F] hover:bg-[#282218] text-[#ECC876] rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Save QR Image</span>
          </button>

          <button
            onClick={handleCopyLink}
            className="py-2.5 px-3 bg-white hover:bg-neutral-100 text-neutral-800 border border-neutral-300 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-sm"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700">Link Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Link</span>
              </>
            )}
          </button>
        </div>

        {/* WhatsApp Share */}
        <div className="mt-2.5">
          <button
            onClick={shareViaWhatsApp}
            className="w-full py-2.5 px-4 bg-emerald-700 hover:bg-emerald-600 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-sm"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Share Store Link on WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export const StoreQRSection: React.FC<{ onOpenModal: () => void }> = ({ onOpenModal }) => {
  const [websiteUrl, setWebsiteUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWebsiteUrl(window.location.href);
    }
  }, []);

  const currentUrl = websiteUrl || 'https://subhagarments.coimbatore.app';

  return (
    <section id="qr-code" className="py-16 bg-[#F3EDE2] text-[#141414] border-y border-[#DDD0BC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#1C1813] to-[#12100D] rounded-3xl p-8 sm:p-12 text-white shadow-xl border border-[#3E3424] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2E261A] text-[#ECC876] text-xs font-semibold tracking-wider uppercase mb-3">
              <QrCode className="w-3.5 h-3.5" />
              <span>STORE WEBSITE QR CODE</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Instant Access on Your Phone
            </h3>
            <p className="mt-3 text-neutral-300 text-sm sm:text-base leading-relaxed">
              Scan this unique store QR code to bookmark SUBHA GARMENTS, check our location in Aathupalam, or easily forward our collection to friends and family in Coimbatore.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-3">
              <button
                onClick={onOpenModal}
                className="px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-black gold-gradient-bg hover:opacity-95 shadow-md flex items-center gap-2"
              >
                <QrCode className="w-4 h-4" />
                <span>Open Full QR & Download</span>
              </button>

              <a
                href={`https://wa.me/?text=${encodeURIComponent('Visit SUBHA GARMENTS clothing store in Aathupalam, Coimbatore: ' + currentUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#282116] hover:bg-[#382E1E] border border-[#52432B] flex items-center gap-2 transition-colors"
              >
                <Share2 className="w-4 h-4 text-[#ECC876]" />
                <span>Share with Friends</span>
              </a>
            </div>
          </div>

          {/* QR Code Presentation Box */}
          <div
            onClick={onOpenModal}
            className="cursor-pointer group bg-white p-5 rounded-2xl shadow-2xl flex flex-col items-center justify-center border-2 border-[#D4AF37]/50 hover:scale-105 transition-transform"
            title="Click to expand QR Code"
          >
            <QRCodeSVG
              value={currentUrl}
              size={150}
              level="H"
              includeMargin={true}
              fgColor="#111111"
              bgColor="#FFFFFF"
            />
            <span className="mt-2 text-[10px] font-bold text-neutral-800 tracking-wider uppercase flex items-center gap-1 group-hover:text-[#A67C2E]">
              <Sparkles className="w-3 h-3 text-[#C5A059]" />
              Tap to Expand / Save
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
