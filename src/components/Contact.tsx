import { Mail, ArrowRight, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="relative w-full py-24 bg-secondary overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-3xl" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />
      
      <div className="relative z-10 w-full max-w-[960px] mx-auto px-4 text-center">
        {/* Section Title */}
        <div className="flex items-center justify-center gap-4 mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: "0ms", animationFillMode: "forwards" }}>
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
          <div className="w-3 h-3 bg-primary rotate-45" />
          <h2 className="text-section-title font-semibold text-foreground">
            Contato
          </h2>
          <div className="w-3 h-3 bg-primary rotate-45" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
        </div>
        
        {/* Description */}
        <p className="text-lg text-muted-foreground mb-12 max-w-[600px] mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: "100ms", animationFillMode: "forwards" }}>
          Para discutir projetos, arquitetura ou uso prático de IA em operações reais.
        </p>
        
        {/* Contact Cards */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          {/* WhatsApp Card */}
          <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
            <a 
              href="https://wa.me/5551981800745"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-4 px-8 py-6 bg-card/80 backdrop-blur-sm border border-border rounded-2xl transition-all duration-300 hover:border-green-500/50 hover:shadow-xl hover:shadow-green-500/10"
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center bg-green-500/20 rounded-xl group-hover:bg-green-500/30 transition-colors duration-300">
                <MessageCircle className="w-7 h-7 text-green-500" />
              </div>
              
              {/* Text */}
              <div className="text-left">
                <p className="text-sm text-muted-foreground mb-1">WhatsApp</p>
                <p className="text-xl text-foreground font-medium group-hover:text-green-500 transition-colors duration-300">
                  (51) 98180-0745
                </p>
              </div>
              
              {/* Arrow */}
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-green-500 group-hover:translate-x-1 transition-all duration-300 ml-4" />
            </a>
          </div>
          
          {/* Email Card */}
          <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "300ms", animationFillMode: "forwards" }}>
            <a 
              href="mailto:mths.neves@gmail.com"
              className="group relative flex items-center gap-4 px-8 py-6 bg-card/80 backdrop-blur-sm border border-border rounded-2xl transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10"
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center bg-primary/20 rounded-xl group-hover:bg-primary/30 transition-colors duration-300">
                <Mail className="w-7 h-7 text-primary" />
              </div>
              
              {/* Text */}
              <div className="text-left">
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <p className="text-xl text-foreground font-medium group-hover:text-primary transition-colors duration-300">
                  mths.neves@gmail.com
                </p>
              </div>
              
              {/* Arrow */}
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300 ml-4" />
            </a>
          </div>
        </div>
        
        {/* Bottom decoration */}
        <div className="mt-16 flex items-center justify-center gap-2 opacity-0 animate-fade-in" style={{ animationDelay: "500ms", animationFillMode: "forwards" }}>
          <div className="w-2 h-2 bg-primary/30 rounded-full" />
          <div className="w-2 h-2 bg-primary/50 rounded-full" />
          <div className="w-2 h-2 bg-primary rounded-full" />
          <div className="w-2 h-2 bg-primary/50 rounded-full" />
          <div className="w-2 h-2 bg-primary/30 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Contact;