import {
  Cpu,
  Handshake,
  ShieldCheck,
  Factory,
  TrendingUp,
  Calculator,
} from "lucide-react";

const areas = [
  {
    icone: <Cpu className="w-8 h-8" />,
    titulo: "Engenharia de Produto",
    descricao:
      "Design de hardware e firmware focado em manufatura (DFM). Transformamos especificações em produtos robustos e escaláveis.",
  },
  {
    icone: <Handshake className="w-8 h-8" />,
    titulo: "Gestão de Cadeia de Suprimentos",
    descricao:
      "Sourcing estratégico e qualificação rigorosa. Mitigamos riscos de obsolescência e garantimos a continuidade do fornecimento.",
  },
  {
    icone: <ShieldCheck className="w-8 h-8" />,
    titulo: "Compliance & Certificações",
    descricao:
      "Navegação segura por normas regulatórias (Anatel, FCC, CE). Garantimos que seu produto nasça pronto para o mercado global.",
  },
  {
    icone: <Factory className="w-8 h-8" />,
    titulo: "Manufatura & CM",
    descricao:
      "Interface técnica especializada com fábricas (CMs). Asseguramos qualidade e eficiência da linha de produção à entrega final.",
  },
  {
    icone: <TrendingUp className="w-8 h-8" />,
    titulo: "Estratégia Industrial",
    descricao:
      "Planejamento de capacidade e logística. Otimizamos custos e processos para viabilizar a escala do seu negócio.",
  },
  {
    icone: <Calculator className="w-8 h-8" />,
    titulo: "Análise de Viabilidade",
    descricao:
      "Estudos aprofundados de BOM e ROI. Validamos a viabilidade técnico-econômica antes de cada ciclo de investimento.",
  },
];

export function Atuacao() {
  return (
    <section id="atuacao" className="bg-gray-50 flex flex-col justify-start pt-12 md:pt-16 pb-16 md:pb-24">
      <div className="section-container">
        {/* Cabeçalho da seção */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="heading-2 text-primary mb-4">Expertise End-to-End</h2>
          <p className="body-large text-gray-600">
            Da concepção à escala global: orquestramos todas as etapas críticas
            para materializar seu produto eletrônico.
          </p>
        </div>

        {/* Grid de áreas */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, index) => (
            <div
              key={index}
              className="card group hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {area.icone}
              </div>
              <h3 className="heading-3 text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                {area.titulo}
              </h3>
              <p className="body-regular text-gray-600 leading-relaxed">
                {area.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
