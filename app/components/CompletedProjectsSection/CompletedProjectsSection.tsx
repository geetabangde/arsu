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

        {/* ================= HEADING ================= */}
        <div className="relative text-center mb-20">

          {/* Ghost */}
          <h2 className="ghost-outline-heading ghost-outline-lg">
            PROJECTS
          </h2>

          

          {/* Main Heading */}
          <h2 className="relative z-10 text-4xl md:text-5xl font-bold text-white leading-tight">
            Checkout our Recently <br />
            Completed Projects
          </h2>

        </div>

        {/* ================= CARDS ================= */}
        <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, i) => (
            <div
            key={i}
            className="relative rounded-2xl overflow-hidden group"
            >
            {/* Image */}
            <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={500}
                className="object-cover w-full h-[420px] 
                group-hover:scale-110 transition-transform duration-700"
            />

            {/* Content Wrapper */}
            <div className="absolute bottom-6 left-6 right-6">
                
                {/* Category pill */}
                <span
                className="inline-block mb-3 text-xs font-medium text-white
                px-4 py-1 rounded-md
                bg-gradient-to-r from-indigo-600 to-purple-600"
                >
                {project.category}
                </span>

                {/* Dark title box */}
                <div className="bg-[#1c1f2e] rounded-md px-5 py-4">
                <h4 className="text-white text-lg font-semibold leading-snug">
                    {project.title}
                </h4>
                </div>

            </div>
            </div>
        ))}
        </div>


        {/* ================= DOTS ================= */}
        <div className="flex justify-center gap-3 mt-12">
          <span className="w-3 h-3 rounded-full bg-indigo-500"></span>
          <span className="w-3 h-3 rounded-full bg-white/30"></span>
          <span className="w-3 h-3 rounded-full bg-white/30"></span>
        </div>

      </div>
    </section>
  );
}
