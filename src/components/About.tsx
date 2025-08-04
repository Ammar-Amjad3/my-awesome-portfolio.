import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Calendar } from "lucide-react";
import ammarProfile from "@/assets/ammar-profile.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Profile Image */}
          <div className="text-center md:text-left">
            <div className="relative inline-block">
              <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-elegant mx-auto md:mx-0">
                <img 
                  src={ammarProfile} 
                  alt="M Ammar Amjad - Front-End Developer" 
                  className="w-full h-full object-cover hover:scale-105 transition-spring"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-hero rounded-full blur-lg opacity-60 animate-glow"></div>
            </div>
          </div>

          {/* Bio and Details */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Front-End Web Developer
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                I am a highly motivated Front-End Web Developer with a passion for creating visually appealing and interactive websites. 
                I specialize in Front-End Development, focusing on building responsive, user-friendly designs. Although I am relatively 
                new to the field, my goal is to continually improve and push the boundaries of creativity and quality in all the work I produce.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="p-4 bg-gradient-card border-border/20 hover:shadow-card transition-smooth">
                <div className="flex items-center space-x-3">
                  <MapPin className="text-primary" size={20} />
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">Faisalabad, Pakistan</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 bg-gradient-card border-border/20 hover:shadow-card transition-smooth">
                <div className="flex items-center space-x-3">
                  <Phone className="text-primary" size={20} />
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">3024-5947204</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 bg-gradient-card border-border/20 hover:shadow-card transition-smooth">
                <div className="flex items-center space-x-3">
                  <Mail className="text-primary" size={20} />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium text-sm">ammaramjad0324@gmail.com</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 bg-gradient-card border-border/20 hover:shadow-card transition-smooth">
                <div className="flex items-center space-x-3">
                  <Calendar className="text-primary" size={20} />
                  <div>
                    <p className="text-sm text-muted-foreground">Experience</p>
                    <p className="font-medium">Fresher</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Education */}
            <Card className="p-6 bg-gradient-card border-border/20 shadow-card">
              <h4 className="text-lg font-semibold text-foreground mb-3">Education</h4>
              <div className="space-y-2">
                <p className="font-medium text-primary">BS in Computer Science</p>
                <p className="text-muted-foreground">GC University, Faisalabad, Pakistan</p>
                <p className="text-sm text-muted-foreground">
                  Completed final year project "PropFind" - a classified website
                </p>
              </div>
            </Card>

            {/* Philosophy */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-xl border border-primary/20">
              <p className="text-foreground italic text-center">
                "I believe in lifelong learning and continuous improvement. Every project is an opportunity to grow 
                and challenge myself while making a positive impact."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;