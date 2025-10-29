import { blogs } from "@/app/lib/blogs"
import { productsData } from "@/app/lib/products"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

interface BlogDetailPageProps {
  params: Promise<{ id: string }>
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { id } = await params
  const blog = blogs.find((b) => b.id === "1")
  const relatedProduct = blog?.relatedProductId
    ? productsData[Number(blog.relatedProductId)]
    : null

  if (!blog) {
    return (
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-2xl font-bold">Blog post not found</h1>
          <Link href="/blogs">
            <Button className="mt-4">Back to Blogs</Button>
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen max-w-7xl mx-auto bg-background">
      {/* Header with back button */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-primary hover:underline mb-6"
          >
            <ArrowLeft size={20} />
            Back to Blogs
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Hero Image */}
          <div className="aspect-video overflow-hidden rounded-lg mb-8 bg-muted">
            <img
              src={"/newshoe.jpg"}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4 text-foreground text-balance">
              {blog.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <span>{blog.author}</span>
              <span>•</span>
              <span>
                {new Date(blog.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span>•</span>
              <span>{blog.readTime} min read</span>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert max-w-none mb-12">
            {blog.content.map((section, index) => (
              <div key={index}>
                {section.type === "heading" ? (
                  <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">
                    {section.text}
                  </h2>
                ) : (
                  <p className="text-lg leading-relaxed mb-4 text-foreground">
                    {section.text}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Related Product Section */}
          {relatedProduct && (
            <div className="mt-16 pt-12 border-t border-border">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Recommended Product
              </h3>
              <Card className="overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                  <div className="aspect-square overflow-hidden rounded-lg bg-muted">
                    <img
                      src={"/newshoe.jpg"}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                      <h4 className="text-2xl font-bold mb-2 text-foreground">
                        {relatedProduct.name}
                      </h4>
                      <p className="text-lg text-muted-foreground mb-4">
                        {relatedProduct.description}
                      </p>
                      <div className="flex items-baseline gap-2 mb-6">
                        <span className="text-3xl font-bold text-primary">
                          ${relatedProduct.price}
                        </span>
                      </div>
                    </div>
                    <Link href={`/products/${relatedProduct.id}`}>
                      <Button size="lg" className="w-full">
                        View Product
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
