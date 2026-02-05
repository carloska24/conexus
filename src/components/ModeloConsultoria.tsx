const etapas = [
  {
    numero: "01",
    titulo: "Diagnóstico Técnico e Produtivo",
    descricao: "Mapeamento da situação atual, riscos técnicos e pontos de atenção do projeto.",
  },
  {
    numero: "02",
    titulo: "Análise de Viabilidade",
    descricao: "Avaliação de viabilidade técnica e industrial, considerando custo, escala e capacidade.",
  },
  {
    numero: "03",
    titulo: "Estratégia de Projeto",
    descricao: "Definição de estratégia de projeto, layout, PCB e manufatura.",
  },
  {
    numero: "04",
    titulo: "Conexão com Parceiros",
    descricao: "Conexão com parceiros especialistas adequados para cada etapa do projeto.",
  },
  {
    numero: "05",
    titulo: "Acompanhamento Contínuo",
    descricao: "Acompanhamento técnico contínuo, garantindo qualidade e entrega.",
  },
];

export function ModeloConsultoria() {
  return (
    <section id="modelo" className="section-padding bg-white">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-12">
          {/* Texto descritivo */}
          <div>
            <h2 className="heading-2 text-primary mb-6">Modelo de Consultoria</h2>
            <p className="body-large text-gray-700 mb-4">
              A Conexus atua como consultoria técnica integradora, utilizando a capacidade
              técnica de seus gestores para avaliar a necessidade real do cliente e conectar
              as empresas especialistas corretas para cada etapa do projeto.
            </p>
            <p className="body-regular text-gray-600 mb-4">
              Esse modelo reduz riscos técnicos, evita retrabalhos e garante decisões mais assertivas.
            </p>
            <p className="body-regular text-gray-600">
              As conexões são feitas de forma estratégica, sempre com acompanhamento técnico da Conexus.
            </p>
          </div>

          {/* Ilustração placeholder */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-sm aspect-square">
              <div className="absolute inset-0 rounded-full bg-primary/5 border border-primary/10" />
              <div className="absolute inset-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                <svg className="w-24 h-24 text-primary/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              {/* Pontos de conexão */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent" />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent" />
              <div className="absolute left-4 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary" />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary" />
            </div>
          </div>
        </div>

        {/* Etapas da atuação */}
        <div>
          <h3 className="heading-3 text-primary text-center mb-8">Etapas da Atuação</h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {etapas.map((etapa, index) => (
              <div key={index} className="relative">
                {/* Card da etapa */}
                <div className="bg-primary text-white rounded-xl p-5 h-full hover:bg-primary/90 transition-colors">
                  <span className="inline-block text-accent font-heading font-bold text-2xl mb-2">
                    {etapa.numero}
                  </span>
                  <h4 className="font-heading font-semibold text-sm mb-2">{etapa.titulo}</h4>
                  <p className="text-xs text-white/70">{etapa.descricao}</p>
                </div>

                {/* Seta de conexão (desktop) */}
                {index < etapas.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2.5 transform -translate-y-1/2 text-accent z-10">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
