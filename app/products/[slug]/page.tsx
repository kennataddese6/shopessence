import { productsData } from "@/app/lib/products"
import ProductStore from "@/components/product-store"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"
import { use } from "react"

type Props = {
  params: { slug: string }
}

// 🧠 Use this to generate SEO metadata dynamically
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug
  const product = productsData[Number(slug) - 1]

  if (!product) {
    return {
      title: "Product Not Found | Essence Store",
      description: "The product you’re looking for could not be found.",
    }
  }

  return {
    title: `${product.name} | Essence Store`,
    description: product.description,
    openGraph: {
      title: `${product.name} | Essence Store`,
      description: product.description,
      images: [
        {
          url: product.image,
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | Essence Store`,
      description: product.description,
      images: [product.image],
    },
  }
}

export default function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params)
  const product = productsData[Number(slug) - 1]

  if (!product) {
    return (
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12">
          <Link href="/">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products
            </Button>
          </Link>
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold text-foreground">
              Product not found
            </h1>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen max-w-7xl mx-auto bg-background">
      <div className="container mx-auto px-4 py-12">
        <Link href="/products">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Button>
        </Link>

        <ProductStore product={product} />
      </div>
    </main>
  )
}
