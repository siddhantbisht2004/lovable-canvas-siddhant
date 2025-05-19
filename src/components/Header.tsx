
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-navy/90 backdrop-blur-sm py-3 shadow-lg" : "bg-transparent py-5"
      }`}
    >
      <div className="container flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-teal">SB</a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <a 
              key={index}
              href={item.href}
              className="text-lightSlate hover:text-teal transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-teal after:transition-all hover:after:w-full"
            >
              <span className="text-teal mr-1">{index + 1}.</span> {item.name}
            </a>
          ))}
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="ml-4"
          >
            <Button 
              variant="outline" 
              className="border-teal text-teal hover:bg-lightNavy"
            >
              Resume
            </Button>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-teal"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-lightNavy/95 flex flex-col justify-center items-center md:hidden transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-center space-y-8 text-xl">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-lightestSlate hover:text-teal transition-colors"
              onClick={closeMenu}
            >
              <span className="text-teal mr-1">{index + 1}.</span> {item.name}
            </a>
          ))}
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="mt-4"
          >
            <Button 
              variant="outline" 
              className="border-teal text-teal hover:bg-navy"
            >
              Resume
            </Button>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
