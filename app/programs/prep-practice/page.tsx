import Link from "next/link"
import { MainNav } from "@/app/components/main-nav"
import { TorontoSkyline } from "@/app/components/toronto-skyline"
import { Button } from "@/app/components/ui/button"
import { Separator } from "@/app/components/ui/separator"

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
                <br/><br/>
                <span className="block font-semibold text-peacock-blue mt-4">THIS MONTH:</span> We’re thrilled to be collaborating with Nova Dance to offer Prep+Practice (Aug 24th) as part of their Deep End Week programming running at The Theatre Centre from Aug 18-24!
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-normal text-peacock-teal">SCHEDULE</h2>
              <div className="border-t border-peacock-teal">
                <div className="border-b border-peacock-teal">
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
                      <li><span className="font-bold">Sunday, August 24, 2025</span> at The Theatre Centre (Deep End Week Edition)</li>
                    </ul>
                 
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-normal mb-2 text-peacock-blue">LOCATION</h2>
              <p className="text-sm md:text-base">
                For August, see schedule above for locations.<br/>
                July sessions: The Citadel: Ross Centre for Dance, 304 Parliament St, Toronto
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
              <Button className="bg-peacock-purple text-white hover:bg-peacock-blue rounded-none  hover:text-white mr-2"> 
                <Link href="https://forms.gle/MNG3CfVmit7vHepe8" target="_blank" rel="noopener noreferrer">
                  Register for July Sessions
                </Link>
              </Button>
              <Button className="bg-peacock-blue text-white hover:bg-peacock-purple rounded-none  hover:text-white">
                <Link href="https://forms.gle/JbrFvsiBEq6MYibA8" target="_blank" rel="noopener noreferrer">
                  Register for August Sessions
                </Link>
              </Button>
            
              
            
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
