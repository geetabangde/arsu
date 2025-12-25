"use client";

import Image from "next/image";

const projects = [
  {
    category: "Marketing",
    title: "Tech Website Solution",
    image: "/images/project-1.jpg",
  },
  {
    category: "Technology",
    title: "App Platform Integration",
    image: "/images/project-2.jpg",
  },
  {
    category: "Software",
    title: "Software Tools Development",
    image: "/images/project-3.jpg",
  },
];

export default function CompletedProjectsSection() {
  return (
    <section className="bg-[#010814] py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative text-center mb-20">
          <svg
            width="46"
            height="10"
            viewBox="0 0 46 10"
            fill="none"
            className="mx-auto mb-3"
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
            PROJECTS
          </h2>
          <h3 className="relative z-10 text-4xl md:text-5xl font-bold text-white leading-tight">
            Checkout our Recently <br />
            Completed Projects
          </h3>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <div
              key={i}
              className="relative overflow-hidden group"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={100}
                height={600}
                className="w-full h-[440px] object-cover
                transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <span
                  className="
                    inline-block
                    text-sm font-medium text-white
                    px-4 py-2
                    bg-gradient-to-r from-indigo-600 to-purple-600
                    relative z-20
                  "
                >
                  {project.category}
                </span>
                <div
                  className="
                    bg-[#23263a]
                    -mt-2
                    px-7 py-6
                    shadow-[0_25px_50px_rgba(0,0,0,0.45)]"
                >
                  <h4 className="text-white text-xl font-semibold leading-snug">
                    {project.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-3 mt-14">
          <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-white/30"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-white/30"></span>
        </div>

      </div>
    </section>
  );
}
