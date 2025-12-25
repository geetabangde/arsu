"use client";

import Image from "next/image";

export default function ContactWorkTogetherSection() {
  return (
    <section className="bg-[#010814] py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative flex justify-center">
          <Image
            src="/images/contact-illustration.png"
            alt="Work Together"
            width={520}
            height={520}
            className="object-contain"
          />
        </div>
        <div className="relative">
          <svg
            width="46"
            height="10"
            viewBox="0 0 46 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -top-5 left-10 -translate-x-1/2"
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
          <div className="absolute -left-4 -top-15 text-[120px] font-black text-white/5 leading-none pointer-events-none">
            CALL
          </div>
          <h3 className="text-4xl font-bold text-white leading-tight mb-8">
            Ready to Work Together <br />
            In News Projects ?
          </h3>
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
