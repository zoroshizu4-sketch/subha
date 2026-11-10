import React from 'react';
import { Phone, MessageCircle, Navigation, QrCode } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

interface FloatingActionsProps {
  onOpenQR: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenQR }) => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-[#121212]/95 backdrop-blur-md border-t border-[#382E20] px-4 py-2.5 sm:hidden shadow-2xl">
      <div className="grid grid-cols-4 gap-2">
        {/* Call button */}
        <a
          href={`tel:${STORE_INFO.phoneClean}`}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg gold-gradient-bg text-black font-bold text-[10px] active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 mb-0.5" />
          <span>Call</span>
        </a>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Hello%20Subha%20Garments,%20I%20am%20inquiring%20about%20your%20clothing%20collection.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg bg-emerald-700 text-white font-semibold text-[10px] active:scale-95 transition-transform"
        >
          <MessageCircle className="w-4 h-4 mb-0.5" />
          <span>WhatsApp</span>
        </a>

        {/* Directions */}
        <a
          href={STORE_INFO.googleMapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg bg-[#251F17] border border-[#443725] text-white font-semibold text-[10px] active:scale-95 transition-transform"
        >
          <Navigation className="w-4 h-4 text-[#ECC876] mb-0.5" />
          <span>Maps</span>
        </a>

        {/* Store QR */}
        <button
          onClick={onOpenQR}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg bg-[#251F17] border border-[#443725] text-[#ECC876] font-semibold text-[10px] active:scale-95 transition-transform"
        >
          <QrCode className="w-4 h-4 mb-0.5" />
          <span>Store QR</span>
        </button>
      </div>
    </div>
  );
};
