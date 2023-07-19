import BlogCard from '@/components/blog/BlogCard'
import BlogHero from '@/components/blog/BlogHero'
import FeatureBlog from '@/components/blog/FeatureBlog'
import React from 'react'

const blog = () => {
  return (
    <div>
      <BlogHero/>
      <FeatureBlog/>
      <BlogCard/>
    </div>
  )
}

export default blog
