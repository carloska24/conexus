import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getBlogPosts } from "@/lib/blog";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <div className="bg-[#0B1120] min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="section-container">
          {/* Header do Blog */}
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
              Insights e <span className="text-accent">Tecnologia</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              O conhecimento que conecta sua ambição ao resultado industrial. Artigos técnicos, tendências e novidades do ecossistema Conexus.
            </p>
          </div>

          {/* Grid de Posts */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link 
                key={post.slug} 
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(190,26,135,0.1)]"
              >
                {/* Imagem do Post */}
                <div className="relative aspect-video overflow-hidden bg-slate-800">
                  <div className="absolute inset-0 bg-accent/20 mix-blend-multiply opacity-20 group-hover:opacity-40 transition-opacity z-10" />
                  {post.image ? (
                    <Image 
                      src={post.image} 
                      alt={post.title}
                      fill
                      quality={100}
                      priority={posts.indexOf(post) <= 2}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105 blog-image-fix"
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
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-slate-400 text-xs mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      {new Date(post.date).toLocaleDateString('pt-BR')}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} />
                      5 min read
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors leading-tight">
                    {post.title}
                  </h2>

                  <p className="text-slate-400 text-sm line-clamp-3 mb-6 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-white font-bold text-sm">
                    Ler Artigo 
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {posts.length === 0 && (
            <div className="py-20 text-center border border-dashed border-white/10 rounded-3xl">
              <p className="text-slate-500">Nenhum artigo publicado ainda. Fique atento!</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
