"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ClipboardList, 
  BarChart3, 
  Target, 
  Users2, 
  LineChart, 
  X,
  Globe2,
  ChevronRight,
  Sparkles
} from "lucide-react";
import Image from "next/image";

// NEW TEXTS HERE
const etapas = [
  {
    id: 0,
    numero: "01",
    titulo: "DIAGNÓSTICO TÉCNICO",
    descricao: "Análise forense da engenharia atual para identificar riscos ocultos, gargalos de manufatura e conformidade normativa antes de qualquer investimento significativo.",
    icon: ClipboardList,
    detalhes: [
      "Auditoria de documentação e BOM",
      "Análise de riscos de Supply Chain",
      "Gap Analysis de conformidade",
      "Relatório de maturidade técnica"
    ]
  },
  {
    id: 1,
    numero: "02",
    titulo: "VIABILIDADE ECONÔMICA",
    descricao: "Validação completa de custos (COGS), escalabilidade fabril e análise de retorno. Transformamos ideias técnicas em business cases sólidos e defensáveis.",
    icon: BarChart3,
    detalhes: [
      "Estudo detalhado de COGS",
      "Análise de Ponto de Equilíbrio",
      "Cenários de escala produtiva",
      "Definição de Target Price"
    ]
  },
  {
    id: 2,
    numero: "03",
    titulo: "ESTRATÉGIA & NPI",
    descricao: "Definição agnóstica de tecnologias e roadmap de NPI (New Product Introduction). Desenhamos a arquitetura mais eficiente para longevidade e certificação.",
    icon: Target,
    detalhes: [
      "Arquitetura de Sistemas (Hardware/Firmware)",
      "Seleção de Stack Tecnológico",
      "Roadmap de Certificação (Anatel/Inmetro)",
      "Planejamento de Ciclo de Vida"
    ]
  },
  {
    id: 3,
    numero: "04",
    titulo: "SOURCING GLOBAL",
    descricao: "Conexão direta com ecossistema validado de Design Houses e CMs internacionais. Eliminamos intermediários e garantimos contratos blindados com SLAs definidos.",
    icon: Users2,
    detalhes: [
      "Matchmaking com parceiros homologados",
      "Gestão de RFQs (Cotações Globais)",
      "Negociação Técnica e Comercial",
      "Definição de Contratos e SLAs"
    ]
  },
  {
    id: 4,
    numero: "05",
    titulo: "GESTÃO DA EXECUÇÃO",
    descricao: "Atuação hands-on durante todo o desenvolvimento. Atuamos como seus 'olhos técnicos' para garantir que o entregável corresponda rigorosamente às especificações.",
    icon: LineChart,
    detalhes: [
      "Acompanhamento de Cronograma Físico",
      "Homologação de Entregáveis",
      "Mitigação Ativa de Riscos",
      "Controle de Qualidade na Fonte"
    ]
  },
];

export interface ModeloConsultoriaProps {
  backgroundImage?: string;
}

