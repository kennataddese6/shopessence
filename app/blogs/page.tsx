import { BlogCard } from "@/components/blog-card"

export default function FeaturedBlogs() {
  const products = [
    {
      id: 1,
      name: "HydraGlow Vitamin C Serum",
      description:
        "Brightens skin tone and reduces dark spots with potent vitamin C and hyaluronic acid.",
      price: 32,
      rating: 5,
      reviews: 184,
      image: "/newshoe.jpg",
      featured: true,
    },
    {
      id: 2,
      name: "AquaBoost Hydrating Gel",
      description:
        "Lightweight gel moisturizer for all-day hydration and a dewy finish.",
      price: 28,
      rating: 4,
      reviews: 97,
      image: "/newshoe.jpg",
      featured: false,
    },
    {
      id: 3,
      name: "PureShield SPF 50+ Sunscreen",
      description:
        "Broad-spectrum sun protection with a non-greasy, invisible finish.",
      price: 22,
      rating: 5,
      reviews: 210,
      image: "/newshoe.jpg",
      featured: false,
    },
    {
      id: 4,
      name: "Renewal Night Repair Cream",
      description:
        "Deeply nourishing night cream that repairs and revitalizes skin while you sleep.",
      price: 36,
      rating: 4,
      reviews: 75,
      image: "/newshoe.jpg",
      featured: true,
    },
    {
      id: 5,
      name: "Radiance Boosting Face Mist",
      description:
        "Refreshing face mist with rose water and aloe vera for instant hydration and glow.",
      price: 18,
      rating: 4,
      reviews: 120,
      image: "/newshoe.jpg",
      featured: false,
    },
    {
      id: 6,
      name: "Soothing Lemon Gel",
      description:
        "Natural aloe vera gel to soothe and hydrate irritated skin.",
      price: 15,
      rating: 5,
      reviews: 85,
      image: "/newshoe.jpg",
      featured: false,
    },
  ]
  const blogs = [
    {
      id: 1,
      title: "Getting Started with Next.js 16",
      description:
        "Explore the latest features in Next.js 16, including improved caching APIs, React Compiler support, and Turbopack as the default bundler.",
      image: "/newshoe.jpg",
      category: "Development",
      date: "Oct 25, 2025",
    },
    {
      id: 2,
      title: "Building Scalable Applications",
      description:
        "Learn best practices for building scalable web applications with modern architecture patterns and performance optimization techniques.",
      image: "/newshoe.jpg",
      category: "Architecture",
      date: "Oct 22, 2025",
    },
    {
      id: 3,
      title: "AI Integration in Web Apps",
      description:
        "Discover how to integrate AI capabilities into your web applications using the Vercel AI SDK and modern language models.",
      image: "/newshoe.jpg",
      category: "AI & ML",
      date: "Oct 20, 2025",
    },
    {
      id: 4,
      title: "Database Design Fundamentals",
      description:
        "Master the essentials of database design, from schema planning to optimization strategies for production environments.",
      image: "/newshoe.jpg",
      category: "Database",
      date: "Oct 18, 2025",
    },
  ]
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
