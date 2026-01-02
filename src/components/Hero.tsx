import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative w-full min-h-[690px] flex items-center justify-center bg-cover bg-center bg-fixed overflow-hidden"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background" />

      {/* Animated grid overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `linear-gradient(hsl(var(--primary) / 0.2) 1px, transparent 1px),
                         linear-gradient(90deg, hsl(var(--primary) / 0.2) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[960px] mx-auto px-4 text-center">
        {/* Badge */}
        <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0ms", animationFillMode: "forwards" }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary/80 text-sm font-medium">Portfólio de Automação & IA</span>
          </div>
        </div>

        {/* Main Title */}
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-foreground mb-8 leading-tight opacity-0 animate-fade-in-up" style={{ animationDelay: "100ms", animationFillMode: "forwards" }}>
          Sistemas de automação e agentes de IA
          <br />
          <span className="text-primary">para operações reais.</span>
        </h2>

        {/* Subtitle */}
        <p className="text-base md:text-hero-subtitle text-muted-foreground max-w-[603px] mx-auto leading-relaxed opacity-0 animate-fade-in-up px-4" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
          Projetos em produção que unem automação, lógica de negócio e IA aplicada.
          <span className="text-accent font-medium"> Menos ruído. Mais escala.</span>
        </p>
      </div>
    </section>
  );
};

export default Hero;