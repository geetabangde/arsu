import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/Home/HeroSection";
import PartnersAndFeatures from './components/PartnersAndFeatures/PartnersAndFeatures' 
import AwardsAgencySection from "./components/AwardsAgencySection/AwardsAgencySection";
import BusinessFeaturesSection from "./components/BusinessFeaturesSection/BusinessFeaturesSection";


export default function Home() {
  return (
   <main className="relative min-h-screen">
      {/* Main Content */}
      <div className="relative bg-[#081420] min-h-screen">
        <Navbar />
        <HeroSection />
        <PartnersAndFeatures />
        <AwardsAgencySection />
        <BusinessFeaturesSection />

        
      </div>
    </main>


  );
}