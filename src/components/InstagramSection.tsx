import React from 'react';
import { Instagram, ExternalLink, Heart, Sparkles } from 'lucide-react';
import { STORE_INFO, INSTAGRAM_POSTS } from '../data/storeData';

export const InstagramSection: React.FC = () => {
  return (
    <section id="instagram" className="py-20 lg:py-28 bg-[#141414] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#E5C378] mb-3">
              <Instagram className="w-4 h-4 text-[#E5C378]" />
              <span>FOLLOW OUR JOURNEY</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              CONNECT ON <span className="gold-gradient-text font-serif italic font-normal">INSTAGRAM</span>
            </h2>
            <p className="mt-3 text-neutral-400 text-sm sm:text-base leading-relaxed">
              Stay in touch with new weekly arrivals, styling suggestions, and seasonal updates at{' '}
              <strong className="text-white font-medium">{STORE_INFO.instagramHandle}</strong>.
            </p>
          </div>

          <div className="flex-shrink-0">
            <a
              href={STORE_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-95 text-white text-xs font-bold uppercase tracking-wider shadow-lg transition-all"
            >
              <Instagram className="w-4 h-4" />
              <span>Follow {STORE_INFO.instagramHandle}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Instagram Post Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={STORE_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl overflow-hidden aspect-square bg-neutral-900 border border-[#2F2920] shadow-md block"
            >
              <img
                src={post.image}
                alt="Subha Garments Instagram Fashion Post"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90 group-hover:brightness-75"
              />

              {/* Instagram Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-between text-white">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#ECC876] flex items-center gap-1">
                    <Instagram className="w-3.5 h-3.5" />
                    <span>{STORE_INFO.instagramHandle}</span>
                  </span>
                  <div className="flex items-center gap-1 text-xs text-neutral-200">
                    <Heart className="w-3.5 h-3.5 fill-red-500 text-red-500" />
                    <span>{post.likes}</span>
                  </div>
                </div>

                <p className="text-xs text-neutral-200 line-clamp-3 leading-relaxed">
                  {post.caption}
                </p>

                <div className="text-[11px] font-bold text-[#E5C378] flex items-center gap-1 uppercase tracking-wider">
                  <span>View on Instagram</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Sub-strip with Instagram Handle Box */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#1D1914] border border-[#3E3424] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#2A2317] border border-[#C5A059]/40 flex items-center justify-center text-[#ECC876]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-white uppercase tracking-wider">
                Tag Us in Your Looks!
              </div>
              <p className="text-xs text-neutral-400">
                Share your Subha Garments outfit photos on Instagram with <span className="text-[#ECC876]">#SubhaGarments</span>
              </p>
            </div>
          </div>

          <a
            href={STORE_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-[#ECC876] hover:text-white underline underline-offset-4 transition-colors"
          >
            https://www.instagram.com/subhagarments/
          </a>
        </div>
      </div>
    </section>
  );
};
