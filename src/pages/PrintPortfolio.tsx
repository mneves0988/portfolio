import React from "react";
import Hero from "@/components/Hero";
import WhatIBuild from "@/components/WhatIBuild";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Brain, Target, Users, MessageSquare, Zap, Database, CheckCircle, BarChart3, TrendingUp } from "lucide-react";

const PrintSection = ({ title, children, variant = "default", showDecorator = true, pageBreak = false }: {
    title: string;
    children: React.ReactNode;
    variant?: "default" | "highlight" | "dark";
    showDecorator?: boolean;
    pageBreak?: boolean;
}) => {
    const bgStyles = {
        default: "bg-transparent",
        highlight: "bg-card/50 border-l-2 border-primary",
        dark: "bg-secondary/30",
    };

    return (
        <section
            className={`relative py-12 px-4 md:px-8 rounded-xl ${bgStyles[variant]} ${pageBreak ? "print:break-before-page" : "print:break-inside-avoid"}`}
        >
            <h2 className="text-2xl md:text-section-title font-semibold text-foreground mb-8 flex items-center gap-4">
                {showDecorator && <span className="w-2 h-2 bg-primary rotate-45 flex-shrink-0" />}
                {title}
            </h2>
            {children}
        </section>
    );
};

const PrintHighlight = ({ children }: { children: React.ReactNode }) => (
    <span className="text-accent font-medium">{children}</span>
);

const PrintQuote = ({ children }: { children: React.ReactNode }) => (
    <div className="relative mt-6 p-4 bg-gradient-to-r from-primary/10 to-transparent border-l-4 border-primary rounded-r-lg print:break-inside-avoid">
        <p className="text-accent font-semibold italic">{children}</p>
    </div>
);

const PrintFeatureCard = ({ icon: Icon, title, description }: { icon: React.ComponentType<{ className?: string }>; title: string; description: string }) => (
    <div className="p-6 bg-card/50 border border-border/50 rounded-xl print:break-inside-avoid">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
            <Icon className="w-6 h-6 text-primary" />
        </div>
        <h4 className="text-lg font-semibold text-foreground mb-2">{title}</h4>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
);

const PrintAgentCard = ({ name, subtitle, description, color }: { name: string; subtitle: string; description: string; color: "primary" | "accent" }) => {
    const colorClasses = color === "primary" ? "border-primary/30 bg-primary/5" : "border-accent/30 bg-accent/5";
    const iconColor = color === "primary" ? "text-primary" : "text-accent";
    return (
        <div className={`p-6 md:p-8 rounded-2xl border ${colorClasses} print:break-inside-avoid`}>
            <h3 className={`text-xl md:text-2xl font-bold mb-2 ${iconColor}`}>{name}</h3>
            <p className="text-foreground/80 font-medium mb-3 text-sm md:text-base">{subtitle}</p>
            <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </div>
    );
};

