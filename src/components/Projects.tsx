
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, BarChart3 } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Enterprise Data Visualization Dashboard",
      description: "Created comprehensive PowerBI and Tableau dashboards for real-time user data analysis and business insights",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      technologies: ["Power BI", "Tableau", "Business Analytics", "Data Visualization"],
      clients: "Multiple Enterprise Clients"
    },
    {
      title: "Salesforce Project Management Suite",
      description: "Led end-to-end project development for Salesforce platform configuration and content authoring solutions",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      technologies: ["Salesforce", "Project Management", "Agile", "Stakeholder Management"],
      clients: "Salesforce, Accenture"
    },
    {
      title: "Medical Terminology E-Learning Platform",
      description: "Developed interactive HTML-based e-learning solutions and simulation tools for medical education",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      technologies: ["HTML", "CSS", "XML", "E-Learning", "Content Development"],
      clients: "Medical Education Sector"
    },
    {
      title: "Multi-Client Platform Solutions",
      description: "Managed complex projects for Fortune 500 companies including process optimization and quality assurance",
      image: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=400&h=300&fit=crop",
      technologies: ["JIRA", "Process Optimization", "Quality Assurance", "Cross-functional Leadership"],
      clients: "Coca-Cola, Mondelez, Abbott, Merck"
    },
    {
      title: "Cengage Learning Content Management",
      description: "Led content authoring and platform configuration projects for educational technology solutions",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
      technologies: ["CMS", "Content Strategy", "Platform Configuration", "Educational Technology"],
      clients: "Cengage SAM, Walch, VHL"
    },
    {
      title: "Microsoft Office Simulation Suite",
      description: "Developed comprehensive simulations for Microsoft Office tools using XML coding and best practices",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop",
      technologies: ["XML", "Microsoft Office", "Simulation Development", "Code Review"],
      clients: "Corporate Training Sector"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      {/* Background Wallpaper */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop")`
        }}
      ></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground">
              Key projects delivered for Fortune 500 companies and enterprise clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover-scale overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                  <p className="text-sm text-primary font-medium">Clients: {project.clients}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      <BarChart3 className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
