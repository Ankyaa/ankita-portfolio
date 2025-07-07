
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
    <section id="about" className="py-8 sm:py-12 relative">
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
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl border border-white/20">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">About Me</h2>
            <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto px-2">
              Senior Project Specialist & Data Analytics Expert
            </p>
            <p className="text-sm sm:text-base text-yellow-300 font-medium mt-2">
              🤖 Passionate about AI & Machine Learning
            </p>
          </div>

          <div className="mb-8 sm:mb-12">
            <div className="text-center mb-4 sm:mb-6">
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-indigo-400/20 via-purple-400/20 to-blue-400/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl mx-auto mb-4 sm:mb-6 border border-indigo-400/30 relative group cursor-pointer">
                <span className="text-3xl sm:text-5xl">👩‍💼</span>
                {/* Hover tooltip */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Hey, hi I'm Ankita! 👋
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-indigo-600"></div>
                </div>
              </div>
            </div>
            
            <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 px-2">
              <p className="text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed">
                Accomplished project management professional with 7+ years of experience delivering complex projects from inception to closure. Expert in data visualization, stakeholder engagement, and driving operational efficiency across diverse industries.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed">
                My expertise spans across project management, data visualization, and stakeholder engagement. I've 
                successfully managed projects for key clients including Salesforce, Coca-Cola, 
                Mondelez, Accenture, Abbott, and many others, consistently delivering results that align 
                with organizational objectives.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed">
                I hold certifications in Business Analytics and Data Science with AI/ML, and I'm passionate about leveraging data-driven 
                insights to drive continuous improvement and business growth.
              </p>
              <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm p-3 sm:p-4 rounded-lg max-w-2xl mx-auto border border-indigo-400/30">
                <p className="text-sm sm:text-base lg:text-lg font-medium text-indigo-200">
                  🚀 Currently exploring AI applications in project management and business analytics
                </p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover-scale border-0 shadow-lg bg-gradient-to-br from-white/10 to-gray-500/10 backdrop-blur-sm border border-white/20 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-4 sm:p-6 text-center">
                  <feature.icon className="h-8 w-8 sm:h-12 sm:w-12 mx-auto mb-3 sm:mb-4 text-indigo-300" />
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-gray-200 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
