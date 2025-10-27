"use client"

import clsx from "clsx"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact" },
  { href: "/about", label: "About" },
]

const Navbar = () => {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 left-0 right-0 z-20 bg-white/60 backdrop-blur-md border-b">
      <nav
        className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4 md:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" className="text-xl font-semibold tracking-tight">
          Logo
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={clsx(
                  "transition-colors hover:text-blue-600",
                  pathname === item.href
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700",
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden p-2"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Nav Dropdown */}
      {menuOpen && (
        <ul className="flex flex-col md:hidden bg-white border-t py-4 text-center text-gray-800 text-sm font-medium shadow-md animate-slide-down">
          {navItems.map((item) => (
            <li key={item.href} className="py-2">
              <Link
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={clsx(
                  "block w-full py-2 hover:text-blue-600 transition-colors",
                  pathname === item.href && "text-blue-600 font-semibold",
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}

export default Navbar
