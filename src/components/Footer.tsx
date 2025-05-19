
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "https://github.com", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com", label: "Twitter" },
    { icon: <Instagram className="h-5 w-5" />, href: "https://instagram.com", label: "Instagram" },
  ];

  return (
    <footer className="py-8 bg-navy border-t border-lightNavy">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="flex space-x-5 mb-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lightSlate hover:text-teal transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          <p className="text-slate text-center text-sm">
            Designed & Built by Siddhant Bishte
          </p>
          <p className="text-slate text-center text-sm mt-1">
            © {currentYear} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
