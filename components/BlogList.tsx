'use client'

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GetBlogDatas } from "@/services/queries";
import { TailSpin } from "react-loader-spinner";
// import { useState } from "react";

export interface Blog {
  id: number;
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  content: string;
}

const BlogList: React.FC = () => {
  // const [snipper, setsnipper] = useState(false)

  const { data, isPending, error } = GetBlogDatas();
  console.log(data);
  

  const blogs = data

  if (isPending && !error) {
    return (
      <div className="col-span-3 mx-auto flex h-screen mt-60">
        <TailSpin />
      </div>
    );
  }
  
  if (error && !isPending) {
    return (
      <div className="flex justify-center items-center">
        <h1 className="text-3xl">{error.message}</h1>
      </div>
    );
  }

  // if(!snipper) {
  //   return(
  //     <div className="col-span-3 mx-auto flex h-screen mt-60">
  //       <TailSpin />
  //     </div>
  //   )
  // }
  
  
    return (
      <>
        {blogs?.map((blog: Blog) => (
          <div
            key={blog.id}
            className=" bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <Image
              height={48}
              width={52}
              alt={blog.title}
              src={blog.imageUrl}
              className="w-full object-cover h-64 rounded-t-md"
              unoptimized
            />
            <div className="p-4 dark:bg-[#ececec] rounded-b-md">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {blog.title}
              </h2>
              <p className="text-gray-600 line-clamp-3">{blog.description}</p>
              <div className="mt-4">
                <Link
                  href={`/blog/${blog.id}`}
                  target="_self"
                  className="inline-block px-4 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800 bg-slate-600 dark:bg-[#385170] rounded-md dark:hover:bg-[#142d4c] transition duration-300"
                >
                  Read more
                </Link>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }
;

export default BlogList;
