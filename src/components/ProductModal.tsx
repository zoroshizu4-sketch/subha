import React from 'react';
import { X, MessageCircle, Phone, MapPin, Sparkles, Check } from 'lucide-react';
import { ProductItem, STORE_INFO } from '../data/storeData';

interface ProductModalProps {
  product: ProductItem | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello Subha Garments! I am viewing your website and interested in "${product.name}" (${product.subCategory}). Could you share available sizes and in-store designs?`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-3xl bg-[#FAF8F5] rounded-2xl shadow-2xl overflow-hidden border border-[#D9CEBA] my-8 text-[#141414]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product Image */}
          <div className="relative aspect-[4/5] md:aspect-auto h-72 md:h-full bg-neutral-900">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-[#141414] text-[#ECC876] text-xs font-bold rounded shadow uppercase tracking-wider">
                {product.category} &bull; {product.subCategory}
              </span>
            </div>
          </div>

          {/* Product Details */}
          <div className="p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#A67C2E] uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Subha Garments Showcase</span>
              </div>

              <h3 className="font-display text-2xl font-bold text-[#111111] leading-tight">
                {product.name}
              </h3>

              <div className="mt-3 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-md inline-block">
                ✓ Available in-store at Aathupalam, Coimbatore
              </div>

              <p className="mt-4 text-sm text-neutral-600 leading-relaxed">
                {product.description}
              </p>

              {/* Highlights */}
              <div className="mt-5">
                <h4 className="text-xs font-bold text-neutral-800 uppercase tracking-wider mb-2">
                  Garment Features:
                </h4>
                <ul className="space-y-1.5">
                  {product.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-neutral-700">
                      <Check className="w-3.5 h-3.5 text-[#A67C2E] flex-shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Disclaimer */}
              <div className="mt-5 p-3 rounded-lg bg-[#F0EBE0] border border-[#DDD3C0] text-[11px] text-neutral-600 leading-snug">
                <strong>Showcase Item:</strong> In-store designs and colors rotate frequently. Visit our Aathupalam store or enquire via WhatsApp for today&apos;s latest arrivals and size availability.
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 pt-4 border-t border-[#E8DFC9] flex flex-col gap-2.5">
              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-emerald-700 hover:bg-emerald-600 text-white rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire On WhatsApp</span>
              </a>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${STORE_INFO.phoneClean}`}
                  className="py-2.5 px-3 bg-[#17140F] hover:bg-[#2A2318] text-[#ECC876] rounded-xl text-xs font-bold text-center flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Store</span>
                </a>

                <a
                  href={STORE_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 bg-white hover:bg-neutral-100 text-neutral-800 border border-neutral-300 rounded-xl text-xs font-bold text-center flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
