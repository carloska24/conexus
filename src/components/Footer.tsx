export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="section-container py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo e descrição */}
          <div className="sm:col-span-2 lg:col-span-2">
            <a href="#" className="inline-block mb-4">
              <span className="font-heading font-bold text-2xl">CONEXUS</span>
            </a>
            <p className="body-regular text-white/70 max-w-md">
              Consultoria técnica integradora em produtos eletrônicos.
              Conectamos engenharia, manufatura, fornecedores e mercado.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">
              Navegação
            </h4>
            <nav className="flex flex-col gap-2">
              <a
                href="#quem-somos"
                className="body-regular text-white/70 hover:text-white transition-colors"
              >
                Quem Somos
              </a>
              <a
                href="#atuacao"
                className="body-regular text-white/70 hover:text-white transition-colors"
              >
                Atuação
              </a>
              <a
                href="#gestores"
                className="body-regular text-white/70 hover:text-white transition-colors"
              >
                Gestores
              </a>
              <a
                href="#modelo"
                className="body-regular text-white/70 hover:text-white transition-colors"
              >
                Modelo
              </a>
              <a
                href="#contato"
                className="body-regular text-white/70 hover:text-white transition-colors"
              >
                Contato
              </a>
            </nav>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">
              Contato
            </h4>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href="https://www.conexusbr.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
              >
                🌐 conexusbr.com
              </a>
              <a
                href="mailto:cilene@conexusbr.com"
                className="text-white/70 hover:text-white transition-colors"
              >
                ✉️ cilene@conexusbr.com
              </a>
              <a
                href="mailto:hudson@conexusbr.com"
                className="text-white/70 hover:text-white transition-colors"
              >
                ✉️ hudson@conexusbr.com
              </a>
            </div>
          </div>
        </div>

        {/* Divisor e copyright */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <p className="text-center text-sm text-white/50">
            © {new Date().getFullYear()} Conexus. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
