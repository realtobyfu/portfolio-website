
const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Swift/SwiftUI", level: 88 },
        { name: "React Native", level: 85 },
        { name: "Tailwind CSS", level: 92 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "NestJS", level: 85 },
        { name: "PostgreSQL", level: 82 },
        { name: "Supabase", level: 88 },
        { name: "AWS", level: 75 }
      ]
    },
    {
      title: "Tools & Design",
      skills: [
        { name: "Git", level: 95 },
        { name: "Figma", level: 90 },
        { name: "Docker", level: 80 },
        { name: "VS Code", level: 95 },
        { name: "Linear", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-2xl font-medium text-gray-900 mb-8 text-center">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-emerald-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
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
