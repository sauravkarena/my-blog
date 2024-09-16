// app/blog/[slug]/page.tsx
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Suspense } from 'react';

interface BlogPost {
  id: number;
  name: string;
  description: string;
  slug: string;
  image: string;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
}

// Fetch blog post data server-side
const fetchBlogPost = async (slug: string): Promise<BlogPost> => {
  try {
    const res = await fetch(`https://briskbraintech.com/api/blogs/${slug}`, { next: { revalidate: 3600 } });
    if (!res.ok) {
      throw new Error('Failed to fetch blog post');
    }
    return await res.json();
  } catch (error) {
    console.error(error);
    return notFound();
  }
};

// Page metadata
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await fetchBlogPost(params.slug);
  return {
    title: post.meta_title || post.name,
    description: post.meta_description,
    keywords: post.meta_keywords,
  };
}

// Loader component
const LoadingSkeleton = () => (
    <div className="animate-pulse">
      <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
      <div className="h-64 bg-gray-200 rounded mb-4"></div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        <div className="h-4 bg-gray-200 rounded w-4/6"></div>
      </div>
      <div className="mt-6 space-y-2">
        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/3"></div>
      </div>
    </div>
  );

// Blog post content component
const BlogPostContent = ({ post }: { post: BlogPost }) => (
  <>
    <h1 className="text-3xl font-bold mb-4">{post.name}</h1>
    <Image
      src={`https://briskbraintech.com${post.image}`}
      alt={post.name}
      width={500}
      height={300}
      style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
      loading="lazy"
    />
    <div
      className="prose mt-4"
      dangerouslySetInnerHTML={{ __html: post.description }}
    />
    <div className="mt-8">
      <p className="text-gray-500 text-sm">Meta Title: {post.meta_title}</p>
      <p className="text-gray-500 text-sm">Meta Description: {post.meta_description}</p>
      <p className="text-gray-500 text-sm">Meta Keywords: {post.meta_keywords}</p>
    </div>
  </>
);

// Page component
export default async function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = await fetchBlogPost(params.slug);
  
    return (
      <div className="max-w-3xl mx-auto p-4">
        <Suspense fallback={<LoadingSkeleton />}>
          <BlogPostContent post={post} />
        </Suspense>
      </div>
    );
  }
