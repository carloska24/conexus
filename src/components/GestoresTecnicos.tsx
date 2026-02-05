"use client";

import { useState } from "react";

const gestores = [
  {
    nome: "Cilene Paleari Faria",
    experiencia: "28+ anos de experiência na indústria eletrônica",
    bio: "Profissional com atuação sólida na gestão comercial, processos, qualidade e desenvolvimento de negócios. Ao longo de sua carreira, atuou de forma direta na interface entre engenharia, produção, qualidade e cliente, liderando equipes, implantando sistemas de gestão, MRP, Lean Manufacturing e Kaizen.",
    naConexus: "Responsável pelo diagnóstico das necessidades do cliente, estruturação das conexões técnicas, alinhamento entre expectativa e viabilidade e condução estratégica dos projetos.",
    whatsapp: "(19) 99232-0961",
    email: "cilene@conexusbr.com",
    foto: "/gestores/cilene",
    destaques: [
      "Implantação de sistemas MRP",
      "Lean Manufacturing e Kaizen",
      "Interface engenharia-produção-cliente",
      "Liderança de equipes multidisciplinares"
    ]
  },
  {
    nome: "Hudson Benedicto",
    experiencia: "30+ anos em engenharia de processos e manufatura de placas eletrônicas",
    bio: "Possui profundo conhecimento na relação entre processo, componentes e layout de PCB, com forte atuação em industrialização, confiabilidade e otimização produtiva. Liderou equipes de engenharia e participou de projetos de alta complexidade, incluindo o desenvolvimento da leitora de cartão do telefone público.",
    naConexus: "Atua na avaliação técnica dos projetos, análise de riscos produtivos, definição de processos e suporte técnico avançado à industrialização.",
    whatsapp: "(19) 99794-2136",
    email: "hudson@conexusbr.com",
    foto: "/gestores/hudson",
    destaques: [
      "Desenvolvimento leitora telefone público",
      "Expertise PCB e layout",
      "Análise de riscos produtivos",
      "Suporte técnico à industrialização"
    ]
  },
];

// Avatar com tamanho variável
function GestorAvatar({ nome, fotoBase, size = "normal" }: { nome: string; fotoBase: string; size?: "normal" | "large" }) {
  const iniciais = nome.split(' ').map(n => n[0]).join('');
  const sizeClasses = size === "large" 
    ? "w-40 h-40 md:w-56 md:h-56" 
    : "w-28 h-28 md:w-36 md:h-36";
  
  return (
    <div className={`${sizeClasses} rounded-full bg-white/20 border-4 border-accent overflow-hidden flex items-center justify-center transition-all duration-500`}>
      <picture>
        <source srcSet={`${fotoBase}.png`} type="image/png" />
        <source srcSet={`${fotoBase}.jpg`} type="image/jpeg" />
        <source srcSet={`${fotoBase}.svg`} type="image/svg+xml" />
        <img
          src={`${fotoBase}.png`}
          alt={nome}
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const parent = target.parentElement?.parentElement;
            if (parent) {
              const fallback = parent.querySelector('.fallback-initials');
              if (fallback) (fallback as HTMLElement).style.display = 'flex';
            }
          }}
        />
      </picture>
      <span className={`fallback-initials hidden text-white/60 font-heading font-bold ${size === "large" ? "text-5xl" : "text-3xl"} items-center justify-center`}>
        {iniciais}
      </span>
    </div>
  );
}

