import { Brain, Target, Users, MessageSquare, Zap, Database, CheckCircle, BarChart3, TrendingUp } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

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
      className={`relative py-12 px-4 md:px-8 rounded-xl ${bgStyles[variant]} opacity-0 animate-fade-in-up`}
      style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
    >
      <h2 className="text-2xl md:text-section-title font-semibold text-foreground mb-8 flex items-center gap-4">
        {showDecorator && <span className="w-2 h-2 bg-primary rotate-45 flex-shrink-0" />}
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

const FeatureCard = ({ icon: Icon, title, description }: { icon: React.ComponentType<{ className?: string }>; title: string; description: string }) => (
  <div className="group p-6 bg-card/50 border border-border/50 rounded-xl hover:border-primary/30 hover:bg-card/80 transition-all duration-300">
    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <h4 className="text-lg font-semibold text-foreground mb-2">{title}</h4>
    <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
  </div>
);

const AgentCard = ({
  name,
  subtitle,
  description,
  color
}: {
  name: string;
  subtitle: string;
  description: string;
  color: "primary" | "accent";
}) => {
  const colorClasses = color === "primary"
    ? "border-primary/30 bg-primary/5 hover:border-primary/50"
    : "border-accent/30 bg-accent/5 hover:border-accent/50";
  const iconBg = color === "primary" ? "bg-primary/20" : "bg-accent/20";
  const iconColor = color === "primary" ? "text-primary" : "text-accent";

  return (
    <div className={`p-6 md:p-8 rounded-2xl border ${colorClasses} transition-all duration-300`}>
      <div className={`w-12 md:w-16 h-12 md:h-16 ${iconBg} rounded-xl flex items-center justify-center mb-4 md:mb-6`}>
        <Brain className={`w-6 md:w-8 h-6 md:h-8 ${iconColor}`} />
      </div>
      <h3 className={`text-xl md:text-2xl font-bold mb-2 ${iconColor}`}>{name}</h3>
      <p className="text-foreground/80 font-medium mb-3 md:mb-4 text-sm md:text-base">{subtitle}</p>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  );
};

const ListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-3 text-muted-foreground">
    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
    <span>{children}</span>
  </li>
);

