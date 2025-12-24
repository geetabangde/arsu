"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#");
  const pathname = usePathname();
  type NavItem = {
    name: string;
    href: string;
  };

  useEffect(() => {
    const updateHash = () => {
      setActiveHash(window.location.hash || "#");
    };

    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  const navItems: NavItem[] = [
    { name: "Home", href: "#" },
    { name: "Clients", href: "#clients" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];


  const isItemActive = (item: NavItem): boolean =>
    item.href === "#"
      ? pathname === "/" && activeHash === "#"
      : activeHash === item.href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#020B1A] lg:bg-transparent">

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/">
            <Image
              src="/logo/logo.png"
              alt="Logo"
              width={100}
              height={50}
              className="w-24"
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const active = isItemActive(item);
              const isHome = item.name === "Home";

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium flex items-center gap-1 transition-colors duration-300 group
                    ${active ? "text-white" : "text-gray-300 hover:text-cyan-400"}`}
                >
                  {item.name}


                  <span
                    className={`text-xs transition-transform duration-300
                      ${isHome
                        ? "rotate-0"
                        : active
                          ? "rotate-180"
                          : "group-hover:rotate-180"
                      }`}
                  >
                    ▼
                  </span>
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300
                      ${active
                        ? "w-full bg-white"
                        : "w-0 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full"
                      }`}
                  />
                </Link>
              );
            })}
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center space-y-1.5"
          >
            <span
              className={`w-6 h-0.5 bg-cyan-400 transition-all ${isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
            />
            <span
              className={`w-6 h-0.5 bg-cyan-400 transition-all ${isMenuOpen ? "opacity-0" : ""
                }`}
            />
            <span
              className={`w-6 h-0.5 bg-cyan-400 transition-all ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
            />
          </button>
        </div>


        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="py-4 space-y-2 border-t border-cyan-500/20">
            {navItems.map((item) => {
              const active = isItemActive(item);
              const isHome = item.name === "Home";

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all
                    ${active
                      ? "text-white bg-white/10"
                      : "text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10"
                    }`}
                >
                  <span>{item.name}</span>

                  <span
                    className={`text-xs transition-transform duration-300
                      ${isHome
                        ? "rotate-0"
                        : active
                          ? "rotate-180"
                          : ""
                      }`}
                  >
                    ▼
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
