import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Blog {
  id: number;
  title: string;
  description: string;
  link: string;
  imageUrl: string;
}

interface BlogListProps {
  blogs: Blog[];
}

const BlogList: React.FC<BlogListProps> = ({ blogs }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 text-center dark:text-slate-500 mt-6 mb-8">
        Blogs
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className=" bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <Image
              height={48}
              width={52}
              alt={blog.title}
              src={blog.imageUrl}
              className="w-full object-cover h-48 rounded-t-md"
              unoptimized
            />
            <div className="p-4 dark:bg-[#ececec] rounded-b-md">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {blog.title}
              </h2>
              <p className="text-gray-600 line-clamp-3">{blog.description}</p>
              <div className="mt-4">
                <Link
                  href={blog.link}
                  target="_blank"
                  className="inline-block px-4 py-2 text-sm font-medium text-white dark:bg-[#385170] rounded-md dark:hover:bg-[#142d4c] transition duration-300"
                >
                  Read more
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
