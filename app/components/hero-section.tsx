import Image from "next/image"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">
              Kala
              <br />
              Collective
            </h1>
            <p className="text-xl text-muted-foreground max-w-md">
              Celebrating movement, culture, and community in the heart of Toronto.
            </p>
          </div>
          <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden">
            <Image
              src="/placeholder.svg?height=800&width=600"
              width={600}
              height={800}
              alt="Dancer in motion"
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
