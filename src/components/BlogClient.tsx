"use client";

import { useState } from "react";
import { BlogHeader } from "./BlogHeader";
import { BlogFeaturedPost } from "./BlogFeaturedPost";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { PostMetadata } from "@/lib/blog";

interface BlogClientProps {
  initialPosts: PostMetadata[];
}

export function BlogClient({ initialPosts }: BlogClientProps) {
  const [activeCategory, setActiveCategory] = useState("Tudo");

  // Extrair categorias únicas
  const categories = ["Tudo", ...Array.from(new Set(initialPosts.map((p) => p.category)))];

  // Filtrar posts
  const filteredPosts = activeCategory === "Tudo" 
    ? initialPosts 
    : initialPosts.filter((p) => p.category === activeCategory);

  const featuredPost = filteredPosts[0];
  const remainingPosts = filteredPosts.slice(1);

  return (
    <div className="section-container">
      <BlogHeader 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory} 
        categories={categories} 
      />

      {filteredPosts.length > 0 ? (
        <>
          {/* Featured Post */}
          <BlogFeaturedPost post={featuredPost} />

          {/* Grid de Posts */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {remainingPosts.map((post) => (
              <Link 
                key={post.slug} 
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-accent/40 transition-all duration-300 hover:shadow-[0_0_40px_rgba(190,26,135,0.1)]"
              >
                {/* Imagem do Post */}
                <div className="relative aspect-video overflow-hidden bg-slate-800">
                  <div className="absolute inset-0 bg-accent/20 mix-blend-multiply opacity-0 group-hover:opacity-30 transition-opacity z-10" />
                  {post.image ? (
                    <Image 
                      src={post.image} 
                      alt={post.title}
                      fill
                      quality={100}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110 blog-image-fix"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-600 italic">
                      Sem imagem
                    </div>
                  )}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 rounded-full bg-accent/90 text-white text-[10px] font-bold uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Conteúdo do Card */}
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-slate-500 text-xs mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-accent" />
                      {new Date(post.date).toLocaleDateString('pt-BR')}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} className="text-accent" />
                      5 min read
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-accent transition-colors leading-tight">
                    {post.title}
                  </h3>

                  <p className="text-slate-400 text-sm line-clamp-3 mb-8 flex-1 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-white font-bold text-sm border-t border-white/5 pt-6">
                    Ler Artigo 
                    <ArrowRight size={16} className="text-accent group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {remainingPosts.length === 0 && activeCategory === "Tudo" && (
             <div className="py-20 text-center text-slate-500 italic">
               Continue explorando... em breve mais insights técnicos.
             </div>
          )}
        </>
      ) : (
        <div className="py-20 text-center border border-dashed border-white/10 rounded-3xl">
          <p className="text-slate-500">Nenhum artigo encontrado nesta categoria.</p>
          <button 
            onClick={() => setActiveCategory("Tudo")}
            className="mt-4 text-accent hover:underline font-bold"
          >
            Ver todos os posts
          </button>
        </div>
      )}

      {/* Newsletter Section */}
      <div className="mt-32 p-12 lg:p-20 rounded-[3rem] bg-gradient-to-br from-accent/20 to-transparent border border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 blur-[100px] -z-10" />
        <div className="max-w-2xl">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-white mb-6">
            Conexus <span className="text-accent">Briefing</span>
          </h2>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed">
            Antecipe tendências industriais e receba análises técnicas exclusivas da nossa engenharia diretamente no seu e-mail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="seu@email.com" 
              className="flex-grow bg-white/5 border border-white/10 rounded-full py-4 px-8 text-white focus:outline-none focus:border-accent transition-colors"
            />
            <button className="bg-accent hover:bg-accent-dark text-white font-bold py-4 px-10 rounded-full transition-all shadow-[0_0_20px_rgba(190,26,135,0.3)] hover:scale-105 active:scale-95">
              Inscrever-se
            </button>
          </div>
          <p className="text-slate-500 text-xs mt-6 italic">
            * Prometemos apenas conteúdo técnico de alto valor. Sem spam.
          </p>
        </div>
      </div>
    </div>
  );
}
