import Image from "next/image"
import Link from "next/link"
import { RainbowButton } from "./ui/rainbow-button"

const Hero = () => {
  return (
    <section
      className="max-w-7xl mx-auto px-4 md:px-8 py-20  flex flex-col md:flex-row items-center justify-between gap-8"
      aria-labelledby="hero-heading"
    >
      {/* LEFT SIDE – Content */}
      <div className="flex-1 text-center md:text-left">
        <h1
          id="hero-heading"
          className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-snug"
        >
          Insights That Help You Live, Work & Feel{" "}
          <span className="text-blue-600">Better</span>
        </h1>

        <p className="text-gray-600 text-base md:text-lg mb-6 max-w-md mx-auto md:mx-0">
          From practical tips to in-depth product reviews, Essence helps you
          understand what works, why it matters, and where to get it — all
          linked directly to trusted Amazon products.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center md:items-start gap-3">
          <Link href="/products">
            <RainbowButton className="px-6 py-2.5 text-base">
              Browse Products
            </RainbowButton>
          </Link>
        </div>
      </div>

      {/* RIGHT SIDE – Image */}
      <div className="flex-1">
        <Image
          src="/newshoe.jpg"
          alt="Featured product from ShopEssence online store"
          width={1200}
          height={1200}
          priority
          className="rounded-lg  object-cover w-full h-auto"
        />
      </div>
    </section>
  )
}

export default Hero
