import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
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
              {["f", "t", "in", "ig"].map((item, i) => (
                <span
                  key={i}
                  className="w-9 h-9 flex items-center justify-center
                  rounded-full border border-white/20
                  text-white/70 text-sm cursor-pointer
                  hover:bg-indigo-500 hover:border-indigo-500 transition"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>Product Design</li>
              <li>Business Consulting</li>
              <li>Customer Service</li>
              <li>Brand Identity</li>
              <li>SEO Optimization</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                785 Main Street, 2nd Block <br />
                melbourne, australia
              </li>
              <li>support@gmail.com</li>
              <li>+000 (123) 456 88</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6">Newsletter</h4>
            <p className="text-sm text-white/60 mb-6 max-w-xs">
              Get Every Single Update to Join Our Newsletter
            </p>
            <div className="border-b border-white/20 flex items-center gap-3 py-3">
              <span className="text-white text-sm">✉</span>
              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent flex-1 outline-none text-sm text-white placeholder:text-white/40"
              />
              <button className="text-white font-semibold text-sm whitespace-nowrap">
                Sign Up »
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            Copy© 2025 Arsu. All Rights reserved
          </p>
          <div className="flex gap-6 text-xs text-white/40">
            <Link href="#">Setting & Privacy</Link>
            <Link href="#">Faqs</Link>
            <Link href="#">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
