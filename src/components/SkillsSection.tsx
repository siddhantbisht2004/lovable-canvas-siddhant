
import { Progress } from "@/components/ui/progress";

interface Skill {
  name: string;
  percentage: number;
}

const SkillsSection = () => {
  const frontendSkills: Skill[] = [
    { name: "HTML & CSS", percentage: 95 },
    { name: "JavaScript", percentage: 90 },
    { name: "TypeScript", percentage: 85 },
    { name: "React", percentage: 90 },
    { name: "Next.js", percentage: 80 },
    { name: "Tailwind CSS", percentage: 85 },
  ];

  const backendSkills: Skill[] = [
    { name: "Node.js", percentage: 80 },
    { name: "Express", percentage: 85 },
    { name: "MongoDB", percentage: 75 },
    { name: "Firebase", percentage: 70 },
    { name: "SQL", percentage: 65 },
    { name: "GraphQL", percentage: 60 },
  ];

  const SkillBar = ({ skill }: { skill: Skill }) => (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span>{skill.name}</span>
        <span className="text-teal">{skill.percentage}%</span>
      </div>
      <Progress value={skill.percentage} className="h-2 bg-lightNavy" indicatorClassName="bg-teal" />
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-[#0a1728]">
      <div className="container">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-lightestSlate">
            <span className="text-teal">02.</span> My Skills
          </h2>
          <div className="h-px bg-lightNavy flex-grow"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-lightestSlate mb-6">Frontend Development</h3>
            {frontendSkills.map((skill, index) => (
              <SkillBar key={index} skill={skill} />
            ))}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-lightestSlate mb-6">Backend Development</h3>
            {backendSkills.map((skill, index) => (
              <SkillBar key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
