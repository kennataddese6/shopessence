export interface Product {
  id: number
  name: string
  description: string
  price: number
  rating: number
  reviews: number
  image: string
  images: string[]
  variants: { id: string; name: string; imageIndex: number }[]
  amazonUrl: string
}
