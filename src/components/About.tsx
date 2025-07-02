
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, BarChart3 } from "lucide-react";

export const About = () => {
  const features = [
    {
      icon: Target,
      title: "Project Excellence",
      description: "Delivering high-quality projects within scope, budget, and schedule with 6+ years of experience"
    },
    {
      icon: Users,
      title: "Cross-functional Leadership",
      description: "Leading diverse teams across multiple time zones while ensuring effective stakeholder engagement"
    },
    {
      icon: BarChart3,
      title: "Data-Driven Insights",
      description: "Creating impactful data visualizations and dashboards using PowerBI and Tableau for business analysis"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Senior Project Specialist with expertise in managing complex projects and 
              driving organizational success through data-driven decision making.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg mb-6">
                I'm an accomplished Senior Project Specialist based in Thane, India, with over 6 years 
                of experience managing complex projects from initiation to closure. I specialize in 
                resource planning, effort estimation, and process optimization to enhance operational efficiency.
              </p>
              <p className="text-lg mb-6">
                My expertise spans across project management, data visualization, and stakeholder engagement. 
                I've successfully managed projects for key clients including Salesforce, Coca-Cola, 
                Mondelez, Accenture, Abbott, and many others, consistently delivering results that align 
                with organizational objectives.
              </p>
              <p className="text-lg mb-6">
                I hold certifications in Business Analytics and Data Science with AI/ML, and I'm passionate 
                about leveraging data-driven insights to drive continuous improvement and business growth.
              </p>
              <div className="bg-gradient-to-r from-primary/10 to-blue-100 p-4 rounded-lg">
                <p className="text-lg font-medium text-primary">
                  🚀 Currently exploring AI applications in project management and business analytics
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-48 h-48 bg-gradient-to-br from-primary/20 via-blue-100 to-purple-100 rounded-full flex items-center justify-center shadow-xl">
                <span className="text-4xl">👩‍💼</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover-scale border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <feature.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
