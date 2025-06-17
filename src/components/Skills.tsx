
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript", level: 88 },
        { name: "Swift/SwiftUI", level: 75 },
        { name: "React Native", level: 80 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Styled Components", level: 70 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "NestJS", level: 75 },
        { name: "Python", level: 82 },
        { name: "Flask", level: 70 },
        { name: "Java", level: 78 },
        { name: "Spring Framework", level: 72 }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "MySQL", level: 82 },
        { name: "Redis", level: 75 },
        { name: "Supabase", level: 78 }
      ]
    },
    {
      title: "Tools & Design",
      skills: [
        { name: "Git", level: 90 },
        { name: "Figma", level: 85 },
        { name: "VS Code", level: 88 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Vercel", level: 80 },
        { name: "Linear", level: 85 },
        { name: "GitHub Copilot", level: 82 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="bg-gradient-to-br from-emerald-50 to-purple-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
