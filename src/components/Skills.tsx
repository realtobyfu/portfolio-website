
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React.js", "TypeScript", "JavaScript", "Swift/SwiftUI", "React Native", "Tailwind CSS", "Styled Components"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "NestJS", "Python", "Flask", "Java", "Spring Framework"]
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Supabase"]
    },
    {
      title: "Tools & Design",
      skills: ["Git", "Figma", "VS Code", "Docker", "AWS", "Vercel", "Linear", "GitHub Copilot"]
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
                  <div key={skill} className="flex items-center justify-between">
                    <span className="text-gray-700 font-medium">{skill}</span>
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
