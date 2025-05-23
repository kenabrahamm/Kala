import { MainNav } from "@/app/components/main-nav"
import { TorontoSkyline } from "@/app/components/toronto-skyline"
import { TeamMemberCard } from "@/app/components/team-member-card"
import { AboutContent } from "@/app/components/about-content"
import { teamMembers } from "@/app/data/team"
import { Footer } from "@/app/components/footer"

const aboutContent = [
  "Kala Dance Collective is rooted in Bharatanatyam, with a vision to honor classical technique while pushing the boundaries of tradition. Our work centers around exploration and experimentation, discovering new pathways of expression within the form. We aim to tell stories that reflect our Canadian diasporic experiences, celebrate our heritage, and showcase the richness of South Asian culture through dance.",
  "Founded in 2019, our debut at Citadel + Compagnie's Night Shift featured Nirguna, a piece inspired by the form and formlessness of the deity Shiva, marking the start of our creative journey. In 2021, we remounted Nirguna at Aeris Korper's PROSPECTS program, continuing our exploration. In 2024, we premiered Kula Devi at Citadel + Compagnie's Spring Mix, a work that honors our family deities and ancestral lineage. We performed Kula Devi in March of 2025 as part of the IBPOC Network Tour.",
  "At Kala, we question how Bharatanatyam shapes our Indo-Canadian identities and how these identities fit within an evolving contemporary arts landscape. We are passionate about creating a vibrant, inclusive space for South Asian diasporic bodies to explore and perform diasporic dance. This vision led to the creation of the Prep + Practice program, offering free classes for intermediate and advanced Bharatanatyam dancers. These sessions focus on building a strong foundation through warm-ups, form-focused exercises, and exploratory adavu practice, fostering growth in a community-driven environment."
]

export default function AboutPage() {
  const collaborators = teamMembers.filter(member => member.type === 'collaborator')
  const boardMembers = teamMembers.filter(member => member.type === 'board')

  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1">
        <div className="p-8 md:p-16">
          <div className="mb-8 flex items-end">
            <h1 className="text-6xl md:text-[8rem] leading-[0.9] font-normal tracking-tight text-peacock-teal">
              ABOUT
            </h1>
          </div>
          
          <AboutContent content={aboutContent} />
        </div>

        {/* Collaborators Section */}
        <section className="p-8 md:p-16 border-t border-black">
          <h2 className="text-4xl md:text-5xl font-normal tracking-tight mb-8 md:mb-12 text-peacock-purple">
            COLLABORATORS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {collaborators.map((member) => (
              <TeamMemberCard
                key={`${member.name.first}-${member.name.last}`}
                member={member}
              />
            ))}
          </div>
        </section>

        {/* Board Section */}
        <section className="p-8 md:p-16 border-t border-black">
          <h2 className="text-4xl md:text-5xl font-normal tracking-tight mb-8 md:mb-12 text-peacock-gold">
            BOARD
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {boardMembers.map((member) => (
              <TeamMemberCard
                key={`${member.name.first}-${member.name.last}`}
                member={member}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
