"use client";
import Image from "next/image";
const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-24 bg-[#020b1c] hero-grid-bg overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#020b1c]/70 via-[#020b1c]/60 to-[#020b1c] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/images/clouddrama.png"
          alt=""
          width={120}
          height={60}
          className="absolute top-24 left-16 opacity-20 hidden md:block"
        />
        <Image
          src="/images/pink-sphere.png"
          alt=""
          width={90}
          height={90}
          className="absolute top-40 right-24 opacity-30 hidden md:block"
        />
        <span className="absolute top-1/3 left-1/4 w-1.5 h-1.5 bg-cyan-400 rounded-full" />
        <span className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-cyan-400 rounded-full" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.15]">
              <span className="inline-flex items-center gap-3">
                We Provide
                <Image
                  src="/images/light.png"
                  alt="light"
                  width={100}
                  height={50}
                  className="inline-block translate-y-1"
                />
              </span>
              <br />
              Smart Business <br />
              Solutions
            </h1>
            <p className="text-white/80 max-w-xl mx-auto lg:mx-0">
              Grow your Business With Us Best Business Solutions
            </p>
          </div>
          <div className="relative flex justify-center lg:justify-end">
            <Image
              src="/images/hero-character.png"
              alt=""
              width={800}
              height={800}
              priority
              className="w-[420px] sm:w-[520px] lg:w-[680px] translate-y-10"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full pointer-events-none">
        <svg viewBox="0 0 1440 160" preserveAspectRatio="none" className="w-full">
          <path
            d="M0,80 C190,140 360,0 540,40 720,80 900,120 1080,90 1260,60 1440,80 1440,160 L0,160 Z"
            fill="#010814"
          />
        </svg>
      </div>
      
    </section>
  );
};

export default HeroSection;
