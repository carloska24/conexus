import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getBlogPosts, getPostBySlug } from "@/lib/blog";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Calendar, Clock, ChevronLeft, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

interface BlogPostProps {
  params: {
    slug: string;
  };
}

// Componentes customizados para o MDX
const components = {
  h1: (props: any) => <h1 className="text-3xl md:text-4xl font-bold text-white mt-12 mb-6" {...props} />,
  h2: (props: any) => <h2 className="text-2xl md:text-3xl font-bold text-white mt-10 mb-4" {...props} />,
  h3: (props: any) => <h3 className="text-xl md:text-2xl font-bold text-white mt-8 mb-3" {...props} />,
  p: (props: any) => <p className="text-slate-200 leading-relaxed text-lg mb-6" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-accent bg-accent/5 p-6 my-8 rounded-r-2xl italic text-xl text-slate-100" {...props} />
  ),
  ul: (props: any) => <ul className="list-disc list-outside ml-6 space-y-4 mb-8 text-slate-300" {...props} />,
  li: (props: any) => <li className="marker:text-accent pl-2 text-slate-300" {...props} />,
  strong: (props: any) => <strong className="text-white font-bold brightness-125" {...props} />,
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) return { title: "Post não encontrado" };

  return {
    title: `${post.metadata.title} | Blog Conexus`,
    description: post.metadata.excerpt,
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.excerpt,
      images: [post.metadata.image],
      type: 'article',
    },
  };
}

export const revalidate = 3600; // revalidate at most every hour

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-[#0B1120] min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-32 pb-20">
        <article className="section-container max-w-4xl">
          {/* Botão Voltar Premium - CONTRASTE FORÇADO */}
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-3 !text-white bg-white/10 hover:bg-accent border-2 border-accent/80 hover:border-accent rounded-full px-6 py-3 transition-all duration-300 mb-12 text-[11px] font-black uppercase tracking-[0.2em] group hover:shadow-[0_0_30px_rgba(190,26,135,0.6)] active:scale-95 shadow-lg"
          >
            <ChevronLeft size={20} className="text-accent group-hover:text-white group-hover:-translate-x-1 transition-all" />
            <span className="!text-white">Voltar para o Blog</span>
          </Link>

          {/* Meta Information */}
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 rounded-full bg-accent/20 text-accent border border-accent/30 text-[10px] font-bold uppercase tracking-wider">
                {post.metadata.category}
              </span>
              <div className="flex items-center gap-4 text-slate-500 text-xs">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} />
                  {new Date(post.metadata.date).toLocaleDateString('pt-BR')}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={14} />
                  5 min read
                </span>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white leading-tight mb-8">
              {post.metadata.title}
            </h1>

            <div className="flex items-center justify-between border-y border-white/5 py-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-sm">
                  C
                </div>
                <div>
                  <p className="text-white text-sm font-bold">{post.metadata.author}</p>
                  <p className="text-slate-500 text-xs text-nowrap">Equipe Técnica Conexus</p>
                </div>
              </div>
              <button className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm">
                <Share2 size={18} />
                Compartilhar
              </button>
            </div>
          </header>

          {/* Hero Image */}
          <div className="w-full aspect-video bg-slate-800 rounded-3xl overflow-hidden mb-16 relative border border-white/5">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] to-transparent opacity-40 z-10" />
            {post.metadata.image ? (
              <Image 
                src={post.metadata.image} 
                alt={post.metadata.title}
                fill
                priority
                quality={100}
                sizes="(max-width: 1024px) 100vw, 1200px"
                className="object-cover blog-image-fix"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-slate-600 italic">
                 Ilustração do Artigo
              </div>
            )}
          </div>

          {/* Post Content */}
          <div className="prose prose-invert max-w-none">
            <MDXRemote source={post.content} components={components} />
          </div>

          {/* Footer do Artigo */}
          <footer className="mt-20 pt-10 border-t border-white/5 text-center">
            <h4 className="text-white font-bold mb-4 italic">Obrigado por ler!</h4>
            <p className="text-slate-400 text-sm mb-8">
              Tem alguma dúvida técnica ou quer saber como conectar sua empresa ao nosso ecossistema?
            </p>
            <Link 
              href="/#contato" 
              className="inline-flex py-3 px-8 bg-accent hover:bg-accent-dark text-white font-bold rounded-full transition-all"
            >
              Fale com um Especialista
            </Link>
          </footer>

          <div className="mt-20 text-center">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 !text-white/80 hover:!text-accent transition-all text-[12px] font-bold uppercase tracking-[0.2em] group py-4 px-8 border border-white/10 rounded-full hover:border-accent/40 bg-white/5"
            >
              <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              <span>Explorar mais artigos</span>
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
