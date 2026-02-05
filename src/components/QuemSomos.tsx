const atuacao = [
  "Consultoria técnica em produtos eletrônicos",
  "Engenharia de processo",
  "Industrialização de produtos",
  "Layout e design de PCB",
  "Manufatura de placas eletrônicas",
  "Qualidade, eficiência e melhoria contínua",
];

export function QuemSomos() {
  return (
    <section id="quem-somos" className="section-padding bg-white">
      <div className="section-container">
        {/* Headline */}
        <div className="max-w-3xl mb-12">
          <h2 className="heading-2 text-primary mb-2">Quem somos?</h2>
          <p className="text-2xl md:text-3xl font-heading font-semibold text-accent">
            Conectamos empresas e entregamos soluções técnicas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Conteúdo textual */}
          <div>
            <div className="bg-accent/10 border-l-4 border-accent rounded-r-xl p-6 mb-8">
              <p className="body-large text-gray-700 mb-4">
                A Conexus é uma empresa de consultoria técnica e estratégica em
                produtos eletrônicos que atua como <strong>hub de conexões</strong> entre
                engenharia, manufatura, fornecedores e mercado.
              </p>
              <p className="body-regular text-gray-600 mb-4">
                Seu diferencial está na atuação direta de gestores com ampla experiência prática
                na indústria eletrônica, capazes de analisar profundamente a necessidade do cliente
                e conectar as empresas especialistas mais adequadas para cada desafio técnico,
                produtivo ou estratégico.
              </p>
              <p className="body-regular text-gray-600">
                A Conexus não vende soluções padronizadas: entrega <strong>soluções sob medida</strong>,
                baseadas em conhecimento técnico real, viabilidade industrial e eficiência de processo.
              </p>
            </div>
          </div>

          {/* Atuação */}
          <div>
            <h3 className="heading-3 text-primary mb-6 flex items-center gap-2">
              <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              Atuação
            </h3>
            <ul className="space-y-3">
              {atuacao.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-primary/5 transition-colors"
                >
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-accent" />
                  <span className="body-regular text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
