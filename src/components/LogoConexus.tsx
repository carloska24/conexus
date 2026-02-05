interface LogoConexusProps {
  showTagline?: boolean;
  variant?: "full" | "icon" | "horizontal";
  className?: string;
}

export function LogoConexus({ 
  showTagline = false, 
  variant = "horizontal",
  className = "" 
}: LogoConexusProps) {
  // Ícone dos elos conectados
  const IconLinks = ({ size = 40 }: { size?: number }) => (
    <svg 
      width={size} 
      height={size * 0.6} 
      viewBox="0 0 100 60" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
    >
      {/* Elo esquerdo (rosa) */}
      <path
        d="M30 10 C10 10, 10 50, 30 50 L35 50 C25 50, 20 40, 20 30 C20 20, 25 10, 35 10 Z"
        fill="#BE1A87"
      />
      <path
        d="M35 10 L45 10 C35 10, 30 20, 30 30 C30 40, 35 50, 45 50 L35 50 C15 50, 15 10, 35 10 Z"
        fill="#BE1A87"
      />
      <rect x="35" y="10" width="15" height="12" rx="6" fill="#BE1A87" />
      <rect x="35" y="38" width="15" height="12" rx="6" fill="#BE1A87" />
      
      {/* Elo direito (azul escuro) */}
      <path
        d="M70 10 C90 10, 90 50, 70 50 L65 50 C75 50, 80 40, 80 30 C80 20, 75 10, 65 10 Z"
        fill="#051D40"
      />
      <path
        d="M65 10 L55 10 C65 10, 70 20, 70 30 C70 40, 65 50, 55 50 L65 50 C85 50, 85 10, 65 10 Z"
        fill="#051D40"
      />
      <rect x="50" y="10" width="15" height="12" rx="6" fill="#051D40" />
      <rect x="50" y="38" width="15" height="12" rx="6" fill="#051D40" />
      
      {/* Conexão central - sobreposição */}
      <rect x="42" y="24" width="16" height="12" rx="6" fill="white" />
    </svg>
  );

  // Versão simplificada do ícone
  const IconSimple = ({ size = 32 }: { size?: number }) => (
    <svg 
      width={size} 
      height={size * 0.65} 
      viewBox="0 0 48 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
    >
      {/* Elo esquerdo (rosa) - forma de C invertido */}
      <path
        d="M8 4 C2 4, 2 28, 8 28 L16 28 L16 22 L10 22 C8 22, 8 10, 10 10 L16 10 L16 4 Z"
        fill="#BE1A87"
      />
      <rect x="14" y="4" width="10" height="6" rx="3" fill="#BE1A87" />
      <rect x="14" y="22" width="10" height="6" rx="3" fill="#BE1A87" />
      
      {/* Elo direito (azul) - forma de C */}
      <path
        d="M40 4 C46 4, 46 28, 40 28 L32 28 L32 22 L38 22 C40 22, 40 10, 38 10 L32 10 L32 4 Z"
        fill="#051D40"
      />
      <rect x="24" y="4" width="10" height="6" rx="3" fill="#051D40" />
      <rect x="24" y="22" width="10" height="6" rx="3" fill="#051D40" />
    </svg>
  );

  if (variant === "icon") {
    return <IconSimple size={32} />;
  }

  return (
    <div className={`flex flex-col items-center ${className}`}>
      {variant === "full" && <IconLinks size={80} />}
      
      <div className={`flex items-center gap-2 ${variant === "full" ? "mt-2" : ""}`}>
        {variant === "horizontal" && <IconSimple size={28} />}
        <span 
          className="font-heading font-semibold tracking-tight"
          style={{ 
            color: "#051D40",
            fontSize: variant === "full" ? "1.75rem" : "1.25rem"
          }}
        >
          conexus
        </span>
      </div>
      
      {showTagline && (
        <span 
          className="text-sm italic mt-1"
          style={{ color: "#051D40" }}
        >
          Conectando empresas, entregando soluções.
        </span>
      )}
    </div>
  );
}
