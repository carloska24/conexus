"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Building2, User, Mail, Phone, Globe, Briefcase, Send } from "lucide-react";

interface PartnerApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PartnerApplicationModal({ isOpen, onClose }: PartnerApplicationModalProps) {
  const [formData, setFormData] = useState({
    nome: "",
    cargo: "",
    email: "",
    whatsapp: "",
    empresa: "",
    site: "",
    area: "",
    diferenciais: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Lock body scroll
  if (typeof window !== "undefined") {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulação de envio para API
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Partner Application Data:", formData);

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0f1623] w-full max-w-4xl max-h-[90vh] rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden relative"
            >
              {/* Close Button */}
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 z-20 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              {/* Conteúdo */}
              <div className="flex-1 overflow-y-auto custom-scrollbar">
                <div className="p-8 md:p-12">
                  
                  {/* Header */}
                  <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 text-accent mb-6">
                      <Briefcase size={32} />
                    </div>
                    <h2 className="text-3xl font-heading font-bold text-white mb-3">Seja um Parceiro Estratégico</h2>
                    <p className="text-slate-400 text-lg max-w-xl mx-auto">
                      Junte-se ao ecossistema Conexus. Amplie seus negócios conectando-se a grandes projetos de inovação.
                    </p>
                  </div>

                  {isSuccess ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-500/10 text-green-500 mb-6">
                        <CheckCircle2 size={48} />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">Candidatura Enviada!</h3>
                      <p className="text-slate-400 mb-8 max-w-md mx-auto">
                        Nossa equipe técnica analisará seu perfil e entrará em contato em breve para explorarmos sinergias.
                      </p>
                      <button 
                        onClick={onClose}
                        className="btn-primary"
                      >
                        Voltar ao Site
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-8">
                      
                      {/* Seção: Seus Dados */}
                      <div className="space-y-6">
                        <h3 className="text-sm font-bold text-accent uppercase tracking-widest border-b border-white/10 pb-2">Seus Dados</h3>
                        <div className="grid md:grid-cols-2 gap-5">
                          {/* Nome */}
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                              <User size={16} /> Nome Completo
                            </label>
                            <input 
                              required
                              name="nome"
                              value={formData.nome}
                              onChange={handleChange}
                              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                              placeholder="Seu nome"
                            />
                          </div>
                          {/* Cargo */}
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                              <Briefcase size={16} /> Cargo / Função
                            </label>
                            <input 
                              required
                              name="cargo"
                              value={formData.cargo}
                              onChange={handleChange}
                              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                              placeholder="Ex: Diretor Comercial"
                            />
                          </div>
                          {/* Email */}
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                              <Mail size={16} /> E-mail Corporativo
                            </label>
                            <input 
                              required
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                              placeholder="voce@suaempresa.com"
                            />
                          </div>
                          {/* WhatsApp */}
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                              <Phone size={16} /> WhatsApp / Telefone
                            </label>
                            <input 
                              required
                              type="tel"
                              name="whatsapp"
                              value={formData.whatsapp}
                              onChange={handleChange}
                              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                              placeholder="(11) 99999-9999"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Seção: Sua Empresa */}
                      <div className="space-y-6">
                        <h3 className="text-sm font-bold text-accent uppercase tracking-widest border-b border-white/10 pb-2">Sua Empresa</h3>
                        <div className="grid md:grid-cols-2 gap-5">
                          {/* Empresa */}
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                              <Building2 size={16} /> Nome da Empresa
                            </label>
                            <input 
                              required
                              name="empresa"
                              value={formData.empresa}
                              onChange={handleChange}
                              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                              placeholder="Razão Social ou Fantasia"
                            />
                          </div>
                          {/* Site */}
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                              <Globe size={16} /> Site / LinkedIn
                            </label>
                            <input 
                              required
                              name="site"
                              value={formData.site}
                              onChange={handleChange}
                              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                              placeholder="www.suaempresa.com"
                            />
                          </div>
                          {/* Área de Atuação */}
                          <div className="col-span-full space-y-2">
                            <label className="text-sm font-medium text-slate-300">Área de Atuação Principal</label>
                            <select 
                              required
                              name="area"
                              value={formData.area}
                              onChange={handleChange}
                              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all [&>option]:bg-[#0f1623]"
                            >
                              <option value="" disabled>Selecione uma opção...</option>
                              <option value="manufatura">Manufatura Eletrônica (EMS)</option>
                              <option value="engenharia">Engenharia e Projetos (P&D)</option>
                              <option value="componentes">Distribuição de Componentes</option>
                              <option value="logistica">Logística e Comércio Exterior</option>
                              <option value="certificacao">Certificação e Testes</option>
                              <option value="outros">Outros Serviços</option>
                            </select>
                          </div>
                          {/* Diferenciais */}
                          <div className="col-span-full space-y-2">
                            <label className="text-sm font-medium text-slate-300">Diferenciais e Proposta de Valor</label>
                            <textarea 
                              required
                              name="diferenciais"
                              value={formData.diferenciais}
                              onChange={handleChange}
                              rows={3}
                              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-none"
                              placeholder="Descreva brevemente como sua empresa pode agregar ao ecossistema Conexus..."
                            />
                          </div>
                        </div>
                      </div>

                      {/* Footer Ações */}
                      <div className="pt-4 flex flex-col items-center gap-4">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full md:w-auto px-8 py-4 bg-accent hover:bg-accent-dark text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(190,26,135,0.3)] hover:shadow-[0_0_30px_rgba(190,26,135,0.5)] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-wait"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              Enviando...
                            </>
                          ) : (
                            <>
                              Candidatar-se à Rede <Send size={18} />
                            </>
                          )}
                        </button>
                        <p className="text-xs text-slate-500 text-center max-w-sm">
                          Ao enviar, você concorda que nossos especialistas analisem os dados da sua empresa para fins de parceria.
                        </p>
                      </div>

                    </form>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
