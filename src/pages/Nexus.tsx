import heroBackground from "@/assets/hero-background.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

interface SectionProps {
  title: string;
  children: React.ReactNode;
  variant?: "default" | "highlight" | "dark";
  index: number;
  showDecorator?: boolean;
}

const Section = ({ title, children, variant = "default", index, showDecorator = true }: SectionProps) => {
  const bgStyles = {
    default: "bg-transparent",
    highlight: "bg-card/50 border-l-2 border-primary",
    dark: "bg-secondary/30",
  };

  return (
    <section 
      className={`relative py-12 px-8 rounded-xl ${bgStyles[variant]} opacity-0 animate-fade-in-up`}
      style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
    >
      <h2 className="text-section-title font-semibold text-foreground mb-8 flex items-center gap-4">
        {showDecorator && <span className="w-2 h-2 bg-primary rotate-45" />}
        {title}
      </h2>
      {children}
    </section>
  );
};

const HighlightText = ({ children }: { children: React.ReactNode }) => (
  <span className="text-accent font-medium">{children}</span>
);

const QuoteBox = ({ children }: { children: React.ReactNode }) => (
  <div className="relative mt-6 p-4 bg-gradient-to-r from-primary/10 to-transparent border-l-4 border-primary rounded-r-lg">
    <p className="text-accent font-semibold italic">{children}</p>
  </div>
);

const StackCard = ({ title, description }: { title: string; description: string }) => (
  <div className="group bg-card/80 border border-border rounded-xl p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
    <div className="flex items-center gap-3 mb-3">
      <div className="w-3 h-3 bg-primary rotate-45 group-hover:animate-glow-pulse transition-all" />
      <h3 className="text-xl font-semibold text-primary">{title}</h3>
    </div>
    <p className="text-muted-foreground leading-relaxed">{description}</p>
  </div>
);

const FeatureCard = ({ title, items }: { title: string; items: string[] }) => (
  <div className="relative bg-gradient-to-br from-card to-card/50 border border-border/50 rounded-xl p-6">
    <div className="absolute -top-3 left-6 px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
      {title}
    </div>
    <div className="pt-4 space-y-2">
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-2 text-muted-foreground">
          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
          {item}
        </div>
      ))}
    </div>
  </div>
);

