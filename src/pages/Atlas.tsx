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

const FlowCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="relative bg-gradient-to-br from-card to-card/50 border border-border/50 rounded-xl p-6 mb-6">
    <div className="absolute -top-3 left-6 px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
      {title}
    </div>
    <div className="pt-4">{children}</div>
  </div>
);

const Atlas = () => {
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
              <span className="text-primary text-sm font-medium">Sistema em Produção</span>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "100ms", animationFillMode: "forwards" }}>
            Atlas
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
            Sistema de prospecção automatizada com priorização inteligente de leads e agente SDR por WhatsApp e Gmail
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
        
        <Section title="Contexto" index={0}>
          <p className="text-muted-foreground leading-relaxed text-lg mb-6">
            Em muitas operações comerciais, o problema não é falta de lead — é <HighlightText>falta de ordem</HighlightText>.
            Leads entram por múltiplos canais, são abordados fora de timing, sem critério de prioridade, e o time comercial acaba reagindo em vez de operar.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {["Listas grandes", "Histórico incompleto", "Contatos duplicados", "Abordagens manuais e inconsistentes", "Nenhum controle real de quem já foi contatado"].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
                <div className="w-2 h-2 bg-destructive rounded-full" />
                <span className="text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
          
          <QuoteBox>Escala zero. Caos máximo.</QuoteBox>
        </Section>

        <div className="relative py-4">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-border via-primary/50 to-border" />
        </div>

        <Section title="O problema real" variant="highlight" index={1} showDecorator={false}>
          <p className="text-muted-foreground leading-relaxed text-lg mb-6">
            O problema central não era "automatizar mensagens", e sim <HighlightText>decidir quem deve ser contatado primeiro</HighlightText>, quando e com qual abordagem.
          </p>
          
          <div className="space-y-3">
            {[
              "leads quentes misturados com leads frios",
              "contatos feitos fora de contexto",
              "ausência de estado claro do lead",
              "SDR humano gastando tempo com triagem manual",
              "impossibilidade de manter padrão em escala"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-background/50 rounded-lg border border-border/30 transition-all hover:border-primary/30">
                <span className="text-primary font-mono text-sm">0{i + 1}</span>
                <span className="text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
          
          <QuoteBox>Automatizar sem critério só acelera o erro.</QuoteBox>
        </Section>

        <Section title="A solução proposta" variant="dark" index={2}>
          <p className="text-muted-foreground leading-relaxed text-lg mb-8">
            O Atlas foi desenhado como um <HighlightText>sistema de decisão</HighlightText> antes de ser um sistema de envio.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {[
              { step: "01", label: "Organizar e priorizar" },
              { step: "02", label: "Decidir abordagem" },
              { step: "03", label: "Acionar agente de IA" }
            ].map((item, i) => (
              <div key={i} className="relative p-6 bg-gradient-to-br from-card to-background border border-border rounded-xl text-center group hover:border-primary/50 transition-all">
                <span className="text-4xl font-bold text-primary/30 group-hover:text-primary/50 transition-colors">{item.step}</span>
                <p className="text-foreground font-medium mt-2">{item.label}</p>
                {i < 2 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 text-primary text-2xl">→</div>
                )}
              </div>
            ))}
          </div>
          
          <p className="text-muted-foreground leading-relaxed">
            IA entra onde faz sentido: <HighlightText>linguagem, adaptação e qualificação</HighlightText> — não para decidir tudo sozinha.
          </p>
        </Section>

        <Section title="Arquitetura do sistema" index={3}>
          <div className="relative pl-8 border-l-2 border-primary/30 space-y-6">
            {[
              "Leads armazenados e versionados no banco",
              "Sistema avalia prioridade e elegibilidade",
              "Fluxo seleciona apenas leads aptos",
              "Agente SDR inicia contato via WhatsApp",
              "Respostas atualizam estado do lead",
              "Sistema decide próximos passos automaticamente"
            ].map((item, i) => (
              <div key={i} className="relative flex items-center gap-4">
                <div className="absolute -left-[25px] w-4 h-4 bg-background border-2 border-primary rounded-full" />
                <p className="text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
          
          <QuoteBox>Tudo gira em torno de estado, não de mensagens soltas.</QuoteBox>
        </Section>

        <Section title="Fluxos críticos" variant="highlight" index={4} showDecorator={false}>
          <div className="space-y-6">
            <FlowCard title="Priorização de leads">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Leads nunca são abordados por ordem de chegada pura. O sistema considera:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {["Histórico de contato", "Tempo desde última interação", "Estágio no funil", "Regras de negócio"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {item}
                  </div>
                ))}
              </div>
            </FlowCard>

            <FlowCard title="Loop controlado de prospecção">
              <div className="flex flex-wrap gap-3">
                {["Processa lote", "Executa ações", "Aguarda cooldown", "Retoma do ponto exato"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="px-3 py-1.5 bg-primary/20 text-primary text-sm font-medium rounded-full">{item}</span>
                    {i < 3 && <span className="text-muted-foreground">→</span>}
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground mt-4 text-sm">Nada de loops infinitos ou disparos desgovernados.</p>
            </FlowCard>

            <FlowCard title="Separação automação × raciocínio">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-secondary/50 rounded-lg">
                  <p className="text-primary font-medium mb-1">Automação</p>
                  <p className="text-muted-foreground text-sm">Decide <strong className="text-foreground">quando</strong> agir</p>
                </div>
                <div className="p-4 bg-accent/10 rounded-lg">
                  <p className="text-accent font-medium mb-1">Agente IA</p>
                  <p className="text-muted-foreground text-sm">Decide <strong className="text-foreground">como</strong> conversar</p>
                </div>
              </div>
            </FlowCard>
          </div>
        </Section>

        <Section title="Stack e integrações" index={5}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <StackCard title="n8n" description="Orquestração de fluxos, splits, loops, controle de estados e decisões." />
            <StackCard title="Supabase (PostgreSQL)" description="Banco central, controle de estado do lead, regras, histórico e integridade dos dados." />
            <StackCard title="WhatsApp (Uazapi)" description="Canal de contato direto com leads, integrado ao fluxo de decisão." />
            <StackCard title="OpenAI & Gemini" description="Agente SDR responsável por linguagem natural, qualificação e condução da conversa." />
          </div>
          
          <QuoteBox>Cada ferramenta tem papel definido. Nada de stack inflada por vaidade.</QuoteBox>
        </Section>

        <Section title="Resultados" variant="dark" index={6}>
          <p className="text-muted-foreground leading-relaxed text-lg mb-6">
            Os ganhos principais não foram "IA respondeu melhor", mas sim:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Abordagem consistente",
              "Priorização clara",
              "Redução drástica de contatos desnecessários",
              "Maior previsibilidade do processo comercial",
              "Base preparada para escala sem aumentar equipe"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-primary/10 border border-primary/20 rounded-lg">
                <div className="w-6 h-6 flex items-center justify-center bg-primary text-primary-foreground rounded-full text-sm font-bold">✓</div>
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
          
          <QuoteBox>O sistema passou a trabalhar enquanto o humano dorme. Sempre um bom sinal.</QuoteBox>
        </Section>

        <Section title="Aprendizados técnicos" index={7}>
          <div className="space-y-4">
            {[
              "Priorização é mais crítica que copy",
              "IA sem controle de estado vira ruído",
              "Automação precisa falhar de forma previsível",
              "Separar decisão determinística de decisão linguística evita bugs conceituais",
              "Menos fluxos \"inteligentes\", mais fluxos legíveis"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-4 bg-card/50 border-l-2 border-accent rounded-r-lg transition-all hover:bg-card">
                <span className="text-accent font-mono font-bold">#{i + 1}</span>
                <p className="text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-6 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent border border-primary/30 rounded-xl">
            <p className="text-xl text-foreground font-semibold">
              Atlas não tenta ser esperto. Ele tenta ser <HighlightText>confiável</HighlightText>. E isso escala.
            </p>
          </div>
        </Section>
      </main>


      <Contact />
      <Footer />
    </div>
  );
};

export default Atlas;
