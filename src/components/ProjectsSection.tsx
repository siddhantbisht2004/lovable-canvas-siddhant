
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
  category: string[];
}

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio website built with React and Tailwind CSS. Features smooth scrolling, responsive design, and animated elements.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      tags: ["React", "Tailwind CSS", "JavaScript"],
      github: "https://github.com",
      demo: "https://example.com",
      category: ["Web", "Frontend"]
    },
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application with product catalog, cart functionality, user authentication, and payment processing.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3",
      tags: ["React", "Node.js", "MongoDB", "Express", "Redux"],
      github: "https://github.com",
      demo: "https://example.com",
      category: ["Web", "Full Stack"]
    },
    {
      title: "Task Management App",
      description: "A productivity application that helps users organize tasks, set priorities, and track progress with a clean, intuitive interface.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3",
      tags: ["React", "TypeScript", "Firebase", "Material UI"],
      github: "https://github.com",
      demo: "https://example.com",
      category: ["Web", "Frontend"]
    },
    {
      title: "Weather Dashboard",
      description: "A weather application that displays current conditions and forecasts for any location, with beautiful visualizations of weather data.",
      image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3",
      tags: ["React", "OpenWeather API", "Chart.js", "CSS"],
      github: "https://github.com",
      demo: "https://example.com",
      category: ["Web", "API"]
    },
    {
      title: "Mobile Chat Application",
      description: "A real-time messaging app built with React Native, featuring read receipts, typing indicators, and push notifications.",
      image: "https://images.unsplash.com/photo-1529336953128-a85760f58cb5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      tags: ["React Native", "Firebase", "Socket.io"],
      github: "https://github.com",
      demo: "https://example.com",
      category: ["Mobile", "Full Stack"]
    },
    {
      title: "Content Management System",
      description: "A custom CMS built for managing blog content with rich text editing, media management, and scheduled publishing.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3",
      tags: ["Next.js", "MongoDB", "AWS S3", "TailwindCSS"],
      github: "https://github.com",
      demo: "https://example.com",
      category: ["Web", "Full Stack"]
    },
  ];

  const categories = ["All", "Web", "Mobile", "Frontend", "Full Stack", "API"];
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category.includes(filter));

  return (
    <section id="projects" className="py-20 bg-navy">
      <div className="container">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-lightestSlate">
            <span className="text-teal">03.</span> Projects I've Built
          </h2>
          <div className="h-px bg-lightNavy flex-grow"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <Button 
              key={index}
              variant={filter === category ? "default" : "outline"}
              className={filter === category 
                ? "bg-teal text-navy hover:bg-teal/90" 
                : "border-teal text-teal hover:bg-teal/10"}
              onClick={() => setFilter(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="bg-lightNavy border-lightestNavy overflow-hidden hover:-translate-y-2 transition-transform duration-300">
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lightestSlate">{project.title}</CardTitle>
                <CardDescription className="text-slate line-clamp-2">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} className="bg-navy text-teal">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="sm" className="text-lightSlate hover:text-teal">
                    <Github className="mr-2 h-4 w-4" /> Code
                  </Button>
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="sm" className="text-lightSlate hover:text-teal">
                    <ExternalLink className="mr-2 h-4 w-4" /> Demo
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button className="bg-transparent hover:bg-teal/10 text-teal border border-teal px-6" asChild>
            <a href="https://github.com/siddhantbishte" target="_blank" rel="noopener noreferrer">
              See More Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
