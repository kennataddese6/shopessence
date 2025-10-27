"use client"

import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface BlogCardProps {
  blog: {
    id: number
    title: string
    description: string
    image: string
    category: string
    date: string
  }
}

export function BlogCard({ blog }: BlogCardProps) {
  return (
    <article className="group flex flex-col h-full bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden bg-muted">
        <Image
          src={blog.image || "/placeholder.svg"}
          alt={blog.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-5">
        {/* Category & Date */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-accent-foreground bg-accent px-3 py-1 rounded-full">
            {blog.category}
          </span>
          <span className="text-xs text-muted-foreground">{blog.date}</span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2 group-hover:underline transition-colors">
          {blog.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 flex-grow line-clamp-3">
          {blog.description}
        </p>

        {/* Read More Link */}
        <Link
          href={`/blog/${blog.id}`}
          className="inline-flex items-center gap-2  font-semibold hover:gap-3 transition-all duration-200 group/link"
        >
          Read More
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  )
}
