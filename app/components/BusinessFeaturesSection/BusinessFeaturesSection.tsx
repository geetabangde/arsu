import React from 'react'
import Image from "next/image";
const services = [
  {
    title: "Graphics Design",
    desc: "Sed ut perspiciatis unde omnis",
    icon: "/images/graphics.png",
    offset: "lg:translate-x-12",
  },
  {
    title: "Ideation & Evaluation",
    desc: "Sed ut perspiciatis unde omnis",
    icon: "/images/idea.png",
    offset: "lg:-translate-x-8",
  },
  {
    title: "Brand Identity",
    desc: "Sed ut perspiciatis unde omnis",
    icon: "/images/brand.png",
    offset: "lg:translate-x-20",
  },
  {
    title: "Customer Service",
    desc: "Sed ut perspiciatis unde omnis",
    icon: "/images/support.png",
    offset: "lg:-translate-x-12",
  },
  {
    title: "Web Strategy",
    desc: "Sed ut perspiciatis unde omnis",
    icon: "/images/web.png",
    offset: "lg:translate-x-10",
  },
];

function BusinessFeaturesSection() {
  return (
    <>
      <section className="bg-[#010814] py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT IMAGE */}
          <Image
            src="/images/growth-illustration.png"
            alt=""
            width={480}
            height={480}
            className="mx-auto"
          />

          {/* RIGHT CONTENT */}
          <div className="relative space-y-10 inline-block">
            <svg
              width="46"
              height="10"
              viewBox="0 0 46 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -top-3 left-50 -translate-x-1/2"
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

            {/* Ghost */}
            <h2 className="ghost-outline-heading ghost-outline-lg">
              SERVICES
            </h2>

            {/* Main */}
            <h2 className="relative z-10 text-4xl font-bold text-white leading-tight">
              Great Features To Do Your <br />
              Business Growth & Development
            </h2>

            {/* Cards */}
            <div className="space-y-6">
              {services.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between
        bg-white/5 hover:bg-white/10 transition
        rounded-xl px-6 py-5
        ${item.offset}`}
                >
                  {/* LEFT SIDE (ICON + TEXT) */}
                  <div className="flex items-center gap-4">

                    {/* ICON */}
                    <div className="w-12 h-12 flex items-center justify-center
                        bg-white/10 rounded-lg">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={28}
                        height={28}
                      />
                    </div>

                    {/* TEXT */}
                    <div>
                      <h4 className="text-white font-semibold">
                        {item.title}
                      </h4>
                      <p className="text-white/50 text-sm">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* RIGHT ARROW */}
                  <span className="text-white/60 text-xl">→</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

    </>
  )
}

export default BusinessFeaturesSection
