import React from 'react'
import Image from "next/image";
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
    <div className="relative space-y-10">
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
      <div className="space-y-4">
        {[
          "Graphics Design",
          "Ideation & Evaluation",
          "Brand Identity",
          "Customer Service",
          "Web Strategy",
        ].map((item) => (
          <div
            key={item}
            className="flex items-center justify-between bg-white/5 hover:bg-white/10 transition rounded-xl px-6 py-4"
          >
            <div>
              <h4 className="text-white font-semibold">{item}</h4>
              <p className="text-white/50 text-sm">
                Sed ut perspiciatis unde omnis
              </p>
            </div>
            <span className="text-white/60">→</span>
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
