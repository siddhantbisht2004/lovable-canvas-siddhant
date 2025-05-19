
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const HeroSection = () => {
  const [introVideo, setIntroVideo] = useLocalStorage<string>("intro-video", "");
  const [newIntroVideo, setNewIntroVideo] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [avatarImage, setAvatarImage] = useLocalStorage<string>("avatar-image", "");
  
  // Helper function to extract YouTube ID from URL
  const getYoutubeEmbedUrl = (url: string) => {
    if (!url) return null;
    
    // Match patterns for YouTube URLs
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    
    if (match && match[2].length === 11) {
      return `https://www.youtube.com/embed/${match[2]}`;
    }
    
    return null;
  };
  
  const handleSaveVideo = () => {
    if (newIntroVideo.trim() !== "") {
      setIntroVideo(newIntroVideo);
      setNewIntroVideo("");
      setIsEditing(false);
    }
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-20 pb-10">
      <div className="container">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <div className="relative">
              <Avatar className="w-40 h-40 border-4 border-teal">
                {avatarImage ? (
                  <AvatarImage src={avatarImage} alt="Profile" className="object-cover" />
                ) : (
                  <AvatarFallback className="bg-lightNavy text-4xl text-teal">
                    SB
                  </AvatarFallback>
                )}
              </Avatar>
              {/* Removed the avatar edit button as requested */}
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
          
          {/* Intro Video Section */}
          <div className="mt-12 pt-6 border-t border-lightNavy opacity-0 animate-fadeIn animate-delay-500">
            <h3 className="text-xl font-bold text-lightestSlate mb-4">My Intro Video</h3>
            
            {isEditing ? (
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-slate block mb-2">YouTube Link:</label>
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      placeholder="Paste YouTube link" 
                      value={newIntroVideo}
                      onChange={(e) => setNewIntroVideo(e.target.value)}
                      className="flex h-10 w-full rounded-md border border-lightestNavy bg-navy px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                    <Button onClick={handleSaveVideo} className="bg-teal text-navy hover:bg-teal/90">
                      Save
                    </Button>
                    <Button variant="outline" onClick={() => setIsEditing(false)} className="border-lightestNavy">
                      Cancel
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                {introVideo ? (
                  <div className="space-y-4">
                    <div className="rounded-md overflow-hidden">
                      {getYoutubeEmbedUrl(introVideo) ? (
                        <AspectRatio ratio={16/9}>
                          <iframe 
                            src={getYoutubeEmbedUrl(introVideo)}
                            title="Intro Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen 
                            className="w-full h-full"
                          />
                        </AspectRatio>
                      ) : (
                        <div className="bg-lightNavy p-4 text-center rounded">
                          Invalid YouTube URL format
                        </div>
                      )}
                    </div>
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        setNewIntroVideo(introVideo);
                        setIsEditing(true);
                      }}
                      className="border-teal text-teal hover:bg-teal/10"
                    >
                      Change Video
                    </Button>
                  </div>
                ) : (
                  <Button 
                    variant="outline" 
                    onClick={() => setIsEditing(true)}
                    className="border-teal text-teal hover:bg-teal/10"
                  >
                    Add Intro Video
                  </Button>
                )}
              </div>
            )}
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
