import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface BlogPost {
  id: number;
  name: string;
  description: string;
  slug: string;
  image: string;
  meta_title: string;
}

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <Image src={post.image} alt={post.name} width={400} height={200} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">{post.name}</h2>
        <p className="text-gray-600 mb-4">{post.description}</p>
        <Link href={`/blog/${post.slug}`} className="text-blue-500 hover:underline">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
