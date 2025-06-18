"use client"

import { getSectionAnimation } from '@/styles/animations';
import { blogsSection } from '@/lib/content/blogs';
import { Blog } from '@/lib/types';
import dynamic from 'next/dynamic';

const Layout = dynamic(() => import('@/containers/layout/Layout'), { ssr: false });
const Wrapper = dynamic(() => import('@/components/ui/Wrapper'), { ssr: false });

export default function BlogPage() {
  const posts = blogsSection.blogs;
  return (
    <Layout>
      <Wrapper {...getSectionAnimation}>
        <h1 className="heading-secondary mb-8">Blogs</h1>
        <div className="grid gap-8">
          {posts.map((post: Blog) => (
            <article 
              key={post.id} 
              className="p-6 rounded-lg border border-bg-secondary hover:border-accent transition-colors duration-300"
            >
              <a href={post.url} className="block group">
                <h2 className="text-2xl font-semibold mb-2 group-hover:text-accent transition-colors duration-300">
                  {post.title}
                </h2>
                <p className="text-dark-2 mb-3">{post.description}</p>
                <time className="text-sm text-dark-3 font-mono">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </a>
            </article>
          ))}
        </div>
      </Wrapper>
    </Layout>
  );
} 