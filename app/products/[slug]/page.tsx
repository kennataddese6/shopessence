"use client"

import { productsData } from "@/app/lib/products"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, ShoppingCart, Star } from "lucide-react"
import Link from "next/link"
import { use, useState } from "react"

export default function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params)
  const product = productsData[slug]
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0])
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

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

  const handleVariantChange = (variant: any) => {
    setSelectedVariant(variant)
    setSelectedImageIndex(variant.imageIndex)
  }

  return (
    <main className="min-h-screen max-w-7xl mx-auto bg-background">
      <div className="container mx-auto px-4 py-12">
        <Link href="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-muted rounded-lg overflow-hidden">
              <img
                src={product.images[selectedImageIndex] || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Gallery */}
            <div className="flex gap-2">
              {product.images.map((image: string, index: number) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImageIndex === index
                      ? "border-primary"
                      : "border-border hover:border-muted-foreground"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              <p className="text-3xl font-bold text-primary mb-4">
                ${product.price}
              </p>
            </div>

            {/* Description */}
            <Card className="p-4 bg-muted/50">
              <h3 className="font-semibold mb-2">Description</h3>
              <p className="text-foreground/80 leading-relaxed">
                {product.description}
              </p>
            </Card>

            {/* Variants */}
            <div>
              <h3 className="font-semibold mb-3">
                {product.variants[0].name === "Black" ||
                product.variants[0].name === "Silver" ||
                product.variants[0].name === "Gold"
                  ? "Color"
                  : "Options"}
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((variant: any) => (
                  <button
                    key={variant.id}
                    onClick={() => handleVariantChange(variant)}
                    className={`px-4 py-2 rounded-lg border-2 font-medium transition-colors ${
                      selectedVariant.id === variant.id
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-background text-foreground hover:border-primary"
                    }`}
                  >
                    {variant.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Purchase Button */}
            <a
              href={product.amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full py-6 text-lg" size="lg">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Buy on Amazon
              </Button>
            </a>

            {/* Additional Info */}
            <Card className="p-4 bg-muted/50">
              <div className="space-y-2 text-sm">
                <p className="text-muted-foreground">
                  ✓ Free shipping on orders over $50
                </p>
                <p className="text-muted-foreground">
                  ✓ 30-day money-back guarantee
                </p>
                <p className="text-muted-foreground">
                  ✓ 1-year warranty included
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
