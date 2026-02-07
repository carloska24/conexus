import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { cache } from 'react';

const BLOG_PATH = path.join(process.cwd(), 'src/content/blog');

export interface PostMetadata {
  title: string;
  date: string;
  category: string;
  author: string;
  image: string;
  excerpt: string;
  slug: string;
}

export const getBlogPosts = cache((): PostMetadata[] => {
  // Ensure directory exists
  if (!fs.existsSync(BLOG_PATH)) {
    return [];
  }

  const files = fs.readdirSync(BLOG_PATH);

  const posts = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const filePath = path.join(BLOG_PATH, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContent);

      return {
        ...data,
        slug: file.replace('.mdx', ''),
      } as PostMetadata;
    });

  // Sort posts by date
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
});

export const getPostBySlug = cache((slug: string) => {
  const filePath = path.join(BLOG_PATH, `${slug}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);

  return {
    metadata: {
      ...data,
      slug,
    } as PostMetadata,
    content,
  };
});