const Nexus = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative w-full min-h-[70vh] flex items-center justify-center bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
        
        {/* Animated grid overlay */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
        
        <div className="relative z-10 w-full max-w-[960px] mx-auto px-4 py-24 text-center">
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0ms", animationFillMode: "forwards" }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/30 rounded-full mb-8">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-primary text-sm font-medium">Plataforma em Produção</span>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "100ms", animationFillMode: "forwards" }}>
            Nexus
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
            Plataforma de mentoria por IA para diagnóstico e evolução de empresas
          </p>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "600ms", animationFillMode: "forwards" }}>
            <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
              <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <main className="w-full max-w-[960px] mx-auto px-4 py-16 space-y-8">
        
        <Section title="O contexto" index={0}>
          <p className="text-muted-foreground leading-relaxed text-lg mb-6">
            Muitas empresas sabem que algo está errado, mas não sabem exatamente <HighlightText>onde mexer</HighlightText>.
          </p>
          
          <p className="text-muted-foreground leading-relaxed mb-6">Os sintomas aparecem:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {["Vendas travadas", "Operação desorganizada", "Marketing que não converte", "Decisões tomadas no 'feeling'"].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
                <div className="w-2 h-2 bg-destructive rounded-full" />
                <span className="text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
          
          <QuoteBox>O problema real não é falta de informação. É falta de diagnóstico estruturado e plano de ação claro.</QuoteBox>
        </Section>

        <div className="relative py-4">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-border via-primary/50 to-border" />
        </div>

        <Section title="O problema que o Nexus resolve" variant="highlight" index={1} showDecorator={false}>
          <p className="text-muted-foreground leading-relaxed text-lg mb-6">
            Pequenas e médias empresas raramente têm acesso a:
          </p>
          
          <div className="space-y-3 mb-6">
            {[
              "diagnóstico estratégico contínuo",
              "análises baseadas em dados reais",
              "orientação prática, não genérica",
              "acompanhamento de evolução ao longo do tempo"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-background/50 rounded-lg border border-border/30 transition-all hover:border-primary/30">
                <span className="text-primary font-mono text-sm">0{i + 1}</span>
                <span className="text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {[
              { text: "Consultorias tradicionais", issue: "são caras" },
              { text: "Planilhas", issue: "são limitadas" },
              { text: "Conteúdo solto", issue: "não gera decisão" }
            ].map((item, i) => (
              <div key={i} className="p-4 bg-secondary/50 rounded-lg text-center">
                <p className="text-foreground font-medium">{item.text}</p>
                <p className="text-muted-foreground text-sm">{item.issue}</p>
              </div>
            ))}
          </div>
          
          <QuoteBox>O Nexus nasce exatamente nesse vazio.</QuoteBox>
        </Section>

        <Section title="A proposta" variant="dark" index={2}>
          <p className="text-muted-foreground leading-relaxed text-lg mb-8">
            O Nexus é uma plataforma de <HighlightText>mentoria por IA</HighlightText>, onde o usuário:
          </p>
          
          <div className="space-y-4 mb-8">
            {[
              { step: "01", text: "Se cadastra na plataforma" },
              { step: "02", text: "Realiza um diagnóstico guiado por IA" },
              { step: "03", text: "Recebe uma avaliação clara dos pontos fortes, gargalos críticos e riscos ocultos" },
              { step: "04", text: "Visualiza tudo em um dashboard analítico" },
              { step: "05", text: "Recebe um plano de ação prático, priorizado e executável" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-gradient-to-r from-card to-transparent border-l-2 border-primary rounded-r-lg group hover:from-card/80 transition-all">
                <span className="text-2xl font-bold text-primary/50 group-hover:text-primary transition-colors">{item.step}</span>
                <p className="text-foreground">{item.text}</p>
              </div>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center">
            {["Menos teoria", "Mais clareza", "Mais decisão"].map((item, i) => (
              <span key={i} className="px-4 py-2 bg-primary/20 text-primary font-medium rounded-full border border-primary/30">
                {item}
              </span>
            ))}
          </div>
        </Section>

        <Section title="Diagnóstico inteligente" index={3}>
          <p className="text-muted-foreground leading-relaxed text-lg mb-6">
            O diagnóstico não é um formulário genérico. Ele se adapta de acordo com:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {["Perfil da empresa", "Estágio do negócio", "Plano contratado"].map((item, i) => (
              <div key={i} className="p-4 bg-card border border-border rounded-xl text-center transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                <p className="text-foreground font-medium">{item}</p>
              </div>
            ))}
          </div>
          
          <p className="text-muted-foreground leading-relaxed mb-4">A IA controla:</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {["Quantidade de perguntas", "Profundidade das análises", "Tempo de uso", "Desbloqueio de insights"].map((item, i) => (
              <div key={i} className="flex items-center gap-2 p-3 bg-primary/10 rounded-lg">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-muted-foreground text-sm">{item}</span>
              </div>
            ))}
          </div>
          
          <QuoteBox>Cada resposta alimenta análises progressivas, não respostas isoladas.</QuoteBox>
        </Section>

        <Section title="Dashboard e análises" variant="highlight" index={4} showDecorator={false}>
          <p className="text-muted-foreground leading-relaxed text-lg mb-6">
            Após o diagnóstico, o usuário acessa um dashboard com:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {[
              "Indicadores visuais",
              "Gráficos comparativos",
              "Mapas de maturidade por área",
              "Leitura clara do cenário atual"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-background/50 rounded-lg border border-border/30 transition-all hover:border-primary/30">
                <div className="w-6 h-6 flex items-center justify-center bg-primary text-primary-foreground rounded-full text-sm font-bold">✓</div>
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
          
          <p className="text-muted-foreground leading-relaxed mb-4">
            Tudo desenhado para não precisar de um consultor ao lado para entender.
          </p>
          
          <QuoteBox>O dashboard não é decorativo. Ele orienta decisão.</QuoteBox>
        </Section>

        <Section title="Plano de ação" variant="dark" index={5}>
          <p className="text-muted-foreground leading-relaxed text-lg mb-6">
            O Nexus não termina no diagnóstico. Com base nos dados coletados, a plataforma gera:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {[
              { title: "Prioridades", desc: "Clareza sobre o que fazer primeiro" },
              { title: "Ações", desc: "Recomendadas por impacto" },
              { title: "Orientações", desc: "Para curto, médio e longo prazo" }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-gradient-to-br from-card to-background border border-border rounded-xl text-center group hover:border-primary/50 transition-all">
                <p className="text-primary font-semibold text-lg mb-2">{item.title}</p>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <QuoteBox>O foco não é "saber mais", e sim saber o que fazer agora.</QuoteBox>
        </Section>

        <Section title="Modelos de acesso" index={6}>
          <p className="text-muted-foreground leading-relaxed text-lg mb-8">
            A plataforma opera com dois níveis principais:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <FeatureCard 
              title="Plano Trial" 
              items={[
                "Diagnóstico limitado",
                "Número reduzido de perguntas",
                "Análises iniciais",
                "Visão geral dos principais gargalos"
              ]} 
            />
            <FeatureCard 
              title="Plano Pago" 
              items={[
                "Diagnóstico completo",
                "Análises aprofundadas",
                "Histórico de evolução",
                "Planos de ação detalhados",
                "Maior tempo de uso e interação"
              ]} 
            />
          </div>
          
          <p className="text-muted-foreground text-center">
            As regras de limite são controladas diretamente pela lógica da aplicação.
          </p>
        </Section>

        <Section title="Stack e arquitetura" variant="highlight" index={7} showDecorator={false}>
          <p className="text-muted-foreground leading-relaxed text-lg mb-8">
            O Nexus foi construído com foco em <HighlightText>estabilidade e escala</HighlightText>:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <StackCard title="Frontend" description="Dashboard analítico com visualização clara de dados, métricas e evolução." />
            <StackCard title="Supabase (PostgreSQL)" description="Usuários, diagnósticos, respostas, planos, histórico e controle de acesso." />
            <StackCard title="Stripe" description="Gestão de pagamentos, planos, trial e upgrades." />
            <StackCard title="Lógicas de controle" description="Quantidade de perguntas, tempo de uso e profundidade de análise variam conforme o acesso." />
          </div>
          
          <QuoteBox>Nada experimental. Tudo pensado para produto.</QuoteBox>
        </Section>

        <Section title="Aprendizados do projeto" index={8}>
          <p className="text-muted-foreground leading-relaxed text-lg mb-6">
            Alguns aprendizados importantes durante o desenvolvimento:
          </p>
          
          <div className="space-y-4">
            {[
              "Usuários querem clareza, não relatórios longos",
              "Diagnóstico sem plano de ação gera frustração",
              "Limites bem definidos aumentam percepção de valor",
              "Visualização correta vale mais que texto excessivo",
              "IA precisa orientar, não confundir"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-4 bg-card/50 border-l-2 border-accent rounded-r-lg transition-all hover:bg-card">
                <span className="text-accent font-mono font-bold">#{i + 1}</span>
                <p className="text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
          
          <p className="text-muted-foreground mt-6 text-center">O Nexus foi moldado com base nesses princípios.</p>
        </Section>

        {/* Final Statement */}
        <div className="mt-8 p-8 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent border border-primary/30 rounded-xl text-center">
          <p className="text-xl text-foreground font-semibold mb-2">
            O Nexus não promete respostas mágicas.
          </p>
          <p className="text-xl text-foreground font-semibold mb-4">
            Ele entrega <HighlightText>clareza, direção e próximos passos</HighlightText>.
          </p>
          <p className="text-muted-foreground">
            Empresas não evoluem por saber mais. Evoluem por decidir melhor.
          </p>
        </div>
      </main>


      <Contact />
      <Footer />
    </div>
  );
};

export default Nexus;
