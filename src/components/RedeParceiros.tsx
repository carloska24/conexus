"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PartnerModal, PartnerData } from "./PartnerModal";

const parceiros: PartnerData[] = [
  {
    nome: "CADService",
    descricao: "Especialista em manufatura eletrônica (EMS), oferecendo desde montagem SMT/PTH até integração de produtos finais e gestão completa de componentes.",
    logo: "/parceiros/cadservice.svg",
    site: "https://cadservice.com.br",
    cor: "#e11d48", // Rose-600
    especialidades: ["Manufatura SMT de Alta Precisão", "Montagem PTH Robusta", "Testes Funcionais & ICT", "Gestão de Supply Chain"],
    destaques: ["Parque fabril com tecnologia de ponta", "Certificação ISO 9001 e 13485 (Médico)", "Rastreabilidade completa de processo"],
    imagens: [
       "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000", // Placeholder SMT
       "https://images.unsplash.com/photo-1563770095-39d468a92305?auto=format&fit=crop&q=80&w=1000"  // Placeholder Lab
    ],
    sobre: "Com mais de 30 anos de mercado, a CADService é referência em serviços de manufatura eletrônica. Sua estrutura permite atender desde prototipagem rápida até produção em larga escala com flexibilidade e rigoroso controle de qualidade. A empresa atua como uma extensão da fábrica do cliente, gerenciando compra de materiais, montagem de placas (PCBA) e integração final de produtos (box build), atendendo setores críticos como médico, militar e automotivo."
  },
  {
    nome: "ICAPE Group",
    descricao: "Líder global no fornecimento de PCBs e peças técnicas customizadas, conectando projetos a uma rede auditada de 80 fábricas parceiras ao redor do mundo.",
    logo: "/parceiros/icape.svg",
    site: "https://www.icape-group.com",
    cor: "#0ea5e9", // Sky-500
    especialidades: ["PCB Multilayer & HDI", "Flex & Rigid-Flex", "Peças Técnicas Customizadas", "Auditoria de Fábricas"],
    destaques: ["Presença em mais de 70 países", "Laboratório próprio de controle de qualidade", "Soluções logísticas globais (DDP, CIP)"],
    imagens: [
       "https://images.unsplash.com/photo-1598132846985-oec1c2017c67?auto=format&fit=crop&q=80&w=1000", // PCB
       "https://images.unsplash.com/photo-1623945417478-43d9646c0397?auto=format&fit=crop&q=80&w=1000"  // Global Logistics
    ],
    sobre: "O ICAPE Group é um dos maiores players mundiais na distribuição de circuitos impressos e peças técnicas. Com uma abordagem focada em qualidade e otimização de custos, o grupo atua como um hub estratégico, selecionando a melhor fábrica para cada tipo de tecnologia demandada. Seus engenheiros auditam constantemente os parceiros asiáticos e europeus, garantindo que o produto entregue cumpra as mais rigorosas normas internacionais."
  },
  {
    nome: "FITec",
    descricao: "Instituto de Ciência e Tecnologia (ICT) focado em P&D, transformando desafios complexos em soluções inovadoras de hardware, firmware e software.",
    logo: "/parceiros/fitec.svg",
    site: "https://www.fitec.org.br",
    cor: "#8b5cf6", // Violet-500
    especialidades: ["Pesquisa & Desenvolvimento (P&D)", "Lei da Informática", "Certificação de Produtos", "IoT & Indústria 4.0"],
    destaques: ["Acreditação CATI/MCTI", "Equipe de Mestres e Doutores", "Laboratórios de ensaios creditados"],
    imagens: [
       "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000", // Innovation
       "https://images.unsplash.com/photo-1581093458891-953b6aa3776e?auto=format&fit=crop&q=80&w=1000"  // Lab Work
    ],
    sobre: "A FITec (Fundação para Inovações Tecnológicas) é um centro de excelência em P&D credenciado pelo Ministério da Ciência, Tecnologia e Inovações (MCTI). Atua no desenvolvimento de novas tecnologias, permitindo que empresas parceiras usufruam dos benefícios da Lei de Informática. Com corpo técnico altamente qualificado, a FITec entrega desde a concepção e design de produtos até a validação e certificação, cobrindo todo o ciclo de vida da inovação."
  },
];

