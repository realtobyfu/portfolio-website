
import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 bg-gradient-to-br from-emerald-50 to-purple-50">
      <div className="container mx-auto text-center max-w-4xl">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-light mb-8 text-gray-900">
            Tobias Fu
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            I'm a developer and designer interested in tool-making, infrastructure, 
            visibility, and open source.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full transition-all duration-300"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-3 rounded-full transition-all duration-300"
            >
              Download CV
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6 mb-16">
            <a href="#" className="text-gray-400 hover:text-emerald-600 transition-colors duration-300">
              <Github size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-emerald-600 transition-colors duration-300">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-emerald-600 transition-colors duration-300">
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="animate-bounce">
          <ChevronDown className="text-gray-400 mx-auto" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