export function ModeloConsultoria({ backgroundImage }: ModeloConsultoriaProps) {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [isMounted, setIsMounted] = useState(false); // Fix Hydration
  const requestRef = useRef<number>(0);
  const shouldAnimateRef = useRef(false);

  // Sincronizar Ref com estado para acesso instantâneo no loop de animação
  useEffect(() => {
    shouldAnimateRef.current = !isHovering && activeStep === null;
  }, [isHovering, activeStep]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Rotação física suave (requestAnimationFrame) - Frame Based (0.2 deg Anti-Horário)
  const animate = () => {
    // Verificação de segurança via Ref (Evita Stale Clousure)
    if (!shouldAnimateRef.current) return;

    // Velocidade de rotação: 0.2 graus por frame (Anti-Horário)
    setRotation(prev => (prev - 0.2) % 360);
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (!isMounted) return;

    // Só anima se não estiver com mouse em cima DE UM NÓ nem modal aberto
    if (!isHovering && activeStep === null) {
      requestRef.current = requestAnimationFrame(animate);
    } else {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    }
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isHovering, activeStep, isMounted]);

  // Click Outside para fechar modal
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setActiveStep(null);
      }
    };

    if (activeStep !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeStep]);

  // Função para calcular posição orbital
  const getPosition = (index: number, total: number, radius: number) => {
    const angle = ((index * (360 / total)) + rotation) * (Math.PI / 180);
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return { x, y };
  };

  return (
    <section id="modelo" className="pt-12 md:pt-14 pb-24 bg-slate-900 overflow-visible relative text-white min-h-screen flex flex-col snap-start">
      
      {/* Background Hero Image (Se existir) */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt="Background Modelo Consultoria"
            fill
            className="object-cover opacity-100"
          />
          {/* Overlay Escuro Adicional para Contraste - Reduzido */}
          <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply" />
        </div>
      )}

      {/* Background Tech - Gradiente e Grid (Ajustado se tiver imagem) */}
      <div className={`absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-950 ${backgroundImage ? 'opacity-30 mix-blend-hard-light' : 'opacity-100'}`} />
      
      {/* Grid removido conforme solicitação */}
      
      <div className="section-container relative z-10">
        <div className="text-center mb-12">
          <h2 className="heading-2 text-white mb-4">Modelo de Consultoria</h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg font-light">
            Um ecossistema integrado onde cada etapa gira em torno do sucesso do seu produto.
          </p>
        </div>

        {/* Layout Desktop (Orbital Tech) */}
        <div className="hidden lg:flex justify-center items-center h-[700px] relative -mt-16">
          
          {/* 1. Anéis de Energia (SVG p/ Brilho Real - Visibilidade Aumentada) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             {/* Anel Externo - Lento */}
             <svg className="w-[600px] h-[600px] animate-[spin_60s_linear_infinite] opacity-60">
               <circle cx="300" cy="300" r="298" fill="none" stroke="url(#ringGradient)" strokeWidth="2" strokeDasharray="10 10" />
               <defs>
                 <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                   <stop offset="0%" stopColor="#BE1A87" stopOpacity="0" />
                   <stop offset="50%" stopColor="#BE1A87" stopOpacity="1" />
                   <stop offset="100%" stopColor="#BE1A87" stopOpacity="0" />
                 </linearGradient>
               </defs>
             </svg>
             
             {/* Anel Médio - Rápido e Reverso */}
             <svg className="absolute w-[450px] h-[450px] animate-[spin_40s_linear_infinite_reverse] opacity-50">
               <circle cx="225" cy="225" r="223" fill="none" stroke="#BE1A87" strokeWidth="2" strokeDasharray="4 8" className="drop-shadow-[0_0_10px_rgba(190,26,135,0.5)]" />
             </svg>

             {/* Anel Interno - Pulsante */}
             <div className="absolute w-[300px] h-[300px] rounded-full border border-accent/20 animate-pulse shadow-[0_0_30px_rgba(190,26,135,0.1) inset]" />
          </div>

          {/* Globo Central Pulsante */}
          <div className="relative z-10 w-32 h-32 bg-slate-800 rounded-full shadow-[0_0_50px_rgba(190,26,135,0.4)] flex items-center justify-center border border-white/10 group-hover:border-accent/50 transition-colors duration-500">
             <div className="absolute inset-0 rounded-full bg-accent/10 animate-pulse" />
             <div className="absolute inset-2 rounded-full border border-accent/30 border-dashed animate-[spin_15s_linear_infinite]" />
             <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.092 512.092" className="w-16 h-16 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
               <path className="text-accent" fill="currentColor" d="M312.453,199.601c-6.066-6.102-12.792-11.511-20.053-16.128c-19.232-12.315-41.59-18.859-64.427-18.859 c-31.697-0.059-62.106,12.535-84.48,34.987L34.949,308.23c-22.336,22.379-34.89,52.7-34.91,84.318 c-0.042,65.98,53.41,119.501,119.39,119.543c31.648,0.11,62.029-12.424,84.395-34.816l89.6-89.6 c1.628-1.614,2.537-3.816,2.524-6.108c-0.027-4.713-3.87-8.511-8.583-8.484h-3.413c-18.72,0.066-37.273-3.529-54.613-10.581 c-3.195-1.315-6.867-0.573-9.301,1.877l-64.427,64.512c-20.006,20.006-52.442,20.006-72.448,0 c-20.006-20.006-20.006-52.442,0-72.448l108.971-108.885c19.99-19.965,52.373-19.965,72.363,0 c13.472,12.679,34.486,12.679,47.957,0c5.796-5.801,9.31-13.495,9.899-21.675C322.976,216.108,319.371,206.535,312.453,199.601z" />
               <path className="text-primary" fill="currentColor" stroke="rgba(255,255,255,0.4)" strokeWidth="5" d="M477.061,34.993c-46.657-46.657-122.303-46.657-168.96,0l-89.515,89.429c-2.458,2.47-3.167,6.185-1.792,9.387 c1.359,3.211,4.535,5.272,8.021,5.205h3.157c18.698-0.034,37.221,3.589,54.528,10.667c3.195,1.315,6.867,0.573,9.301-1.877 l64.256-64.171c20.006-20.006,52.442-20.006,72.448,0c20.006,20.006,20.006,52.442,0,72.448l-80.043,79.957l-0.683,0.768 l-27.989,27.819c-19.99,19.965-52.373,19.965-72.363,0c-13.472-12.679-34.486-12.679-47.957,0 c-5.833,5.845-9.35,13.606-9.899,21.845c-0.624,9.775,2.981,19.348,9.899,26.283c9.877,9.919,21.433,18.008,34.133,23.893 c1.792,0.853,3.584,1.536,5.376,2.304c1.792,0.768,3.669,1.365,5.461,2.048c1.792,0.683,3.669,1.28,5.461,1.792l5.035,1.365 c3.413,0.853,6.827,1.536,10.325,2.133c4.214,0.626,8.458,1.025,12.715,1.195h5.973h0.512l5.12-0.597 c1.877-0.085,3.84-0.512,6.059-0.512h2.901l5.888-0.853l2.731-0.512l4.949-1.024h0.939c20.961-5.265,40.101-16.118,55.381-31.403 l108.629-108.629C523.718,157.296,523.718,81.65,477.061,34.993z" />
             </svg>
             <div className="absolute -top-12 whitespace-nowrap">
               <span className="font-heading font-bold text-accent text-xs tracking-[0.3em] animate-pulse">CONEXUS</span>
             </div>
             
             {/* Badge Texto "Clique nos nós" - Estilo Premium Tech High-End */}
             <div className="absolute -bottom-20 z-20">
               <div className="relative group cursor-default">
                 {/* Glow de Fundo */}
                 <div className="absolute -inset-1 bg-gradient-to-r from-accent via-purple-500 to-accent rounded-lg blur opacity-40 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
                 
                 {/* Container Principal */}
                 <div className="relative px-5 py-2.5 bg-slate-900 ring-1 ring-white/10 rounded-lg flex items-center gap-3 backdrop-blur-xl">
                    {/* Indicador de Status - Bolinha Pulsante */}
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                    </span>

                    {/* Texto Estilizado */}
                    <span className="font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-white text-[10px] tracking-[0.25em] uppercase whitespace-nowrap">
                      Clique nos nós para conectar
                    </span>
                 </div>
               </div>
             </div>
          </div>

          {/* Renderização Client-Only da Animação */}
          {isMounted && (
            <>
              {/* SVG Conexões */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#BE1A87" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#BE1A87" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {etapas.map((etapa, index) => {
                  const pos = getPosition(index, etapas.length, 250);
                  const isActive = activeStep === index;

                  if (!isActive && !isHovering) return null;

                  return (
                    <line
                      key={`line-${index}`}
                      x1="50%"
                      y1="50%"
                      x2={`calc(50% + ${pos.x}px)`}
                      y2={`calc(50% + ${pos.y}px)`}
                      stroke={isActive ? "url(#lineGradient)" : "rgba(255,255,255,0.2)"}
                      strokeWidth={isActive ? 2 : 1}
                      className="transition-colors duration-200 ease-out"
                    />
                  );
                })}
              </svg>

              {/* Itens Orbitais */}
              <div className="absolute inset-0 pointer-events-none">
                {etapas.map((etapa, index) => {
                  const pos = getPosition(index, etapas.length, 250);
                  const isActive = activeStep === index;

                  return (
                    <button
                      key={index}
                      className={`absolute w-16 h-16 rounded-full flex items-center justify-center shadow-lg transform -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-auto group transition-colors transition-transform duration-300
                        ${isActive 
                          ? 'bg-accent text-white scale-125 ring-4 ring-accent/30 shadow-[0_0_50px_#BE1A87]' 
                          : 'bg-slate-900 text-slate-400 border border-white/20 hover:border-accent hover:text-accent hover:scale-110 hover:shadow-[0_0_30px_rgba(190,26,135,0.6)]'}
                      `}
                      style={{
                        left: `calc(50% + ${pos.x}px)`,
                        top: `calc(50% + ${pos.y}px)`,
                      }}
                      onClick={(e) => {
                        e.stopPropagation(); // Impede toggle imediato pelo listener global
                        setActiveStep(isActive ? null : index);
                      }}
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                    >
                      {/* Badge Numérico (Azul Marinho) - Nova Adição */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-blue-900 border border-white/20 flex items-center justify-center shadow-lg z-30">
                        <span className="text-[10px] font-bold text-white">{etapa.numero}</span>
                      </div>

                      <etapa.icon className={`w-7 h-7 ${isActive ? 'text-white' : 'currentColor'}`} strokeWidth={1.5} />
                      
                      <div className={`absolute ${pos.y > 0 ? 'top-20' : '-top-12'} w-auto whitespace-nowrap text-center pointer-events-none transition-all duration-300 ${isActive || isHovering ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'}`}>
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-md border shadow-lg ${isActive ? 'bg-accent border-accent text-white' : 'bg-slate-900/90 border-white/20 text-slate-200'}`}>
                          {etapa.titulo}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </>
          )}

          {/* Modal de Detalhes Dinâmico - ANCHOR TOP FIX */}
          <AnimatePresence>
            {activeStep !== null && (
              <motion.div
                ref={modalRef}
                initial={{ opacity: 0, scale: 0.9, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className={`absolute w-80 bg-slate-900/95 backdrop-blur-2xl rounded-2xl shadow-[0_0_60px_rgba(0,0,0,0.7)] border border-white/10 p-6 z-50
                  ${getPosition(activeStep, etapas.length, 250).x > 0 
                    ? 'left-[calc(50%+160px)] ml-10' 
                    : 'right-[calc(50%+160px)] mr-10'
                  }
                `}
                style={{ top: '15%' }} 
              >
                {/* Indicador de Conexão (Seta) */}
                <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-slate-900 border-t border-r border-white/10 rotate-45 ${getPosition(activeStep, etapas.length, 250).x > 0 ? '-left-2.5 border-b-0 border-l-white/10 border-t-0 border-r-0 rotate-[225deg]' : '-right-2.5 border-t-white/10 border-r-white/10 border-b-0 border-l-0'}`} />

                {/* Título com melhor tipografia */}
                <div className="flex justify-between items-start mb-6 border-b border-white/10 pb-4">
                  <span className="text-accent/10 font-heading font-bold text-7xl absolute -top-4 -right-2 pointer-events-none select-none">
                    {etapas[activeStep].numero}
                  </span>
                  <div className="flex items-center gap-4 relative z-10 w-full pr-8">
                    <div className="p-3 bg-accent/10 rounded-xl text-accent shadow-inner border border-accent/20 flex-shrink-0">
                      {(() => {
                        const Icon = etapas[activeStep].icon;
                        return <Icon className="w-6 h-6" />;
                      })()}
                    </div>
                    <h3 className="font-heading font-bold text-xl leading-none text-white tracking-wide">
                      {etapas[activeStep].titulo}
                    </h3>
                  </div>
                  <button 
                    onClick={(e) => { e.stopPropagation(); setActiveStep(null); }}
                    className="p-2 -mr-2 -mt-2 hover:bg-white/10 rounded-full transition-colors z-20 text-slate-400 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Descrição com melhor contraste e tamanho */}
                <p className="text-slate-200 text-[15px] mb-8 leading-relaxed font-normal border-l-2 border-accent/30 pl-4">
                  {etapas[activeStep].descricao}
                </p>

                <div className="space-y-3">
                  <h4 className="text-[11px] font-bold text-accent uppercase tracking-[0.2em] mb-4 flex items-center gap-3 opacity-90">
                    <span className="w-6 h-[1px] bg-accent"></span>
                    Entregáveis Estratégicos
                  </h4>
                  {etapas[activeStep].detalhes.map((detalhe, i) => (
                    <div key={i} className="flex items-center gap-3 group/item p-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 transition-all w-full">
                       <div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_#BE1A87] group-hover/item:scale-125 transition-transform" />
                       <span className="text-sm font-medium text-slate-300 group-hover/item:text-white transition-colors">{detalhe}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Layout Mobile (Lista Tech - Mantido) */}
        <div className="lg:hidden space-y-4">
          {etapas.map((etapa, index) => {
            const isActive = activeStep === index;
            return (
              <div 
                key={index}
                className={`bg-slate-800 rounded-xl border transition-all duration-300 overflow-hidden ${isActive ? 'border-accent shadow-[0_0_20px_rgba(190,26,135,0.15)]' : 'border-white/5'}`}
              >
                <button
                  onClick={() => setActiveStep(isActive ? null : index)}
                  className="w-full flex items-center p-4 gap-4 text-left"
                >
                  <div className={`p-3 rounded-lg flex-shrink-0 transition-colors ${isActive ? 'bg-accent text-white' : 'bg-white/5 text-slate-400'}`}>
                    <etapa.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] font-bold text-accent/80 mb-1 block tracking-wider">{etapa.numero}</span>
                    <h3 className="font-heading font-semibold text-white">{etapa.titulo}</h3>
                  </div>
                  <ChevronRight className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${isActive ? 'rotate-90 text-accent' : ''}`} />
                </button>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="border-t border-white/5"
                    >
                      <div className="p-4 pt-2">
                        <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                          {etapa.descricao}
                        </p>
                        <div className="bg-slate-900/50 rounded-lg p-3 space-y-2 border border-white/5">
                          {etapa.detalhes.map((detalhe, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <span className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
                              <span className="text-xs text-slate-400">{detalhe}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
