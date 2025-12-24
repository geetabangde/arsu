"use client";

export default function FactsSection() {
  return (
    <section className="bg-[#0a0e1a] py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading Section */}
        <div className="relative mb-16 flex items-start justify-between">
          <div>
            {/* Ghost Text */}
            <div className="absolute -left-4 -top-8 text-[140px] font-black text-white/[0.03] leading-none pointer-events-none select-none">
              FACT
            </div>

            {/* Decorative Wave */}
            <div className="flex items-center gap-1 mb-6 relative z-10">
              <div className="relative">
                <div className="w-12 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                <div className="absolute -top-[3px] left-0 w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="absolute -top-[3px] left-4 w-2 h-2 bg-purple-500 rounded-full"></div>
                <div className="absolute -top-[3px] right-0 w-2 h-2 bg-pink-500 rounded-full"></div>
              </div>
            </div>

            <h3 className="text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight relative z-10">
              Let's See Our Company <br /> 
              Achievement
            </h3>

            <p className="text-gray-400 mt-4 max-w-md leading-relaxed relative z-10">
              Sed ut perspiciatis unde omnis iste natus error sit ways
              voluptatem accusantium doloremque laudantium totam rem
              aperiam eaque ipsa quae abillo inventore.
            </p>
          </div>

          {/* Floating Play Button */}
          <div className="hidden lg:block">
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
                <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-orange-500 border-b-8 border-b-transparent ml-1"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards - Tilted Design */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10 perspective-1000">
          {[
            { value: "150+", label: "Project Completed", rotation: "-rotate-2" },
            { value: "250+", label: "Satisfied Clients", rotation: "rotate-1" },
            { value: "50+", label: "Expert Teams", rotation: "-rotate-1" },
          ].map((item, i) => (
            <div
              key={i}
              className={`group ${item.rotation} hover:rotate-0 transition-all duration-500`}
            >
              <div className="relative bg-gradient-to-br from-[#2a2f45] to-[#1a1e30] rounded-2xl p-10 text-center border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 overflow-hidden transform hover:-translate-y-2">
                
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-blue-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:via-blue-500/5 group-hover:to-pink-500/10 transition-all duration-500"></div>
                
                {/* Icon */}
                <div className="relative z-10 mb-6 flex justify-center">
                  <div className="w-16 h-16 flex items-center justify-center">
                    {i === 0 && (
                      <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    )}
                    {i === 1 && (
                      <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    )}
                    {i === 2 && (
                      <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    )}
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h4 className="text-5xl lg:text-6xl font-bold text-white mb-3 tracking-tight">
                    {item.value}
                  </h4>
                  <p className="text-gray-300 text-base font-medium tracking-wide">
                    {item.label}
                  </p>
                </div>

                {/* Corner decorations */}
                <div className="absolute top-3 right-3 w-2 h-2 bg-purple-500/30 rounded-full"></div>
                <div className="absolute bottom-3 left-3 w-2 h-2 bg-blue-500/30 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}