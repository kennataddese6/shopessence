export interface Product {
  id: number
  name: string
  description: string
  price: number
  rating: number
  reviews: number
  images: string[]
  variants: { id: string; name: string; imageIndex: number }[]
  amazonUrl: string
}
