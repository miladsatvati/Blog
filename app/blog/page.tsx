import React from "react";
import BlogList from "@/components/BlogList";
import { QueryClient } from "@tanstack/react-query";
import { GetData } from "@/Data/Fetches";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";

async function BlogPage() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["blogsData"],
    queryFn: GetData,
  });



  return (
    // <BlogList blogs={blogs} />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 text-center dark:text-slate-500 mt-6 mb-8">
        Blogs
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <HydrationBoundary state={dehydrate(queryClient)}>
          <BlogList />
        </HydrationBoundary>
      </div>
    </div>
  );
}

export default BlogPage;
