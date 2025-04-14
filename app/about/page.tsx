import { MainNav } from "@/components/main-nav"
import { TorontoSkyline } from "@/components/toronto-skyline"
import { RaccoonIcon } from "@/components/raccoon-icon"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1 p-8 md:p-16">
        <div className="mb-8 flex items-end">
          <h1 className="text-[8rem] leading-[0.9] font-normal tracking-tight text-peacock-teal">
            TEAM<span className="text-2xl align-top ml-2 text-peacock-gold">08</span>
          </h1>
          {/* <RaccoonIcon className="text-peacock-gold mb-4 ml-4 h-12 w-12" /> */}
        </div>
        <p className="text-lg">
          Kala Dance Collective is rooted in Bharatanatyam, with a vision to honor classical technique while pushing the boundaries of tradition. Our work centers around exploration and experimentation, discovering new pathways of expression within the form. We aim to tell stories that reflect our Canadian diasporic experiences, celebrate our heritage, and showcase the richness of South Asian culture through dance.
        </p>
        <br/>
        <p className="text-lg">
          Founded in 2019, our debut at Citadel + Compagnie's Night Shift featured Nirguna, a piece inspired by the form and formlessness of the deity Shiva, marking the start of our creative journey. In 2021, we remounted Nirguna at Aeris Korper’s PROSPECTS program, continuing our exploration. In 2024, we premiered Kula Devi at Citadel + Compagnie's Spring Mix, a work that honors our family deities and ancestral lineage. We performed Kula Devi in March of 2025 as part of the IBPOC Network Tour.
        </p>
        <br/>
        <p className="text-lg">
          At Kala, we question how Bharatanatyam shapes our Indo-Canadian identities and how these identities fit within an evolving contemporary arts landscape. We are passionate about creating a vibrant, inclusive space for South Asian diasporic bodies to explore and perform diasporic dance. This vision led to the creation of the Prep + Practice program, offering free classes for intermediate and advanced Bharatanatyam dancers. These sessions focus on building a strong foundation through warm-ups, form-focused exercises, and exploratory adavu practice, fostering growth in a community-driven environment.
        </p>
        <br/>
        <br/>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {/* Team Member 1 */}
          <div className="border-t border-peacock-teal pt-4 pr-4 pb-12">
            <div className="uppercase text-sm mb-2 text-peacock-teal">
              CONTEMPORARY DANCE
              <br />
              FOUNDER & ARTISTIC DIRECTOR
            </div>
            <div className="aspect-[3/4] bg-gray-100 mb-4 relative">
              <img
                src="/placeholder.svg?height=400&width=300"
                alt="Maya Patel"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2">
                <RaccoonIcon className="text-peacock-teal/80" />
              </div>
            </div>
            <h2 className="text-3xl font-normal text-peacock-teal">
              MAYA
              <br />
              PATEL
            </h2>
          </div>

          {/* Team Member 2 */}
          <div className="border-t border-peacock-purple pt-4 pr-4 pb-12">
            <div className="uppercase text-sm mb-2 text-peacock-purple">
              CLASSICAL INDIAN DANCE
              <br />
              LEAD CHOREOGRAPHER
            </div>
            <div className="aspect-[3/4] bg-gray-100 mb-4 relative">
              <img
                src="/placeholder.svg?height=400&width=300"
                alt="Aisha Johnson"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2">
                <RaccoonIcon className="text-peacock-purple/80" />
              </div>
            </div>
            <h2 className="text-3xl font-normal text-peacock-purple">
              AISHA
              <br />
              JOHNSON
            </h2>
          </div>

          {/* Team Member 3 */}
          <div className="border-t border-peacock-blue pt-4 pr-4 pb-12">
            <div className="uppercase text-sm mb-2 text-peacock-blue">
              URBAN MOVEMENT
              <br />
              CHOREOGRAPHER & INSTRUCTOR
            </div>
            <div className="aspect-[3/4] bg-gray-100 mb-4 relative">
              <img
                src="/placeholder.svg?height=400&width=300"
                alt="David Chen"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2">
                <RaccoonIcon className="text-peacock-blue/80" />
              </div>
            </div>
            <h2 className="text-3xl font-normal text-peacock-blue">
              DAVID
              <br />
              CHEN
            </h2>
          </div>

          {/* Team Member 4 */}
          <div className="border-t border-peacock-gold pt-4 pr-4 pb-12">
            <div className="uppercase text-sm mb-2 text-peacock-gold">
              YOUTH PROGRAM
              <br />
              DIRECTOR & INSTRUCTOR
            </div>
            <div className="aspect-[3/4] bg-gray-100 mb-4 relative">
              <img
                src="/placeholder.svg?height=400&width=300"
                alt="Carlos Rodriguez"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2">
                <RaccoonIcon className="text-peacock-gold/80" />
              </div>
            </div>
            <h2 className="text-3xl font-normal text-peacock-gold">
              CARLOS
              <br />
              RODRIGUEZ
            </h2>
          </div>

          {/* Team Member 5 */}
          <div className="border-t border-peacock-teal pt-4 pr-4 pb-12">
            <div className="uppercase text-sm mb-2 text-peacock-teal">
              BHARATANATYAM
              <br />
              GUEST INSTRUCTOR
            </div>
            <div className="aspect-[3/4] bg-gray-100 mb-4 relative">
              <img
                src="/placeholder.svg?height=400&width=300"
                alt="Priya Sharma"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2">
                <RaccoonIcon className="text-peacock-teal/80" />
              </div>
            </div>
            <h2 className="text-3xl font-normal text-peacock-teal">
              PRIYA
              <br />
              SHARMA
            </h2>
          </div>

          {/* Team Member 6 */}
          <div className="border-t border-peacock-purple pt-4 pr-4 pb-12">
            <div className="uppercase text-sm mb-2 text-peacock-purple">
              PRODUCTION
              <br />
              MANAGER
            </div>
            <div className="aspect-[3/4] bg-gray-100 mb-4 relative">
              <img
                src="/placeholder.svg?height=400&width=300"
                alt="Michael Wong"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2">
                <RaccoonIcon className="text-peacock-purple/80" />
              </div>
            </div>
            <h2 className="text-3xl font-normal text-peacock-purple">
              MICHAEL
              <br />
              WONG
            </h2>
          </div>

          {/* Team Member 7 */}
          <div className="border-t border-peacock-blue pt-4 pr-4 pb-12">
            <div className="uppercase text-sm mb-2 text-peacock-blue">
              COMMUNITY OUTREACH
              <br />
              COORDINATOR
            </div>
            <div className="aspect-[3/4] bg-gray-100 mb-4 relative">
              <img src="/placeholder.svg?height=400&width=300" alt="Sarah Kim" className="w-full h-full object-cover" />
              <div className="absolute top-2 right-2">
                <RaccoonIcon className="text-peacock-blue/80" />
              </div>
            </div>
            <h2 className="text-3xl font-normal text-peacock-blue">
              SARAH
              <br />
              KIM
            </h2>
          </div>

          {/* Team Member 8 */}
          <div className="border-t border-peacock-gold pt-4 pr-4 pb-12">
            <div className="uppercase text-sm mb-2 text-peacock-gold">
              MUSIC
              <br />
              DIRECTOR
            </div>
            <div className="aspect-[3/4] bg-gray-100 mb-4 relative">
              <img src="/placeholder.svg?height=400&width=300" alt="Raj Patel" className="w-full h-full object-cover" />
              <div className="absolute top-2 right-2">
                <RaccoonIcon className="text-peacock-gold/80" />
              </div>
            </div>
            <h2 className="text-3xl font-normal text-peacock-gold">
              RAJ
              <br />
              PATEL
            </h2>
          </div>
        </div>

        <div className="mt-8 border-t border-black pt-8 flex justify-between items-center">
          <TorontoSkyline className="h-10 w-40 text-peacock-teal" />
          <div className="text-sm text-right">
            <p>Kala Dance Collective</p>
            <p>Toronto, Canada</p>
          </div>
        </div>
      </main>
    </div>
  )
}
