import Image from "next/image";

const parceiros = [
  {
    nome: "CADService",
    descricao: "Empresa especializada em manufatura de placas eletrônicas, com atuação em montagem SMT e PTH, prototipagem e produção seriada. Possui forte foco em qualidade, rastreabilidade e adequação de processo.",
    logo: "/parceiros/cadservice.svg",
    especialidade: "Manufatura SMT/PTH"
  },
  {
    nome: "ICAPE",
    descricao: "Empresa global especializada na fabricação de placas de circuito impresso (PCBs), abrangendo desde tecnologias convencionais até multilayers, HDI e soluções especiais.",
    logo: "/parceiros/icape.svg",
    especialidade: "PCB Global Sourcing"
  },
  {
    nome: "FITec",
    descricao: "Fundação para Inovações Tecnológicas, referência em engenharia e desenvolvimento de produtos eletrônicos. Atua em projetos de alta complexidade e validação técnica.",
    logo: "/parceiros/fitec.svg",
    especialidade: "P&D Eletrônica"
  },
];

export function EmpresasParceiras() {
  return (
    <section id="parceiros" className="section-padding bg-white">
      <div className="section-container">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="heading-2 text-primary mb-3">Rede de Parceiros</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trabalhamos com empresas especialistas para entregar a melhor solução para cada etapa do seu projeto.
          </p>
        </div>

        {/* Grid de logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
          {parceiros.map((parceiro, index) => (
            <div
              key={index}
              className="group relative h-14 md:h-16 w-auto"
            >
              <Image
                src={parceiro.logo}
                alt={parceiro.nome}
                width={0}
                height={64}
                className="h-full w-auto grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer object-contain"
                style={{ width: 'auto', height: '100%' }}
              />
            </div>
          ))}
        </div>

        {/* Cards de detalhes */}
        <div className="grid md:grid-cols-3 gap-6">
          {parceiros.map((parceiro, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 hover:bg-primary/5 transition-colors border border-gray-100"
            >
              {/* Header com logo e especialidade */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-heading font-bold text-lg text-primary">
                  {parceiro.nome}
                </span>
                <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">
                  {parceiro.especialidade}
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
