
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
  status: "completed" | "ongoing";
}

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      title: "GTK-based GUI Text Editor",
      description: "A text editor with a graphical user interface built using GTK and C programming language, featuring syntax highlighting and file management capabilities.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      tags: ["C", "GTK", "GUI", "Text Editor"],
      github: "https://github.com",
      demo: "https://example.com",
      category: ["Desktop", "C"],
      status: "completed"
    },
    {
      title: "Intelligent Chatbot",
      description: "A machine learning-powered chatbot that uses natural language processing to understand and respond to user queries with contextual awareness.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3",
      tags: ["Machine Learning", "NLP", "Python", "AI"],
      github: "https://github.com",
      demo: "https://example.com",
      category: ["AI", "ML"],
      status: "completed"
    },
    {
      title: "OWASP Top 10 Vulnerability Detector",
      description: "A security tool that scans web applications to identify and report potential vulnerabilities based on the OWASP Top 10 security risks.",
      image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3",
      tags: ["Security", "OWASP", "Web", "Scanner"],
      github: "https://github.com",
      demo: "https://example.com",
      category: ["Security", "Web"],
      status: "ongoing"
    }
  ];

  const categories = ["All", "Desktop", "Web", "AI", "ML", "Security", "C"];
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
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lightestSlate">{project.title}</CardTitle>
                  <Badge className={project.status === "completed" ? "bg-green-500/20 text-green-400" : "bg-amber-500/20 text-amber-400"}>
                    {project.status}
                  </Badge>
                </div>
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
