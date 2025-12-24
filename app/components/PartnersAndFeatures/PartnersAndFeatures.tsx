"use client";

import Image from "next/image";
const features = [
  {
    title: "Business Growth",
    desc: "Sed ut perspiciatis unde omnis",
    icon: "/images/business-growth.png",
  },
  {
    title: "User Research",
    desc: "Sed ut perspiciatis unde omnis",
    icon: "/images/user-research.png",
  },
  {
    title: "Big Data Solution",
    desc: "Sed ut perspiciatis unde omnis",
    icon: "/images/big-data.png",
  },
  {
    title: "Product Design",
    desc: "Sed ut perspiciatis unde omnis",
    icon: "/images/product-design.png",
  },
];
const PartnersAndFeatures = () => {
  return (
    <section className="bg-[#010814] pt-20 pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative inline-block">
            <svg
              width="46"
              height="10"
              viewBox="0 0 46 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -top-3 left-20 -translate-x-1/2"
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

            <h2 className="ghost-outline-heading ghost-outline-lg">
              BRAND
            </h2>

            <h2 className="relative z-10 text-3xl lg:text-4xl font-bold text-white">
              We’ve More Then <span className="text-cyan-400">254+</span> <br />
              Global Partners
            </h2>
          </div>
          <p className="text-white/70 max-w-xl">
            Sed ut perspiciatis unde omnis natus error voluptatem santium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae
            ab nllo inventore veritatis quasi architecto beatae vitae
          </p>
        </div>
        <div className="relative flex items-center justify-center gap-12 opacity-80">
          <button
            className="absolute left-0 lg:-left-12 w-10 h-10 rounded-full p-[1.5px] bg-gradient-to-r from-[#186EF2] to-[#6D18EF]"
          >
            <span
              className="flex items-center justify-center w-full h-full rounded-full bg-[#020b1c]">
              <span className="text-sm font-bold bg-gradient-to-r from-[#186EF2] to-[#6D18EF] bg-clip-text text-transparent">
                ‹
              </span>
            </span>
          </button>

          {["movenpick", "raz", "rosegal", "eyab", "daman"].map((logo) => (
            <Image
              key={logo}
              src={`/images/${logo}.png`}
              alt={logo}
              width={120}
              height={50}
              className="object-contain brightness-0 invert opacity-80 hover:opacity-100 transition"
            />
          ))}
          <button
            className="absolute right-0 lg:-right-12 w-10 h-10 rounded-full p-[1.5px] bg-gradient-to-r from-[#186EF2] to-[#6D18EF]"
          >
            <span
              className="flex items-center justify-center w-full h-full rounded-full bg-[#020b1c]"
            >
              <span className="text-sm font-bold bg-gradient-to-r from-[#186EF2] to-[#6D18EF] bg-clip-text text-transparent">
                ›
              </span>
            </span>
          </button>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="relative flex justify-center items-center">


            <Image
              src="/images/features-character.png"
              alt="Character"
              width={300}
              height={300}
              className="relative z-10"
              priority
            />
            <div className="absolute left-6 top-12 animate-float">
              <Image
                src="/images/floating-icons.png"
                alt="Floating Icons"
                width={90}
                height={260}
                className="object-contain"
              />
            </div>
          </div>
          <div className="space-y-8">
            <div className="relative inline-block">
              <svg
                width="46"
                height="10"
                viewBox="0 0 46 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -top-3 left-20 -translate-x-1/2"
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
              <h3 className="ghost-outline-heading ghost-outline-lg">
                FEATURES
              </h3>

              <h3 className="relative z-10 text-3xl font-bold text-white">
                Explore Our Professional <br /> Business Solutions
              </h3>
            </div>


            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex gap-4 items-start"
                >

                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>


                  <div>
                    <h4 className="text-white font-semibold text-lg">
                      {feature.title}
                    </h4>
                    <p className="text-white/60 text-sm">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default PartnersAndFeatures;
