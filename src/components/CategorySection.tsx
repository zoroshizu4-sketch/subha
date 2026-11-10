import React from 'react';
import { ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';
import { CATEGORIES, STORE_INFO, CategoryItem } from '../data/storeData';

interface CategorySectionProps {
  onSelectCategory: (categoryName: string) => void;
}

export const CategorySection: React.FC<CategorySectionProps> = ({ onSelectCategory }) => {
  return (
    <section id="categories" className="py-20 lg:py-28 bg-[#F6F2E9] text-[#141414] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#A67C2E] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CRAFTED FOR EVERY GENERATION</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111]">
              SHOP BY <span className="font-serif italic text-[#A67C2E] font-normal">CATEGORY</span>
            </h2>
            <p className="mt-3 text-neutral-600 text-base leading-relaxed">
              Explore thoughtfully curated fashion collections for the whole family under one roof at Subha Garments, Coimbatore.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
            <span>Family Wardrobe</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
            <span>Best In Town Rates</span>
          </div>
        </div>

        {/* 3 Premium Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CATEGORIES.map((category: CategoryItem) => (
            <div
              key={category.id}
              className="group relative bg-[#FCFAF6] rounded-2xl overflow-hidden border border-[#E3DAC8] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
            >
              {/* Category Image with Zoom on Hover */}
              <div className="relative h-96 w-full overflow-hidden bg-neutral-900">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                />
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/10" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-block px-3 py-1 text-[11px] font-bold tracking-wider uppercase text-black bg-[#E5C378] rounded-md shadow-sm">
                    {category.badge}
                  </span>
                </div>

                {/* Overlaid Title on bottom of image */}
                <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                  <div className="text-[11px] uppercase tracking-widest text-[#E5C378] font-semibold mb-1">
                    {category.itemCountDescription}
                  </div>
                  <h3 className="font-display text-2xl font-bold tracking-wide">
                    {category.title}
                  </h3>
                </div>
              </div>

              {/* Card Body & Details */}
              <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <p className="text-xs font-medium text-[#A67C2E] uppercase tracking-wider mb-2">
                    {category.subtitle}
                  </p>
                  <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                    {category.description}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-1.5 pt-2 border-t border-[#F0E9DC] mb-6">
                    {category.popularItems.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-neutral-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action button */}
                <div className="pt-2">
                  <button
                    onClick={() => {
                      const categoryFilterMap: { [key: string]: string } = {
                        mens: 'Men',
                        womens: 'Women',
                        kids: 'Kids'
                      };
                      onSelectCategory(categoryFilterMap[category.id] || 'All');
                      const el = document.getElementById('featured');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full py-3 px-4 rounded-xl border border-[#2B2317] text-[#141414] hover:bg-[#141414] hover:text-[#ECC876] text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 group/btn"
                  >
                    <span>View {category.title}</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#17140F] border border-[#3E3424] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-[#292215] border border-[#C5A059]/40 flex items-center justify-center text-[#ECC876] flex-shrink-0 hidden sm:flex">
              <span className="font-display font-bold text-lg">SG</span>
            </div>
            <div>
              <div className="font-display text-lg sm:text-xl font-bold text-white">
                Looking for specific sizes, festive sets or bulk family purchases?
              </div>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                Reach out directly on WhatsApp or call our Aathupalam store team for instant sizing assistance.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0 w-full sm:w-auto">
            <a
              href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Hello%20Subha%20Garments,%20I%20would%20like%20to%20know%20about%20your%20available%20sizes%20and%20designs.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-600 rounded-xl transition-colors text-center tracking-wider uppercase"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
