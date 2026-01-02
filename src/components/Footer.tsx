const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative w-full py-8 bg-background border-t border-border/50">
      {/* Subtle gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="w-full max-w-[960px] mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            © {currentYear} <span className="text-primary">MNeves</span>. Todos os direitos reservados.
          </p>
          
          {/* Tagline */}
          <p className="text-muted-foreground/60 text-sm flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-primary/50 rounded-full" />
            Automação & IA para operações reais
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
