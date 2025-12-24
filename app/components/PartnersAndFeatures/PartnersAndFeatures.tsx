"use client";

import Image from "next/image";

const PartnersAndFeatures = () => {
  return (
    <section className="bg-[#010814] pt-20 pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-24">

        {/* PARTNERS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative">
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
            doloremque laudantium, totam rem aperiam.
          </p>
        </div>

        {/* LOGOS */}
        <div className="flex flex-wrap items-center justify-center gap-12 opacity-80">
          {["movenpick", "raz", "rosegal", "eyab", "daman"].map((logo) => (
            <Image
              key={logo}
              src={`/images/${logo}.png`}
              alt={logo}
              width={120}
              height={50}
              className="object-contain grayscale hover:grayscale-0 transition"
            />
          ))}
        </div>

        {/* FEATURES */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Image
            src="/images/features-character.png"
            alt=""
            width={450}
            height={450}
            className="mx-auto"
          />

          <div className="space-y-8">
            <div className="relative">
              <h3 className="ghost-outline-heading ghost-outline-lg">
                FEATURES
              </h3>

              <h3 className="relative z-10 text-3xl font-bold text-white">
                Explore Our Professional <br /> Business Solutions
              </h3>
            </div>


            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "Business Growth",
                "User Research",
                "Big Data Solution",
                "Product Design",
              ].map((item) => (
                <div key={item} className="flex gap-4">
                  <span className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                    ✔
                  </span>
                  <div>
                    <h4 className="text-white font-semibold">{item}</h4>
                    <p className="text-white/60 text-sm">
                      Sed ut perspiciatis unde omnis
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