const PrintPortfolio = () => {
    return (
        <div className="min-h-screen bg-background font-inter print:bg-black">
            {/* 1. HOME: HERO & OVERVIEW */}
            <div className="print:break-after-page">
                <Hero />
                <div className="max-w-[960px] mx-auto px-4 pb-16">
                    <WhatIBuild />
                    <Projects />
                </div>
            </div>

            {/* 2. PROJETO: AGENTES (FULL CONTENT) */}
            <div className="max-w-[960px] mx-auto px-4 py-16 space-y-8 print:break-after-page">
                <div className="text-center py-12 border-b border-border/30">
                    <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4">Agentes de <span className="text-primary">IA</span></h1>
                    <p className="text-2xl text-muted-foreground">Inteligência aplicada à operação, não respostas genéricas</p>
                </div>

                <PrintSection title="Contexto" pageBreak>
                    <p className="text-muted-foreground text-lg mb-6">
                        Criar um agente que <PrintHighlight>"responde bem"</PrintHighlight> é fácil. Criar um agente que atua com <PrintHighlight>objetivo, contexto e limites claros</PrintHighlight> é outra história.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <PrintAgentCard name="Arthur" subtitle="Agente consultivo estratégico" description="Para atendimento e performance comercial. Atua em nível executivo com board e C-level." color="primary" />
                        <PrintAgentCard name="Teseu" subtitle="Agente SDR tático" description="Para prospecção estruturada e avanço de pipeline. Execução disciplinada." color="accent" />
                    </div>
                </PrintSection>

                <PrintSection title="Arthur — Estratégia Executiva" variant="highlight" showDecorator={false}>
                    <p className="text-muted-foreground mb-6">
                        Arthur avalia, orienta e eleva a maturidade do atendimento. Ele não responde clientes diretamente, ele orienta como a empresa deve responder.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {["Board", "C-level", "Liderança Comercial", "Gestores"].map(item => (
                            <div key={item} className="p-4 bg-primary/5 border border-primary/20 rounded-lg text-center text-sm">{item}</div>
                        ))}
                    </div>
                    <PrintQuote>Arthur não foi criado para escalar respostas. Foi criado para escalar maturidade comercial.</PrintQuote>
                </PrintSection>

                <PrintSection title="Teseu — Execução Tática" variant="dark">
                    <p className="text-muted-foreground mb-6">
                        Teseu atua no "chão de fábrica" da prospecção, garantindo que a abordagem definida seja executada com consistência e disciplina.
                    </p>
                    <div className="bg-card/50 p-6 rounded-xl border border-accent/20">
                        <ul className="space-y-3 text-muted-foreground">
                            <li>• Aborda leads com critérios claros</li>
                            <li>• Respeita cadência e timing</li>
                            <li>• Entrega leads qualificados para o time humano</li>
                        </ul>
                    </div>
                    <PrintQuote>Estratégia sem execução é opinião. Teseu é execução.</PrintQuote>
                </PrintSection>
            </div>

            {/* 3. PROJETO: ATLAS (FULL CONTENT) */}
            <div className="max-w-[960px] mx-auto px-4 py-16 space-y-8 print:break-after-page">
                <div className="text-center py-12 border-b border-border/30">
                    <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4">Atlas</h1>
                    <p className="text-2xl text-muted-foreground">Sistema de prospecção automatizada e priorização de leads</p>
                </div>

                <PrintSection title="O Problema Real" pageBreak variant="highlight" showDecorator={false}>
                    <p className="text-muted-foreground text-lg mb-6">
                        Muitas operações sofrem com <PrintHighlight>caos informacional</PrintHighlight>. O Atlas resolve o gargalo de decidir quem deve ser contatado primeiro.
                    </p>
                    <div className="space-y-3">
                        {["Leads quentes misturados com frios", "Falta de estado claro do lead", "Triagem manual ineficiente"].map((item, i) => (
                            <div key={i} className="flex items-center gap-4 p-4 bg-background/50 rounded-lg border border-border/30">
                                <span className="text-primary font-mono text-sm">0{i + 1}</span>
                                <span className="text-muted-foreground">{item}</span>
                            </div>
                        ))}
                    </div>
                </PrintSection>

                <PrintSection title="Arquitetura e Fluxos" variant="dark">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 bg-card border border-border rounded-xl">
                            <h4 className="font-semibold mb-2">Priorização Inteligente</h4>
                            <p className="text-sm text-muted-foreground">Avalia elegibilidade, histórico e tempo desde a última interação antes de qualquer disparo.</p>
                        </div>
                        <div className="p-6 bg-card border border-border rounded-xl">
                            <h4 className="font-semibold mb-2">Loop Controlado</h4>
                            <p className="text-sm text-muted-foreground">Processa em lotes com cooldown, evitando automações desgovernadas ou bloqueios.</p>
                        </div>
                    </div>
                    <PrintQuote>IA entra onde faz sentido: linguagem e qualificação. A automação entra na decisão e orquestração.</PrintQuote>
                </PrintSection>
            </div>

            {/* 4. PROJETO: NEXUS (FULL CONTENT) */}
            <div className="max-w-[960px] mx-auto px-4 py-16 space-y-8 print:break-after-page">
                <div className="text-center py-12 border-b border-border/30">
                    <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4">Nexus</h1>
                    <p className="text-2xl text-muted-foreground">Plataforma de mentoria por IA para diagnóstico de empresas</p>
                </div>

                <PrintSection title="Diagnóstico e Estratégia" pageBreak variant="dark">
                    <p className="text-muted-foreground text-lg mb-8">
                        O Nexus transforma a incerteza empresarial em um <PrintHighlight>plano de ação executivo</PrintHighlight> guiado por IA adaptativa.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 bg-card border border-primary/20 rounded-xl">
                            <h4 className="text-primary font-bold mb-2">Diagnóstico Adaptativo</h4>
                            <p className="text-sm text-muted-foreground">A IA adapta as perguntas conforme o perfil e as respostas da empresa em tempo real.</p>
                        </div>
                        <div className="p-6 bg-card border border-primary/20 rounded-xl">
                            <h4 className="text-primary font-bold mb-2">Dashboard de Maturidade</h4>
                            <p className="text-sm text-muted-foreground">Visualização clara de gargalos críticos, riscos ocultos e oportunidades de evolução.</p>
                        </div>
                    </div>
                </PrintSection>

                <PrintSection title="Aprendizados e Resultados" variant="highlight">
                    <ul className="space-y-4">
                        <li className="flex gap-4 p-4 bg-background/50 rounded-lg">
                            <span className="text-primary font-bold">✓</span>
                            <span className="text-muted-foreground">Usuários querem clareza e direção imediata, não relatórios teóricos longos.</span>
                        </li>
                        <li className="flex gap-4 p-4 bg-background/50 rounded-lg">
                            <span className="text-primary font-bold">✓</span>
                            <span className="text-muted-foreground">O foco do Nexus é transformar "saber mais" em "decidir melhor".</span>
                        </li>
                    </ul>
                </PrintSection>
            </div>

            {/* 5. ENCERRAMENTO: CONTATO */}
            <div className="pt-24 print:break-before-page">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-foreground mb-4">Vamos construir o próximo nível?</h2>
                    <p className="text-xl text-muted-foreground">Entre em contato para discutirmos seu projeto de Automação & IA</p>
                </div>
                <Contact />
                <Footer />
            </div>
        </div>
    );
};

export default PrintPortfolio;
