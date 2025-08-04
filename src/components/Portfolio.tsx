import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Calendar, Users, Code } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "PropFind",
      subtitle: "Classified Website Platform",
      description: "A comprehensive classified website built as my final year project. The platform allows users to post advertisements for various items with an intuitive, responsive interface. Features include user authentication, ad management, search functionality, and categorized listings.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design", "User Authentication"],
      type: "Final Year Project",
      status: "Completed",
      features: [
        "User-friendly interface for posting ads",
        "Responsive design for all devices",
        "Advanced search and filtering",
        "Category-based organization",
        "User profile management"
      ],
      highlights: [
        "Successfully completed as final year project",
        "Demonstrates full-stack development skills",
        "Focus on user experience and responsive design",
        "Real-world application solving marketplace needs"
      ]
    }
  ];

  const achievements = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Built complete web applications from concept to deployment"
    },
    {
      icon: Users,
      title: "User-Centered Design",
      description: "Created intuitive interfaces focusing on user experience"
    },
    {
      icon: Calendar,
      title: "Project Management",
      description: "Successfully delivered projects within academic timelines"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Portfolio & Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6 text-lg">
            Showcasing my journey in web development through practical projects and achievements
          </p>
        </div>

        {/* Featured Project */}
        <div className="max-w-6xl mx-auto mb-16">
          {projects.map((project, index) => (
            <Card key={index} className="p-8 bg-gradient-card border-border/20 shadow-elegant hover:shadow-glow/20 transition-smooth">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Project Image/Visual */}
                <div className="lg:col-span-1">
                  <div className="bg-gradient-hero rounded-xl p-8 text-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-smooth"></div>
                    <Code size={48} className="text-white mx-auto mb-4 relative z-10" />
                    <h3 className="text-white font-bold text-xl relative z-10">{project.title}</h3>
                    <p className="text-white/80 text-sm relative z-10">{project.subtitle}</p>
                    <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                      <div className="flex space-x-2">
                        <Badge variant="outline" className="border-primary/20 bg-primary/5">
                          {project.type}
                        </Badge>
                        <Badge variant="outline" className="border-accent/20 bg-accent/5">
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline"
                          className="border-primary/20 bg-primary/5 hover:bg-primary/10 transition-smooth"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-gradient-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Project Highlights */}
                  <div className="bg-muted/20 p-4 rounded-lg border border-border/20">
                    <h4 className="font-semibold text-foreground mb-3">Project Highlights</h4>
                    <div className="space-y-2">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4 pt-4">
                    <Button variant="default" disabled className="opacity-50">
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo (Private Project)
                    </Button>
                    <Button variant="outline" disabled className="opacity-50">
                      <Github size={16} className="mr-2" />
                      Source Code (Academic Project)
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Achievements */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Development Achievements
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="p-6 bg-gradient-card border-border/20 hover:shadow-card transition-smooth text-center group">
                <div className="w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-smooth">
                  <achievement.icon className="text-white" size={24} />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{achievement.title}</h4>
                <p className="text-muted-foreground text-sm">{achievement.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-xl border border-primary/20 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Interested in Working Together?
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm always excited to take on new challenges and collaborate on innovative projects. 
              Let's discuss how we can bring your ideas to life!
            </p>
            <Button 
              variant="hero" 
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Start a Conversation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;