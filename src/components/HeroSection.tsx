
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useLocalStorage } from "@/hooks/useLocalStorage";

const HeroSection = () => {
  const [avatarImage, setAvatarImage] = useLocalStorage<string>("avatar-image", "https://ibb.co/mFRc1Jj");
  
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-20 pb-10">
      <div className="container">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <div className="relative">
              <Avatar className="w-40 h-40 border-4 border-teal rounded-full overflow-hidden">
                {avatarImage ? (
                  <AvatarImage src={avatarImage} alt="Profile" className="object-cover w-full h-full rounded-full" />
                ) : (
                  <AvatarFallback className="bg-lightNavy text-4xl text-teal w-full h-full flex items-center justify-center">
                    SB
                  </AvatarFallback>
                )}
              </Avatar>
            </div>
            <div className="text-center md:text-left">
              <p className="text-teal font-mono opacity-0 animate-fadeIn">Hi, I'm</p>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-lightestSlate opacity-0 animate-fadeIn animate-delay-100">
                Siddhant Bisht
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate opacity-0 animate-fadeIn animate-delay-200">
                A passionate coder and aspiring full stack developer exploring the world of technology.
              </h2>
            </div>
          </div>

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
