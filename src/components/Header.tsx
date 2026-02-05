"use client";

import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="section-container">
        <div className="flex items-center justify-between h-24 md:h-28">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img 
              src="/logo-conexus.png" 
              alt="Conexus" 
              className="h-20 md:h-24 w-auto object-contain"
            />
          </a>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#quem-somos"
              className="font-body text-sm text-gray-700 hover:text-primary transition-colors"
            >
              Quem Somos
            </a>
            <a
              href="#atuacao"
              className="font-body text-sm text-gray-700 hover:text-primary transition-colors"
            >
              Atuação
            </a>
            <a
              href="#gestores"
              className="font-body text-sm text-gray-700 hover:text-primary transition-colors"
            >
              Gestores
            </a>
            <a
              href="#modelo"
              className="font-body text-sm text-gray-700 hover:text-primary transition-colors"
            >
              Modelo
            </a>
          </nav>

          {/* CTA Header */}
          <a
            href="#contato"
            className="hidden md:inline-flex btn-primary text-sm"
          >
            Fale Conosco
          </a>

          {/* Menu Mobile */}
          <button
            className="md:hidden p-2 text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Menu Mobile Expandido */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col gap-4">
              <a
                href="#quem-somos"
                className="font-body text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Quem Somos
              </a>
              <a
                href="#atuacao"
                className="font-body text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Atuação
              </a>
              <a
                href="#gestores"
                className="font-body text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Gestores
              </a>
              <a
                href="#modelo"
                className="font-body text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Modelo
              </a>
              <a
                href="#contato"
                className="btn-primary text-center mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Fale Conosco
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
