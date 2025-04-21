'use client'

import Link from "next/link"
import { useState } from "react"
import { Instagram, Mail, Copy, Check } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/app/components/ui/dialog"

export function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isEmailOpen, setIsEmailOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const links = [
    { href: '/about', label: 'About', hoverColor: 'hover:bg-peacock-teal' },
    { href: '/programs/prep-practice', label: 'Prep + Practice', hoverColor: 'hover:bg-peacock-purple' },
    { href: '/performances', label: 'Performances', hoverColor: 'hover:bg-peacock-blue' }
  ]

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('kaladancecollective@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

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
          <div className="flex items-center border-l border-black">
            <a
              href="https://www.instagram.com/kaladancecollective"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 hover:bg-gray-100 transition-colors"
              aria-label="Visit our Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsEmailOpen(true)}
              className="p-4 hover:bg-gray-100 transition-colors"
              aria-label="View email address"
            >
              <Mail className="w-5 h-5" />
            </button>
          </div>
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
          <div className="flex items-center">
            <a
              href="https://www.instagram.com/kaladancecollective"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 hover:bg-gray-100 transition-colors"
              aria-label="Visit our Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsEmailOpen(true)}
              className="p-4 hover:bg-gray-100 transition-colors"
              aria-label="View email address"
            >
              <Mail className="w-5 h-5" />
            </button>
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

      {/* Email Dialog */}
      <Dialog open={isEmailOpen} onOpenChange={setIsEmailOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Contact Us</DialogTitle>
          </DialogHeader>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <span className="text-lg font-mono">kaladancecollective@gmail.com</span>
            <button
              onClick={handleCopyEmail}
              className="p-2 hover:bg-gray-200 rounded-full transition-colors"
              aria-label="Copy email address"
            >
              {copied ? (
                <Check className="w-5 h-5 text-green-600" />
              ) : (
                <Copy className="w-5 h-5" />
              )}
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </nav>
  )
}
