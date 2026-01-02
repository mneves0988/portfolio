import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Início", href: "/", isRoute: true },
  { label: "Atlas", href: "/atlas", isRoute: true },
  { label: "Nexus", href: "/nexus", isRoute: true },
  { label: "Agentes", href: "/agentes", isRoute: true },
  { label: "Contato", href: "#contato", isRoute: false },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="w-full h-[98px] bg-background flex items-center relative z-50">
      <div className="w-full max-w-[960px] mx-auto px-4 flex items-center justify-between">
        {/* Logo / Title */}
        <div className="flex items-center">
          <Link to="/" className="no-underline">
            <h1 className="text-header-title font-normal">
              <span className="text-primary">MNeves</span>
              <span className="text-muted-foreground"> — </span>
              <span className="text-accent">Portfólio de Automação & IA</span>
            </h1>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            item.isRoute ? (
              <Link
                key={item.label}
                to={item.href}
                className={cn(
                  "text-nav font-normal text-foreground",
                  "hover:text-accent transition-colors duration-200",
                  "no-underline"
                )}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  "text-nav font-normal text-foreground",
                  "hover:text-accent transition-colors duration-200",
                  "no-underline"
                )}
              >
                {item.label}
              </a>
            )
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation Content */}
        {isMenuOpen && (
          <div className="absolute top-[98px] left-0 w-full bg-background border-b border-border/50 md:hidden animate-fade-in shadow-lg">
            <nav className="flex flex-col p-4 gap-4">
              {navItems.map((item) => (
                item.isRoute ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-base font-medium text-foreground py-2 hover:text-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-base font-medium text-foreground py-2 hover:text-accent transition-colors"
                  >
                    {item.label}
                  </a>
                )
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
