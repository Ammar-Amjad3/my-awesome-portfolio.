import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Users, Lightbulb } from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 75 },
    { name: "Bootstrap", level: 85 },
    { name: "Git", level: 70 },
  ];

  const softSkills = [
    "Problem Solving",
    "Team Collaboration", 
    "Communication",
    "Creative Thinking",
    "Attention to Detail",
    "Time Management"
  ];

  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Responsive Design"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating visually appealing and user-friendly designs",
      skills: ["Wireframing", "Prototyping", "Color Theory", "Typography"]
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively with teams and stakeholders",
      skills: ["Git", "Version Control", "Code Review", "Agile Methodology"]
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Analytical thinking and creative solution development",
      skills: ["Debugging", "Algorithm Design", "Performance Optimization"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6 text-lg">
            A comprehensive overview of my technical abilities and professional competencies
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="p-6 bg-gradient-card border-border/20 hover:shadow-card transition-smooth group hover:scale-105"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-smooth">
                  <category.icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {category.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-1 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="outline" 
                      className="text-xs border-primary/20 bg-primary/5 hover:bg-primary/10 transition-smooth"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Technical Skills */}
          <Card className="p-8 bg-gradient-card border-border/20 shadow-card">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              <Code className="text-primary mr-3" size={24} />
              Technical Skills
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-accent rounded-full transition-all duration-1000 ease-out animate-slide-up"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Soft Skills */}
          <Card className="p-8 bg-gradient-card border-border/20 shadow-card">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              <Users className="text-primary mr-3" size={24} />
              Soft Skills
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-3 p-3 rounded-lg bg-muted/20 hover:bg-muted/30 transition-smooth group"
                >
                  <div className="w-2 h-2 bg-gradient-accent rounded-full group-hover:scale-150 transition-spring"></div>
                  <span className="text-foreground">{skill}</span>
                </div>
              ))}
            </div>
            
            {/* Additional Info */}
            <div className="mt-8 p-4 bg-primary/5 border border-primary/20 rounded-lg">
              <p className="text-muted-foreground text-sm">
                <strong className="text-foreground">Personal Interests:</strong> Cricket, Football, 
                exploring new web technologies, and continuous learning in the field of web development.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;