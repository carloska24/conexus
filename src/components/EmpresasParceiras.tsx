const parceiros = [
  {
    nome: "CADService",
    descricao: "Empresa especializada em manufatura de placas eletrônicas, com atuação em montagem SMT e PTH, prototipagem e produção seriada. Possui forte foco em qualidade, rastreabilidade e adequação de processo conforme o projeto, volume e criticidade do produto. Atua de forma integrada com a Conexus para garantir viabilidade produtiva, confiabilidade e eficiência industrial.",
    logo: "/parceiros/cadservice.png", // Substituir pelo logo real
  },
  {
    nome: "ICAPE",
    descricao: "Empresa global especializada na fabricação de placas de circuito impresso (PCBs), abrangendo desde tecnologias convencionais até multilayers, HDI e soluções especiais. Atua também na gestão da cadeia de suprimentos e customização de componentes eletrônicos, oferecendo competitividade, escalabilidade e segurança de fornecimento.",
    logo: "/parceiros/icape.png", // Substituir pelo logo real
  },
  {
    nome: "FITec",
    descricao: "Fundação para Inovações Tecnológicas, referência em engenharia e desenvolvimento de produtos eletrônicos. Atua em projetos de alta complexidade, validação técnica, testes e apoio à industrialização, transformando conceitos em soluções tecnicamente robustas.",
    logo: "/parceiros/fitec.png", // Substituir pelo logo real
  },
];

export function EmpresasParceiras() {
  return (
    <section id="parceiros" className="section-padding bg-primary">
      <div className="section-container">
        {/* Título */}
        <h2 className="heading-2 text-white text-center mb-12">Empresas Parceiras</h2>

        {/* Cards de parceiros */}
        <div className="grid md:grid-cols-3 gap-6">
          {parceiros.map((parceiro, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 hover:shadow-xl transition-shadow"
            >
              {/* Logo placeholder */}
              <div className="h-16 flex items-center justify-start mb-4">
                <span className="font-heading font-bold text-xl text-primary">
                  {parceiro.nome}
                </span>
              </div>
              
              {/* Descrição */}
              <p className="body-regular text-gray-600 text-sm leading-relaxed">
                {parceiro.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
