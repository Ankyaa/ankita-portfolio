
import { Badge } from "@/components/ui/badge";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Project Management",
      skills: ["Agile Methodologies", "Scrum", "KANBAN", "Waterfall", "JIRA", "Trello", "Resource Planning", "Risk Assessment"]
    },
    {
      title: "Data & Analytics",
      skills: ["Power BI", "Tableau", "Python", "SQL", "R", "Business Analytics", "Data Visualization", "Data Science & ML"]
    },
    {
      title: "Technical & Tools",
      skills: ["SharePoint", "Smartsheet", "Excel", "CMS", "HTML", "CSS", "XML", "Content Authoring", "Quality Assurance"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive skill set spanning project management, data analytics, and technical implementation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="text-center">
              <h3 className="text-xl font-semibold mb-6">{category.title}</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="secondary" className="text-sm px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
