import { Metadata } from 'next';
import BlogCard from '@/components/BlogCard';

// Define metadata for the page
export const metadata: Metadata = {
  title: 'Blog Posts',
  description: 'List of all blog posts',
};

interface BlogPost {
  id: number;
  name: string;
  description: string;
  slug: string;
  image: string;
  meta_title: string;
}

const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  try {
    const res = await fetch('https://briskbraintech.com/api/blogs');
    if (!res.ok) {
      throw new Error('Failed to fetch blog posts');
    }
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
};

export default async function BlogList() {
  const blogPosts = await fetchBlogPosts();

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
