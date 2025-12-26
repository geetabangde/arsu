"use client";

import Image from "next/image";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactWorkTogetherSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowError(false);

    try {
      await emailjs.send(
        "service_ywqi2vj",
        "template_xlm2hku",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "bangdegeeta@gmail.com",
        },
        "Xk6InqMeEo4fcHihF"
      );
      setShowSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setShowSuccess(false), 5000);

    } catch (error) {
      console.error("Error:", error);
      setShowError(true);
      setTimeout(() => setShowError(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-[#010814] py-28 relative overflow-hidden">

      {showSuccess && (
        <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 animate-slideDown">
          <div className="bg-green-500 text-white px-6 py-4 rounded-lg shadow-2xl flex items-center gap-3">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <div>
              <p className="font-semibold">Message Sent Successfully!</p>
              <p className="text-sm">Well get back to you soon.</p>
            </div>
          </div>
        </div>
      )}
      {showError && (
        <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 animate-slideDown">
          <div className="bg-red-500 text-white px-6 py-4 rounded-lg shadow-2xl flex items-center gap-3">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            <p className="font-semibold">Failed to send. Please try again!</p>
          </div>
        </div>
      )}

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
            In New Projects ?
          </h3>
          <form onSubmit={handleSubmit} className="space-y-5 max-w-md">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name*"
              required
              className="w-full rounded-md px-4 py-3 text-sm
              bg-white text-gray-800 outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email*"
              required
              className="w-full rounded-md px-4 py-3 text-sm
              bg-white text-gray-800 outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message*"
              rows={4}
              required
              className="w-full rounded-md px-4 py-3 text-sm
              bg-white text-gray-800 outline-none resize-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center
              bg-gradient-to-r from-indigo-600 to-purple-600
              text-white text-sm font-medium
              px-6 py-3 rounded-md
              hover:opacity-90 transition
              disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}