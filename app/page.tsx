import { MainNav } from "@/app/components/main-nav"
import { TorontoSkyline } from "@/app/components/toronto-skyline"
import Image from "next/image"
import Link from "next/link"
import { performances } from "@/app/data/performances"
import { teamMembers } from "@/app/data/team"
import { TeamMemberCard } from "@/app/components/team-member-card"
import { Footer } from "@/app/components/footer"
import { Separator } from "@/ui/separator"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row min-h-[calc(100vh-53px)]">
          <div className="w-full md:w-1/2 p-4 md:p-16 flex flex-col">
            <div className="flex-grow pt-8 md:pt-0">
              <h1 className="text-5xl sm:text-6xl md:text-[8rem] leading-[0.9] font-normal tracking-tight">
                <div className="mb-1 md:mb-2">
                  <Image
                    src="/logo.png"
                    alt="Kala Collective Logo"
                    width={200}
                    height={200}
                    className="w-20 h-20 sm:w-32 sm:h-32 md:w-48 md:h-48 object-contain"
                  />
                </div>
                Kala
                <br />
                Collective
              </h1>
            </div>
            <div className="mt-6 md:mt-auto max-w-2xl">
              <p className="text-sm sm:text-base md:text-lg">
                Our mission is to preserve and promote the rich tradition of Bharatanatyam, ensuring its vitality and relevance in contemporary diasporic contexts. We strive to support and celebrate the cultural torchbearers who keep this art form alive, while fostering innovation, inclusivity, and dialogue within the broader artistic and cultural landscapes.
              </p>
              <div className="mt-4 md:mt-6 flex items-center text-peacock-teal">
                <span className="text-sm md:text-base">Toronto, Canada</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-[40vh] sm:h-[50vh] md:h-auto relative mt-6 md:mt-0">
            <Image
              src="/hero.jpg"
              alt="Dancer performing"
              width={800}
              height={1000}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </section>

        {/* Prep + Practice Section */}
        <section className="p-4 md:p-16 border-t border-black">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight mb-4 md:mb-8 text-peacock-orange">
            PREP + PRACTICE
          </h2>

          <div className="flex flex-col md:flex-row gap-6 md:gap-12">
            <div className="w-full md:w-2/3">
              <p className="text-sm sm:text-base md:text-lg mb-6 space-y-4">
                Prep + Practice is a free program designed for intermediate and advanced Bharatanatyam dancers in Toronto. Led by artist, teacher, and choreographer Atri Nundy. Building on last year’s program, Prep + Practice returns with a continued focus on technical foundations, stamina, and safe-dance practices. Through comprehensive warm-ups, form-focused exercises, and exploratory adavu work, dancers will deepen their understanding of Bharatanatyam’s grammar and movement principles.
                <br/><br/>
                Open to dancers from all banis, this training series invites participants into a supportive and community-oriented space where they can refine their form with precision and care. Hosted at The Citadel: Ross Centre for Dance, Prep + Practice aims to cultivate a dedicated environment where dancers can push their boundaries, connect with peers, and sustain their artistic journeys through disciplined, expressive practice.
                <br/><br/>
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 mb-6 md:mb-8">
                <div className="border-t border-peacock-teal pt-4 sm:col-span-2">
                  <h3 className="text-base md:text-lg font-bold mb-2 text-peacock-teal">Schedule</h3>
                  <p className="text-sm md:text-base">
                    <span className="font-bold mt-6 block">JULY 2025:</span>
                    <ul className="p-4 space-y-2">
                      <li><span className="font-bold">Sunday, July 6, 2025</span> at The Citadel: Ross Centre for Dance</li>
                      <li><span className="font-bold">Sunday, July 13, 2025</span> at The Citadel: Ross Centre for Dance</li>
                      <li><span className="font-bold">Saturday, July 26, 2025</span> at The Citadel: Ross Centre for Dance</li>
                    </ul>
                    <Separator className="my-4" />
                    <span className="font-bold">AUGUST 2025:</span>
                    <ul className="p-4 space-y-2">
                      <li><span className="font-bold">Sunday, August 10, 2025</span> at The Fifth Dance</li>
                      <li><span className="font-bold">Sunday, August 17, 2025</span> at The Citadel: Ross Centre for Dance</li>
                      <li><span className="font-bold">Sunday, August 24, 2025</span> at The Theatre Centre (Deep End Week)</li>
                    </ul>
                 
                  </p>
                </div>
                <div className="border-t border-peacock-blue pt-4">
                  <h3 className="text-base md:text-lg font-bold mb-2 text-peacock-blue">Cost</h3>
                  <p className="text-sm md:text-base">Free or PWYC</p>
                </div>
              </div>

              <Link
                href="/programs/prep-practice"
                className="w-full sm:w-auto inline-block border border-peacock-purple bg-peacock-purple text-white px-6 sm:px-8 py-3 hover:bg-white hover:text-peacock-purple transition-colors text-center text-sm sm:text-base"
              >
                Learn More
              </Link>
            </div>
            <div className="w-full md:w-1/3 mt-6 md:mt-0">
              <div className="relative aspect-[3/4]">
                <img
                  src="/PP2025.png"
                  alt="Prep + Practice class"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Performances Grid Section */}
        <section className="p-4 md:p-16 border-t border-black">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight mb-6 md:mb-12 text-peacock-blue">
            PERFORMANCES
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {performances.slice(0, 2).map((performance) => {
              const bgColor = performance.color === 'peacock-teal' ? 'bg-peacock-teal' : 
                            performance.color === 'peacock-purple' ? 'bg-peacock-purple' :
                            performance.color === 'peacock-blue' ? 'bg-peacock-blue' : 'bg-peacock-gold';
              
              const textColor = performance.color === 'peacock-teal' ? 'text-peacock-teal' : 
                              performance.color === 'peacock-purple' ? 'text-peacock-purple' :
                              performance.color === 'peacock-blue' ? 'text-peacock-blue' : 'text-peacock-gold';

              return (
                <div key={performance.title} className="flex flex-col">
                  <div className="relative">
                    <img
                      src={performance.image}
                      alt={performance.title}
                      className="w-full aspect-[4/5] object-cover mb-3 md:mb-4"
                    />
                    <div className={`absolute top-3 md:top-4 left-3 md:left-4 ${bgColor} text-white px-2 md:px-3 py-1 text-xs md:text-sm`}>
                      {performance.monthYear}
                    </div>
                  </div>
                  <h3 className={`text-base sm:text-lg md:text-xl uppercase ${textColor}`}>{performance.title}</h3>
                  <p className="text-xs md:text-sm mt-1">{performance.date}, {performance.venue}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-6 md:mt-8">
            <Link
              href="/performances"
              className="w-full sm:w-auto inline-block border border-peacock-blue bg-peacock-blue text-white px-6 sm:px-8 py-3 hover:bg-white hover:text-peacock-blue transition-colors text-center text-sm sm:text-base"
            >
              View All Performances
            </Link>
          </div>
        </section>

        {/* Team Preview Section */}
        <section className="p-4 md:p-16 border-t border-black">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight mb-6 md:mb-12 text-peacock-teal">
            TEAM
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {teamMembers
              .slice(0, 4)
              .map((member) => (
                <TeamMemberCard
                  key={`${member.name.first}-${member.name.last}`}
                  member={member}
                />
              ))}
          </div>

          <div className="mt-6 md:mt-8">
            <Link
              href="/about"
              className="w-full sm:w-auto inline-block border border-peacock-teal bg-peacock-teal text-white px-6 sm:px-8 py-3 hover:bg-white hover:text-peacock-teal transition-colors text-center text-sm sm:text-base"
            >
              Meet Our Team
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
