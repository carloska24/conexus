"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ExternalLink } from "lucide-react";

const parceiros = [
  {
    nome: "CADService",
    descricao: "Empresa especializada em manufatura de placas eletrônicas, com atuação em montagem SMT e PTH, prototipagem e produção seriada. Possui forte foco em qualidade, rastreabilidade e adequação de processo.",
    logo: "/parceiros/cadservice.svg",
    especialidade: "Manufatura SMT/PTH",
    site: "#",
    cor: "#e11d48", // Rose-600 kind of
    destaques: ["Montagem SMT/PTH", "Prototipagem Ágil", "Rastreabilidade Total"]
  },
  {
    nome: "ICAPE",
    descricao: "Empresa global especializada na fabricação de placas de circuito impresso (PCBs), abrangendo desde tecnologias convencionais até multilayers, HDI e soluções especiais.",
    logo: "/parceiros/icape.svg",
    especialidade: "PCB Global Sourcing",
    site: "#",
    cor: "#0ea5e9", // Sky-500
    destaques: ["Multilayers & HDI", "Soluções Especiais", "Presença Global"]
  },
  {
    nome: "FITec",
    descricao: "Fundação para Inovações Tecnológicas, referência em engenharia e desenvolvimento de produtos eletrônicos. Atua em projetos de alta complexidade e validação técnica.",
    logo: "/parceiros/fitec.svg",
    especialidade: "P&D Eletrônica",
    site: "#",
    cor: "#8b5cf6", // Violet-500
    destaques: ["Projetos Complexos", "Validação Técnica", "Engenharia de Produto"]
  },
];

