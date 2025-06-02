import Link from "next/link"
import Image from "next/image"

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
        <div className="ml-auto">
          <Link href="/" className="py-4 px-6 border-l border-black hover:bg-gray-100 transition-colors flex items-center gap-2">
            <span>Kala Collective</span>
            <Image
              src="/logo.png"
              alt="Kala Collective Logo"
              width={24}
              height={24}
              className="w-6 h-6 object-contain"
            />
          </Link>
        </div>
      </div>
    </nav>
  )
}
