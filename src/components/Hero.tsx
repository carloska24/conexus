import Image from "next/image";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-primary min-h-screen flex items-center pt-28"
    >
      {/* Background pattern - Branded SVG */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/hero-bg-brand.svg"
          alt="Conexus Tech Background"
          fill
          className="object-cover opacity-60 mix-blend-screen"
          priority
        />
        {/* Overlay para garantir leitura */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-primary/30" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Conteúdo textual */}
          <div className="text-white">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium">
                +30 projetos entregues
              </span>
              <span className="bg-white/10 text-white/80 px-3 py-1 rounded-full text-sm font-medium">
                +15 anos de experiência
              </span>
            </div>
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

            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <a href="#contato" className="btn-primary">
                Solicite um diagnóstico gratuito
              </a>
              <a
                href="#quem-somos"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white/30 text-white font-heading font-semibold rounded-lg transition-all duration-200 hover:bg-white/10 hover:border-white/50"
              >
                Conheça nossa atuação
              </a>
            </div>
            
            <p className="text-sm text-white/50">
              ⚡ Atendimento personalizado · Resposta em até 24h
            </p>
          </div>

          {/* Logo / Ilustração */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              {/* Logo placeholder - elos entrelaçados */}
              {/* Logo Conexus - Corrente Horizontal */}
              {/* Logo Conexus - Corrente Horizontal */}
              <svg 
                version="1.1" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 512.092 512.092" 
                className="w-[400px] h-[400px] drop-shadow-[0_0_20px_rgba(255,255,255,0.15)] rotate-45 transform hover:scale-105 transition-transform duration-500"
              >
               <path className="text-primary" fill="currentColor" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" d="M477.061,34.993c-46.657-46.657-122.303-46.657-168.96,0l-89.515,89.429c-2.458,2.47-3.167,6.185-1.792,9.387 c1.359,3.211,4.535,5.272,8.021,5.205h3.157c18.698-0.034,37.221,3.589,54.528,10.667c3.195,1.315,6.867,0.573,9.301-1.877 l64.256-64.171c20.006-20.006,52.442-20.006,72.448,0c20.006,20.006,20.006,52.442,0,72.448l-80.043,79.957l-0.683,0.768 l-27.989,27.819c-19.99,19.965-52.373,19.965-72.363,0c-13.472-12.679-34.486-12.679-47.957,0 c-5.833,5.845-9.35,13.606-9.899,21.845c-0.624,9.775,2.981,19.348,9.899,26.283c9.877,9.919,21.433,18.008,34.133,23.893 c1.792,0.853,3.584,1.536,5.376,2.304c1.792,0.768,3.669,1.365,5.461,2.048c1.792,0.683,3.669,1.28,5.461,1.792l5.035,1.365 c3.413,0.853,6.827,1.536,10.325,2.133c4.214,0.626,8.458,1.025,12.715,1.195h5.973h0.512l5.12-0.597 c1.877-0.085,3.84-0.512,6.059-0.512h2.901l5.888-0.853l2.731-0.512l4.949-1.024h0.939c20.961-5.265,40.101-16.118,55.381-31.403 l108.629-108.629C523.718,157.296,523.718,81.65,477.061,34.993z" />
               <path className="text-accent" fill="currentColor" d="M312.453,199.601c-6.066-6.102-12.792-11.511-20.053-16.128c-19.232-12.315-41.59-18.859-64.427-18.859 c-31.697-0.059-62.106,12.535-84.48,34.987L34.949,308.23c-22.336,22.379-34.89,52.7-34.91,84.318 c-0.042,65.98,53.41,119.501,119.39,119.543c31.648,0.11,62.029-12.424,84.395-34.816l89.6-89.6 c1.628-1.614,2.537-3.816,2.524-6.108c-0.027-4.713-3.87-8.511-8.583-8.484h-3.413c-18.72,0.066-37.273-3.529-54.613-10.581 c-3.195-1.315-6.867-0.573-9.301,1.877l-64.427,64.512c-20.006,20.006-52.442,20.006-72.448,0 c-20.006-20.006-20.006-52.442,0-72.448l108.971-108.885c19.99-19.965,52.373-19.965,72.363,0 c13.472,12.679,34.486,12.679,47.957,0c5.796-5.801,9.31-13.495,9.899-21.675C322.976,216.108,319.371,206.535,312.453,199.601z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
