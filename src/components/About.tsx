
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, BarChart3 } from "lucide-react";

export const About = () => {
  const features = [
    {
      icon: Target,
      title: "Project Excellence",
      description: "Delivering high-quality projects within scope, budget, and schedule with 7+ years of experience"
    },
    {
      icon: Users,
      title: "Cross-functional Leadership",
      description: "Leading diverse teams across multiple time zones while ensuring effective stakeholder engagement"
    },
    {
      icon: BarChart3,
      title: "Data & Analytics",
      description: "Creating impactful dashboards and reports using PowerBI and Tableau for business analysis"
    }
  ];

  return (
    <section id="about" className="py-12 relative">
      {/* New Blue Desk Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("/lovable-uploads/0eeea2b7-5896-40bb-9e33-3c6569181a30.png")`
        }}
      />
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-blue-900/20"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/20">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">About Me</h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Senior Project Specialist with expertise in managing complex projects and 
              driving organizational success through effective project management.
            </p>
          </div>

          <div className="mb-12">
            <div className="text-center mb-6">
              <div className="w-32 h-32 bg-gradient-to-br from-indigo-400/20 via-purple-400/20 to-blue-400/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl mx-auto mb-6 border border-indigo-400/30 relative group cursor-pointer">
                <span className="text-5xl">👩‍💼</span>
                {/* Hover tooltip */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Hey, hi I'm Ankita! 👋
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-indigo-600"></div>
                </div>
              </div>
            </div>
            
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <p className="text-lg text-white/90">
                I'm an accomplished Senior Project Specialist based in Thane, India, with over 7 years 
                of experience managing complex projects from initiation to closure. I specialize in 
                resource planning, effort estimation, and process optimization to enhance operational efficiency.
              </p>
              <p className="text-lg text-white/90">
                My expertise spans across project management, data visualization, and stakeholder engagement. I've 
                successfully managed projects for key clients including Salesforce, Coca-Cola, 
                Mondelez, Accenture, Abbott, and many others, consistently delivering results that align 
                with organizational objectives.
              </p>
              <p className="text-lg text-white/90">
                I hold certifications in Business Analytics and Data Science with AI/ML, and I'm passionate about leveraging data-driven 
                insights to drive continuous improvement and business growth.
              </p>
              <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm p-4 rounded-lg max-w-2xl mx-auto border border-indigo-400/30">
                <p className="text-lg font-medium text-indigo-200">
                  🚀 Currently exploring AI applications in project management and business analytics
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover-scale border-0 shadow-lg bg-gradient-to-br from-white/10 to-gray-500/10 backdrop-blur-sm border border-white/20 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <feature.icon className="h-12 w-12 mx-auto mb-4 text-indigo-300" />
                  <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-200">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
