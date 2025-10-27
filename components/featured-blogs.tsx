import { BlogCard } from "./blog-card"
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

  return (
    <div className="px-6 mt-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-8">
          <h1 className="text-foreground text-3xl font-bold mb-8">
            Featured Articles
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <BlogCard />
          ))}
        </div>
      </div>
    </div>
  )
}
