import { MainNav } from "@/app/components/main-nav"
import { TorontoSkyline } from "@/app/components/toronto-skyline"
import { TeamMemberCard } from "@/app/components/team-member-card"
import { AboutContent } from "@/app/components/about-content"
import { teamMembers } from "@/app/data/team"
import { Footer } from "@/app/components/footer"

const aboutContent = [
  "Kala Dance Collective is a not-for-profit arts organization creating frameworks of support for artists working within or in dialogue with South Asian classical practices. Our projects move fluidly between creation and performance, play and research, training and community-building.",
  "Rooted in Bharatanatyam, our choreographic work centers on exploration and experimentation, excavating new pathways of expression within the form. We aim to tell stories that reflect our Canadian diasporic experiences while honoring our heritage and the rich history and lineages of Indian Classical art forms. Our collective shared the work Nirguna as part of Citadel + Compagnie's Night Shift in 2019, and developed the work further in 2021 through Aeris Korper's PROSPECTS presentation series. Our most recent work, Kula Devi, developed with the support of Canada Council for the Arts (CCA) funding, was presented as part of Citadel Dance Exchange (formerly Citadel Spring Mix) in 2023. Since then, the work has toured to cities across Ontario through wind in the leaves collective's IBPOC Network tour in 2024 and 2025.",
  "Through our work, we ask how Bharatanatyam shapes our Indo-Canadian identities and how these identities situate within an evolving contemporary arts landscape. We are passionate about fostering an inclusive and vibrant space for South Asian diasporic bodies to train, create, and perform.",
  "This vision informs our ongoing initiatives, including Prep + Practice, a free training series for intermediate and advanced Bharatanatyam dancers focused on strengthening technique, form, and community through shared practice. We also host Ankura, an improvisation workshop grounded in Indian classical art forms and open to artists from all backgrounds; inviting collaboration between dance and music across cultures and practices.",
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
