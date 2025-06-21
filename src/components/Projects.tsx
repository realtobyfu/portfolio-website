import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  const componentWrapperRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

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

  useLayoutEffect(() => {
    const wrapper = componentWrapperRef.current;
    const scrollContainer = scrollRef.current;
    if (!wrapper || !scrollContainer) return;

    const setHeight = () => {
      const scrollableWidth = scrollContainer.scrollWidth - scrollContainer.clientWidth;
      wrapper.style.height = `${window.innerHeight + scrollableWidth}px`;
    };

    setHeight();
    const resizeObserver = new ResizeObserver(setHeight);
    resizeObserver.observe(scrollContainer);

    return () => resizeObserver.disconnect();
  }, []);

  useLayoutEffect(() => {
    const wrapper = componentWrapperRef.current;
    if (!wrapper) return;

    const handleScroll = () => {
      if (!scrollRef.current || !wrapper) return;
      const scrollAmount = window.scrollY - wrapper.offsetTop;
      const scrollableWidth = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;

      if (scrollAmount > 0 && scrollAmount <= scrollableWidth) {
        scrollRef.current.scrollLeft = scrollAmount;
      } else if (scrollAmount > scrollableWidth) {
        scrollRef.current.scrollLeft = scrollableWidth;
      } else {
        scrollRef.current.scrollLeft = 0;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div ref={componentWrapperRef} className="relative">
      <section 
        id="projects" 
        className="sticky top-0 py-24 px-6 bg-white h-screen flex items-center"
      >
        <div className="container mx-auto max-w-7xl w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Featured Projects
            </h2>
            {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Recent projects showcasing my development skills and creativity
            </p> */}
          </div>

          <div className="relative">
            {/* Hidden scrollbar container */}
            <div 
              ref={scrollRef}
              className="overflow-x-auto overflow-y-hidden pb-4 scrollbar-hide"
            >
              <div className="flex gap-8 w-max transition-all duration-300 ease-out">
                {projects.map((project, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 w-[520px] flex-shrink-0 group"
                  >
                    <div className="flex h-72">
                      {/* Image on the left */}
                      <div className="w-52 relative overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      
                      {/* Content on the right */}
                      <div className="flex-1 p-6 flex flex-col justify-between">
                        <div>
                          <h3 className="text-lg font-medium text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                            {project.title}
                          </h3>
                          <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                            {project.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-1 mb-4">
                            {project.technologies.map((tech, techIndex) => (
                              <span 
                                key={techIndex}
                                className="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-full border border-emerald-200 hover:bg-emerald-100 transition-colors duration-200"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex gap-3">
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white text-xs transition-all duration-300"
                            onClick={() => window.open(project.liveUrl, '_blank')}
                          >
                            <ExternalLink size={14} className="mr-1" />
                            Live Demo
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="border-gray-300 text-gray-600 hover:bg-gray-600 hover:text-white text-xs transition-all duration-300"
                            onClick={() => window.open(project.githubUrl, '_blank')}
                          >
                            <Github size={14} className="mr-1" />
                            Code
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* View All Work card at the end */}
                <div className="w-[520px] h-72 flex-shrink-0 flex items-center justify-center">
                  <div className="bg-gradient-to-br from-emerald-50 to-purple-50 rounded-2xl border-2 border-dashed border-emerald-200 hover:border-emerald-400 transition-all duration-300 p-8 text-center group hover:shadow-lg hover:-translate-y-1 h-full flex flex-col justify-center">
                    <div className="mb-6">
                      <div className="w-16 h-16 mx-auto bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-200 transition-colors duration-300">
                        <ArrowRight size={24} className="text-emerald-600 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">
                      View All Projects
                    </h3>
                    <p className="text-gray-600 text-sm mb-6">
                      Explore my complete portfolio with detailed project timelines and in-depth case studies
                    </p>
                    <Link to="/work">
                      <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all duration-300">
                        View All Work
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Progress indicator */}
            <div className="flex justify-center mt-8">
              <div className="flex gap-2">
                {projects.map((_, index) => (
                  <div 
                    key={index}
                    className="w-2 h-2 rounded-full bg-gray-300 transition-all duration-300"
                    style={{
                      backgroundColor: '#d1d5db',
                      transform: 'scale(1)'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
