"use client";

import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { PostMetadata } from "@/lib/blog";

interface BlogFeaturedPostProps {
  post: PostMetadata;
}

export function BlogFeaturedPost({ post }: BlogFeaturedPostProps) {
  return (
    <div className="mb-20">
      <Link 
        href={`/blog/${post.slug}`}
        className="group relative flex flex-col lg:flex-row bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden hover:border-accent/40 transition-all duration-500 hover:shadow-[0_0_80px_rgba(190,26,135,0.15)]"
      >
        {/* Imagem Destaque */}
        <div className="lg:w-3/5 relative aspect-[16/9] lg:aspect-auto overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1120]/60 to-transparent z-10" />
          {post.image ? (
            <Image 
              src={post.image} 
              alt={post.title}
              fill
              quality={100}
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-slate-800 text-slate-500 italic">
              Imagem do Artigo
            </div>
          )}
          <div className="absolute top-8 left-8 z-20">
            <span className="px-4 py-1.5 rounded-full bg-accent text-white text-[10px] font-bold uppercase tracking-widest shadow-xl">
              Destaque: {post.category}
            </span>
          </div>
        </div>

        {/* Conteúdo Destaque */}
        <div className="lg:w-2/5 p-10 lg:p-12 flex flex-col justify-center">
          <div className="flex items-center gap-6 text-slate-500 text-xs mb-8">
            <span className="flex items-center gap-2">
              <Calendar size={16} className="text-accent" />
              {new Date(post.date).toLocaleDateString("pt-BR")}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} className="text-accent" />
              8 min read
            </span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-6 group-hover:text-accent transition-colors leading-tight">
            {post.title}
          </h2>

          <p className="text-slate-400 text-lg leading-relaxed mb-10 line-clamp-4 italic">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-3 text-white font-bold text-lg">
            Ler Artigo Completo
            <ArrowRight size={20} className="text-accent group-hover:translate-x-2 transition-transform" />
          </div>
        </div>
      </Link>
    </div>
  );
}
