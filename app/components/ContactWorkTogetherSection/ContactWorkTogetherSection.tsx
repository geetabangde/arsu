"use client";

import Image from "next/image";

export default function ContactWorkTogetherSection() {
  return (
    <section className="bg-[#010814] py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* ================= LEFT ILLUSTRATION ================= */}
        <div className="relative flex justify-center">
          <Image
            src="/images/contact-illustration.png" 
            alt="Work Together"
            width={520}
            height={520}
            className="object-contain"
          />
        </div>

        {/* ================= RIGHT FORM ================= */}
        <div className="relative">

          {/* Ghost */}
          <div className="absolute -left-4 top-0 text-[120px] font-black text-white/5 leading-none pointer-events-none">
            CALL
          </div>

          {/* Blue Wave */}
          <div className="flex items-center gap-2 mb-5 relative z-10">
            <span className="relative w-12 h-[3px] bg-indigo-500 rounded-full">
              <span className="absolute -top-1 left-1 w-2 h-2 bg-indigo-500 rounded-full"></span>
              <span className="absolute -top-1 right-1 w-2 h-2 bg-indigo-500 rounded-full"></span>
            </span>
          </div>

          {/* Heading */}
          <h3 className="text-4xl font-bold text-white leading-tight mb-8">
            Ready to Work Together <br />
            In News Projects ?
          </h3>

          {/* Form */}
          <form className="space-y-5 max-w-md">
            <input
              type="text"
              placeholder="Your Name*"
              className="w-full rounded-md px-4 py-3 text-sm
              bg-white text-gray-800 outline-none"
            />

            <input
              type="email"
              placeholder="Your Email*"
              className="w-full rounded-md px-4 py-3 text-sm
              bg-white text-gray-800 outline-none"
            />

            <textarea
              placeholder="Your Message*"
              rows={4}
              className="w-full rounded-md px-4 py-3 text-sm
              bg-white text-gray-800 outline-none resize-none"
            ></textarea>

            <button
              type="submit"
              className="inline-flex items-center justify-center
              bg-gradient-to-r from-indigo-600 to-purple-600
              text-white text-sm font-medium
              px-6 py-3 rounded-md
              hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}
