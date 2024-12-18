import React from "react";
import BlogContent from "@/components/BlogContent";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { GetData } from "@/Data/Fetches";

type BlogSlugParams = Promise<{ id: string }>;

export default async function BlogSlug({ params }: { params: BlogSlugParams }) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["blogsData"],
    queryFn: GetData,
  });

  const { id } = await params;


  return (
    <div className="md:max-w-7xl mx-auto">
        <HydrationBoundary state={dehydrate(queryClient)}>
            <BlogContent id={id} />
        </HydrationBoundary>
    </div>
  );
}
