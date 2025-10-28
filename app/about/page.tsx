import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, Heart, Sparkles, Zap } from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: Heart,
    title: "Health First",
    description:
      "We prioritize your physical and mental wellbeing with evidence-based recommendations",
  },
  {
    icon: Sparkles,
    title: "Beauty & Confidence",
    description:
      "Discover products that help you feel confident and beautiful in your own skin",
  },
  {
    icon: Zap,
    title: "Wellness Solutions",
    description:
      "From fitness to nutrition, we cover all aspects of a healthy lifestyle",
  },
]

const testimonials = [
  {
    name: "Sarah M.",
    role: "Fitness Enthusiast",
    text: "The product recommendations here actually helped me improve my posture and reduce back pain. Life-changing!",
  },
  {
    name: "James K.",
    role: "Tech Professional",
    text: "Great articles with practical advice. The products recommended are genuinely useful, not just random links.",
  },
  {
    name: "Emma L.",
    role: "Wellness Coach",
    text: "I recommend this site to all my clients. The content is informative and the product selection is curated with care.",
  },
]

const featuredProducts = [
  {
    id: "2",
    name: "Smart Watch Pro",
    price: 299.99,
    image: "/smartwatch-lifestyle.png",
    benefit: "Track your fitness, sleep, and health metrics",
    amazonUrl: "https://amazon.com/s?k=smart+watch",
  },
  {
    id: "1",
    name: "Premium Wireless Headphones",
    price: 199.99,
    image: "/wireless-headphones.png",
    benefit: "Enjoy music and podcasts for stress relief",
    amazonUrl: "https://amazon.com/s?k=wireless+headphones",
  },
  {
    id: "3",
    name: "USB-C Cable",
    price: 19.99,
    image: "/usb-c-cable.jpg",
    benefit: "Keep your devices charged and ready",
    amazonUrl: "https://amazon.com/s?k=usb-c+cable",
  },
]

export default function About() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Your Guide to Health, Wellness & Beauty
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              We believe that true wellness comes from informed choices. Our
              mission is to provide you with evidence-based information and
              carefully curated products that genuinely improve your quality of
              life.
            </p>
            <Link href="/blogs">
              <Button size="lg" className="gap-2">
                Read Our Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground">
              Our Mission
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <p>
                In a world of endless wellness trends and conflicting health
                advice, we cut through the noise. Our team researches, tests,
                and recommends only products and practices that deliver real
                results.
              </p>
              <p>
                Whether you're struggling with back pain, looking to improve
                your fitness, enhance your beauty routine, or simply live a
                healthier life, we're here to guide you with honest, practical
                advice backed by research.
              </p>
              <p>
                Every product we recommend is chosen because we genuinely
                believe it can make a positive difference in your life. We
                partner with Amazon to bring you trusted, verified products with
                transparent pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} className="p-6 text-center">
                  <Icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            Popular Wellness Products
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            These are some of our most recommended products that our readers
            have found transformative in their wellness journey.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <Card
                key={product.id}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={"/newshoe.jpg"}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 text-foreground">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                    {product.benefit}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">
                      ${product.price}
                    </span>
                    <a
                      href={product.amazonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm">
                        View on Amazon
                      </Button>
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/">
              <Button variant="outline" size="lg">
                Browse All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">
            What Our Readers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your Wellness Journey Today
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Explore our articles, discover products that work, and join
            thousands of people improving their health and wellbeing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/blogs">
              <Button variant="secondary" size="lg">
                Read Articles
              </Button>
            </Link>
            <Link href="/">
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                Shop Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
