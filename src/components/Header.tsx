"use client";

import { useState } from "react";
import Link from "next/link";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="section-container">
        <div className="flex items-center justify-between h-24 md:h-28">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 group">
            {/* Logo SVG */}
            <div className="relative h-14 w-14 md:h-16 md:w-16 shrink-0 transition-transform duration-300 group-hover:scale-105">
               <svg 
                version="1.1" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 512.092 512.092" 
                className="w-full h-full -rotate-45 text-current drop-shadow-sm"
              >
               <path className="text-primary group-hover:brightness-110 transition-all" fill="currentColor" d="M477.061,34.993c-46.657-46.657-122.303-46.657-168.96,0l-89.515,89.429c-2.458,2.47-3.167,6.185-1.792,9.387 c1.359,3.211,4.535,5.272,8.021,5.205h3.157c18.698-0.034,37.221,3.589,54.528,10.667c3.195,1.315,6.867,0.573,9.301-1.877 l64.256-64.171c20.006-20.006,52.442-20.006,72.448,0c20.006,20.006,20.006,52.442,0,72.448l-80.043,79.957l-0.683,0.768 l-27.989,27.819c-19.99,19.965-52.373,19.965-72.363,0c-13.472-12.679-34.486-12.679-47.957,0 c-5.833,5.845-9.35,13.606-9.899,21.845c-0.624,9.775,2.981,19.348,9.899,26.283c9.877,9.919,21.433,18.008,34.133,23.893 c1.792,0.853,3.584,1.536,5.376,2.304c1.792,0.768,3.669,1.365,5.461,2.048c1.792,0.683,3.669,1.28,5.461,1.792l5.035,1.365 c3.413,0.853,6.827,1.536,10.325,2.133c4.214,0.626,8.458,1.025,12.715,1.195h5.973h0.512l5.12-0.597 c1.877-0.085,3.84-0.512,6.059-0.512h2.901l5.888-0.853l2.731-0.512l4.949-1.024h0.939c20.961-5.265,40.101-16.118,55.381-31.403 l108.629-108.629C523.718,157.296,523.718,81.65,477.061,34.993z" />
               <path className="text-accent group-hover:brightness-110 transition-all" fill="currentColor" d="M312.453,199.601c-6.066-6.102-12.792-11.511-20.053-16.128c-19.232-12.315-41.59-18.859-64.427-18.859 c-31.697-0.059-62.106,12.535-84.48,34.987L34.949,308.23c-22.336,22.379-34.89,52.7-34.91,84.318 c-0.042,65.98,53.41,119.501,119.39,119.543c31.648,0.11,62.029-12.424,84.395-34.816l89.6-89.6 c1.628-1.614,2.537-3.816,2.524-6.108c-0.027-4.713-3.87-8.511-8.583-8.484h-3.413c-18.72,0.066-37.273-3.529-54.613-10.581 c-3.195-1.315-6.867-0.573-9.301,1.877l-64.427,64.512c-20.006,20.006-52.442,20.006-72.448,0 c-20.006-20.006-20.006-52.442,0-72.448l108.971-108.885c19.99-19.965,52.373-19.965,72.363,0 c13.472,12.679,34.486,12.679,47.957,0c5.796-5.801,9.31-13.495,9.899-21.675C322.976,216.108,319.371,206.535,312.453,199.601z" />
              </svg>
            </div>
            
            {/* Texto e Linhas */}
            <div className="flex flex-col justify-center">
              <span className="font-heading font-extrabold text-3xl md:text-4xl text-primary leading-none tracking-tight">
                conexus
              </span>
              <span className="font-body text-xs md:text-sm text-primary/80 italic font-medium leading-tight mb-1.5 mt-0.5">
                Conectando empresas, entregando soluções.
              </span>
              {/* Linhas Decorativas */}
              <div className="flex h-[4px] w-full mt-0.5 rounded-full overflow-hidden">
                <div className="w-1/2 bg-accent" />
                <div className="w-1/2 bg-primary" />
              </div>
            </div>
          </Link>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex items-center gap-10">
            <a
              href="/#quem-somos"
              className="font-body text-base font-medium text-gray-700 hover:text-primary transition-colors hover:bg-gray-50 px-3 py-2 rounded-lg"
            >
              Quem Somos
            </a>
            <a
              href="/#atuacao"
              className="font-body text-base font-medium text-gray-700 hover:text-primary transition-colors hover:bg-gray-50 px-3 py-2 rounded-lg"
            >
              Atuação
            </a>
            <a
              href="/#gestores"
              className="font-body text-base font-medium text-gray-700 hover:text-primary transition-colors hover:bg-gray-50 px-3 py-2 rounded-lg"
            >
              Gestores
            </a>
            <a
              href="/#modelo"
              className="font-body text-base font-medium text-gray-700 hover:text-primary transition-colors hover:bg-gray-50 px-3 py-2 rounded-lg"
            >
              Modelo
            </a>
            <a
              href="/#parceiros"
              className="font-body text-base font-medium text-gray-700 hover:text-primary transition-colors hover:bg-gray-50 px-3 py-2 rounded-lg"
            >
              Parceiros
            </a>
            <Link
              href="/blog"
              className="font-body text-base font-bold text-accent hover:text-accent-dark transition-colors px-3 py-2 rounded-lg bg-accent/5"
            >
              Blog
            </Link>
          </nav>

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
                href="/#quem-somos"
                className="font-body text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Quem Somos
              </a>
              <a
                href="/#atuacao"
                className="font-body text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Atuação
              </a>
              <a
                href="/#gestores"
                className="font-body text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Gestores
              </a>
              <a
                href="/#modelo"
                className="font-body text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Modelo
              </a>
              <a
                href="/#parceiros"
                className="font-body text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Parceiros
              </a>
              <Link
                href="/blog"
                className="font-body font-bold text-accent py-2 border-y border-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
