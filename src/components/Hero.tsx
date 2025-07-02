
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [showScrollButton, setShowScrollButton] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.querySelector('#contact');
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        const isContactVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
        setShowScrollButton(!isContactVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initially

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Background Wallpaper */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop")`
        }}
      ></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.05'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Photo */}
          <div className="mb-8 flex justify-center">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <img 
                src="/lovable-uploads/0f7a555b-f3bc-4d06-9ff7-997e4f06792a.png" 
                alt="Ankita Parit"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            Hi, I'm{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Ankita Parit</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-4">
            Senior Project Specialist & Data Analytics Expert
          </p>
          <p className="text-lg text-primary font-medium mb-8">
            🤖 Passionate about AI & Machine Learning
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Accomplished project management professional with 6+ years of experience delivering 
            complex projects from inception to closure. Expert in data visualization, stakeholder 
            engagement, and driving operational efficiency across diverse industries.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="hover-scale bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90">
              View My Work
            </Button>
            <Button variant="outline" size="lg" className="hover-scale">
              Download CV
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="icon" className="hover-scale hover:bg-primary/10">
              <Github className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="hover-scale hover:bg-primary/10">
              <Linkedin className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="hover-scale hover:bg-primary/10">
              <Mail className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - positioned at bottom right, hidden on contact page */}
      {showScrollButton && (
        <div className="fixed bottom-4 right-4 z-50 animate-bounce">
          <button
            onClick={scrollToNext}
            className="flex flex-col items-center text-primary hover:text-primary/80 transition-colors bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg"
          >
            <span className="text-xs mb-1">Scroll</span>
            <ChevronDown className="h-3 w-3" />
          </button>
        </div>
      )}
    </section>
  );
};
