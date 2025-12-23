import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/Home/HeroSection";
import PartnersSection from './components/PartnersSection/PartnersSection'

export default function Home() {
  return (
   <main className="relative min-h-screen">
      {/* Cyan Border Frame - Exactly as in original design */}
      <div className="fixed inset-0 pointer-events-none z-[100]">
        <div className="absolute inset-0 border-[3px] sm:border-4 border-[#00d9ff]"></div>
      </div>

      {/* Main Content */}
      <div className="relative bg-[#081420] min-h-screen">
        <Navbar />
        <HeroSection />
        <PartnersSection />
      </div>
    </main>


  );
}