import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, Calendar, MapPin, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const Work = () => {
  const projects = [
    {
      id: 1,
      title: "Write-It-Down",
      company: "Personal Project",
      role: "iOS Developer",
      period: "2024 - Present",
      location: "Remote",
      status: "Live",
      description: "A SwiftUI journaling app with 4.8-star App Store rating. Features custom visualization components with smooth animations and offline-first architecture. Built with modern iOS development practices including MVVM architecture, Combine framework, and Core Data persistence.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80",
      technologies: ["Swift", "SwiftUI", "Supabase", "CoreData", "Combine", "MVVM"],
      achievements: [
        "4.8-star App Store rating",
        "1000+ downloads in first month",
        "Featured in iOS development communities"
      ],
      liveUrl: "https://apps.apple.com/us/app/write-it-down/id6742731898",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Karma Farm",
      company: "Startup",
      role: "Founding Software Engineer",
      period: "2023 - 2024",
      location: "San Francisco, CA",
      status: "In Development",
      description: "Cross-platform location-based service app built with React Native. Leading development as founding software engineer with Redux state management. The app connects users to local sustainable farming initiatives and tracks environmental impact.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      technologies: ["React Native", "TypeScript", "Redux", "Styled Components", "GraphQL", "PostgreSQL"],
      achievements: [
        "Led development team of 3 engineers",
        "Architected scalable mobile app infrastructure",
        "Implemented real-time location tracking"
      ],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Project Board",
      company: "UC Berkeley",
      role: "Full Stack Developer",
      period: "2023",
      location: "Berkeley, CA",
      status: "Live",
      description: "Web platform connecting CS students for collaborative projects. Built with Express.js backend and Next.js frontend using monorepo architecture. Implemented real-time collaboration features and intelligent project matching algorithms.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      technologies: ["Next.js", "Node.js", "Supabase", "TypeScript", "TailwindCSS", "Prisma"],
      achievements: [
        "200+ student users in first semester",
        "Facilitated 50+ successful project collaborations",
        "Reduced project team formation time by 60%"
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/realtobyfu/project-board"
    },
    {
      id: 4,
      title: "ProustGPT",
      company: "Research Project",
      role: "AI Engineer",
      period: "2023",
      location: "Berkeley, CA",
      status: "Research",
      description: "Sophisticated RAG pipeline with React.js frontend and Flask backend. Improved response accuracy by 40% through intelligent context retrieval. Implemented advanced NLP techniques for literary analysis and semantic search.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
      technologies: ["React.js", "Python", "Flask", "Tailwind CSS", "OpenAI API", "Vector DB"],
      achievements: [
        "40% improvement in response accuracy",
        "Published research findings",
        "Pioneered novel RAG architecture"
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/realtobyfu/proust-gpt"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live": return "bg-green-100 text-green-800 border-green-200";
      case "In Development": return "bg-blue-100 text-blue-800 border-blue-200";
      case "Research": return "bg-purple-100 text-purple-800 border-purple-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-50 to-blue-50 py-16 pt-36">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Project Timeline
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            A comprehensive look at my development journey, from personal projects to startup ventures
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div className="container mx-auto px-6 py-16">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 to-blue-500"></div>
          
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div key={project.id} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-white border-4 border-emerald-500 rounded-full shadow-lg"></div>
                
                {/* Project card */}
                <div className="ml-20">
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      
                      <div className="md:w-2/3 p-6">
                        <CardHeader className="p-0 mb-4">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <CardTitle className="text-xl font-medium text-gray-900 mb-1">
                                {project.title}
                              </CardTitle>
                              <CardDescription className="flex items-center gap-4 text-sm text-gray-600">
                                <span className="flex items-center gap-1">
                                  <Building2 size={14} />
                                  {project.company}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Calendar size={14} />
                                  {project.period}
                                </span>
                                <span className="flex items-center gap-1">
                                  <MapPin size={14} />
                                  {project.location}
                                </span>
                              </CardDescription>
                            </div>
                            <Badge className={`${getStatusColor(project.status)} border`}>
                              {project.status}
                            </Badge>
                          </div>
                          <div className="text-sm font-medium text-emerald-600 mb-3">
                            {project.role}
                          </div>
                        </CardHeader>
                        
                        <CardContent className="p-0">
                          <p className="text-gray-600 mb-4 leading-relaxed">
                            {project.description}
                          </p>
                          
                          {/* Technologies */}
                          <div className="mb-4">
                            <h4 className="text-sm font-medium text-gray-900 mb-2">Technologies</h4>
                            <div className="flex flex-wrap gap-1">
                              {project.technologies.map((tech, techIndex) => (
                                <Badge 
                                  key={techIndex}
                                  variant="secondary"
                                  className="text-xs"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          
                          {/* Achievements */}
                          <div className="mb-6">
                            <h4 className="text-sm font-medium text-gray-900 mb-2">Key Achievements</h4>
                            <ul className="space-y-1">
                              {project.achievements.map((achievement, achIndex) => (
                                <li key={achIndex} className="text-sm text-gray-600 flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          {/* Actions */}
                          <div className="flex gap-3">
                            <Button 
                              variant="default" 
                              size="sm"
                              className="bg-emerald-600 hover:bg-emerald-700"
                              onClick={() => window.open(project.liveUrl, '_blank')}
                            >
                              <ExternalLink size={14} className="mr-2" />
                              View Live
                            </Button>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => window.open(project.githubUrl, '_blank')}
                            >
                              <Github size={14} className="mr-2" />
                              Source Code
                            </Button>
                          </div>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Work; 