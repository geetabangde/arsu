import React from 'react'
import Image from "next/image";
function BussinessSection() {
  return (
    <>
      <section className="bg-[#010814] py-28 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">

    {/* LEFT CONTENT */}
    <div className="relative space-y-6">
      {/* Ghost */}
      <h2 className="ghost-outline-heading ghost-outline-lg">
        WHO
      </h2>

      {/* Main */}
      <h2 className="relative z-10 text-4xl lg:text-5xl font-bold text-white leading-tight">
        We’re Awards Winning <br />
        Modern Business Solutions <br />
        Agency
      </h2>

      <p className="text-white/65 max-w-xl">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium totam rem aperiam.
      </p>

      <div className="flex flex-wrap gap-3 pt-4">
        {[
          "Tech Solutions",
          "IT Consulting",
          "Web Solutions",
          "Business Growth",
          "Product Design",
        ].map((item) => (
          <span
            key={item}
            className="px-4 py-2 rounded-full bg-white/5 text-white/80 text-sm"
          >
            ✔ {item}
          </span>
        ))}
      </div>
    </div>

    {/* RIGHT IMAGE */}
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
