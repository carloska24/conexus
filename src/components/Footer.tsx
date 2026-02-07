import { MapPin, Mail, Phone, Linkedin, Instagram, Globe } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B1120] text-slate-300 border-t border-white/5 relative overflow-hidden">
      {/* Texture Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#1e293b_0%,_transparent_40%)] opacity-30 pointer-events-none" />

      <div className="section-container py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Coluna 1: Identidade e Confiança (4 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <a href="#" className="inline-block group">
              <span className="font-heading font-bold text-3xl text-white tracking-tight group-hover:text-accent transition-colors">
                CONEXUS
              </span>
            </a>
            <p className="text-lg text-slate-400 leading-relaxed max-w-md font-light">
              Conectamos sua ambição à realização. 
              <span className="block mt-2 text-sm text-slate-500">
                Hub de engenharia e manufatura integradora para produtos eletrônicos de classe mundial.
              </span>
            </p>
            
            {/* Dados Legais / Confiança */}
            <div className="pt-4 space-y-3">
              <div className="flex items-start gap-3 text-sm text-slate-500 hover:text-slate-300 transition-colors">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>
                  Av. Orosimbo Maia, 360, Sala 705<br />
                  Campinas - SP, 13010-211
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-500 hover:text-slate-300 transition-colors">
                 <div className="w-5 flex justify-center"><span className="font-bold text-accent text-xs border border-accent rounded px-1">ID</span></div>
                 <span>CNPJ: 58.602.822/0001-83</span>
              </div>
            </div>
          </div>

          {/* Coluna 2: Navegação Estratégica (3 cols) */}
          <div className="lg:col-span-3 lg:pl-8">
            <h4 className="font-heading font-semibold text-white mb-6 uppercase tracking-wider text-sm">
              Explorar
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                { label: "Quem Somos", href: "#quem-somos" },
                { label: "Áreas de Atuação", href: "#atuacao" },
                { label: "Rede de Parceiros", href: "#parceiros" },
                { label: "Modelo de Consultoria", href: "#modelo" },
                { label: "Gestores Técnicos", href: "#gestores" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-slate-400 hover:text-accent hover:translate-x-1 transition-all duration-200 w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Coluna 3: Conexão e Social (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="font-heading font-semibold text-white mb-6 uppercase tracking-wider text-sm">
              Contato Direto
            </h4>
            
            <div className="space-y-4 mb-8">
               <a 
                 href="https://wa.me/5519997942136" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-accent/30 transition-all group"
               >
                 <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-all">
                   <Phone className="w-5 h-5" />
                 </div>
                 <div>
                   <span className="block text-xs text-slate-500 uppercase font-bold tracking-wider">WhatsApp Corporativo</span>
                   <span className="text-white font-medium group-hover:text-accent transition-colors">+55 (19) 99794-2136</span>
                 </div>
               </a>

               <div className="flex gap-4">
                 <a 
                   href="mailto:contato@conexusbr.com" 
                   className="flex-1 flex items-center justify-center gap-2 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all text-slate-300 hover:text-white"
                 >
                   <Mail className="w-4 h-4" />
                   <span className="text-sm">Email</span>
                 </a>
                 <a 
                   href="https://www.linkedin.com" // Placeholder
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex-1 flex items-center justify-center gap-2 p-3 rounded-lg bg-[#0077b5]/10 hover:bg-[#0077b5]/20 border border-[#0077b5]/20 hover:border-[#0077b5]/40 transition-all text-[#0077b5] hover:text-[#0077b5]"
                 >
                   <Linkedin className="w-4 h-4" />
                   <span className="text-sm font-medium">LinkedIn</span>
                 </a>
               </div>
            </div>
          </div>

        </div>

        {/* Rodapé Legal */}
        <div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
          <p>
            © {currentYear} Conexus Consultoria. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
