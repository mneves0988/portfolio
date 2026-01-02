import { Link } from "react-router-dom";
import projectsBackground from "@/assets/projects-background.jpg";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  linkText: string;
  index: number;
}

const ProjectCard = ({ title, description, link, linkText, index }: ProjectCardProps) => {
  const isInternalLink = link.startsWith('/');
  
  return (
    <div 
      className="group relative bg-card/80 backdrop-blur-sm border border-border rounded-xl p-8 transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${200 + index * 100}ms`, animationFillMode: "forwards" }}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Title with number */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{title}</h3>
          <div className="w-7 h-7 bg-primary/20 border border-primary/30 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-primary text-xs font-bold">0{index + 1}</span>
          </div>
        </div>
        <p className="text-muted-foreground mb-6 leading-relaxed text-sm">{description}</p>
        
        {isInternalLink ? (
          <Link 
            to={link}
            className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors duration-200 font-medium group/link"
          >
            {linkText}
            <span className="group-hover/link:translate-x-1 transition-transform duration-200">→</span>
          </Link>
        ) : (
          <a 
            href={link}
            className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors duration-200 font-medium group/link"
          >
            {linkText}
            <span className="group-hover/link:translate-x-1 transition-transform duration-200">→</span>
          </a>
        )}
      </div>
    </div>
  );
};

const projects = [
  {
    title: "Atlas",
    description: "Sistema de prospecção automatizada com priorização inteligente de leads e agente SDR via WhatsApp e Gmail.",
    link: "/atlas",
    linkText: "Ver projeto"
  },
  {
    title: "Nexus",
    description: "Plataforma de mentoria por IA para diagnóstico e evolução de empresas com dashboard analítico e planos de ação.",
    link: "/nexus",
    linkText: "Ver projeto"
  },
  {
    title: "Agentes Arthur & Teseu",
    description: "Agentes de IA especializados em atendimento, qualificação e condução estratégica de conversas com regras, contexto e RAG.",
    link: "/agentes",
    linkText: "Ver agentes"
  }
];

const Projects = () => {
  return (
    <section 
      id="projetos" 
      className="relative w-full py-24 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${projectsBackground})` }}
    >
      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/85 to-background/90" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-accent/50 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-primary/50 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
      
      <div className="relative z-10 w-full max-w-[960px] mx-auto px-4">
        {/* Section Title */}
        <div className="flex items-center justify-center gap-4 mb-16 opacity-0 animate-fade-in-up" style={{ animationDelay: "0ms", animationFillMode: "forwards" }}>
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
          <div className="w-3 h-3 bg-primary rotate-45" />
          <h2 className="text-section-title font-semibold text-foreground text-center">
            Projetos em Produção
          </h2>
          <div className="w-3 h-3 bg-primary rotate-45" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
        </div>
        
        {/* Subtitle */}
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: "100ms", animationFillMode: "forwards" }}>
          Sistemas reais em operação, resolvendo problemas concretos com automação e IA.
        </p>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              link={project.link}
              linkText={project.linkText}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;