import Link from "next/link"
import { MainNav } from "@/app/components/main-nav"
import { TorontoSkyline } from "@/app/components/toronto-skyline"
import { Button } from "@/app/components/ui/button"
import { Separator } from "@/app/components/ui/separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/ui/accordion"

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
              <h2 className="text-xl font-normal text-peacock-teal mb-4">SCHEDULE</h2>
              <Accordion type="multiple" className="w-full">
                <AccordionItem value="july-2025" className="border border-peacock-teal">
                  <AccordionTrigger className="px-4 py-4 text-left font-bold text-peacock-teal hover:no-underline">
                    JULY 2025 (5PM-7PM)
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <ul className="space-y-2">
                      <li><span className="font-bold">Sunday, July 6, 2025</span> at The Citadel: Ross Centre for Dance</li>
                      <li><span className="font-bold">Sunday, July 13, 2025</span> at The Citadel: Ross Centre for Dance</li>
                      <li><span className="font-bold">Saturday, July 26, 2025</span> at The Citadel: Ross Centre for Dance</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="august-2025" className="border border-peacock-teal">
                  <AccordionTrigger className="px-4 py-4 text-left font-bold text-peacock-teal hover:no-underline">
                    AUGUST 2025 (5PM-7PM)
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <ul className="space-y-2">
                      <li><span className="font-bold">Sunday, August 10, 2025</span> at The Fifth Dance (366 Adelaide St E, Unit 120)</li>
                      <li><span className="font-bold">Sunday, August 17, 2025</span> at The Citadel (304 Parliament St)</li>
                      <li><span className="font-bold">Sunday, August 24, 2025</span> at The Theatre Centre - Deep End Week (1115 Queen St W)</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                    <AccordionItem value="september-2025" className="border border-peacock-teal" defaultValue="september-2025">
                      <AccordionTrigger className="px-4 py-4 text-left font-bold text-peacock-teal hover:no-underline">
                        SEPTEMBER 2025 (5PM-7PM)
                      </AccordionTrigger>
                      <AccordionContent className="px-4 pb-4">
                        <ul className="space-y-2">
                          <li><span className="font-bold">Sunday, September 7, 2025</span> at The Citadel: Ross Centre for Dance</li>
                          <li><span className="font-bold">Sunday, September 14, 2025</span> at The Citadel: Ross Centre for Dance</li>
                          <li><span className="font-bold">Sunday, September 21, 2025</span> at The Citadel: Ross Centre for Dance</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="october-2025" className="border border-peacock-teal" defaultValue="october-2025">
                      <AccordionTrigger className="px-4 py-4 text-left font-bold text-peacock-teal hover:no-underline">
                        OCTOBER 2025 (5PM-7PM)
                      </AccordionTrigger>
                      <AccordionContent className="px-4 pb-4">
                        <ul className="space-y-2">
                          <li><span className="font-bold">Sunday, October 5, 2025</span> at The Citadel: Ross Centre for Dance</li>
                          <li><span className="font-bold">Sunday, October 19, 2025</span> at The Citadel: Ross Centre for Dance</li>
                          <li><span className="font-bold">Sunday, October 26, 2025</span> at The Citadel: Ross Centre for Dance</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
              </Accordion>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-normal mb-2 text-peacock-blue">LOCATION</h2>
              <p className="text-sm md:text-base">
                
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
