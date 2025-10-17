import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import DemoSection from "@/components/sections/DemoSection";
import InteractiveDemoSection from "@/components/sections/InteractiveDemoSection";
import PerformanceSection from "@/components/sections/PerformanceSection";
import ArchitectureSection from "@/components/sections/ArchitectureSection";
import UpdatesSection from "@/components/sections/UpdatesSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <DemoSection />
      <InteractiveDemoSection />
      <PerformanceSection />
      <ArchitectureSection />
      <UpdatesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