export function GestoresTecnicos() {
  const [selectedGestor, setSelectedGestor] = useState<number | null>(null);

  const handleSelect = (index: number) => {
    setSelectedGestor(selectedGestor === index ? null : index);
  };

  return (
    <section id="gestores" className="section-padding bg-primary overflow-hidden">
      <div className="section-container">
        {/* Título */}
        <h2 className="heading-2 text-white text-center mb-16">Gestores Técnicos</h2>

        {/* Container principal */}
        <div className="relative">
          
          {/* Ponte SVG - por cima das fotos */}
          {selectedGestor === null && (
            <svg 
              className="absolute left-1/2 -translate-x-1/2 w-full max-w-2xl h-28 pointer-events-none hidden md:block z-20"
              style={{ top: '40px' }}
              viewBox="0 0 500 100"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Definições de gradiente */}
              <defs>
                <linearGradient id="ponteGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#BE1A87" />
                  <stop offset="50%" stopColor="#BE1A87" />
                  <stop offset="100%" stopColor="#051D40" />
                </linearGradient>
                <linearGradient id="ponteGradientAnimado" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#BE1A87" />
                  <stop offset="40%" stopColor="#BE1A87" />
                  <stop offset="60%" stopColor="#6B21A8" />
                  <stop offset="100%" stopColor="#051D40" />
                </linearGradient>
              </defs>
              
              {/* Arco da ponte - base */}
              <path
                d="M 40 85 Q 250 5 460 85"
                fill="none"
                stroke="url(#ponteGradient)"
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.4"
              />
              {/* Linha animada com gradiente */}
              <path
                d="M 40 85 Q 250 5 460 85"
                fill="none"
                stroke="url(#ponteGradientAnimado)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="12, 6"
                className="animate-dash"
              />
              {/* Ponto rosa - Cilene */}
              <circle cx="40" cy="85" r="8" fill="#BE1A87" />
              {/* Ponto azul - Hudson */}
              <circle cx="460" cy="85" r="8" fill="#051D40" stroke="#BE1A87" strokeWidth="2" />
              
              {/* Ícone central - logo conexus maior */}
              <circle cx="250" cy="20" r="20" fill="#BE1A87" />
              <circle cx="250" cy="20" r="16" fill="white" opacity="0.1" />
              <text x="250" y="26" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">⚡</text>
            </svg>
          )}

          {/* Grid de gestores */}
          <div className={`grid transition-all duration-700 ease-in-out ${
            selectedGestor === null 
              ? 'md:grid-cols-2 gap-8 md:gap-16' 
              : 'grid-cols-1'
          }`}>
            {gestores.map((gestor, index) => {
              const isSelected = selectedGestor === index;
              const isHidden = selectedGestor !== null && selectedGestor !== index;

              return (
                <div
                  key={index}
                  className={`transition-all duration-700 ease-in-out ${
                    isHidden 
                      ? 'opacity-0 scale-75 absolute pointer-events-none' 
                      : 'opacity-100 scale-100 relative'
                  }`}
                >
                  {/* Estado compacto - clicável */}
                  {!isSelected && !isHidden && (
                    <div 
                      onClick={() => handleSelect(index)}
                      className="group flex flex-col items-center text-center cursor-pointer"
                    >
                      <div className="mb-4 group-hover:scale-105 transition-transform duration-300">
                        <GestorAvatar nome={gestor.nome} fotoBase={gestor.foto} />
                      </div>
                      <h3 className="heading-3 text-white group-hover:text-accent transition-colors">{gestor.nome}</h3>
                      <p className="text-accent font-medium text-sm mb-2">{gestor.experiencia}</p>
                      <p className="text-white/60 text-sm">Clique para ver mais</p>
                    </div>
                  )}

                  {/* Estado expandido */}
                  {isSelected && (
                    <div className="animate-fadeIn">
                      {/* Botão voltar */}
                      <button
                        onClick={() => setSelectedGestor(null)}
                        className="flex items-center gap-2 text-white/70 hover:text-accent mb-8 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Voltar para todos
                      </button>

                      {/* Perfil expandido */}
                      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start">
                        {/* Foto grande */}
                        <div className="flex-shrink-0">
                          <GestorAvatar nome={gestor.nome} fotoBase={gestor.foto} size="large" />
                        </div>

                        {/* Conteúdo */}
                        <div className="flex-1 text-center md:text-left">
                          <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">{gestor.nome}</h3>
                          <p className="text-accent font-medium text-lg mb-6">{gestor.experiencia}</p>

                          {/* Bio */}
                          <p className="text-white/80 text-lg leading-relaxed mb-6">{gestor.bio}</p>

                          {/* Na Conexus - destaque */}
                          <div className="bg-accent/10 rounded-xl p-5 border-l-4 border-accent mb-6">
                            <h4 className="text-accent font-heading font-semibold mb-2">Na Conexus</h4>
                            <p className="text-white/90">{gestor.naConexus}</p>
                          </div>

                          {/* Destaques */}
                          <div className="mb-8">
                            <h4 className="text-white font-heading font-semibold mb-4">Destaques</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {gestor.destaques.map((destaque, i) => (
                                <div key={i} className="flex items-center gap-3 bg-white/5 rounded-lg p-3">
                                  <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                                  <span className="text-white/80">{destaque}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* CTAs */}
                          <div className="flex flex-col sm:flex-row gap-4">
                            <a
                              href={`https://wa.me/55${gestor.whatsapp.replace(/\D/g, '')}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-xl transition-colors"
                            >
                              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                              </svg>
                              WhatsApp: {gestor.whatsapp}
                            </a>
                            <a
                              href={`mailto:${gestor.email}`}
                              className="flex items-center justify-center gap-3 bg-accent hover:bg-accent/90 text-white font-semibold py-4 px-8 rounded-xl transition-colors"
                            >
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                              {gestor.email}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CSS para animações */}
      <style jsx>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -23;
          }
        }
        .animate-dash {
          animation: dash 1.5s linear infinite;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </section>
  );
}
