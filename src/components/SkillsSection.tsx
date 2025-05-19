
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Database, Layout } from "lucide-react";

interface SkillCategory {
  name: string;
  icon: JSX.Element;
  skills: { name: string; level: number }[];
}

const SkillsSection = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: "Frontend",
      icon: <Layout className="h-5 w-5" />,
      skills: [
        { name: "HTML & CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 80 },
        { name: "TypeScript", level: 75 },
        { name: "Tailwind CSS", level: 85 }
      ]
    },
    {
      name: "Backend",
      icon: <Database className="h-5 w-5" />,
      skills: [
        { name: "Node.js", level: 75 },
        { name: "Express", level: 70 },
        { name: "MongoDB", level: 65 },
        { name: "SQL", level: 60 },
        { name: "API Design", level: 70 }
      ]
    },
    {
      name: "Other",
      icon: <Code className="h-5 w-5" />,
      skills: [
        { name: "Git", level: 80 },
        { name: "C/C++", level: 75 },
        { name: "Python", level: 70 },
        { name: "Problem Solving", level: 85 },
        { name: "Linux", level: 65 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-navy">
      <div className="container">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-lightestSlate">
            <span className="text-teal">02.</span> My Skills
          </h2>
          <div className="h-px bg-lightNavy flex-grow"></div>
        </div>

        <Tabs defaultValue="Frontend" className="w-full">
          <TabsList className="grid w-full md:w-[400px] grid-cols-3">
            {skillCategories.map((category) => (
              <TabsTrigger key={category.name} value={category.name} className="flex items-center gap-2">
                {category.icon}
                <span className="hidden sm:inline">{category.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {skillCategories.map((category) => (
            <TabsContent key={category.name} value={category.name} className="mt-6">
              <Card className="bg-lightNavy border-lightNavy">
                <CardContent className="pt-6">
                  <div className="grid gap-6">
                    {category.skills.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-lightestSlate">{skill.name}</span>
                          <span className="text-teal">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2 bg-navy" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default SkillsSection;
