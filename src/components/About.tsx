
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
      {/* Background with consistent theme */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop")`
        }}
      ></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-slate-800/60 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-slate-700/50">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">About Me</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Senior Project Specialist with expertise in managing complex projects and 
              driving organizational success through data-driven decision making.
            </p>
          </div>

          <div className="mb-16">
            <div className="text-center mb-8">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-full flex items-center justify-center shadow-xl mx-auto mb-6 border border-blue-400/30">
                <span className="text-5xl">👩‍💼</span>
              </div>
            </div>
            
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <p className="text-lg text-slate-300">
                I'm an accomplished Senior Project Specialist based in Thane, India, with over 6 years 
                of experience managing complex projects from initiation to closure. I specialize in 
                resource planning, effort estimation, and process optimization to enhance operational efficiency.
              </p>
              <p className="text-lg text-slate-300">
                My expertise spans across project management, data visualization, and stakeholder engagement. 
                I've successfully managed projects for key clients including Salesforce, Coca-Cola, 
                Mondelez, Accenture, Abbott, and many others, consistently delivering results that align 
                with organizational objectives.
              </p>
              <p className="text-lg text-slate-300">
                I hold certifications in Business Analytics and Data Science with AI/ML, and I'm passionate 
                about leveraging data-driven insights to drive continuous improvement and business growth.
              </p>
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-4 rounded-lg max-w-2xl mx-auto border border-blue-400/20">
                <p className="text-lg font-medium text-blue-400">
                  🚀 Currently exploring AI applications in project management and business analytics
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover-scale border-0 shadow-lg bg-slate-700/50 backdrop-blur-sm border border-slate-600/50">
                <CardContent className="p-6 text-center">
                  <feature.icon className="h-12 w-12 mx-auto mb-4 text-blue-400" />
                  <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                  <p className="text-slate-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
