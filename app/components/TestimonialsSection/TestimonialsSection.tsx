"use client";

import Image from "next/image";

const testimonials = [
  {
    text: "Sed ut perspiciatis unde natus error sit voluptatem accusantium laudant totames aperiam eaque abillo beatae vitae",
    name: "Richard S. Brooks",
    role: "CEO & Founder",
  },
  {
    text: "Sed ut perspiciatis unde natus error sit voluptatem accusantium laudant totames aperiam eaque abillo beatae vitae",
    name: "Gars G. Bernhardt",
    role: "CEO & Founder",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-[#010814] py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADING ================= */}
        <div className="relative text-center mb-20">
          <svg
            width="46"
            height="10"
            viewBox="0 0 46 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -top-0 left-1/2 -translate-x-1/2"
          >
            <path
              d="M1 5 C5 1, 9 9, 13 5 C17 1, 21 9, 25 5 C29 1, 33 9, 37 5 C41 1, 45 9, 49 5"
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

          {/* Ghost Text */}
          <div
            className="absolute left-1/2 -translate-x-1/2 -top-16 text-[140px] font-black leading-none pointer-events-none select-none"
            style={{ color: "rgba(255, 255, 255, 0.03)" }}
          >
            SAYS
          </div>

          <h2 className="relative z-10 text-4xl md:text-5xl font-bold text-white leading-tight">
            People's Say About Our <br />
            Support & Services
          </h2>
        </div>

        {/* ================= CARDS ================= */}
        <div className="grid md:grid-cols-2 gap-6 relative z-10 max-w-4xl mx-auto">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="bg-[#2a2c3d] p-8 relative"
            >
              {/* Quote Icon Image */}
              <div className="mb-4">
                <div className="w-10 h-8 relative">
                  <Image
                    src="/images/quote-icon.png"
                    alt="Quote"
                    width={40}
                    height={32}
                    className="object-contain"
                  />
                </div>
              </div>

              <p className="text-white/70 text-sm leading-relaxed mb-6">
                {item.text}
              </p>

             <div className="border-t border-white/10 pt-4 flex justify-between items-center">
                <div>
                  <h4 className="text-white font-semibold">
                    {item.name}
                  </h4>
                  <p className="text-white/40 text-xs">
                    {item.role}
                  </p>
                </div>

                {/* Chat Icon */}
                <div className="flex items-center">
                  <div className="w-[40px] h-[30px]">
                    <Image
                      src="/images/chat-icon.png"
                      alt="Chat"
                      width={100}
                      height={50}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* ================= DOTS ================= */}
        <div className="flex justify-center gap-3 mt-12">
          <span className="w-3 h-3 rounded-full bg-indigo-500"></span>
          <span className="w-3 h-3 rounded-full bg-white/30"></span>
          <span className="w-3 h-3 rounded-full bg-white/30"></span>
        </div>

      </div>

      {/* ================= FLOATING ICONS BACKGROUND ================= */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="relative w-full h-full">
          <Image
            src="/images/testiminol.png"
            alt="Background Icons"
            fill
            className="object-contain opacity-80"
          />
        </div>
      </div>

    </section>
  );
}