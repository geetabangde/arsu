"use client";
import Image from "next/image";

const stats = [
  {
    value: "150+",
    label: "Project Completed",
    image: "/images/icon-1.png",
  },
  {
    value: "250+",
    label: "Satisfied Clients",
    image: "/images/icon-2.png",
  },
  {
    value: "50+",
    label: "Expert Teams",
    image: "/images/icon-3.png",
  },
];

export default function FactsSection() {
  return (
    <section className="bg-[#010814] py-15 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-start gap-4">

          <div className="relative inline-block max-w-2xl">
            {/* Wave decoration */}
            <svg
              width="46"
              height="10"
              viewBox="0 0 46 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -top-3 left-0"
            >
              <path
                d="M1 5 C5 1, 9 9, 13 5 C17 1, 21 9, 25 5 C29 1, 33 9, 37 5 C41 1, 45 9, 45 5"
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
              className="absolute -left-4 -top-12 text-[140px] font-black leading-none pointer-events-none select-none"
              style={{ color: "rgba(255, 255, 255, 0.03)" }}
            >
              FACT
            </div>

            <h3 className="text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight relative z-10">
              Let's See Our Company <br />
              Achievement
            </h3>

            <p className="text-gray-400 mt-4 max-w-md leading-relaxed relative z-10">
              Sed ut perspiciatis unde omnis iste natus error sit ways
              voluptatem accusantium doloremque laudantium totam rem aperiam
              eaque ipsa quae abillo inventore
            </p>
          </div>

          {/* Floating Play Button – Soft Ring Version */}
          <div className="hidden lg:flex flex-shrink-0 relative items-center justify-center">

            {/* Soft outer circle */}
            <div className="absolute w-48 h-48 rounded-full
    border border-white/5">
            </div>

            {/* Inner soft circle */}
            <div className="absolute w-32 h-32 rounded-full
    border border-white/10">
            </div>

            {/* Play Button */}
            <div className="relative z-10 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl cursor-pointer">

              <svg
                width="22"
                height="26"
                viewBox="0 0 24 28"
                fill="none"
                className="ml-1"
              >
                <path d="M2 2L22 14L2 26V2Z" fill="#FF6A3D" />
              </svg>

            </div>
          </div>

        </div>

        {/* Stats Cards - Right Side Tilt */}
        <div className="grid md:grid-cols-3 gap-10 mt-20">
          {stats.map((item, i) => (
            <div
              key={i}
              className="transform transition-all duration-300 hover:scale-105"
              style={{
                transform: 'perspective(1200px) rotateY(-12deg) rotateX(10deg)',
                transformOrigin: 'right center',
              }}
            >
              <div className="bg-[#292738] rounded-2xl px-10 py-12 text-center border border-white/10 shadow-2xl">
                {/* Icon with proper Image component */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 relative">
                    <Image
                      src={item.image}
                      alt={item.label}
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Value */}
                <h3 className="text-5xl font-bold text-white mb-3">
                  {item.value}
                </h3>

                {/* Label */}
                <p className="text-gray-200 text-base">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}