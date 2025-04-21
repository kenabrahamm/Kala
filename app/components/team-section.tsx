import Image from "next/image"

export function TeamSection() {
  return (
    <section id="team" className="w-full py-24 lg:py-32 bg-purple-900 text-white">
      <div className="container px-4 md:px-6">
        <h2 className="text-5xl font-bold tracking-tight mb-16">Our People</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "Maya Patel", role: "Artistic Director", image: "/placeholder.svg?height=600&width=400" },
            { name: "David Chen", role: "Lead Choreographer", image: "/placeholder.svg?height=600&width=400" },
            { name: "Aisha Johnson", role: "Contemporary Instructor", image: "/placeholder.svg?height=600&width=400" },
            {
              name: "Carlos Rodriguez",
              role: "Youth Program Director",
              image: "/placeholder.svg?height=600&width=400",
            },
          ].map((member, index) => (
            <div key={index} className="space-y-3">
              <div className="relative aspect-[2/3] overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  width={400}
                  height={600}
                  alt={member.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-purple-200">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