export function RedeParceiros() {
  const [activePartnerIndex, setActivePartnerIndex] = useState<number | null>(null);
  const [hoveredPartner, setHoveredPartner] = useState<number | null>(null);

  const getPosition = (index: number, total: number, radius: number) => {
    const angle = (index * (360 / total) - 90) * (Math.PI / 180);
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
        
        {/* Header */}
        <div className="w-full flex justify-center shrink-0">
          <motion.div 
            className="text-center max-w-3xl"
            initial={{ opacity: 1, y: 0 }}
             // Mantém o header visível mesmo com modal, o backdrop cuidará do foco
            transition={{ duration: 0.5 }}
          >
            <span className="text-accent font-bold tracking-widest text-xs uppercase mb-3 block">Ecossistema Conectado</span>
            <h2 className="heading-2 text-white mb-6">Rede de Parceiros</h2>
            <p className="text-slate-400 text-lg font-light">
              Conectamos sua empresa aos maiores especialistas do mercado, orbitando em torno do sucesso do seu projeto.
            </p>
          </motion.div>
        </div>

        {/* Área Orbital */}
        <div className="flex-grow flex items-center justify-center w-full relative">
          <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center shrink-0">
            
            {/* Núcleo Central: CONEXUS */}
            <motion.div 
              className="absolute z-20 flex flex-col items-center justify-center w-40 h-40 rounded-full bg-[#0B1120] border border-white/10 shadow-[0_0_60px_rgba(190,26,135,0.2)] hover:border-accent/50 transition-colors duration-500 group cursor-default"
            >
              <div className="relative">
                <div className="absolute inset-0 animate-ping opacity-20 bg-accent rounded-full delay-1000" />
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent/20 to-transparent flex items-center justify-center backdrop-blur-sm border border-accent/20">
                  <span className="font-heading font-bold text-white tracking-widest text-sm">CONEXUS</span>
                </div>
              </div>
              <svg className="absolute w-[600px] h-[600px] animate-[spin_60s_linear_infinite] opacity-10 pointer-events-none">
                <circle cx="300" cy="300" r="180" fill="none" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
                <circle cx="300" cy="300" r="280" fill="none" stroke="rgba(255,255,255,0.03)" />
              </svg>
            </motion.div>

            {/* Orbitais (Parceiros) */}
            <AnimatePresence>
              {parceiros.map((parceiro, index) => {
                const pos = getPosition(index, parceiros.length, 220);
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
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                    onMouseEnter={() => setHoveredPartner(index)}
                    onMouseLeave={() => setHoveredPartner(null)}
                  >
                    {/* Linha de Conexão */}
                    <svg className="absolute top-1/2 left-1/2 -z-10 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-20">
                      <line 
                        x1="250" y1="250" 
                        x2={250 - pos.x} y2={250 - pos.y} 
                        stroke="white" strokeWidth="1" strokeDasharray="5,5"
                      />
                    </svg>

                    {/* Botão Nó */}
                    <motion.button
                      onClick={() => setActivePartnerIndex(index)}
                      className="relative group outline-none"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      animate={{ y: [0, -10, 0] }}
                      transition={{
                        y: { repeat: Infinity, duration: 3 + index, ease: "easeInOut" }
                      }}
                    >
                      <div className={`w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#182030] border-2 flex items-center justify-center shadow-2xl transition-all duration-300 relative overflow-hidden ${isHovered ? 'border-accent shadow-[0_0_30px_rgba(190,26,135,0.4)]' : 'border-white/10'}`}>
                        <div className={`absolute inset-0 bg-${parceiro.cor} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                        <img 
                           src={parceiro.logo} 
                           alt={parceiro.nome} 
                           className="w-16 md:w-20 transition-all duration-300 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100 transform group-hover:scale-110"
                        />
                      </div>
                      
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

          </div>
        </div>
      </div>

      {/* INTEGRAÇÃO DO MODAL */}
      <PartnerModal 
        partner={activePartnerIndex !== null ? parceiros[activePartnerIndex] : parceiros[0]} 
        isOpen={activePartnerIndex !== null} 
        onClose={() => setActivePartnerIndex(null)} 
      />

    </section>
  );
}
