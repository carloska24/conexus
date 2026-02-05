"use client";

const gestores = [
  {
    nome: "Cilene Paleari Faria",
    experiencia: "28+ anos de experiência na indústria eletrônica",
    bio: "Profissional com atuação sólida na gestão comercial, processos, qualidade e desenvolvimento de negócios. Ao longo de sua carreira, atuou de forma direta na interface entre engenharia, produção, qualidade e cliente, liderando equipes, implantando sistemas de gestão, MRP, Lean Manufacturing e Kaizen.",
    naConexus: "Responsável pelo diagnóstico das necessidades do cliente, estruturação das conexões técnicas, alinhamento entre expectativa e viabilidade e condução estratégica dos projetos.",
    whatsapp: "(19) 99232-0961",
    email: "cilene@conexusbr.com",
    foto: "/gestores/cilene", // Aceita .jpg ou .png
  },
  {
    nome: "Hudson Benedicto",
    experiencia: "30+ anos em engenharia de processos e manufatura de placas eletrônicas",
    bio: "Possui profundo conhecimento na relação entre processo, componentes e layout de PCB, com forte atuação em industrialização, confiabilidade e otimização produtiva. Liderou equipes de engenharia e participou de projetos de alta complexidade, incluindo o desenvolvimento da leitora de cartão do telefone público.",
    naConexus: "Atua na avaliação técnica dos projetos, análise de riscos produtivos, definição de processos e suporte técnico avançado à industrialização.",
    whatsapp: "(19) 99794-2136",
    email: "hudson@conexusbr.com",
    foto: "/gestores/hudson", // Aceita .jpg ou .png
  },
];

// Componente de avatar com fallback
function GestorAvatar({ nome, fotoBase }: { nome: string; fotoBase: string }) {
  const iniciais = nome.split(' ').map(n => n[0]).join('');
  
  return (
    <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-white/20 border-2 border-accent overflow-hidden flex items-center justify-center">
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
      <span className="fallback-initials hidden text-white/60 font-heading font-bold text-2xl items-center justify-center">
        {iniciais}
      </span>
    </div>
  );
}

export function GestoresTecnicos() {
  return (
    <section id="gestores" className="section-padding bg-primary">
      <div className="section-container">
        {/* Título */}
        <h2 className="heading-2 text-white text-center mb-12">Gestores Técnicos</h2>

        {/* Cards de gestores */}
        <div className="grid lg:grid-cols-2 gap-8">
          {gestores.map((gestor, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8 hover:bg-white/15 transition-colors"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Avatar */}
                <div className="flex-shrink-0 mx-auto md:mx-0">
                  <GestorAvatar nome={gestor.nome} fotoBase={gestor.foto} />
                </div>

                {/* Conteúdo */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="heading-3 text-white mb-1">{gestor.nome}</h3>
                  <p className="text-accent font-medium text-sm mb-4">{gestor.experiencia}</p>
                  
                  <p className="body-regular text-white/80 mb-4">{gestor.bio}</p>
                  
                  <p className="body-regular text-white/90 mb-4">
                    <strong className="text-accent">Na Conexus:</strong> {gestor.naConexus}
                  </p>

                  {/* Contatos */}
                  <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
                    <a
                      href={`https://wa.me/55${gestor.whatsapp.replace(/\D/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white/80 hover:text-accent transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      {gestor.whatsapp}
                    </a>
                    <a
                      href={`mailto:${gestor.email}`}
                      className="flex items-center gap-2 text-white/80 hover:text-accent transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {gestor.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
