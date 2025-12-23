"use client";

import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20">
      {/* Background floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Clouds */}
        <div className="absolute top-20 left-10 opacity-20">
          <Image src="/images/clouds.png" alt="" width={100} height={50} className="w-24" />
        </div>
        <div className="absolute top-28 left-1/4 opacity-15">
          <Image src="/images/clouds.png" alt="" width={90} height={45} className="w-20" />
        </div>
        <div className="absolute top-16 right-1/4 opacity-20">
          <Image src="/images/clouds.png" alt="" width={120} height={60} className="w-28" />
        </div>

        {/* Blue dots */}
        <div className="absolute top-32 left-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
        <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-cyan-400 rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-cyan-400 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>

        {/* Pink sphere - top right */}
        <div className="absolute top-28 right-20">
          <Image src="/images/pink-sphere.png" alt="" width={100} height={100} className="w-20 lg:w-24" />
        </div>
      </div>

      {/* Main content */}
      <div className="relative w-full max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-4 lg:gap-8 items-center">
          {/* Left - Text */}
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              We Provide{" "}
              <Image
                src="/images/lightbulb.png"
                alt="💡"
                width={60}
                height={60}
                className="inline-block w-12 lg:w-14 align-middle -mt-2"
              />
              <br />
              Smart Business
              <br />
              Solutions
            </h1>
            <p className="text-white text-base lg:text-lg">
              Grow your Business With Us Best Business Solutions
            </p>
          </div>

          {/* Right - Character */}
          <div className="relative -mt-8 lg:mt-0">
            <Image
              src="/images/hero-character.png"
              alt="VR Character"
              width={700}
              height={700}
              priority
              className="w-full max-w-lg lg:max-w-2xl mx-auto lg:mx-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;