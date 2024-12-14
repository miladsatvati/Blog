import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";
import { blogs } from "@/Data/blogs";

interface BlogSlugParams {
    params: {
        id: string
    }
}
function BlogSlug({params}: BlogSlugParams) {

    const bloog = blogs.find((blog) => {
        if (blog.id === parseInt(params.id)) {
            return blog
        }
    })
    

    
  return (
    <div>
        <MaxWidthWrapper className="flex flex-col justify-center items-center gap-10">
            <h1 className="text-center text-3xl"><span className="text-red-500">Title:</span> {bloog?.title}</h1>
            <p>
                {
                    bloog?.content
                }
            </p>
        </MaxWidthWrapper>
    </div>
  )
}

export default BlogSlug