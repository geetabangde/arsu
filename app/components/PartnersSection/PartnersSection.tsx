"use client";

import { useState } from "react";

const PartnersSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const partners = [
    { name: "Mövenpick", logo: "MÖVENPICK" },
    { name: "Raez Amwaj", logo: "Raez Amwaj" },
    { name: "Rosegal", logo: "ROSEGAL" },
    { name: "Eyab", logo: "EYAB" },
    { name: "Tasweel", logo: "تصويل" },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % partners.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + partners.length) % partners.length);
  };

  return (
    <section className="relative py-16 lg:py-24 border-t border-white/10">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Heading and carousel */}
          <div className="space-y-8">
            {/* Heading */}
            <div className="flex items-center gap-4">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
              </div>
            </div>
            
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
              We've More Then{" "}
              <span className="text-cyan-400">254+</span>
              <br />
              Global Partners
            </h2>

            {/* Logo carousel */}
            <div className="flex items-center gap-6">
              {/* Previous button */}
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full border-2 border-cyan-400/30 flex items-center justify-center text-cyan-400 hover:bg-cyan-400/10 transition-all flex-shrink-0"
                aria-label="Previous"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Logos display */}
              <div className="flex-1 flex items-center justify-center gap-8 overflow-hidden">
                {partners.map((partner, index) => (
                  <div
                    key={index}
                    className="text-white/60 text-sm font-medium whitespace-nowrap"
                  >
                    {partner.logo}
                  </div>
                ))}
              </div>

              {/* Next button */}
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full border-2 border-cyan-400/30 flex items-center justify-center text-cyan-400 hover:bg-cyan-400/10 transition-all flex-shrink-0"
                aria-label="Next"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right side - Description */}
          <div className="text-white/60 text-sm lg:text-base leading-relaxed">
            <p>
              Sed ut perspiciatis unde omnis iste natus error voluptatem santium
              doloremque laudantium, totam rem aperiam, eaque ipsa quae
              ab illo inventore veritatis quasi architecto beatae vitae.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;