export function RedeParceiros() {
  const [activePartner, setActivePartner] = useState<number | null>(null);
  const [hoveredPartner, setHoveredPartner] = useState<number | null>(null);

  // Função para posicionamento orbital (mesma lógica, ajustada para 3 itens)
  const getPosition = (index: number, total: number, radius: number) => {
    const angle = (index * (360 / total) - 90) * (Math.PI / 180); // -90 para começar no topo
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
    };
  };

  return (
    <section id="parceiros" className="relative h-screen max-h-screen bg-[#0B1120] overflow-hidden flex flex-col items-center justify-start pt-4 md:pt-8 snap-start">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1e293b_0%,_#0B1120_100%)] opacity-40" />
      
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="section-container relative z-10 w-full h-full flex flex-col pt-0 pb-4">
        
        <div className="w-full flex justify-center shrink-0">
        {/* Header - Fade Out quando expandido */}
        <motion.div 
          className="text-center max-w-3xl"
          animate={{ opacity: activePartner !== null ? 0 : 1, y: activePartner !== null ? -50 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-accent font-bold tracking-widest text-xs uppercase mb-3 block">Ecossistema Conectado</span>
          <h2 className="heading-2 text-white mb-6">Rede de Parceiros</h2>
          <p className="text-slate-400 text-lg font-light">
            Conectamos sua empresa aos maiores especialistas do mercado, orbitando em torno do sucesso do seu projeto.
          </p>
        </motion.div>
        </div>

        <div className="flex-grow flex items-center justify-center w-full relative">
        {/* View Orbital (Padrão) */}
        <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center shrink-0">
          
          {/* Núcleo Central: CONEXUS */}
          <motion.div 
            className="absolute z-20 flex flex-col items-center justify-center w-40 h-40 rounded-full bg-[#0B1120] border border-white/10 shadow-[0_0_60px_rgba(190,26,135,0.2)] hover:border-accent/50 transition-colors duration-500 group cursor-default"
            animate={{ 
              scale: activePartner !== null ? 0.8 : 1,
              opacity: activePartner !== null ? 0.3 : 1
            }}
          >
            <div className="relative">
              <div className="absolute inset-0 animate-ping opacity-20 bg-accent rounded-full delay-1000" />
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent/20 to-transparent flex items-center justify-center backdrop-blur-sm border border-accent/20">
                <span className="font-heading font-bold text-white tracking-widest text-sm">CONEXUS</span>
              </div>
            </div>
            {/* Orbitais Decorativos */}
            {activePartner === null && (
               <svg className="absolute w-[600px] h-[600px] animate-[spin_60s_linear_infinite] opacity-10 pointer-events-none">
                 <circle cx="300" cy="300" r="180" fill="none" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
                 <circle cx="300" cy="300" r="280" fill="none" stroke="rgba(255,255,255,0.03)" />
               </svg>
            )}
          </motion.div>

          {/* Nós Parceiros */}
          <AnimatePresence>
            {activePartner === null && parceiros.map((parceiro, index) => {
              const pos = getPosition(index, parceiros.length, 220); // Raio 220px
              const isHovered = hoveredPartner === index;

              return (
                <motion.div
                  key={index}
                  className="absolute z-30"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    x: pos.x,
                    y: pos.y,
                  }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  onMouseEnter={() => setHoveredPartner(index)}
                  onMouseLeave={() => setHoveredPartner(null)}
                >
                  {/* Linha de Conexão (Hub -> Node) */}
                  <svg className="absolute top-1/2 left-1/2 -z-10 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-20">
                    <line 
                      x1="250" 
                      y1="250" 
                      x2={250 - pos.x} // Inverte direção pq o svg é centrado no nó mas desenha pro centro do hub (que está a -pos.x)
                      y2={250 - pos.y} 
                      stroke="white" 
                      strokeWidth="1"
                      strokeDasharray="5,5"
                    />
                  </svg>

                  {/* O Nó Parceiro */}
                  <motion.button
                    onClick={() => setActivePartner(index)}
                    className="relative group outline-none"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    // Animação de flutuação orgânica "breathing"
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 3 + index, // Duração variável para dessincronizar
                      ease: "easeInOut"
                    }}
                  >
                    <div className={`w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#182030] border-2 flex items-center justify-center shadow-2xl transition-all duration-300 relative overflow-hidden ${isHovered ? 'border-accent shadow-[0_0_30px_rgba(190,26,135,0.4)]' : 'border-white/10'}`}>
                      {/* Glow de fundo */}
                      <div className={`absolute inset-0 bg-${parceiro.cor} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                      
                      {/* Logo */}
                      <img 
                         src={parceiro.logo} 
                         alt={parceiro.nome} 
                         className="w-16 md:w-20 transition-all duration-300 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100 transform group-hover:scale-110"
                      />
                    </div>
                    
                    {/* Label Flutuante */}
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <span className="text-white font-heading font-bold bg-accent/90 px-3 py-1 rounded-full text-xs tracking-wider shadow-lg">
                        {parceiro.nome}
                      </span>
                    </div>
                  </motion.button>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Expanded View (Page Overlay) */}
          <AnimatePresence mode="wait">
            {activePartner !== null && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                className="fixed inset-0 z-[60] flex flex-col bg-[#0B1120] w-full h-full overflow-hidden"
              >
                <div className="section-container h-full flex flex-col py-8 md:py-12 overflow-y-auto">
                  
                  {/* Navegação Interna */}
                  <div className="w-full mb-8 flex items-center justify-between border-b border-white/5 pb-6 shrink-0 pt-4 md:pt-0">
                    <button 
                      onClick={() => setActivePartner(null)}
                      className="group flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors uppercase tracking-widest font-bold"
                    >
                      <div className="p-2 rounded-full bg-white/5 group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                        <ArrowRight size={16} className="rotate-180" />
                      </div>
                      Voltar para a Rede
                    </button>
                    
                    <span className="text-white/20 text-xs font-mono">PARCEIRO {activePartner + 1}/{parceiros.length}</span>
                  </div>

                  <div className="grid md:grid-cols-12 gap-12 w-full h-full overflow-y-auto pb-12">
                    
                    {/* Coluna Visual (Esquerda - 4 cols) */}
                    <div className="md:col-span-4 flex flex-col">
                      <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 flex items-center justify-center p-12 mb-8 overflow-hidden group">
                        {/* Blob de fundo colorido baseado na cor da marca */}
                        <div 
                          className="absolute inset-0 opacity-20 blur-3xl transition-opacity duration-700" 
                          style={{ backgroundColor: parceiros[activePartner].cor }}
                        />
                        
                        <img 
                          src={parceiros[activePartner].logo} 
                          alt={parceiros[activePartner].nome}
                          className="w-full h-auto relative z-10 drop-shadow-2xl transform transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>

                      <div className="flex flex-col gap-4">
                        <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                          <span className="block text-xs text-slate-500 uppercase tracking-wider mb-1">Especialidade</span>
                          <span className="text-white font-medium">{parceiros[activePartner].especialidade}</span>
                        </div>
                        
                        <a 
                          href={parceiros[activePartner].site}
                          target="_blank"
                          rel="noreferrer" 
                          className="w-full py-4 bg-accent hover:bg-accent-dark text-white rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(190,26,135,0.3)] hover:shadow-[0_0_30px_rgba(190,26,135,0.6)]"
                        >
                          Visitar Site Oficial
                          <ExternalLink size={18} className="opacity-80 group-hover:opacity-100" />
                        </a>
                      </div>
                    </div>

                    {/* Coluna Conteúdo (Direita - 8 cols) */}
                    <div className="md:col-span-8 flex flex-col justify-start">
                      <motion.h3 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-4xl md:text-5xl font-heading font-bold text-white mb-8 leading-tight"
                      >
                        {parceiros[activePartner].nome}
                      </motion.h3>

                      <div className="space-y-12">
                        <div>
                          <h4 className="flex items-center gap-3 text-accent text-sm font-bold uppercase tracking-widest mb-6">
                            <span className="w-8 h-[1px] bg-accent"></span>
                            Sobre a Parceria
                          </h4>
                          <p className="text-slate-300 text-lg md:text-xl leading-relaxed font-light border-l-2 border-white/10 pl-6">
                            {parceiros[activePartner].descricao}
                          </p>
                        </div>

                        <div>
                          <h4 className="flex items-center gap-3 text-accent text-sm font-bold uppercase tracking-widest mb-6">
                            <span className="w-8 h-[1px] bg-accent"></span>
                            Destaques da Solução
                          </h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            {parceiros[activePartner].destaques.map((item, i) => (
                              <div 
                                key={i} 
                                className="group flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] hover:border-accent/30 transition-all duration-300"
                              >
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent/20 group-hover:text-accent transition-colors">
                                  <ArrowRight size={16} className="-rotate-45" />
                                </div>
                                <span className="text-slate-200 font-medium">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
        </div>
      </div>
    </section>
  );
}
