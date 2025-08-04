import { Github, Linkedin, Facebook, Instagram, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Ammar-Amjad3",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/ammar-amjad-57435b324/",
      label: "LinkedIn"
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/MianAmmar56.0/",
      label: "Facebook"
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/iam.ammarx?utm_source=ig_web_button_share_sheet&igsh=MTF5Y24yN28wbTg0dg==",
      label: "Instagram"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-card to-background border-t border-border/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div 
              className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent cursor-pointer"
              onClick={scrollToTop}
            >
              Ammar.dev
            </div>
            <p className="text-muted-foreground">
              Front-End Web Developer passionate about creating innovative and user-friendly web experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-muted/20 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-smooth hover:scale-110 group"
                  title={social.label}
                >
                  <social.icon 
                    size={18} 
                    className="text-muted-foreground group-hover:text-primary transition-smooth" 
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {[
                { label: "Home", href: "#home" },
                { label: "About", href: "#about" },
                { label: "Skills", href: "#skills" },
                { label: "Portfolio", href: "#portfolio" },
                { label: "Contact", href: "#contact" }
              ].map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="text-muted-foreground hover:text-primary transition-smooth text-left"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact Info</h3>
            <div className="space-y-2 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-primary" />
                <a 
                  href="mailto:ammaramjad0324@gmail.com"
                  className="hover:text-primary transition-smooth"
                >
                  ammaramjad0324@gmail.com
                </a>
              </div>
              <p>📞 3024-5947204</p>
              <p>📍 Faisalabad, Pakistan</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <span>© {currentYear} M Ammar Amjad. All rights reserved.</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <span>Made with</span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span>by Ammar</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;