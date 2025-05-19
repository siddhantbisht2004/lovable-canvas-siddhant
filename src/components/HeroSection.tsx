
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-20 pb-10">
      <div className="container">
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-teal font-mono opacity-0 animate-fadeIn">Hi, my name is</p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-lightestSlate opacity-0 animate-fadeIn animate-delay-100">
            Siddhant Bishte.
          </h1>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-slate opacity-0 animate-fadeIn animate-delay-200">
            I build things for the web.
          </h2>
          <p className="text-lg text-slate max-w-xl opacity-0 animate-fadeIn animate-delay-300">
            I'm a software developer specializing in building exceptional digital experiences. 
            Currently, I'm focused on creating accessible, human-centered products.
          </p>
          <div className="pt-4 opacity-0 animate-fadeIn animate-delay-400">
            <Button 
              className="bg-transparent hover:bg-teal/10 text-teal border border-teal px-7 py-4 rounded-md text-lg"
              asChild
            >
              <a href="#projects">Check out my work</a>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="text-teal" size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
