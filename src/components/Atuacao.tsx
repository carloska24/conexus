const areas = [
  {
    icone: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    titulo: "Engenharia de Produto",
    descricao: "Suporte técnico ao desenvolvimento, especificação e validação de hardware e firmware.",
  },
  {
    icone: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    titulo: "Gestão de Fornecedores",
    descricao: "Qualificação, negociação técnica e acompanhamento de componentes e serviços.",
  },
  {
    icone: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    titulo: "Compliance & Certificações",
    descricao: "Orientação para atendimento de normas regulatórias e homologações.",
  },
  {
    icone: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    titulo: "Manufatura & CM",
    descricao: "Interface técnica com contract manufacturers e linhas de produção.",
  },
  {
    icone: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    titulo: "Estratégia de Supply Chain",
    descricao: "Análise de risco de suprimento, alternativas de sourcing e gestão de obsolescência.",
  },
  {
    icone: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    titulo: "Viabilidade Industrial",
    descricao: "Avaliação de custo, escala e capacidade produtiva antes do comprometimento.",
  },
];

export function Atuacao() {
  return (
    <section id="atuacao" className="section-padding bg-gray-50">
      <div className="section-container">
        {/* Cabeçalho da seção */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="heading-2 text-primary mb-4">Áreas de Atuação</h2>
          <p className="body-large text-gray-600">
            Atuamos em todas as frentes críticas do desenvolvimento e
            industrialização de produtos eletrônicos.
          </p>
        </div>

        {/* Grid de áreas */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, index) => (
            <div
              key={index}
              className="card group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                {area.icone}
              </div>
              <h3 className="heading-3 text-primary mb-2 group-hover:text-accent transition-colors">
                {area.titulo}
              </h3>
              <p className="body-regular text-gray-600">{area.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
