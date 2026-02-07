"use client";

import { useState } from "react";
import { Mail, Phone, MessageSquare, ArrowRight, CheckCircle2, Building2, User } from "lucide-react";

export function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    email: "",
    telefone: "",
    mensagem: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulação de envio
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ nome: "", empresa: "", email: "", telefone: "", mensagem: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contato" className="py-20 md:py-24 bg-[#0B1120] relative overflow-hidden text-slate-300">
       {/* Background Ambience similar a Parceiros/Footer */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#1e293b_0%,_transparent_50%)] opacity-20 pointer-events-none" />
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Coluna do Formulário */}
          <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 md:p-10 backdrop-blur-sm shadow-2xl">
            <h2 className="heading-3 text-white mb-2">
              Vamos conversar sobre seu projeto?
            </h2>
            <p className="text-slate-400 mb-8 font-light">
              Estamos prontos para entender seu desafio técnico ou de manufatura.
            </p>

            {isSubmitted ? (
              <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-8 text-center flex flex-col items-center animate-in fade-in zoom-in duration-500">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Mensagem Recebida!
                </h3>
                <p className="text-slate-400 max-w-xs mx-auto">
                  Agradecemos o contato. Nossa equipe técnica retornará em até 24 horas úteis.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-accent font-medium hover:text-accent-light transition-colors text-sm"
                >
                  Enviar nova mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="nome" className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
                      Seu Nome
                    </label>
                    <div className="relative group">
                      <User className="absolute left-4 top-3.5 w-5 h-5 text-slate-600 group-focus-within:text-accent transition-colors" />
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        placeholder="Nome completo"
                        required
                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all hover:bg-white/[0.07]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="empresa" className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
                      Empresa
                    </label>
                    <div className="relative group">
                       <Building2 className="absolute left-4 top-3.5 w-5 h-5 text-slate-600 group-focus-within:text-accent transition-colors" />
                      <input
                        type="text"
                        id="empresa"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleChange}
                        placeholder="Nome da empresa"
                        required
                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all hover:bg-white/[0.07]"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
                      E-mail Corporativo
                    </label>
                    <div className="relative group">
                      <Mail className="absolute left-4 top-3.5 w-5 h-5 text-slate-600 group-focus-within:text-accent transition-colors" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="nome@empresa.com"
                        required
                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all hover:bg-white/[0.07]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="telefone" className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
                      Telefone / WhatsApp
                    </label>
                    <div className="relative group">
                       <Phone className="absolute left-4 top-3.5 w-5 h-5 text-slate-600 group-focus-within:text-accent transition-colors" />
                      <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                        placeholder="(DDD) 00000-0000"
                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all hover:bg-white/[0.07]"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="mensagem" className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
                    Como podemos ajudar?
                  </label>
                  <div className="relative group">
                    <MessageSquare className="absolute left-4 top-3.5 w-5 h-5 text-slate-600 group-focus-within:text-accent transition-colors" />
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleChange}
                      placeholder="Descreva brevemente seu desafio técnico ou projeto..."
                      rows={4}
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-none hover:bg-white/[0.07]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-accent hover:bg-accent-dark text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(190,26,135,0.3)] hover:shadow-[0_0_30px_rgba(190,26,135,0.5)] flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Enviando...
                    </span>
                  ) : (
                    <>
                       Iniciar Conversa
                       <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
                <p className="text-xs text-center text-slate-600">
                  Seus dados estão seguros e não serão compartilhados.
                </p>
              </form>
            )}
          </div>

          {/* Coluna de Contato Direto (Humanizada) */}
          <div className="lg:pt-8 flex flex-col h-full justify-center">
            
            <div className="mb-10">
              <span className="text-accent font-bold tracking-widest text-xs uppercase mb-3 block">Contato Direto</span>
              <h3 className="heading-2 text-white mb-4">
                Prefere falar direto com quem resolve?
              </h3>
              <p className="text-slate-400 text-lg font-light leading-relaxed">
                Aqui não tem robô ou fila de espera. Você fala diretamente com os gestores que vão cuidar do seu projeto.
              </p>
            </div>

            <div className="space-y-6">
              {/* Card Cilene - Comercial/Admin */}
              <div className="group relative p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] hover:border-accent/20 transition-all duration-300">
                 <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-accent to-transparent rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                 
                 <div className="flex items-start gap-5">
                   {/* Avatar Placeholder / Initials */}
                   <div className="w-12 h-12 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-xl font-bold text-slate-300 shrink-0">
                     C
                   </div>
                   
                   <div className="flex-1">
                     <h4 className="text-white font-bold text-lg flex items-center gap-2">
                       Cilene
                       <span className="text-xs font-normal text-slate-500 bg-white/5 px-2 py-0.5 rounded border border-white/5">Comercial & Projetos</span>
                     </h4>
                     
                     <div className="mt-4 flex flex-col sm:flex-row gap-3">
                        <a href="https://wa.me/5519992320961" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-400 hover:text-[#25D366] transition-colors group/link">
                          <Phone className="w-4 h-4" />
                          <span className="group-hover/link:underline decoration-[#25D366]/50">(19) 99232-0961</span>
                        </a>
                        <a href="mailto:cilene@conexusbr.com" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group/link">
                          <Mail className="w-4 h-4" />
                          <span className="group-hover/link:underline decoration-white/50">cilene@conexusbr.com</span>
                        </a>
                     </div>
                   </div>
                 </div>
              </div>

              {/* Card Hudson - Técnico */}
              <div className="group relative p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] hover:border-accent/20 transition-all duration-300">
                 <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-primary to-transparent rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                 
                 <div className="flex items-start gap-5">
                   <div className="w-12 h-12 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-xl font-bold text-slate-300 shrink-0">
                     H
                   </div>
                   
                   <div className="flex-1">
                     <h4 className="text-white font-bold text-lg flex items-center gap-2">
                       Hudson
                       <span className="text-xs font-normal text-slate-500 bg-white/5 px-2 py-0.5 rounded border border-white/5">Engenharia & Novos Negócios</span>
                     </h4>
                     
                     <div className="mt-4 flex flex-col sm:flex-row gap-3">
                        <a href="https://wa.me/5519997942136" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-400 hover:text-[#25D366] transition-colors group/link">
                          <Phone className="w-4 h-4" />
                          <span className="group-hover/link:underline decoration-[#25D366]/50">(19) 99794-2136</span>
                        </a>
                        <a href="mailto:hudson@conexusbr.com" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group/link">
                          <Mail className="w-4 h-4" />
                          <span className="group-hover/link:underline decoration-white/50">hudson@conexusbr.com</span>
                        </a>
                     </div>
                   </div>
                 </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/5">
                <a
                  href="https://www.conexusbr.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors text-sm"
                >
                  <ArrowRight className="w-4 h-4" />
                  Visite nosso site principal: <span className="text-accent">conexusbr.com</span>
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
