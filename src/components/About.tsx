
import { MapPin, Camera, BookOpen, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-light text-stone-800 mb-4">About</h1>
          <p className="text-xl text-stone-600">
            A photographer's journey through time, memory, and light
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=600&q=80"
              alt="About"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl font-light text-stone-800">The Journey</h2>
            <p className="text-stone-600 leading-relaxed">
              Obsessed with the life and works of Marcel Proust, I set out to experience firsthand what inspired 
              the legendary writer's greatest works. My journey led me to the little French town of Illiers-Combray, 
              which Proust visited during his childhood and which sets the scene for much of his novel "In Search of Lost Time."
            </p>
            <p className="text-stone-600 leading-relaxed">
              Through my lens, I seek to capture not just images, but the essence of time itself—the way light 
              falls across ancient stones, the whisper of memory in sacred spaces, and the eternal dance between 
              presence and remembrance.
            </p>
          </div>
        </div>

        {/* Philosophy */}
        <div className="bg-stone-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-light text-stone-800 mb-6 text-center">Philosophy</h2>
          <blockquote className="text-xl font-light text-stone-700 italic text-center max-w-3xl mx-auto">
            "The real voyage of discovery consists not in seeking new landscapes, but in having new eyes."
            <footer className="text-lg text-stone-500 mt-4 not-italic">— Marcel Proust</footer>
          </blockquote>
          <p className="text-stone-600 text-center mt-6 max-w-2xl mx-auto">
            This quote guides my work. Each photograph is an attempt to see familiar places with fresh eyes, 
            to find the extraordinary hidden within the ordinary.
          </p>
        </div>

        {/* Stats/Info */}
        <div className="grid md:grid-cols-4 gap-8 text-center mb-16">
          <div className="group">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors">
              <Camera className="w-8 h-8 text-amber-700" />
            </div>
            <h3 className="text-2xl font-light text-stone-800">500+</h3>
            <p className="text-stone-600">Photographs</p>
          </div>
          
          <div className="group">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors">
              <MapPin className="w-8 h-8 text-amber-700" />
            </div>
            <h3 className="text-2xl font-light text-stone-800">25</h3>
            <p className="text-stone-600">Locations</p>
          </div>
          
          <div className="group">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors">
              <BookOpen className="w-8 h-8 text-amber-700" />
            </div>
            <h3 className="text-2xl font-light text-stone-800">12</h3>
            <p className="text-stone-600">Blog Posts</p>
          </div>
          
          <div className="group">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors">
              <Heart className="w-8 h-8 text-amber-700" />
            </div>
            <h3 className="text-2xl font-light text-stone-800">∞</h3>
            <p className="text-stone-600">Passion</p>
          </div>
        </div>

        {/* Equipment */}
        <div className="text-center">
          <h2 className="text-3xl font-light text-stone-800 mb-8">Equipment</h2>
          <div className="bg-white rounded-lg p-8 shadow-sm border border-stone-200">
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-medium text-stone-800 mb-4">Camera Bodies</h3>
                <ul className="space-y-2 text-stone-600">
                  <li>Canon EOS R5</li>
                  <li>Canon EOS 5D Mark IV</li>
                  <li>Leica M10-P (for street photography)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium text-stone-800 mb-4">Lenses</h3>
                <ul className="space-y-2 text-stone-600">
                  <li>Canon RF 24-70mm f/2.8L IS USM</li>
                  <li>Canon RF 85mm f/1.2L USM</li>
                  <li>Canon RF 16-35mm f/2.8L IS USM</li>
                  <li>Leica Summicron-M 50mm f/2</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;