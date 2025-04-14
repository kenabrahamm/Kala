import { MainNav } from "@/components/main-nav"
import { TorontoSkyline } from "@/components/toronto-skyline"
import { TeamMemberCard } from "@/app/components/team-member-card"
import { AboutContent } from "@/app/components/about-content"
import { teamMembers } from "@/app/data/team"
import { Footer } from "@/components/footer"

const aboutContent = [
  "Kala Dance Collective is rooted in Bharatanatyam, with a vision to honor classical technique while pushing the boundaries of tradition. Our work centers around exploration and experimentation, discovering new pathways of expression within the form. We aim to tell stories that reflect our Canadian diasporic experiences, celebrate our heritage, and showcase the richness of South Asian culture through dance.",
  "Founded in 2019, our debut at Citadel + Compagnie's Night Shift featured Nirguna, a piece inspired by the form and formlessness of the deity Shiva, marking the start of our creative journey. In 2021, we remounted Nirguna at Aeris Korper's PROSPECTS program, continuing our exploration. In 2024, we premiered Kula Devi at Citadel + Compagnie's Spring Mix, a work that honors our family deities and ancestral lineage. We performed Kula Devi in March of 2025 as part of the IBPOC Network Tour.",
  "At Kala, we question how Bharatanatyam shapes our Indo-Canadian identities and how these identities fit within an evolving contemporary arts landscape. We are passionate about creating a vibrant, inclusive space for South Asian diasporic bodies to explore and perform diasporic dance. This vision led to the creation of the Prep + Practice program, offering free classes for intermediate and advanced Bharatanatyam dancers. These sessions focus on building a strong foundation through warm-ups, form-focused exercises, and exploratory adavu practice, fostering growth in a community-driven environment."
]

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1 p-8 md:p-16">
        <div className="mb-8 flex items-end">
          <h1 className="text-[8rem] leading-[0.9] font-normal tracking-tight text-peacock-teal">
            TEAM<span className="text-2xl align-top ml-2 text-peacock-gold">{teamMembers.length.toString().padStart(2, '0')}</span>
          </h1>
        </div>
        
        <AboutContent content={aboutContent} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {teamMembers.map((member) => (
            <TeamMemberCard key={`${member.name.first}-${member.name.last}`} member={member} />
          ))}
        </div>

        <div className="mt-8 border-t border-black pt-8 flex justify-between items-center">
          <TorontoSkyline className="h-10 w-40 text-peacock-teal" />
          <div className="text-sm text-right">
            <p>Kala Dance Collective</p>
            <p>Toronto, Canada</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
