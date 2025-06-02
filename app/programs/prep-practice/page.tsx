import Link from "next/link"
import { MainNav } from "@/app/components/main-nav"
import { TorontoSkyline } from "@/app/components/toronto-skyline"

export default function PrepPracticePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col">
          <div className="mb-8">
            <Link href="/" className="text-sm hover:underline flex items-center">
              <span className="mr-2">←</span> Back to Home
            </Link>
          </div>
          <div className="flex-grow">
            <div className="flex items-center mb-8">
              <h1 className="text-5xl font-normal tracking-tight">PREP + PRACTICE</h1>
              
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-normal mb-2 text-peacock-purple">PROGRAM DETAILS</h2>
              <p className="text-sm sm:text-base md:text-lg mb-6 space-y-4">
                Prep + Practice is a free program designed for intermediate and advanced Bharatanatyam dancers in Toronto. Led by artist, teacher, and choreographer Atri Nundy. Building on last year's program, Prep + Practice returns with a continued focus on technical foundations, stamina, and safe-dance practices. Through comprehensive warm-ups, form-focused exercises, and exploratory adavu work, dancers will deepen their understanding of Bharatanatyam's grammar and movement principles.
                <br/><br/>
                Open to dancers from all banis, this training series invites participants into a supportive and community-oriented space where they can refine their form with precision and care. Hosted at The Citadel: Ross Centre for Dance, Prep + Practice aims to cultivate a dedicated environment where dancers can push their boundaries, connect with peers, and sustain their artistic journeys through disciplined, expressive practice.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-normal mb-2 text-peacock-teal">SCHEDULE</h2>
              <div className="border-t border-peacock-teal">
                <div className="py-4 border-b border-peacock-teal">
                  <p className="text-sm md:text-base">
                    JULY 2025, all sessions 5-7 PM
                    <ul className="mt-2">
                      <li>Sunday, July 6, 2025</li>
                      <li>Sunday, July 13, 2025</li>
                      <li>Saturday, July 26, 2025</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-normal mb-2 text-peacock-blue">LOCATION</h2>
              <p>
                The Citadel: Ross Centre for Dance
                <br />
                304 Parliament St, Toronto
              </p>
              <div className="mt-2">
                
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-normal mb-2 text-peacock-gold">COST</h2>
              <div className="border-t border-peacock-gold">
                <div className="flex justify-between py-4 border-b border-peacock-gold">
                  <div>Drop-in</div>
                  <div>Free or PWYC</div>
                </div>
           
              </div>
            </div>

            <div>
              <a
                href="https://forms.gle/MNG3CfVmit7vHepe8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-peacock-purple bg-peacock-purple text-white px-8 py-3 hover:bg-white hover:text-peacock-purple transition-colors"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 relative">
          <img
            src="/PP2025.png"
            alt="Prep + Practice dance class"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-8 right-8 bg-white/80 p-2 rounded-full">
            
          </div>
        </div>
      </main>
    </div>
  )
}
