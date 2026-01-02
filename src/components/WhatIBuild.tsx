const WhatIBuild = () => {
  const features = [
    { icon: "⚡", label: "Controle de estado" },
    { icon: "📋", label: "Regras claras" },
    { icon: "🔄", label: "Automação confiável" },
  ];

  return (
    <section id="o-que-construo" className="relative w-full py-24 bg-background overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 w-full max-w-[960px] mx-auto px-4">
        {/* Section Title */}
        <div className="flex items-center justify-center gap-4 mb-12 opacity-0 animate-fade-in-up" style={{ animationDelay: "0ms", animationFillMode: "forwards" }}>
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
          <div className="w-3 h-3 bg-primary rotate-45" />
          <h2 className="text-section-title font-semibold text-foreground text-center">
            O que eu construo
          </h2>
          <div className="w-3 h-3 bg-primary rotate-45" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
        </div>
        
        {/* Description */}
        <div className="max-w-[768px] mx-auto text-center space-y-6 mb-12">
          <p className="text-xl text-foreground leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: "100ms", animationFillMode: "forwards" }}>
            Não desenvolvo chatbots genéricos. Construo <span className="text-accent font-medium">sistemas de IA integrados a processos reais</span> — com controle de estado, regras claras e automação confiável.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
            Cada projeto nasce de um problema operacional concreto: <span className="text-primary">vendas</span>, <span className="text-primary">atendimento</span>, <span className="text-primary">prospecção</span> ou <span className="text-primary">educação</span>.
          </p>
        </div>
        
        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "300ms", animationFillMode: "forwards" }}>
          {features.map((feature, i) => (
            <div 
              key={i}
              className="flex items-center gap-3 px-6 py-3 bg-card border border-border rounded-full transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
            >
              <span className="text-xl">{feature.icon}</span>
              <span className="text-foreground font-medium">{feature.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIBuild;