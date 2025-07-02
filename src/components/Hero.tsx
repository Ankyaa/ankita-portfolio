
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            Hi, I'm{" "}
            <span className="text-primary">Ankita Parit</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8">
            Senior Project Specialist & Data Analytics Expert
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Accomplished project management professional with 6+ years of experience delivering 
            complex projects from inception to closure. Expert in data visualization, stakeholder 
            engagement, and driving operational efficiency across diverse industries.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="hover-scale">
              View My Work
            </Button>
            <Button variant="outline" size="lg" className="hover-scale">
              Download CV
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="icon" className="hover-scale">
              <Github className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="hover-scale">
              <Linkedin className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="hover-scale">
              <Mail className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
