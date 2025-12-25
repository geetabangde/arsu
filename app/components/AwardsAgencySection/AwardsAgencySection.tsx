import React from 'react'
import Image from "next/image";
function BussinessSection() {
  return (
    <>
      <section className="bg-[#010814] py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative space-y-6 inline-block">
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

            <h2 className="ghost-outline-heading ghost-outline-lg">
              WHO
            </h2>
            <h2 className="relative z-10 text-4xl lg:text-5xl font-bold text-white leading-tight">
              We’re Awards Winning <br />
              Modern Business Solutions <br />
              Agency
            </h2>

            <p className="text-white/65 max-w-xl">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium totam rem aperiam.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              {[
                "Tech Solutions",
                "IT Consulting",
                "Web Solutions",
                "Business Growth",
                "Product Design",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 px-6 py-3
                 bg-white/5 text-white text-sm font-medium
                 rounded-lg"
                >
                  <div
                    className="w-6 h-6 flex items-center justify-center
                   bg-gradient-to-r from-[#186EF2] to-[#6D18EF]
                   text-white text-xs
                   rounded-full"
                  >
                    ✓
                  </div>

                  {item}
                </div>
              ))}
            </div>
          </div>
          <Image
            src="/images/agency-illustration.png"
            alt=""
            width={520}
            height={520}
            className="mx-auto"
          />
        </div>
      </section>
    </>
  )
}

export default BussinessSection
