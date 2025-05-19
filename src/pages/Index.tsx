
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ProfileSection from "@/components/ProfileSection";
import { useEffect } from "react";

const Index = () => {
  // Update the page title
  useEffect(() => {
    document.title = "Siddhant Bisht | Portfolio";
  }, []);

  return (
    <div className="min-h-screen bg-navy">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ProfileSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
