"use client";

import Image from "next/image";
import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PartnerModal, PartnerData } from "./PartnerModal";
import { PartnerApplicationModal } from "./PartnerApplicationModal";
import { Globe } from "./Globe";

const parceiros: PartnerData[] = [
  {
    nome: "CADService",
    descricao: "Sua fábrica fora de casa. Há 30 anos transformando projetos em produtos reais, com o cuidado de quem entende que cada placa carrega a reputação da sua marca.",
    logo: "/parceiros/cadservice.svg",
    site: "https://cadservice.com.br",
    cor: "#e11d48", // Rose-600
    especialidades: ["Manufatura SMT de Alta Precisão", "Montagem PTH Robusta", "Testes Funcionais & ICT", "Gestão de Supply Chain"],
    destaques: ["Parque fabril com tecnologia de ponta", "Certificação ISO 9001 e 13485 (Médico)", "Rastreabilidade completa de processo"],
    galeria: [
       { type: 'image', url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" }, // Placeholder SMT
       { type: 'image', url: "https://images.unsplash.com/photo-1563770095-39d468a92305?auto=format&fit=crop&q=80&w=1000" }  // Placeholder Lab
    ],
    sobre: "Com mais de 30 anos de mercado, a CADService é referência em manufatura de placas eletrônicas (PCBA), especializando-se em montagem SMT e PTH, desde a prototipagem rápida até a produção seriada. A empresa atua como uma extensão estratégica da fábrica do cliente, com forte foco em qualidade, rastreabilidade total e adequação de processos conforme a criticidade de cada produto. Operando de forma integrada com o ecossistema Conexus, garantimos viabilidade produtiva, confiabilidade e máxima eficiência industrial para setores exigentes como médico, automotivo e militar."
  },
  {
    nome: "ICAPE Group",
    descricao: "O mundo é seu fornecedor. Nossos engenheiros auditam pessoalmente fábricas em 70 países para que você acesse a cadeia global sem riscos e com qualidade garantida.",
    logo: "/parceiros/icape.svg",
    site: "https://www.icape-group.com",
    cor: "#0ea5e9", // Sky-500
    especialidades: ["Placas de Circuito Impresso (PCBs)", "Multilayer, HDI & Flex", "Soluções Especiais & Customização", "Gestão de Cadeia de Suprimentos"],
    destaques: ["Presença em mais de 70 países", "Auditorias técnicas em fábricas globais", "Escalabilidade e segurança de fornecimento"],
    galeria: [
       { type: 'video', url: "/videos/icape/video1.mp4" }, // VÍDEO NOVO
       { type: 'image', url: "https://images.unsplash.com/photo-1598132846985-oec1c2017c67?auto=format&fit=crop&q=80&w=1000" }, // PCB
       { type: 'image', url: "https://images.unsplash.com/photo-1623945417478-43d9646c0397?auto=format&fit=crop&q=80&w=1000" }  // Global Logistics
    ],
    sobre: "O ICAPE Group é uma empresa global e um dos maiores players mundiais na fabricação e distribuição de placas de circuito impresso (PCBs) e peças técnicas eletrônicas. Atuando como um hub estratégico, o grupo abrange desde tecnologias convencionais até as mais complexas, como multilayers, HDI e soluções especiais. Sua excelência operacional foca na gestão completa da cadeia de suprimentos e na customização de componentes, oferecendo competitividade, escalabilidade e segurança de fornecimento. Através de auditorias constantes em parcerias asiáticas e europeias, garantimos que cada produto entregue cumpra as mais rigorosas normas internacionais de qualidade."
  },
  {
    nome: "FITec",
    descricao: "Mentes brilhantes a serviço do seu projeto. Um centro de excelência que une ciência e mercado para desbloquear incentivos fiscais e barreiras tecnológicas.",
    logo: "/parceiros/fitec.svg",
    site: "https://www.fitec.org.br",
    cor: "#8b5cf6", // Violet-500
    especialidades: ["Pesquisa & Desenvolvimento (P&D)", "Lei da Informática", "Certificação de Produtos", "IoT & Indústria 4.0"],
    destaques: ["Acreditação CATI/MCTI", "Equipe de Mestres e Doutores", "Laboratórios de ensaios creditados"],
    galeria: [
       { type: 'image', url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000" }, // Innovation
       { type: 'image', url: "https://images.unsplash.com/photo-1581093458891-953b6aa3776e?auto=format&fit=crop&q=80&w=1000" }  // Lab Work
    ],
    sobre: "A FITec (Fundação para Inovações Tecnológicas) é uma referência em engenharia e no desenvolvimento de produtos eletrônicos de alta complexidade. Como centro de excelência credenciado pelo MCTI, a fundação transforma conceitos inovadores em soluções tecnicamente robustas através de pesquisa e desenvolvimento (P&D). Sua atuação abrange todo o ciclo de vida da inovação, desde a concepção e design até a validação técnica, testes rigorosos e apoio estratégico à industrialização, permitindo que empresas usufruam dos benefícios da Lei de Informática com máxima segurança tecnológica."
  },
];

import { MediaItem as ComponentMediaItem } from "./PartnerModal";

// ... (static data definition remains here) ...

interface RedeParceirosProps {
  dynamicMedia?: Record<string, ComponentMediaItem[]>;
  partnerLogos?: Record<string, string | undefined>;
  backgroundImage?: string;
  backgroundVideo?: string;
}

export function RedeParceiros({ 
  dynamicMedia = {}, 
  partnerLogos = {}, 
  backgroundImage,
  backgroundVideo 
}: RedeParceirosProps) {
  const [activePartnerIndex, setActivePartnerIndex] = useState<number | null>(null);
  const [hoveredPartner, setHoveredPartner] = useState<number | null>(null);
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);
  const [rotationOffset, setRotationOffset] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Merge static data with dynamic media and logos
  const mergedParceiros = parceiros.map(p => {
    const dynamic = dynamicMedia[p.nome];
    const dynamicLogo = partnerLogos[p.nome];
    
    return { 
      ...p, 
      galeria: (dynamic && dynamic.length > 0) ? dynamic : p.galeria,
      logo: dynamicLogo || p.logo
    };
  });

  const getPosition = (index: number, total: number, radius: number, offset: number = 0) => {
    // Adiciona o offset ao índice para rotacionar os slots
    const angle = ((index + offset) * (360 / total) - 90) * (Math.PI / 180);
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
    };
  };

  return (
    <section id="parceiros" className="relative h-screen max-h-screen bg-[#0B1120] overflow-hidden flex flex-col items-center justify-start pt-4 md:pt-8 snap-start">

      {/* Background Hero Image ou Video */}
      <div className="absolute inset-0 z-0">
        {isMounted && backgroundVideo ? (
          <video
            src={backgroundVideo}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-100"
          />
        ) : backgroundImage ? (
          <img 
            src={backgroundImage} 
            alt="Background Rede de Parceiros" 
            className="w-full h-full object-cover opacity-100" 
          />
        ) : null}
        
        {/* Overlay Escuro Adicional para Contraste (Sempre presente sobre o fundo) */}
        <div className="absolute inset-0 bg-[#0B1120]/80 mix-blend-multiply" />
      </div>

      {/* Background Ambience e Grade - Ajustado se tiver imagem */}
      <div className={`absolute inset-0 bg-[radial-gradient(circle_at_center,_#1e293b_0%,_#0B1120_100%)] ${backgroundImage ? 'opacity-40 mix-blend-hard-light' : 'opacity-40'}`} />
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="section-container relative z-10 w-full h-full flex flex-col pt-0 pb-4">
        
        {/* Header - Introdução Contextual */}
        <div className="w-full flex justify-center shrink-0">
          <motion.div 
            className="text-center max-w-3xl"
            initial={{ opacity: 1, y: 0 }}
             // Mantém o header visível mesmo com modal
            transition={{ duration: 0.5 }}
          >
            <h2 className="heading-2 text-white mb-6">Rede de Parceiros</h2>
            <p className="text-slate-400 text-lg font-light leading-relaxed mb-8">
              Não somos apenas mediadores. <span className="text-slate-200 font-medium">Conectamos sua ambição</span> a quem tem o maquinário, a tecnologia e a escala para realizá-la.
            </p>

            {/* CTA movido para o topo */}
            <div className="flex justify-center">
              <button
                onClick={() => setIsApplicationModalOpen(true)}
                className="group relative px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent/50 rounded-full text-slate-300 hover:text-white transition-all duration-300 backdrop-blur-sm flex items-center gap-3"
              >
                <span className="absolute inset-0 rounded-full bg-accent/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative font-medium text-sm">Sua empresa no nosso ecossistema?</span>
                <span className="relative text-accent font-bold text-sm group-hover:translate-x-1 transition-transform">Seja um Parceiro →</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Área Orbital - O Núcleo de Confiança */}
        <div className="flex-grow flex flex-col items-center justify-center w-full relative">
          <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center shrink-0">
            
            {/* Núcleo Central: CONEXUS */}
            <motion.div 
              className="absolute z-20 flex flex-col items-center justify-center w-32 h-32 md:w-40 md:h-40 rounded-full bg-transparent transition-all duration-700 cursor-default group"
              animate={hoveredPartner !== null ? { scale: 0.95, opacity: 0.8 } : { scale: 1, opacity: 1 }}
            >
              <div className="relative">
                {/* Efeito de "Pulsação" Orgânica (Heartbeat) */}
                <div className="absolute inset-0 animate-[ping_3s_ease-out_infinite] opacity-10 bg-accent rounded-full delay-1000" />
                <div 
                  onClick={() => setRotationOffset(prev => prev + 1)}
                  className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center relative cursor-pointer group active:scale-95 transition-transform"
                >
                  <div className="absolute inset-0 z-10">
                    <Globe />
                  </div>
                  {/* Overlay sutil para interação */}
                  <div className="absolute inset-0 rounded-full z-20 group-hover:bg-accent/5 transition-colors duration-500" />
                </div>
              </div>
              
              {/* Órbitas Sutis */}
              <svg className="absolute w-[500px] h-[500px] md:w-[600px] md:h-[600px] animate-[spin_120s_linear_infinite] opacity-10 pointer-events-none">
                <circle cx="300" cy="300" r="180" fill="none" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
                <circle cx="300" cy="300" r="280" fill="none" stroke="rgba(255,255,255,0.03)" />
              </svg>
            </motion.div>

            {/* Orbitais (Parceiros) */}
            <AnimatePresence>
              {mergedParceiros.map((parceiro, index) => {
                const pos = getPosition(index, mergedParceiros.length, 220, rotationOffset); // Inclui offset
                const isHovered = hoveredPartner === index;

                return (
                  <motion.div
                    key={parceiro.nome} // Key única para animar troca de lugar
                    className="absolute z-30"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      x: pos.x,
                      y: pos.y,
                    }}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 80,
                      damping: 15
                    }}
                    onMouseEnter={() => setHoveredPartner(index)}
                    onMouseLeave={() => setHoveredPartner(null)}
                  >
                    {/* Linha de Conexão Orgânica */}
                    {/* Linha de Conexão - Energy Flow */}
                    <svg className="absolute top-1/2 left-1/2 -z-10 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 pointer-events-none overflow-visible">
                      {/* Linha Base (Caminho) */}
                      <motion.line 
                        x1="250" y1="250" 
                        x2={250 - pos.x} y2={250 - pos.y} 
                        stroke="rgba(255,255,255,0.1)" 
                        strokeWidth="1"
                      />
                      
                      {/* Pulso de Energia */}
                      <motion.line 
                        x1="250" y1="250" 
                        x2={250 - pos.x} y2={250 - pos.y} 
                        stroke={parceiro.cor} // Cor dinâmica sincronizada com o parceiro
                        strokeWidth={isHovered ? "2" : "2"}
                        strokeLinecap="round"
                        strokeDasharray="0 1" // Dasharray inicial para o pathLength funcionar
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ 
                          pathLength: [0, 1, 1], // Cresce, enche, some
                          pathOffset: [0, 0, 1], // Desloca para o fim
                          opacity: [0, 1, 0]     // Fade in/out
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          ease: "linear",
                          repeatDelay: 0.5 
                        }}
                      />
                      
                      {/* Brilho Extra no Hover */}
                      {isHovered && (
                        <motion.line
                          x1="250" y1="250"
                          x2={250 - pos.x} y2={250 - pos.y}
                          stroke={parceiro.cor}
                          strokeWidth="3"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 0.5 }}
                          filter="url(#glow)"
                        />
                      )}
                      
                      <defs>
                        <filter id="glow">
                          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                          <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                          </feMerge>
                        </filter>
                      </defs>
                    </svg>

                    {/* Botão Nó (Parceiro) */}
                    <motion.button
                      onClick={() => setActivePartnerIndex(index)}
                      className="relative group outline-none"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      // Movimento de "flutuação" independente para cada nó para parecer orgânico
                      animate={{ y: [0, -8, 0] }}
                      transition={{
                        y: { repeat: Infinity, duration: 4 + index, ease: "easeInOut" }
                      }}
                    >
                      {/* Círculo Principal - Caixa Restaurada */}
                      <div className={`w-20 h-20 md:w-28 md:h-28 p-0 rounded-full bg-[#131b2e] border flex items-center justify-center shadow-2xl relative overflow-hidden ${isHovered ? 'border-accent shadow-[0_0_40px_rgba(190,26,135,0.3)]' : 'border-white/10'}`}>
                        
                        <Image 
                           src={parceiro.logo} 
                           alt={parceiro.nome} 
                           fill
                           className="object-contain transition-transform duration-500 scale-[1.80] group-hover:scale-[2.00]"
                           sizes="360px"
                           quality={100}
                           priority
                        />
                      </div>
                      
                      {/* Tagline e Nome (Aparece no Hover) - Posicionamento Dinâmico INVERTIDO (Aponta para o centro) */}
                      <div className={`absolute left-1/2 -translate-x-1/2 flex flex-col items-center whitespace-nowrap transition-all duration-300 pointer-events-none z-50 
                        ${pos.y > 0 ? 'bottom-full mb-6' : 'top-full mt-6'} 
                        ${isHovered ? 'opacity-100 translate-y-0' : `opacity-0 ${pos.y > 0 ? 'translate-y-4' : '-translate-y-4'}`}
                      `}>
                        {/* Nome do Parceiro - Hero Title */}
                        <span className="text-white font-heading font-bold text-xl tracking-wider mb-2 drop-shadow-lg scale-100 group-hover:scale-105 transition-transform duration-300">
                          {parceiro.nome}
                        </span>
                        
                        {/* Badge de Categoria - Tech Pill */}
                        <div className="flex items-center gap-2">
                          {/* Linha Decorativa Esquerda */}
                          <div className={`h-[1px] w-4 transition-all duration-500 ${isHovered ? 'w-8 bg-gradient-to-r from-transparent to-accent' : 'w-0 bg-transparent'}`} />
                          
                          <span className={`text-slate-300 text-[10px] font-bold tracking-[0.2em] uppercase bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 shadow-lg flex items-center gap-2 group-hover:border-accent/30 group-hover:text-accent/90 transition-all duration-300`}>
                             {index === 0 ? "Montagem" : index === 1 ? "PCB Fabrication" : "P&D e Inovação"}
                          </span>

                          {/* Linha Decorativa Direita */}
                          <div className={`h-[1px] w-4 transition-all duration-500 ${isHovered ? 'w-8 bg-gradient-to-l from-transparent to-accent' : 'w-0 bg-transparent'}`} />
                        </div>
                      </div>
                    </motion.button>
                  </motion.div>
                );
              })}
            </AnimatePresence>

          </div>



        </div>
      </div>

      {/* INTEGRAÇÃO DO MODAL DE PARCEIROS EXITENTES */}
      <PartnerModal 
        partner={activePartnerIndex !== null ? mergedParceiros[activePartnerIndex] : mergedParceiros[0]} 
        isOpen={activePartnerIndex !== null} 
        onClose={() => setActivePartnerIndex(null)} 
      />

      {/* INTEGRAÇÃO DO MODAL DE CANDIDATURA (NOVO) */}
      <PartnerApplicationModal 
        isOpen={isApplicationModalOpen}
        onClose={() => setIsApplicationModalOpen(false)}
      />

    </section>
  );
}
