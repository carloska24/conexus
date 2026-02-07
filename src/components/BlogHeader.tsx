"use client";

import { motion } from "framer-motion";

interface BlogHeaderProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  categories: string[];
}

export function BlogHeader({ activeCategory, setActiveCategory, categories }: BlogHeaderProps) {
  return (
    <div className="mb-16">
      {/* Boas-vindas / Visionary Header */}
      <div className="max-w-4xl mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-[0.2em] mb-6">
            Conexus Insights
          </span>
          <h1 className="text-4xl md:text-7xl font-heading font-bold text-white mb-8 leading-[1.1]">
            Onde a <span className="text-accent underline decoration-white/10 underline-offset-8">engenharia</span> encontra a viabilidade industrial
          </h1>
          <p className="text-slate-400 text-xl leading-relaxed max-w-2xl italic border-l-2 border-accent/30 pl-6">
            "Explorando a conectividade profunda entre o pensamento estratégico e a manufatura de alta fidelidade para transformar o ecossistema tecnológico."
          </p>
        </motion.div>
      </div>

      {/* Barra de Conhecimento (Categorias) */}
      <div className="sticky top-[100px] z-40 py-6 bg-[#0B1120]/80 backdrop-blur-md border-y border-white/5">
        <div className="flex flex-wrap items-center gap-2 md:gap-4 overflow-x-auto pb-2 scrollbar-hide">
          <span className="text-slate-500 text-xs font-bold uppercase tracking-wider mr-2 hidden md:inline">
            Filtros:
          </span>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 whitespace-nowrap ${
                activeCategory === category
                  ? "bg-accent text-white shadow-[0_0_20px_rgba(190,26,135,0.3)]"
                  : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
