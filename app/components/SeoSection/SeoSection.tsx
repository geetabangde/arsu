"use client";

import Image from "next/image";
import { useState } from "react";

const faqs = [
  {
    q: "Why SEO Growth Business Strategy ?",
    a: "SEO helps improve website visibility, traffic and business growth organically."
  },
  {
    q: "How We Help Your Projects ?",
    a: "We analyze, plan and implement SEO strategies to boost conversions."
  },
  {
    q: "Why SEO Growth Business Strategy ?",
    a: "Long term brand authority and sustainable growth."
  },
];

export default function SeoSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-[#010814] py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="relative inline-block">
            <svg
              width="46"
              height="10"
              viewBox="0 0 46 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -top-0 left-18 -translate-x-1/2"
            >
              <path
                d="M1 5 
                    C5 1, 9 9, 13 5 
                    C17 1, 21 9, 25 5
                    C29 1, 33 9, 37 5
                    C41 1, 45 9, 49 5"
                stroke="url(#waveGradient)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="waveGradient" x1="0" y1="0" x2="46" y2="0">
                  <stop stopColor="#186EF2" />
                  <stop offset="1" stopColor="#6D18EF" />
                </linearGradient>
              </defs>
            </svg>

          {/* Ghost Text Background */}
           <div className="absolute -left-4 -top-12 text-[140px] font-black text-white/[0.03] leading-none pointer-events-none select-none">
            SEO
            </div>

          <h3 className="text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            Manage Business SEO <br /> 
            <span className="text-white">Optimization Easily</span>
          </h3>

          <p className="text-gray-400 mb-10 max-w-lg text-base leading-relaxed">
            Quis autem vel eum iure reprehenderit qui in ea voluptate
            velit esse quam nihil molestiae consequatur vel illum.
          </p>

          {/* FAQ Accordion */}
          <div className="space-y-4 max-w-lg">
            {faqs.map((item, i) => (
              <div
                key={i}
                className="bg-[#0d1321] border border-white/5 rounded-lg overflow-hidden transition-all duration-300 hover:border-blue-500/30"
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex justify-between items-center px-5 py-4 text-left text-white font-medium"
                >
                  <span className="text-sm">{item.q}</span>
                  <span className={`text-blue-400 transition-transform duration-300 ${open === i ? 'rotate-90' : ''}`}>
                    →
                  </span>
                </button>

                <div className={`overflow-hidden transition-all duration-300 ${open === i ? 'max-h-32' : 'max-h-0'}`}>
                  <div className="px-5 pb-4 text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-3">
                    {item.a}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT ILLUSTRATION */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-lg">
            {/* Floating particles background effect */}
            <div className="absolute top-10 right-10 w-3 h-3 bg-blue-500 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute top-20 left-10 w-2 h-2 bg-purple-500 rounded-full opacity-60 animate-pulse delay-100"></div>
            <div className="absolute bottom-20 right-20 w-2 h-2 bg-pink-500 rounded-full opacity-60 animate-pulse delay-200"></div>
            
            <Image
              src="/images/seo-illustration.png"
              alt="SEO Illustration"
              width={550}
              height={550}
              className="object-contain relative z-10 drop-shadow-2xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
}