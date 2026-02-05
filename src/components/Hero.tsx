export function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-primary min-h-screen flex items-center pt-20"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(190,26,135,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1),transparent_40%)]" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Conteúdo textual */}
          <div className="text-white">
            <h1 className="heading-1 text-white mb-4">
              Conectando empresas,
            </h1>
            <p className="text-2xl md:text-3xl font-heading font-semibold text-accent mb-6">
              entregamos soluções técnicas.
            </p>
            <p className="body-large text-white/80 mb-8 max-w-xl">
              Consultoria técnica e estratégica em produtos eletrônicos.
              Hub de conexões entre engenharia, manufatura, fornecedores e mercado
              em uma única frente de trabalho.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contato" className="btn-primary">
                Fale com um gestor técnico
              </a>
              <a
                href="#quem-somos"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white/30 text-white font-heading font-semibold rounded-lg transition-all duration-200 hover:bg-white/10 hover:border-white/50"
              >
                Conheça nossa atuação
              </a>
            </div>
          </div>

          {/* Logo / Ilustração */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              {/* Logo placeholder - elos entrelaçados */}
              <svg
                width="300"
                height="200"
                viewBox="0 0 300 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-90"
              >
                {/* Elo esquerdo (azul/cinza) */}
                <path
                  d="M80 40C40 40 10 70 10 100C10 130 40 160 80 160H120V140H80C50 140 30 120 30 100C30 80 50 60 80 60H120V40H80Z"
                  fill="rgba(255,255,255,0.3)"
                  stroke="rgba(255,255,255,0.5)"
                  strokeWidth="2"
                />
                {/* Elo direito (rosa) */}
                <path
                  d="M220 40C260 40 290 70 290 100C290 130 260 160 220 160H180V140H220C250 140 270 120 270 100C270 80 250 60 220 60H180V40H220Z"
                  fill="rgba(190,26,135,0.6)"
                  stroke="#BE1A87"
                  strokeWidth="2"
                />
                {/* Barra de conexão */}
                <rect x="100" y="90" width="100" height="20" rx="10" fill="rgba(255,255,255,0.2)" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce hidden md:block">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
