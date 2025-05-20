
import { AspectRatio } from "@/components/ui/aspect-ratio";

const AboutSection = () => {
  // Helper function to extract YouTube ID from URL
  const getYoutubeEmbedUrl = (url: string) => {
    if (!url) return null;
    
    // Match patterns for YouTube URLs
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|shorts\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    
    if (match && match[2].length === 11) {
      return `https://www.youtube.com/embed/${match[2]}`;
    }
    
    return null;
  };
  
  const introVideoUrl = "https://youtu.be/4BSWtmFG_2k?si=GL67ThOlBv1ldUDh";

  return (
    <section id="about" className="py-20 bg-navy">
      <div className="container">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-lightestSlate">
            <span className="text-teal">01.</span> About Me
          </h2>
          <div className="h-px bg-lightNavy flex-grow"></div>
        </div>
        
        <div className="space-y-12">
          {/* Introduction Video */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-lightestSlate mb-4">INTRODUCTION</h3>
            <div className="rounded-md overflow-hidden">
              <AspectRatio ratio={16/9} className="bg-lightNavy">
                {getYoutubeEmbedUrl(introVideoUrl) ? (
                  <iframe 
                    src={getYoutubeEmbedUrl(introVideoUrl)}
                    title="Introduction Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen 
                    className="w-full h-full rounded-md"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <p className="text-slate">Video unavailable</p>
                  </div>
                )}
              </AspectRatio>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-lightestSlate">Educational Background</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><span className="text-teal font-medium">Name:</span> Siddhant Bisht</p>
                  <p><span className="text-teal font-medium">Course:</span> Bachelor of Technology (B.Tech)</p>
                  <p><span className="text-teal font-medium">Branch:</span> Computer Science and Engineering (Core)</p>
                </div>
                <div>
                  <p><span className="text-teal font-medium">University:</span> Graphic Era Hill University, Dehradun</p>
                  <p><span className="text-teal font-medium">Year:</span> 2nd Year</p>
                  <p><span className="text-teal font-medium">Semester:</span> 4th Semester</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <p>
                I am passionate about full-stack development with expertise in both frontend and backend technologies.
                My interest in web development started back in 2015 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
              </p>
              <p>
                I excel at building scalable web applications with clean, maintainable code and focus on delivering exceptional user experiences through responsive design and performance optimization.
              </p>
              <p className="pb-4">Here are a few technologies I've been working with recently:</p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {["JavaScript (ES6+)", "TypeScript", "React", "Node.js", "Next.js", "Tailwind CSS"].map((tech, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-teal mr-2">▹</span> {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
