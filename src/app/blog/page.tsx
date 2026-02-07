import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getBlogPosts } from "@/lib/blog";
import { BlogClient } from "@/components/BlogClient";

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <div className="bg-[#0B1120] min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-32 pb-20">
        <BlogClient initialPosts={posts} />
      </main>

      <Footer />
    </div>
  );
}
