import FeaturedBlogs from "@/components/featured-blogs"
import FeaturedProducts from "@/components/featured-products"
import Hero from "@/components/hero"

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <FeaturedBlogs />
    </div>
  )
}
