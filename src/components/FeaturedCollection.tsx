import React, { useState } from 'react';
import { Sparkles, MessageCircle, Eye, Info, Phone } from 'lucide-react';
import { FEATURED_PRODUCTS, ProductItem, STORE_INFO } from '../data/storeData';

interface FeaturedCollectionProps {
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  onOpenProduct: (product: ProductItem) => void;
}

export const FeaturedCollection: React.FC<FeaturedCollectionProps> = ({
  selectedCategory,
  onSelectCategory,
  onOpenProduct,
}) => {
  const [activeSubFilter, setActiveSubFilter] = useState<string>('All');

  const filterTabs = [
    { id: 'All', label: 'All Products' },
    { id: 'Men', label: "Men's Wear" },
    { id: 'Women', label: "Women's Wear" },
    { id: 'Kids', label: "Kids' Clothing" },
    { id: 'Traditional', label: 'Traditional & Festive' }
  ];

  const filteredProducts = FEATURED_PRODUCTS.filter((prod) => {
    if (selectedCategory !== 'All' && prod.category !== selectedCategory) {
      return false;
    }
    if (activeSubFilter !== 'All' && prod.subCategory !== activeSubFilter) {
      return false;
    }
    return true;
  });

  return (
    <section id="featured" className="py-20 lg:py-28 bg-[#FFFFFF] text-[#141414] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#A67C2E] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DISCOVER OUR ESSENTIALS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111]">
            FEATURED <span className="font-serif italic text-[#A67C2E] font-normal">COLLECTION</span>
          </h2>
          <p className="mt-3 text-neutral-600 text-sm sm:text-base leading-relaxed">
            From smart casual shirts & comfortable jeans to festive traditional wear and playful kidswear — explore popular styles available at our Aathupalam showroom.
          </p>

          {/* Sample Product Notice (Strictly complying with prompt instructions) */}
          <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#FAF7F0] border border-[#E8DFC8] text-neutral-600 text-xs text-left max-w-2xl">
            <Info className="w-4 h-4 text-[#A67C2E] flex-shrink-0" />
            <span>
              <strong>Sample Collection Showcase:</strong> Displayed items represent product categories. Visit our store at Aathupalam, Coimbatore or call <strong>+91 7395952206</strong> for today&apos;s current patterns and sizes.
            </span>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                onSelectCategory(tab.id);
                setActiveSubFilter('All');
              }}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === tab.id
                  ? 'bg-[#141414] text-[#ECC876] shadow-md border border-[#3E3424]'
                  : 'bg-[#F4EFE6] text-neutral-700 hover:bg-[#EBE2D4] border border-transparent'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-[#FCFAF7] rounded-xl overflow-hidden border border-[#E8E1D3] hover:border-[#C5A059] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Product Image */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-100">
                <img
                  src={product.image}
                  alt={`${product.name} at Subha Garments Coimbatore`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Badge */}
                {product.sampleTag && (
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase bg-[#141414] text-[#ECC876] rounded border border-[#3E3424] shadow-sm">
                      {product.sampleTag}
                    </span>
                  </div>
                )}

                {/* Subcategory Pill */}
                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 text-[10px] font-semibold text-neutral-700 bg-white/90 backdrop-blur-sm rounded shadow-sm">
                    {product.subCategory}
                  </span>
                </div>

                {/* Quick actions overlay */}
                <div className="absolute bottom-3 inset-x-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => onOpenProduct(product)}
                    className="flex-1 py-2 px-3 bg-white text-black hover:bg-[#FAF6EC] rounded-lg text-xs font-bold shadow-md flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Quick View</span>
                  </button>
                  <a
                    href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Hi%20Subha%20Garments,%20I%20am%20interested%20in%20your%20${encodeURIComponent(product.name)}%20(${encodeURIComponent(product.subCategory)}).`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold shadow-md flex items-center justify-center transition-colors"
                    title="Enquire on WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-semibold text-[#A67C2E] uppercase tracking-wider mb-1">
                    {product.category} &bull; {product.subCategory}
                  </div>
                  <h3 className="font-display font-bold text-base text-[#1A1A1A] group-hover:text-[#A67C2E] transition-colors leading-snug">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Highlights */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {product.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="text-[10px] text-neutral-600 bg-[#F0EBE0] px-2 py-0.5 rounded"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Inquiry Row */}
                <div className="mt-5 pt-3 border-t border-[#EDE6D8] flex items-center justify-between gap-2">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-semibold text-neutral-400">Value Guarantee</span>
                    <span className="text-xs font-bold text-neutral-800">Buy More & Pay Less</span>
                  </div>

                  <a
                    href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Hi%20Subha%20Garments,%20I%20am%20inquiring%20about%20${encodeURIComponent(product.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-[#17140F] hover:bg-[#2B2317] text-[#ECC876] text-xs font-semibold rounded-md transition-colors flex items-center gap-1.5 shadow-sm"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Enquire</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All In Store Prompt */}
        <div className="mt-16 text-center bg-[#FAF7F0] border border-[#E7DECC] p-8 rounded-2xl max-w-4xl mx-auto">
          <h3 className="font-display text-xl sm:text-2xl font-bold text-[#141414]">
            Looking for something specific?
          </h3>
          <p className="mt-2 text-sm text-neutral-600 max-w-xl mx-auto">
            Our full inventory at Aathupalam changes frequently with fresh arrivals. Call us directly or visit our Coimbatore showroom to explore all patterns.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${STORE_INFO.phoneClean}`}
              className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-black gold-gradient-bg hover:opacity-95 shadow-md flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call +91 7395952206</span>
            </a>
            <a
              href={STORE_INFO.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-neutral-800 bg-white hover:bg-neutral-100 border border-neutral-300 shadow-sm flex items-center gap-2"
            >
              <span>Directions to Store</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
