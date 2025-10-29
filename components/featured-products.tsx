import { productsData } from "@/app/lib/products"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Star } from "lucide-react"
import Image from "next/image"
export default function Productcard() {
  const products = productsData.filter((product) => product.featured)

  return (
    <div className="px-6">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-8">
          <p className="text-muted-foreground text-sm font-medium mb-2">
            Our best collection
          </p>
          <h1 className="text-foreground text-3xl font-bold mb-8">
            Featured Products
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group">
              <div className="relative rounded-2xl p-8 mb-4 aspect-square flex items-center justify-center bg-muted">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 left-4 rounded-full"
                >
                  <Heart className="w-5 h-5 text-muted-foreground" />
                </Button>
                {product.featured && (
                  <span className="absolute top-4 right-4 bg-background text-foreground px-3 py-1 rounded-full text-xs font-medium border">
                    Featured
                  </span>
                )}
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardContent className="space-y-3">
                <h3 className="text-foreground font-medium text-lg leading-tight">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {product.description}
                </p>
                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[...Array(product.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                    {[...Array(5 - product.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-muted-foreground" />
                    ))}
                  </div>
                  <span className="text-muted-foreground text-sm">
                    ({product.reviews} reviews)
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-foreground text-2xl font-bold">
                    ${product.price}
                  </span>
                  <Button className="rounded-full px-6 py-2 text-sm font-medium">
                    View
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
