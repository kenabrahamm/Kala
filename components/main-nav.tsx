import Link from "next/link"
import { RaccoonIcon } from "./raccoon-icon"

export function MainNav() {
  return (
    <nav className="border-b border-black">
      <div className="flex">
        <Link
          href="/about"
          className="py-4 px-6 border-r border-black hover:bg-peacock-teal hover:text-white transition-colors"
        >
          About
        </Link>
        <Link
          href="/programs/prep-practice"
          className="py-4 px-6 border-r border-black hover:bg-peacock-purple hover:text-white transition-colors"
        >
          Prep + Practice
        </Link>
        <Link
          href="/performances"
          className="py-4 px-6 border-r border-black hover:bg-peacock-blue hover:text-white transition-colors"
        >
          Performances
        </Link>
        <div className="ml-auto flex items-center">
          {/* <RaccoonIcon className="mr-2 text-peacock-gold" /> */}
          <Link href="/" className="py-4 px-6 border-l border-black hover:bg-gray-100 transition-colors">
            Kala Collective
          </Link>
        </div>
      </div>
    </nav>
  )
}
