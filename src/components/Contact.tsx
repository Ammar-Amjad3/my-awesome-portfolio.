import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Facebook, Instagram, Send, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ammaramjad0324@gmail.com",
      href: "mailto:ammaramjad0324@gmail.com",
      description: "Drop me an email anytime"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "3024-5947204",
      href: "tel:+923024947204",
      description: "Available for calls"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Faisalabad, Pakistan",
      href: null,
      description: "Ready for remote work"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Ammar-Amjad3",
      color: "hover:text-gray-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ammar-amjad-57435b324/",
      color: "hover:text-blue-400"
    },
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://www.facebook.com/MianAmmar56.0/",
      color: "hover:text-blue-500"
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/iam.ammarx?utm_source=ig_web_button_share_sheet&igsh=MTF5Y24yN28wbTg0dg==",
      color: "hover:text-pink-400"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6 text-lg">
            Ready to collaborate, discuss a project, or just have a friendly chat? 
            I'd love to hear from you and explore how we can work together!
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Let's Connect
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Whether you're a potential employer, client, or fellow developer, 
                  I'm always excited to connect with new people and explore opportunities 
                  for collaboration. Feel free to reach out through any of the channels below.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <Card key={index} className="p-6 bg-gradient-card border-border/20 hover:shadow-card transition-smooth group">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center group-hover:shadow-glow transition-smooth">
                        <contact.icon className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground">{contact.label}</p>
                        {contact.href ? (
                          <a 
                            href={contact.href}
                            className="font-medium text-foreground hover:text-primary transition-smooth block"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <p className="font-medium text-foreground">{contact.value}</p>
                        )}
                        <p className="text-xs text-muted-foreground">{contact.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Follow Me On Social Media
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-gradient-card border border-border/20 rounded-lg flex items-center justify-center transition-smooth hover:scale-110 hover:shadow-card ${social.color}`}
                      title={social.label}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form / Call to Action */}
            <div className="space-y-8">
              <Card className="p-8 bg-gradient-card border-border/20 shadow-elegant">
                <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                  Ready to Start a Project?
                </h3>
                
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 animate-glow">
                      <MessageCircle className="text-white" size={32} />
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      I'm currently looking for new opportunities and exciting projects. 
                      Whether you need a fresh perspective on web development or want to 
                      discuss potential collaborations, I'm here to help!
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <Button 
                      variant="hero" 
                      className="w-full"
                      onClick={() => window.location.href = 'mailto:ammaramjad0324@gmail.com'}
                    >
                      <Send size={16} className="mr-2" />
                      Send Email
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => window.open('https://www.linkedin.com/in/ammar-amjad-57435b324/', '_blank')}
                    >
                      <Linkedin size={16} className="mr-2" />
                      LinkedIn Message
                    </Button>
                  </div>

                  <div className="bg-muted/20 p-4 rounded-lg border border-border/20">
                    <h4 className="font-semibold text-foreground mb-2">What I Can Help With:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Front-end web development projects</li>
                      <li>• Responsive website design</li>
                      <li>• UI/UX implementation</li>
                      <li>• Code review and optimization</li>
                      <li>• Learning and mentorship opportunities</li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Professional Philosophy */}
              <Card className="p-6 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
                <h4 className="font-semibold text-foreground mb-3 text-center">
                  My Professional Philosophy
                </h4>
                <p className="text-muted-foreground text-center italic">
                  "I believe in lifelong learning and continuous improvement. Every project is an 
                  opportunity to grow and challenge myself while making a positive impact. I am 
                  dedicated to delivering high-quality work that exceeds expectations and fosters 
                  meaningful relationships."
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;