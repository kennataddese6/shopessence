// Product data with variants and images
export const productsData: Record<string, any> = {
  "1": {
    id: "1",
    name: "Premium Wireless Headphones",
    price: 199.99,
    description:
      "Experience crystal-clear audio with our premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and premium comfort padding for all-day wear.",
    images: ["/newshoe.jpg", "/shoe.png", "/newshoe.jpg"],
    variants: [
      { id: "color-black", name: "Black", value: "Black", imageIndex: 0 },
      { id: "color-silver", name: "Silver", value: "Silver", imageIndex: 1 },
      { id: "color-gold", name: "Gold", value: "Gold", imageIndex: 2 },
    ],
    amazonUrl: "https://amazon.com/s?k=premium+wireless+headphones",
    rating: 4.8,
    reviews: 324,
  },
  "2": {
    id: "2",
    name: "Smart Watch Pro",
    price: 299.99,
    description:
      "Stay connected with our advanced smart watch. Track your fitness, receive notifications, monitor heart rate, and enjoy up to 7 days of battery life.",
    images: [
      "/smart-watch-pro-black.jpg",
      "/smart-watch-pro-silver.jpg",
      "/smart-watch-pro-rose-gold.jpg",
    ],
    variants: [
      { id: "size-40mm", name: "40mm", value: "40mm", imageIndex: 0 },
      { id: "size-44mm", name: "44mm", value: "44mm", imageIndex: 1 },
    ],
    amazonUrl: "https://amazon.com/s?k=smart+watch+pro",
    rating: 4.6,
    reviews: 512,
  },
  "3": {
    id: "3",
    name: "USB-C Cable",
    price: 19.99,
    description:
      "Fast and reliable USB-C cable for charging and data transfer. Supports up to 100W power delivery and 480Mbps data transfer speeds.",
    images: [
      "/usb-c-cable-white.jpg",
      "/usb-c-cable-black.jpg",
      "/usb-c-cable-coiled.jpg",
    ],
    variants: [
      { id: "length-3ft", name: "3ft", value: "3ft", imageIndex: 0 },
      { id: "length-6ft", name: "6ft", value: "6ft", imageIndex: 1 },
      { id: "length-10ft", name: "10ft", value: "10ft", imageIndex: 2 },
    ],
    amazonUrl: "https://amazon.com/s?k=usb-c+cable",
    rating: 4.7,
    reviews: 1203,
  },
}
