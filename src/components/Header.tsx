import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Início", href: "/", isRoute: true },
  { label: "Atlas", href: "/atlas", isRoute: true },
  { label: "Nexus", href: "/nexus", isRoute: true },
  { label: "Agentes", href: "/agentes", isRoute: true },
  { label: "Contato", href: "#contato", isRoute: false },
];

const Header = () => {
  return (
    <header className="w-full h-[98px] bg-background flex items-center">
      <div className="w-full max-w-[960px] mx-auto px-4 flex items-center justify-between">
        {/* Logo / Title */}
        <div className="flex items-center">
          <h1 className="text-header-title font-normal">
            <span className="text-primary">MNeves</span>
            <span className="text-muted-foreground"> — </span>
            <span className="text-accent">Portfólio de Automação & IA</span>
          </h1>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
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
      </div>
    </header>
  );
};

export default Header;
