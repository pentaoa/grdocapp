import type { Metadata } from 'next';
import Link from 'next/link';
import { allBlogs } from 'contentlayer/generated';

export const metadata: Metadata = {
  title: 'Blog',
  description: '查看所有文章',
};

export default async function BlogPage() {
  return (
    <section>
      <h1 className="font-bold text-4xl my-5">文章列表</h1>
      <div className="font-semibold border-dashed p-3 my-8 text-center border-2 border-indigo-600 rounded-lg">
        注：旧文章还在迁移中，有一部分未能移动到这里。
      </div>
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col p-3 shadow-lg rounded-lg border-solid border-2 border-indigo-600">
              <div className="font-bold text-xl">{post.title}</div>
              <div className="">{post.author}</div>              
              <div className="text-gray-500">{post.publishedAt}</div>
            </div>
          </Link>
        ))}
    </section>
  );
}
