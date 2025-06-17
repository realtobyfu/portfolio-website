
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Write-It-Down",
      description: "A SwiftUI journaling app with 4.8-star App Store rating. Features custom visualization components with smooth animations and offline-first architecture.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80",
      technologies: ["Swift", "SwiftUI", "Supabase", "CoreData"],
      liveUrl: "https://apps.apple.com/us/app/write-it-down/id6742731898",
      githubUrl: "#"
    },
    {
      title: "Karma Farm",
      description: "Cross-platform location-based service app built with React Native. Leading development as founding software engineer with Redux state management.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      technologies: ["React Native", "TypeScript", "Redux", "Styled Components"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Project Board",
      description: "Web platform connecting CS students for collaborative projects. Built with Express.js backend and Next.js frontend using monorepo architecture.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      technologies: ["Next.js", "Node.js", "Supabase", "TypeScript"],
      liveUrl: "#",
      githubUrl: "https://github.com/realtobyfu/project-board"
    },
    {
      title: "ProustGPT",
      description: "Sophisticated RAG pipeline with React.js frontend and Flask backend. Improved response accuracy by 40% through intelligent context retrieval.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
      technologies: ["React.js", "Python", "Flask", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "https://github.com/realtobyfu/proust-gpt"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Recent projects showcasing my development skills and creativity
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              
              <div className="p-8">
                <h3 className="text-xl font-medium text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-emerald-50 text-emerald-700 text-sm rounded-full border border-emerald-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-gray-300 text-gray-600 hover:bg-gray-50"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
