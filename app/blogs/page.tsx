import { BlogCard } from "@/components/blog-card"
import { blogs } from "../lib/blogs"

export default function FeaturedBlogs() {
  return (
    <div className="px-6 mt-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-8">
          <h1 className="text-foreground text-3xl font-bold mb-8">
            We wrote this for you
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  )
}
