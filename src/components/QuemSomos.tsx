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
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Coluna Esquerda: Headline + Texto */}
          <div className="space-y-8">
            {/* Headline movido para dentro da coluna esquerda */}
            <div className="max-w-full">
              <h2 className="heading-2 text-primary mb-4">Quem somos?</h2>
              <p className="text-3xl md:text-4xl font-heading font-bold text-accent leading-tight text-balance">
                Mais do que consultoria: um braço técnico estratégico para sua empresa.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-lg md:text-xl text-primary font-medium leading-relaxed">
                A Conexus é uma consultoria técnica e estratégica em produtos eletrônicos que atua como <strong>hub de conexões</strong> entre engenharia, manufatura, fornecedores e mercado.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Seu diferencial está na atuação direta de gestores com ampla experiência prática na indústria eletrônica, capazes de analisar profundamente a necessidade do cliente e conectar as empresas especialistas mais adequadas para cada desafio.
              </p>
            </div>
            
            <p className="text-base md:text-lg text-gray-700 leading-relaxed px-2 border-l-2 border-accent pl-6">
              A Conexus não vende soluções padronizadas: entrega <strong>soluções sob medida</strong>, baseadas em conhecimento técnico real, viabilidade industrial e eficiência de processo.
            </p>
          </div>

          {/* Coluna Direita: Atuação */}
          <div className="pt-8 lg:pt-0 sticky top-32">
            <h3 className="text-2xl font-heading font-bold text-primary mb-8 flex items-center gap-3">
              <div className="p-2 bg-accent/10 rounded-lg text-accent">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              Nossa Abordagem
            </h3>
            <ul className="space-y-2">
              {atuacao.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-all duration-300 group"
                >
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-accent/10 text-accent shrink-0">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-base md:text-lg font-medium text-gray-700 group-hover:text-primary transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
