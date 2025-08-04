import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToPortfolio = () => {
    const element = document.querySelector("#portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(34, 42, 69, 0.8), rgba(34, 42, 69, 0.9)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-slide-up">
          {/* Greeting */}
          <p className="text-lg text-muted-foreground mb-4">
            Hello, I'm
          </p>
          
          {/* Name */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="bg-gradient-hero bg-clip-text text-transparent animate-glow">
              M Ammar Amjad
            </span>
          </h1>
          
          {/* Title */}
          <h2 className="text-2xl md:text-4xl text-foreground mb-8">
            Front-End Web Developer
          </h2>
          
          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Welcome to my official website! I am dedicated to creating innovative and user-friendly web experiences. 
            Whether you're a potential employer, client, or someone interested in my work, I'm excited to connect with you.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" onClick={scrollToPortfolio}>
              View My Work
            </Button>
            <Button variant="outline" onClick={scrollToContact}>
              Get In Touch
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/Ammar-Amjad3" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-smooth hover:scale-110 transform"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/ammar-amjad-57435b324/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-smooth hover:scale-110 transform"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:ammaramjad0324@gmail.com"
              className="text-foreground hover:text-primary transition-smooth hover:scale-110 transform"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;