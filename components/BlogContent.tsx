"use client";

import { GetBlogDatas } from "@/services/queries";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Blog } from "./BlogList";

function BlogContent({ id }: { id: string }) {
  const { data } = GetBlogDatas();

  // const findBlog = data?.find((item: Blog) => item.id === parseInt(id))

  if (data) {
    const eachData: Blog = data?.find((item: Blog) => item.id == parseInt(id));
    return (
      <div>
        <MaxWidthWrapper className="flex flex-col justify-center items-start gap-10 md:max-w-7xl max-w-64">
          <div className="flex flex-col gap-3">
            <h1 className="md:text-3xl font-semibold text-2xl">BlogTitle:</h1>
            <p className="dark:text-slate-400 text-slate-900/75 md:text-2xl text-xl"> {eachData.title} </p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="md:text-3xl font-semibold text-2xl">Description:</h1>
            <p className="dark:text-slate-400 text-slate-900/75 md:text-2xl text-xl">{eachData.description}</p>
          </div>
          <div className="flex flex-col gap-3">
          <h1 className="md:text-3xl font-semibold text-2xl">Content:</h1>
          <p className="dark:text-slate-400 text-slate-900/75 md:text-2xl text-xl">{eachData.content}</p>
          </div>
        </MaxWidthWrapper>
      </div>
    );
  }

  return (
    <div>
      <MaxWidthWrapper className="flex flex-col justify-center items-center gap-10">
        <h1>blog {id}</h1>

        {data?.map((item: Blog) => (
          <div key={item.id}>title: {item.title}</div>
        ))}
      </MaxWidthWrapper>
    </div>
  );
}

export default BlogContent;

{
  /* <div>
        <h1 className="text-center text-3xl">
          <span className="text-red-500">Title:</span> {bloog?.title}
        </h1>
        <p>{bloog?.content}</p>
        </div> */
}
