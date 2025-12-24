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

          {/* Ghost */}
          <h2 className="ghost-outline-heading ghost-outline-lg">
            SAYS
          </h2>

          {/* Blue Wave */}
          <div className="flex justify-center mb-5 relative z-10">
            <span className="relative w-12 h-[3px] bg-indigo-500 rounded-full">
              <span className="absolute -top-1 left-1 w-2 h-2 bg-indigo-500 rounded-full"></span>
              <span className="absolute -top-1 right-1 w-2 h-2 bg-indigo-500 rounded-full"></span>
            </span>
          </div>

          <h2 className="relative z-10 text-4xl md:text-5xl font-bold text-white leading-tight">
            People’s Say About Our <br />
            Support & Services
          </h2>
        </div>

        {/* ================= CARDS ================= */}
        <div className="grid md:grid-cols-2 gap-10 relative z-10">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="bg-[#2a2c3d] rounded-xl p-8 relative"
            >
              {/* Quote */}
              <div className="text-indigo-500 text-4xl mb-4">“</div>

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

                {/* Chat icon */}
                <div className="relative">
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-md flex items-center justify-center text-xs text-white">
                    !
                  </span>
                  <div className="bg-indigo-500/20 p-3 rounded-lg">
                    💬
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

      {/* ================= FLOATING ICONS ================= */}
      <span className="absolute top-20 left-20 text-green-400 text-3xl">✔</span>
      <span className="absolute top-32 right-24 text-red-500 text-3xl">▶</span>
      <span className="absolute bottom-24 left-24 text-yellow-400 text-3xl">🔔</span>
      <span className="absolute bottom-28 right-28 text-purple-500 text-3xl">💬</span>

    </section>
  );
}
