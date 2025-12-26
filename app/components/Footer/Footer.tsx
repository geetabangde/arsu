"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    setShowError(false);
    try {
      await emailjs.send(
        "service_ywqi2vj",     
        "template_xlm2hku", 
        {
          subscriber_email: email,
          to_email: "bangdegeeta@gmail.com", 
        },
        "Xk6InqMeEo4fcHihF"    
      );

      setShowSuccess(true);
      setEmail("");
      setTimeout(() => setShowSuccess(false), 5000);
      
    } catch (error) {
      console.error("Subscription Error:", error);
      setShowError(true);
      setTimeout(() => setShowError(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {showSuccess && (
        <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 animate-slideDown">
          <div className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-2xl flex items-center gap-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <p className="font-semibold text-sm">Successfully subscribed! 🎉</p>
          </div>
        </div>
      )}
      
      {showError && (
        <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 animate-slideDown">
          <div className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-2xl flex items-center gap-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            <p className="font-semibold text-sm">Failed to subscribe. Try again!</p>
          </div>
        </div>
      )}

      <footer className="bg-[#010814] pt-24 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-16">
            <div>
              <Image
                src="/logo/logo.png"
                alt="Logo"
                width={100}
                height={50}
                className="w-24"
              />
              <p className="text-xs text-white/50 mb-6">
                Information Technology
              </p>
              <p className="text-sm text-white/60 mb-4">Follow</p>
              <div className="flex gap-3">
                {[
                  { icon: "f", link: "https://facebook.com" },
                  { icon: "t", link: "https://twitter.com" },
                  { icon: "in", link: "https://linkedin.com" },
                  { icon: "ig", link: "https://instagram.com" }
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center
                    rounded-full border border-white/20
                    text-white/70 text-sm cursor-pointer
                    hover:bg-indigo-500 hover:border-indigo-500 transition"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-6">Services</h4>
              <ul className="space-y-3 text-sm text-white/60">
                <li className="hover:text-white transition cursor-pointer">Product Design</li>
                <li className="hover:text-white transition cursor-pointer">Business Consulting</li>
                <li className="hover:text-white transition cursor-pointer">Customer Service</li>
                <li className="hover:text-white transition cursor-pointer">Brand Identity</li>
                <li className="hover:text-white transition cursor-pointer">SEO Optimization</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-6">Contact</h4>
              <ul className="space-y-3 text-sm text-white/60">
                <li className="hover:text-white transition">
                  785 Main Street, 2nd Block <br />
                  melbourne, australia
                </li>
                <li className="hover:text-white transition cursor-pointer">
                  support@gmail.com
                </li>
                <li className="hover:text-white transition cursor-pointer">
                  +000 (123) 456 88
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-6">Newsletter</h4>
              <p className="text-sm text-white/60 mb-6 max-w-xs">
                Get Every Single Update to Join Our Newsletter
              </p>
              <form onSubmit={handleSubscribe}>
                <div className="border-b border-white/20 flex items-center gap-3 py-3">
                  <span className="text-white text-sm">✉</span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                    required
                    disabled={isSubmitting}
                    className="bg-transparent flex-1 outline-none text-sm text-white placeholder:text-white/40 disabled:opacity-50"
                  />
                  <button 
                    type="submit"
                    disabled={isSubmitting || !email}
                    className="text-white font-semibold text-sm whitespace-nowrap hover:text-indigo-400 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "..." : "Sign Up »"}
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-white/40">
              Copy© 2025 Arsu. All Rights reserved
            </p>
            <div className="flex gap-6 text-xs text-white/40">
              <Link href="#" className="hover:text-white transition">
                Setting & Privacy
              </Link>
              <Link href="#" className="hover:text-white transition">
                Faqs
              </Link>
              <Link href="#" className="hover:text-white transition">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}