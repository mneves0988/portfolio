import { Link } from "react-router-dom";
import { ArrowLeft, Brain, Target, Users, TrendingUp, MessageSquare, Zap, Database, CheckCircle, BarChart3 } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={`py-16 md:py-24 ${className}`}>
    <div className="max-w-[960px] mx-auto px-4">
      {children}
    </div>
  </section>
);

const HighlightText = ({ children }: { children: React.ReactNode }) => (
  <span className="text-primary font-medium">{children}</span>
);

const QuoteBox = ({ children }: { children: React.ReactNode }) => (
  <div className="relative my-12 py-8 px-6 md:px-10 border-l-4 border-primary/60 bg-gradient-to-r from-primary/5 to-transparent rounded-r-lg">
    <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
      <div className="w-2 h-2 bg-background rounded-full" />
    </div>
    <p className="text-lg md:text-xl text-foreground/90 italic leading-relaxed">
      {children}
    </p>
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
    <div className={`p-8 rounded-2xl border ${colorClasses} transition-all duration-300`}>
      <div className={`w-16 h-16 ${iconBg} rounded-xl flex items-center justify-center mb-6`}>
        <Brain className={`w-8 h-8 ${iconColor}`} />
      </div>
      <h3 className={`text-2xl font-bold mb-2 ${iconColor}`}>{name}</h3>
      <p className="text-foreground/80 font-medium mb-4">{subtitle}</p>
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
      {/* Hero Section */}
      <div className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />

        {/* Content */}
        <div className="relative z-10 max-w-[960px] mx-auto px-4 text-center">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Voltar ao início
          </Link>
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <Brain className="w-10 h-10 text-primary" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Agentes de <span className="text-primary">IA</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Inteligência aplicada à operação, não respostas genéricas
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </div>

      {/* Context Section */}
      <Section>
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Contexto</span>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Criar um agente que <HighlightText>"responde bem"</HighlightText> é fácil.
            Criar um agente que atua com <HighlightText>objetivo, contexto e limites claros</HighlightText> é outra história.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            <HighlightText>Arthur</HighlightText> e <HighlightText>Teseu</HighlightText> foram desenvolvidos exatamente com esse foco:
            resolver problemas reais de operação, atendimento e decisão — sem improviso.
          </p>
        </div>

        {/* Agent Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-16">
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

      {/* Arthur Section */}
      <Section className="bg-card/30">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">Agente Estratégico</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            <span className="text-primary">Arthur</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Agente consultivo estratégico para atendimento e performance comercial
          </p>
        </div>

        {/* Positioning */}
        <div className="max-w-3xl mx-auto mb-16">
          <h3 className="text-xl font-semibold text-foreground mb-6">Posicionamento</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Arthur não é um agente de atendimento operacional.
            Ele atua em <HighlightText>nível executivo</HighlightText>, interagindo diretamente com:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {["Board", "C-level", "Liderança comercial", "Gestores de atendimento"].map((item) => (
              <div key={item} className="p-4 bg-primary/5 border border-primary/20 rounded-lg text-center">
                <span className="text-foreground/80 text-sm">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground leading-relaxed mt-6">
            Seu papel é avaliar, orientar e elevar a maturidade do atendimento e da operação comercial da empresa.
          </p>
        </div>

        {/* Problem */}
        <div className="max-w-3xl mx-auto mb-16">
          <h3 className="text-xl font-semibold text-foreground mb-6">O problema que ele resolve</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Em grandes operações, o gargalo não é volume de leads. É:
          </p>
          <ul className="space-y-3">
            <ListItem>Atendimento desalinhado com estratégia</ListItem>
            <ListItem>Equipes comerciais reagindo em vez de conduzir</ListItem>
            <ListItem>Decisões baseadas em feeling, não em dados</ListItem>
            <ListItem>Falta de visão clara sobre gargalos do funil</ListItem>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-6">
            <HighlightText>Arthur entra exatamente nesse ponto.</HighlightText>
          </p>
        </div>

        {/* How Arthur Works */}
        <div className="max-w-3xl mx-auto mb-16">
          <h3 className="text-xl font-semibold text-foreground mb-6">Como o Arthur atua</h3>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Arthur opera em duas frentes complementares:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-card border border-border rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground">1. Consultor interno</h4>
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
                <h4 className="text-lg font-semibold text-foreground">2. Treinador da equipe</h4>
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
        </div>

        {/* Arthur Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
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

        <QuoteBox>
          Arthur não foi criado para escalar respostas. Foi criado para <HighlightText>escalar maturidade comercial</HighlightText>.<br />
          IA estratégica não fala mais alto. Ela fala melhor.
        </QuoteBox>

        {/* Where Arthur Works */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold text-foreground mb-6">Onde ele atua</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Diagnóstico de atendimento e funil",
              "Orientação para líderes comerciais",
              "Alinhamento entre marketing, SDR e vendas",
              "Treinamento indireto e contínuo do time",
              "Apoio à tomada de decisão executiva"
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-foreground/80 text-sm">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground mt-6 text-center italic">
            Ele não está no balcão. Está na <HighlightText>sala de decisão</HighlightText>.
          </p>
        </div>
      </Section>

      {/* Teseu Section */}
      <Section>
        <div className="text-center mb-12">
          <span className="text-accent text-sm font-medium tracking-wider uppercase mb-4 block">Agente Tático</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            <span className="text-accent">Teseu</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Agente SDR tático para prospecção estruturada e avanço de pipeline
          </p>
        </div>

        {/* Positioning */}
        <div className="max-w-3xl mx-auto mb-16">
          <h3 className="text-xl font-semibold text-foreground mb-6">Posicionamento</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Teseu é um agente <HighlightText>operacional de alto nível</HighlightText>, focado em execução disciplinada de prospecção e pré-vendas.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Ele não atua em nível estratégico com C-level.
            Ele atua onde <HighlightText>estratégia vira ação</HighlightText>: no pipeline.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Teseu é o agente que garante que a abordagem definida seja executada com consistência.
          </p>
        </div>

        {/* Problem */}
        <div className="max-w-3xl mx-auto mb-16">
          <h3 className="text-xl font-semibold text-foreground mb-6">O problema que ele resolve</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Mesmo com boa estratégia comercial, muitas empresas sofrem com:
          </p>
          <ul className="space-y-3">
            <ListItem>Prospecção desorganizada</ListItem>
            <ListItem>Falta de critério na priorização de leads</ListItem>
            <ListItem>Mensagens inconsistentes entre contatos</ListItem>
            <ListItem>Perda de contexto ao longo das interações</ListItem>
            <ListItem>Follow-ups mal feitos ou inexistentes</ListItem>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-6">
            <HighlightText>Teseu entra para resolver o "chão de fábrica" da prospecção.</HighlightText>
          </p>
        </div>

        {/* How Teseu Works */}
        <div className="max-w-3xl mx-auto mb-16">
          <h3 className="text-xl font-semibold text-foreground mb-6">Como o Teseu atua</h3>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Teseu opera de forma metódica e orientada a processo:
          </p>
          
          <div className="p-6 bg-card border border-accent/20 rounded-xl">
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
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-accent/80 mt-6 italic text-center">
              Ele não improvisa. Ele executa.
            </p>
          </div>
        </div>

        {/* Teseu Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
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

        <QuoteBox>
          Teseu não foi criado para parecer inteligente. Foi criado para ser <HighlightText>consistente, disciplinado e eficaz</HighlightText>.<br />
          Estratégia sem execução é opinião. Teseu é execução.
        </QuoteBox>

        {/* Where Teseu Works */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold text-foreground mb-6">Onde ele atua</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Prospecção ativa",
              "Reativação de leads",
              "Pré-qualificação",
              "Organização de pipeline",
              "Preparação de contexto para vendedores"
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 p-3 bg-accent/5 rounded-lg">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-foreground/80 text-sm">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground mt-6 text-center italic">
            Ele prepara o terreno para que o <HighlightText>comercial humano jogue melhor</HighlightText>.
          </p>
        </div>
      </Section>

      {/* Contact Section */}
      <Contact />

      <Footer />
    </div>
  );
};

export default Agentes;
