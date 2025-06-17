
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            I'm always open to discussing new opportunities and interesting projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-medium text-gray-900 mb-8">Let's work together</h3>
            <p className="text-gray-600 mb-12 leading-relaxed">
              Whether you have a project in mind, need help with development, or just want to say hello, 
              I'd love to hear from you. Drop me a message and I'll get back to you as soon as possible.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <div className="text-gray-900 font-medium">Email</div>
                  <div className="text-gray-600">zfu04@tufts.com</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <div className="text-gray-900 font-medium">Phone</div>
                  <div className="text-gray-600">646-744-4902</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <div className="text-gray-900 font-medium">Location</div>
                  <div className="text-gray-600">Medford, MA</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-100">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-900 font-medium mb-2">Name</label>
                  <Input 
                    id="name"
                    placeholder="Your name"
                    className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-900 font-medium mb-2">Email</label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-900 font-medium mb-2">Subject</label>
                <Input 
                  id="subject"
                  placeholder="Project inquiry"
                  className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-900 font-medium mb-2">Message</label>
                <Textarea 
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={6}
                  className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl transition-all duration-300"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
