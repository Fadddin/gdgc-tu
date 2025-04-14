"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Projects", href: "/projects" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-10 w-10 flex items-center">
              <Image src="/logo.png?height=40&width=40" alt="GDG Logo" width={40} height={40} />
            </div>
            <span className="font-google-sans font-bold text-2xl">
              <span className="text-[#1A73E8]">G</span>
              <span className="text-[#D93025]">D</span>
              <span className="text-[#F9AB00]">G</span>
              <span className="text-[#188038]">C</span>
              <span className="text-[#202124] ml-2">TEZU</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-google-sans font-medium transition-colors hover:text-google-blue ${
                  pathname === link.href ? "text-google-blue" : "text-gray-700"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#newsletter"
              className="bg-google-blue text-white px-4 py-2 rounded-full font-medium hover:bg-blue-600 transition-colors"
            >
              Join Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t mt-2">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-google-sans font-medium py-2 transition-colors hover:text-google-blue ${
                    pathname === link.href ? "text-google-blue" : "text-gray-700"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#newsletter"
                className="bg-google-blue text-white px-4 py-2 rounded-full font-medium hover:bg-blue-600 transition-colors text-center"
                onClick={() => setIsOpen(false)}
              >
                Join Us
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
