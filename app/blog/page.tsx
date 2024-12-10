import React from 'react'
import BlogList from '@/components/ui/BlogList'
import { blogs } from '@/Data/blogs'


function BlogPage() {
  return (
    <BlogList blogs={blogs} />
  )
}

export default BlogPage