const Agentes = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section
        className="relative w-full min-h-[60vh] md:min-h-[70vh] flex items-center justify-center bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />

        {/* Animated grid overlay */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />

        <div className="relative z-10 w-full max-w-[960px] mx-auto px-4 py-16 md:py-24 text-center">
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0ms", animationFillMode: "forwards" }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/30 rounded-full mb-6 md:mb-8">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-primary text-sm font-medium">Agentes em Produção</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 md:mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "100ms", animationFillMode: "forwards" }}>
            Agentes de <span className="text-primary">IA</span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
            Inteligência aplicada à operação, não respostas genéricas
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <main className="w-full max-w-[960px] mx-auto px-4 py-12 md:py-16 space-y-8">

        <Section title="Contexto" index={0}>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
            Criar um agente que <HighlightText>"responde bem"</HighlightText> é fácil.
            Criar um agente que atua com <HighlightText>objetivo, contexto e limites claros</HighlightText> é outra história.
          </p>

          <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
            <HighlightText>Arthur</HighlightText> e <HighlightText>Teseu</HighlightText> foram desenvolvidos exatamente com esse foco:
            resolver problemas reais de operação, atendimento e decisão — sem improviso.
          </p>

          {/* Agent Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <AgentCard
              name="Arthur"
              subtitle="Agente consultivo estratégico"
              description="Para atendimento e performance comercial. Atua em nível executivo com board, C-level e liderança."
              color="primary"
            />
            <AgentCard
              name="Teseu"
              subtitle="Agente SDR tático"
              description="Para prospecção estruturada e avanço de pipeline. Execução disciplinada onde estratégia vira ação."
              color="accent"
            />
          </div>
        </Section>

        <div className="relative py-4">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-border via-primary/50 to-border" />
        </div>

        {/* Arthur Section */}
        <Section title="Arthur — Agente Estratégico" variant="highlight" index={1} showDecorator={false}>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
            Arthur não é um agente de atendimento operacional.
            Ele atua em <HighlightText>nível executivo</HighlightText>, interagindo diretamente com:
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8">
            {["Board", "C-level", "Liderança comercial", "Gestores de atendimento"].map((item) => (
              <div key={item} className="p-3 md:p-4 bg-primary/5 border border-primary/20 rounded-lg text-center">
                <span className="text-foreground/80 text-xs md:text-sm">{item}</span>
              </div>
            ))}
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Seu papel é avaliar, orientar e elevar a maturidade do atendimento e da operação comercial da empresa.
          </p>

          <QuoteBox>Arthur não foi criado para escalar respostas. Foi criado para <HighlightText>escalar maturidade comercial</HighlightText>.</QuoteBox>
        </Section>

        <Section title="O problema que Arthur resolve" variant="dark" index={2}>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
            Em grandes operações, o gargalo não é volume de leads. É:
          </p>

          <div className="space-y-3 mb-8">
            {[
              "Atendimento desalinhado com estratégia",
              "Equipes comerciais reagindo em vez de conduzir",
              "Decisões baseadas em feeling, não em dados",
              "Falta de visão clara sobre gargalos do funil"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-background/50 rounded-lg border border-border/30 transition-all hover:border-primary/30">
                <span className="text-primary font-mono text-sm">0{i + 1}</span>
                <span className="text-muted-foreground text-sm md:text-base">{item}</span>
              </div>
            ))}
          </div>

          <p className="text-muted-foreground leading-relaxed">
            <HighlightText>Arthur entra exatamente nesse ponto.</HighlightText>
          </p>
        </Section>

        <Section title="Como o Arthur atua" index={3}>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-8">
            Arthur opera em duas frentes complementares:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 bg-card border border-border rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-primary" />
                </div>
                <h4 className="text-base md:text-lg font-semibold text-foreground">1. Consultor interno</h4>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Analisa interações, fluxos e métricas</li>
                <li>• Identifica falhas estruturais no atendimento</li>
                <li>• Propõe ajustes de processo e abordagem</li>
                <li>• Traduz dados operacionais em leitura estratégica</li>
              </ul>
              <p className="text-xs text-primary/80 mt-4 italic">
                Ele não responde clientes. Ele orienta como a empresa responde clientes.
              </p>
            </div>

            <div className="p-6 bg-card border border-border rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <h4 className="text-base md:text-lg font-semibold text-foreground">2. Treinador da equipe</h4>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Atua como referência de abordagem consultiva</li>
                <li>• Orienta o time sobre condução de conversas</li>
                <li>• Reforça padrões de qualificação e follow-up</li>
                <li>• Ajuda a elevar o nível médio da equipe</li>
              </ul>
              <p className="text-xs text-primary/80 mt-4 italic">
                Arthur não substitui o time. Ele treina o time enquanto o sistema roda.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <FeatureCard
              icon={Brain}
              title="Raciocínio estratégico"
              description="Modelos de linguagem avançados com foco em análise executiva"
            />
            <FeatureCard
              icon={Target}
              title="Contexto complexo"
              description="Leitura profunda de operação em nível sistêmico"
            />
            <FeatureCard
              icon={MessageSquare}
              title="Linguagem executiva"
              description="Fala com C-level sem parecer chatbot técnico ou genérico"
            />
          </div>

          <QuoteBox>IA estratégica não fala mais alto. Ela fala melhor.</QuoteBox>
        </Section>

        <Section title="Onde Arthur atua" variant="highlight" index={4} showDecorator={false}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {[
              "Diagnóstico de atendimento e funil",
              "Orientação para líderes comerciais",
              "Alinhamento entre marketing, SDR e vendas",
              "Treinamento indireto e contínuo do time",
              "Apoio à tomada de decisão executiva"
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                <span className="text-foreground/80 text-sm">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground mt-6 text-center italic">
            Ele não está no balcão. Está na <HighlightText>sala de decisão</HighlightText>.
          </p>
        </Section>

        <div className="relative py-4">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-border via-accent/50 to-border" />
        </div>

        {/* Teseu Section */}
        <Section title="Teseu — Agente Tático" variant="dark" index={5}>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
            Teseu é um agente <HighlightText>operacional de alto nível</HighlightText>, focado em execução disciplinada de prospecção e pré-vendas.
          </p>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
            Ele não atua em nível estratégico com C-level.
            Ele atua onde <HighlightText>estratégia vira ação</HighlightText>: no pipeline.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Teseu é o agente que garante que a abordagem definida seja executada com consistência.
          </p>

          <QuoteBox>Teseu não foi criado para parecer inteligente. Foi criado para ser <HighlightText>consistente, disciplinado e eficaz</HighlightText>.</QuoteBox>
        </Section>

        <Section title="O problema que Teseu resolve" index={6}>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
            Mesmo com boa estratégia comercial, muitas empresas sofrem com:
          </p>

          <div className="space-y-3 mb-8">
            {[
              "Prospecção desorganizada",
              "Falta de critério na priorização de leads",
              "Mensagens inconsistentes entre contatos",
              "Perda de contexto ao longo das interações",
              "Follow-ups mal feitos ou inexistentes"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-card/50 rounded-lg border border-border/30 transition-all hover:border-accent/30">
                <span className="text-accent font-mono text-sm">0{i + 1}</span>
                <span className="text-muted-foreground text-sm md:text-base">{item}</span>
              </div>
            ))}
          </div>

          <p className="text-muted-foreground leading-relaxed">
            <HighlightText>Teseu entra para resolver o "chão de fábrica" da prospecção.</HighlightText>
          </p>
        </Section>

        <Section title="Como o Teseu atua" variant="highlight" index={7} showDecorator={false}>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-8">
            Teseu opera de forma metódica e orientada a processo:
          </p>

          <div className="p-6 bg-card border border-accent/20 rounded-xl mb-8">
            <ul className="space-y-4">
              {[
                "Aborda leads com base em critérios claros",
                "Respeita cadência e timing de contato",
                "Mantém contexto entre interações",
                "Conduz a conversa até o próximo passo lógico",
                "Entrega leads qualificados para o time humano"
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <Zap className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-accent/80 mt-6 italic text-center">
              Ele não improvisa. Ele executa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <FeatureCard
              icon={Target}
              title="Priorização de contatos"
              description="Lógica clara para definir quem abordar e quando"
            />
            <FeatureCard
              icon={Database}
              title="Controle de histórico"
              description="Mantém contexto por lead e integra com CRM"
            />
            <FeatureCard
              icon={TrendingUp}
              title="Padronização"
              description="Redução de abordagens repetidas ou desalinhadas"
            />
          </div>

          <QuoteBox>Estratégia sem execução é opinião. Teseu é execução.</QuoteBox>
        </Section>

        <Section title="Onde Teseu atua" variant="dark" index={8}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-6">
            {[
              "Prospecção ativa",
              "Reativação de leads",
              "Pré-qualificação",
              "Organização de pipeline",
              "Preparação de contexto para vendedores"
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 p-3 bg-accent/5 rounded-lg">
                <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                <span className="text-foreground/80 text-sm">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground text-center italic">
            Ele prepara o terreno para que o <HighlightText>comercial humano jogue melhor</HighlightText>.
          </p>
        </Section>

        {/* Final Statement */}
        <div className="mt-8 p-6 md:p-8 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent border border-primary/30 rounded-xl text-center">
          <p className="text-lg md:text-xl text-foreground font-semibold mb-2">
            Dois agentes, dois papéis, um objetivo comum:
          </p>
          <p className="text-lg md:text-xl text-foreground font-semibold mb-4">
            <HighlightText>Operação comercial consistente e escalável</HighlightText>.
          </p>
          <p className="text-muted-foreground text-sm md:text-base">
            IA que resolve, não IA que impressiona.
          </p>
        </div>
      </main>

      <Contact />
      <Footer />
    </div>
  );
};

export default Agentes;
