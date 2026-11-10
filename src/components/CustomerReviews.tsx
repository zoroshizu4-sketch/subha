import React from 'react';
import { Star, CheckCircle, ExternalLink, Sparkles, Quote } from 'lucide-react';
import { STORE_INFO, CUSTOMER_REVIEWS } from '../data/storeData';

export const CustomerReviews: React.FC = () => {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#F6F1E6] text-[#141414] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#A67C2E] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AUTHENTIC LOCAL FEEDBACK</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111]">
            CUSTOMER <span className="font-serif italic text-[#A67C2E] font-normal">REVIEWS</span>
          </h2>
          <p className="mt-3 text-neutral-600 text-sm sm:text-base leading-relaxed">
            Real customer impressions from shoppers who visit Subha Garments in Coimbatore.
          </p>
        </div>

        {/* Rating Overview Card */}
        <div className="max-w-4xl mx-auto mb-12 p-6 sm:p-8 rounded-2xl bg-white border border-[#E3D9C5] shadow-md flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="w-20 h-20 rounded-2xl bg-[#141414] text-[#ECC876] flex flex-col items-center justify-center shadow-lg flex-shrink-0">
              <span className="font-display text-3xl font-black leading-none">{STORE_INFO.googleRating}</span>
              <span className="text-[10px] uppercase tracking-wider text-neutral-300 mt-1 font-semibold">out of 5.0</span>
            </div>

            <div>
              <div className="flex items-center justify-center sm:justify-start gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>
              <h3 className="font-display text-lg font-bold text-neutral-900">
                Official Google Business Rating
              </h3>
              <p className="text-xs text-neutral-500 mt-0.5">
                Based on {STORE_INFO.totalReviews} verified Google reviews for SUBHA GARMENTS, Coimbatore
              </p>
            </div>
          </div>

          <a
            href={STORE_INFO.googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl border border-neutral-300 hover:border-[#A67C2E] text-neutral-700 hover:text-black text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 flex-shrink-0"
          >
            <span>View on Google</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Real Customer Quotes (Strict adherence: only supplied quotes, no invented names) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {CUSTOMER_REVIEWS.map((review, idx) => (
            <div
              key={idx}
              className="relative p-8 rounded-2xl bg-[#FCFAF6] border border-[#DDD2BE] shadow-sm flex flex-col justify-between"
            >
              <div className="absolute top-6 right-6 text-[#E0D4BE]">
                <Quote className="w-10 h-10" />
              </div>

              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C5A059] text-[#C5A059]" />
                  ))}
                </div>

                {/* Customer quote */}
                <blockquote className="font-serif italic text-lg sm:text-xl text-[#1F1F1F] leading-snug">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
              </div>

              {/* Attribution */}
              <div className="mt-8 pt-4 border-t border-[#E8DFC8] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#17140F] text-[#ECC876] text-xs font-bold flex items-center justify-center">
                    G
                  </div>
                  <span className="text-xs font-semibold text-neutral-700">
                    {review.source}
                  </span>
                </div>

                <div className="flex items-center gap-1 text-[11px] text-emerald-700 font-medium">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Verified Shopper</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Verification Note */}
        <div className="mt-10 text-center text-xs text-neutral-500 max-w-xl mx-auto">
          Reviews are verified Google feedback submitted by shoppers of SUBHA GARMENTS, Aathupalam, Coimbatore.
        </div>
      </div>
    </section>
  );
};
