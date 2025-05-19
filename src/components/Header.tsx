
import { useState, useEffect } from "react";
import { useMediaQuery } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavigationMenu, NavigationMenuLink, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu"
import { Menu, X } from "lucide-react";

const navItems = [
  { id: 1, label: "About", href: "#about" },
  { id: 2, label: "Skills", href: "#skills" },
  { id: 3, label: "Projects", href: "#projects" },
  { id: 4, label: "Videos", href: "#profile" }, // Added Videos navigation item
  { id: 5, label: "Contact", href: "#contact" },
];

const Header = () => {
  const [isTop, setIsTop] = useState(true);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY < 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isTop ? "py-6 bg-navy/0" : "py-4 bg-navy/90 shadow-lg backdrop-blur-lg"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a 
          href="#hero" 
          className="text-2xl font-bold text-teal hover:text-teal/80 transition-colors"
        >
          SB
        </a>

        {!isMobile ? (
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-1">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.id} asChild>
                  <a
                    href={item.href}
                    className="text-slate hover:text-teal px-4 py-2 transition-colors text-sm relative group"
                  >
                    <span className="text-teal font-mono mr-1">0{item.id}.</span>
                    {item.label}
                    <span className="absolute left-0 right-0 bottom-0 h-[1px] bg-teal scale-x-0 group-hover:scale-x-[0.3] transition-transform duration-300"></span>
                  </a>
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem>
                <Button asChild className="ml-2 bg-transparent border border-teal text-teal hover:bg-teal/10">
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    Resume
                  </a>
                </Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        ) : (
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Menu">
                <Menu className="text-slate" />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[300px] sm:w-[400px] bg-lightNavy border-lightNavy">
              <SheetHeader>
                <SheetTitle className="text-teal">Menu</SheetTitle>
                <SheetDescription className="text-slate">
                  Navigate through my portfolio
                </SheetDescription>
              </SheetHeader>
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <a 
                    key={item.id} 
                    href={item.href}
                    className="text-slate hover:text-teal px-4 py-3 border border-transparent hover:border-lightestNavy rounded-md transition-all text-lg flex items-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-teal font-mono mr-2 text-sm">0{item.id}.</span>
                    {item.label}
                  </a>
                ))}
                <Button asChild className="mt-4 bg-transparent border border-teal text-teal hover:bg-teal/10">
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    Resume
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </header>
  );
};

export default Header;
