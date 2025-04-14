import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full py-12 bg-white border-t">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-4xl font-bold mb-6">Kala</h2>
            <p className="text-muted-foreground max-w-md mb-6">
              Celebrating movement, culture, and community in the heart of Toronto since 2015.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="hover:text-teal-700">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-teal-700">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-teal-700">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Navigation</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/#programs" className="hover:text-teal-700 transition-colors">
                    Programs
                  </Link>
                </li>
                <li>
                  <Link href="/#work" className="hover:text-teal-700 transition-colors">
                    Our Work
                  </Link>
                </li>
                <li>
                  <Link href="/#team" className="hover:text-teal-700 transition-colors">
                    Our People
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-teal-700 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Contact</h3>
              <ul className="space-y-3">
                <li>123 Dance Street</li>
                <li>Toronto, ON</li>
                <li>info@kaladance.com</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t text-sm text-muted-foreground">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <p>© 2023 Kala Dance Collective. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-teal-700 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-teal-700 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
