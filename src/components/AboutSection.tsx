
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-navy">
      <div className="container">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-lightestSlate">
            <span className="text-teal">01.</span> About Me
          </h2>
          <div className="h-px bg-lightNavy flex-grow"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2 space-y-4">
            <p>
              Hello! My name is Siddhant, and I enjoy creating things that live on the internet. 
              My interest in web development started back in 2015 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
            </p>
            <p>
              Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
            </p>
            <p>
              I also recently launched a course that covers everything you need to build a web app with the MERN stack.
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
          
          <Card className="bg-lightNavy border-lightNavy overflow-hidden group">
            <CardContent className="p-0 relative">
              <div className="absolute inset-0 bg-teal/20 z-10 group-hover:bg-transparent transition-all duration-300"></div>
              <div className="absolute inset-0 border-2 border-teal translate-x-4 translate-y-4 z-0 group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-300"></div>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3" 
                alt="Siddhant Bishte"
                className="w-full h-auto relative z-0"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
