import React, { useEffect, useState } from "react";
import { cn } from "./utils";
import { Menu, X } from "lucide-react";
const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Works", href: "#works" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled
          ? "backdrop-blur-md py-3 bg-background/80  shadow-xs"
          : "py-5"
      )}
    >
      <div className="container flex justify-between items-center">
        <a
          href="#hero"
          className="text-xl font-bold flex text-foreground items-center"
        >
          <span className="relative z-10">
            Manish <span className="text-primary text-glow">Photos</span>
          </span>
        </a>

        {/* desktop menu */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a
              href={item.href}
              key={key}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* mobile menu */}

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div
          className={cn(
            "fixed inset-0 bg-background/50 backdrop-blur-md z-40  flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                href={item.href}
                key={key}
                onClick={() => {
                  setIsMenuOpen(false);
                }}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
