import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";

export interface PartnerData {
  nome: string;
  descricao: string;
  logo: string;
  site: string;
  cor: string;
  especialidades: string[];
  destaques: string[];
  imagens: string[]; // URLs para o carrossel
  sobre: string; // Texto longo detalhado
}

interface PartnerModalProps {
  partner: PartnerData;
  isOpen: boolean;
  onClose: () => void;
}

export function PartnerModal({ partner, isOpen, onClose }: PartnerModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Reset image index when modal opens/changes partner
  useEffect(() => {
    if (isOpen) setCurrentImageIndex(0);
  }, [isOpen, partner]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === partner.imagens.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? partner.imagens.length - 1 : prev - 1
    );
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop com Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          >
            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()} // Prevent close on modal click
              className="bg-[#0f1623] w-full max-w-6xl max-h-[90vh] rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden relative"
            >
              
              {/* Header Fixo */}
              <div className="flex items-center justify-between p-6 md:p-8 border-b border-white/5 bg-[#0f1623] z-20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center p-2">
                    <img src={partner.logo} alt={partner.nome} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-white">{partner.nome}</h2>
                    <span className="text-accent text-xs font-bold uppercase tracking-wider">Parceiro Estratégico</span>
                  </div>
                </div>

                <button 
                  onClick={onClose}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors border border-white/5 hover:border-white/20"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="overflow-y-auto flex-1 custom-scrollbar">
                <div className="grid lg:grid-cols-12 gap-8 p-6 md:p-8">
                  
                  {/* Coluna Esquerda: Informações (7 cols) */}
                  <div className="lg:col-span-7 space-y-8">
                    
                    {/* Sobre */}
                    <div>
                      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <span className="w-1 h-6 bg-accent rounded-full"></span>
                        Sobre a Empresa
                      </h3>
                      <p className="text-slate-300 leading-relaxed text-lg font-light">
                        {partner.sobre}
                      </p>
                    </div>

                    {/* Tags de Especialidades */}
                    <div>
                      <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Especialidades Técnicas</h3>
                      <div className="flex flex-wrap gap-2">
                        {partner.especialidades.map((spec, index) => (
                           <span key={index} className="px-3 py-1.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 text-sm font-medium">
                             {spec}
                           </span>
                        ))}
                      </div>
                    </div>

                    {/* Destaques (Checklist) */}
                    <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                      <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Destaques da Parceria</h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {partner.destaques.map((item, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                            <span className="text-slate-200 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Coluna Direita: Galeria e CTA (5 cols) */}
                  <div className="lg:col-span-5 flex flex-col gap-6">
                    
                    {/* Carrossel de Imagens */}
                    {partner.imagens.length > 0 ? (
                      <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black group">
                        <AnimatePresence mode="wait">
                          <motion.img 
                            key={currentImageIndex}
                            src={partner.imagens[currentImageIndex]}
                            alt={`Galeria ${partner.nome} ${currentImageIndex + 1}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="w-full h-full object-cover"
                          />
                        </AnimatePresence>
                        
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

                        {/* Controles */}
                        <div className="absolute bottom-4 right-4 flex gap-2 z-10">
                          <button onClick={prevImage} className="p-2 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-sm transition-colors border border-white/10">
                            <ChevronLeft size={20} />
                          </button>
                          <button onClick={nextImage} className="p-2 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-sm transition-colors border border-white/10">
                             <ChevronRight size={20} />
                          </button>
                        </div>
                        
                        {/* Indicadores */}
                        <div className="absolute bottom-4 left-4 flex gap-1.5 z-10">
                          {partner.imagens.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => setCurrentImageIndex(idx)}
                              className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? 'bg-accent w-6' : 'bg-white/50 hover:bg-white'}`}
                            />
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="aspect-video rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                        <span className="text-slate-500">Sem imagens disponíveis</span>
                      </div>
                    )}

                    {/* CTA Card */}
                    <div className="mt-auto bg-gradient-to-br from-white/5 to-transparent p-6 rounded-2xl border border-white/10">
                      <p className="text-slate-400 text-sm mb-6">
                        Interessado nas soluções da {partner.nome}? Visite o site oficial para conhecer mais detalhes.
                      </p>
                      <a 
                        href={partner.site}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-4 bg-accent hover:bg-accent-dark text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-accent/40"
                      >
                        Visitar Site Oficial
                        <ExternalLink size={18} />
                      </a>
                    </div>

                  </div>
                </div>
              </div>

            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
