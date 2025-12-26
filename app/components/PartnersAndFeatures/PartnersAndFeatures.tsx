"use client";

import { useState, memo, useCallback } from "react";
import Image from "next/image";
interface Feature {
  title: string;
  desc: string;
  icon: string;
}

interface WaveGradientProps {
  className?: string;
  gradientId?: string;
}

interface CarouselButtonProps {
  direction: "prev" | "next";
  onClick: () => void;
  ariaLabel: string;
}

interface FeatureCardProps {
  feature: Feature;
}

interface SectionHeaderProps {
  ghostText: string;
  title: React.ReactNode;
  description?: string;
}

const FEATURES: Feature[] = [
  {
    title: "Business Growth",
    desc: "Sed ut perspiciatis unde omnis",
    icon: "/images/business-growth.png",
  },
  {
    title: "User Research",
    desc: "Sed ut perspiciatis unde omnis",
    icon: "/images/user-research.png",
  },
  {
    title: "Big Data Solution",
    desc: "Sed ut perspiciatis unde omnis",
    icon: "/images/big-data.png",
  },
  {
    title: "Product Design",
    desc: "Sed ut perspiciatis unde omnis",
    icon: "/images/product-design.png",
  },
];

const PARTNER_LOGOS: string[] = ["movenpick", "raz", "rosegal", "eyab", "daman"];

const GRADIENT_BUTTON_CLASS =
  "w-10 h-10 rounded-full p-[1.5px] bg-gradient-to-r from-[#186EF2] to-[#6D18EF] hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300";


const WaveGradient = memo<WaveGradientProps>(({ className = "", gradientId = "waveGradient" }) => (
  <svg
    width="46"
    height="10"
    viewBox="0 0 46 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M1 5 C5 1, 9 9, 13 5 C17 1, 21 9, 25 5 C29 1, 33 9, 37 5 C41 1, 45 9, 49 5"
      stroke={`url(#${gradientId})`}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <defs>
      <linearGradient id={gradientId} x1="0" y1="0" x2="46" y2="0">
        <stop stopColor="#186EF2" />
        <stop offset="1" stopColor="#6D18EF" />
      </linearGradient>
    </defs>
  </svg>
));
WaveGradient.displayName = "WaveGradient";

const CarouselButton = memo<CarouselButtonProps>(({ direction, onClick, ariaLabel }) => (
  <button
    onClick={onClick}
    aria-label={ariaLabel}
    className={`absolute ${direction === "prev" ? "left-0 lg:-left-12" : "right-0 lg:-right-12"
      } ${GRADIENT_BUTTON_CLASS} z-10`}
  >
    <span className="flex items-center justify-center w-full h-full rounded-full bg-[#020b1c]">
      <span className="text-sm font-bold bg-gradient-to-r from-[#186EF2] to-[#6D18EF] bg-clip-text text-transparent">
        {direction === "prev" ? "‹" : "›"}
      </span>
    </span>
  </button>
));
CarouselButton.displayName = "CarouselButton";

const FeatureCard = memo<FeatureCardProps>(({ feature }) => (
  <div className="flex gap-4 items-start group">
    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors duration-300">
      <Image
        src={feature.icon}
        alt=""
        width={32}
        height={32}
        className="object-contain"
        loading="lazy"
      />
    </div>
    <div>
      <h4 className="text-white font-semibold text-lg">{feature.title}</h4>
      <p className="text-white/60 text-sm">{feature.desc}</p>
    </div>
  </div>
));
FeatureCard.displayName = "FeatureCard";
const SectionHeader = memo<SectionHeaderProps>(({ ghostText, title, description }) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
    <div className="relative inline-block">
      <WaveGradient className="absolute -top-3 left-20 -translate-x-1/2" />
      <h2 className="ghost-outline-heading ghost-outline-lg" aria-hidden="true">
        {ghostText}
      </h2>
      <h2 className="relative z-10 text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
        {title}
      </h2>
    </div>
    {description && <p className="text-white/70 max-w-xl">{description}</p>}
  </div>
));
SectionHeader.displayName = "SectionHeader";

const PartnersAndFeatures = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const handlePrevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + PARTNER_LOGOS.length) % PARTNER_LOGOS.length);
  }, []);

  const handleNextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % PARTNER_LOGOS.length);
  }, []);


  const visibleLogos = PARTNER_LOGOS.slice(currentSlide, currentSlide + 5).concat(
    PARTNER_LOGOS.slice(0, Math.max(0, currentSlide + 5 - PARTNER_LOGOS.length))
  );

  return (
    <section className="bg-[#010814] pt-20 pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-24">
        <SectionHeader
          ghostText="BRAND"
          title={
            <>
              We've More Then <span className="text-cyan-400">254+</span> <br />
              Global Partners
            </>
          }
          description="Sed ut perspiciatis unde omnis natus error voluptatem santium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae
            ab nllo inventore veritatis quasi architecto beatae vitae"
        />
        <div
          className="relative flex items-center justify-center gap-12 opacity-80"
          role="region"
          aria-label="Partner logos carousel"
        >
          <CarouselButton
            direction="prev"
            onClick={handlePrevSlide}
            ariaLabel="Previous partners"
          />

          {visibleLogos.map((logo, index) => (
            <Image
              key={`${logo}-${index}`}
              src={`/images/${logo}.png`}
              alt={`${logo} logo`}
              width={120}
              height={50}
              className="object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
              loading="lazy"
            />
          ))}

          <CarouselButton
            direction="next"
            onClick={handleNextSlide}
            ariaLabel="Next partners"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative flex justify-center items-center">
            <Image
              src="/images/features-character.png"
              alt="Professional business solutions character"
              width={300}
              height={300}
              className="relative z-10"
              priority
              quality={90}
            />
            <div className="absolute left-6 top-12 animate-float pointer-events-none">
              <Image
                src="/images/floating-icons.png"
                alt=""
                width={90}
                height={260}
                className="object-contain"
                loading="lazy"
              />
            </div>
          </div>
          <div className="space-y-8">
            <div className="relative inline-block">
              <WaveGradient
                className="absolute -top-3 left-0 sm:left-20"
                gradientId="waveGradient2"
              />
              <h3 className="ghost-outline-heading ghost-outline-lg" aria-hidden="true">
                FEATURES
              </h3>
              <h3 className="relative z-10 text-3xl font-bold text-white">
                Explore Our Professional <br /> Business Solutions
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
              {FEATURES.map((feature) => (
                <FeatureCard key={feature.title} feature={feature} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersAndFeatures;