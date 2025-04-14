'use client'

import Link from "next/link"
import { useState } from "react"

export function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const links = [
    { href: '/about', label: 'About', hoverColor: 'hover:bg-peacock-teal' },
    { href: '/programs/prep-practice', label: 'Prep + Practice', hoverColor: 'hover:bg-peacock-purple' },
    { href: '/performances', label: 'Performances', hoverColor: 'hover:bg-peacock-blue' }
  ]

  return (
    <nav className="border-b border-black">
      {/* Desktop Navigation */}
      <div className="hidden md:flex">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`py-4 px-6 border-r border-black ${link.hoverColor} hover:text-white transition-colors`}
          >
            {link.label}
          </Link>
        ))}
        <div className="ml-auto flex items-center">
          <Link 
            href="/" 
            className="py-4 px-6 border-l border-black hover:bg-gray-100 transition-colors"
          >
            Kala Collective
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <div className="flex items-center justify-between border-b border-black">
          <Link 
            href="/" 
            className="py-4 px-6 hover:bg-gray-100 transition-colors"
          >
            Kala Collective
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-4 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} absolute w-full bg-white z-50 border-b border-black`}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block py-4 px-6 border-b border-black ${link.hoverColor} hover:text-white transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
