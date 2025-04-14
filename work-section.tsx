import Image from "next/image"

export function WorkSection() {
  return (
    <section id="work" className="w-full py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-5xl font-bold tracking-tight mb-16">Our Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=800"
              width={800}
              height={600}
              alt="Dance performance"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=800"
              width={800}
              height={600}
              alt="Dance performance"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=800"
              width={800}
              height={600}
              alt="Dance performance"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=800"
              width={800}
              height={600}
              alt="Dance performance"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-block px-8 py-3 bg-teal-900 text-white font-medium hover:bg-teal-800 transition-colors"
          >
            View All Performances
          </a>
        </div>
      </div>
    </section>
  )
}
