
import { Code2, Palette, Rocket } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "Building end-to-end solutions with React, Swift, and Node.js."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive interfaces with focus on user experience."
    },
    {
      icon: Rocket,
      title: "Mobile Apps",
      description: "Developing native iOS apps and cross-platform solutions."
    }
  ];

  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Recent graduate from Tufts University with experience in full-stack 
            development, mobile apps, and startup environments. Currently working on Karma Farm.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-20">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <item.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-emerald-50 to-purple-50 p-12 rounded-3xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-medium text-gray-900 mb-6">My Journey</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Currently studying Computer Science at Tufts University with a 3.53 GPA. 
                I've led development teams at Develop for Good and am now founding engineer 
                at Karma Farm while working full-stack at Vybes App.
              </p>
              <p className="text-gray-600 leading-relaxed">
                My apps have reached thousands of users, including Write-It-Down with a 
                4.8-star App Store rating. I'm passionate about creating tools that make 
                people's lives better.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-3xl font-light text-emerald-600">15+</div>
                <div className="text-gray-500">Projects Built</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-emerald-600">3.53</div>
                <div className="text-gray-500">GPA at Tufts</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-emerald-600">4.8★</div>
                <div className="text-gray-500">App Store Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-emerald-600">2025</div>
                <div className="text-gray-500">Graduation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
