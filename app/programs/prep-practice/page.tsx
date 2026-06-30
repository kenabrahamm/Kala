import Link from "next/link"
import { MainNav } from "@/app/components/main-nav"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/ui/accordion"

export default function PrepPracticePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1 p-8 md:p-16">
        <div className="mb-8">
          <Link href="/" className="text-sm hover:underline flex items-center">
            <span className="mr-2">←</span> Back to Home
          </Link>
        </div>

        <h1 className="text-5xl font-normal tracking-tight mb-8">PREP + PRACTICE</h1>

        <div className="flex flex-col md:flex-row gap-6 md:gap-12">
          <div className="w-full md:w-3/5">
            <div className="mb-8">
              <h2 className="text-xl font-normal mb-2 text-peacock-purple">PROGRAM DETAILS</h2>
              <p className="text-sm sm:text-base md:text-lg mb-6 space-y-4">
                Prep + Practice is a free training series for intermediate and advanced Bharatanatyam dancers to come together and practice within a community setting in Toronto. Led by artist, teacher, and choreographer Atri Nundy, the program returns for its third year with a continued emphasis on technical foundations, stamina, and safe-dance practices.
                <br/><br/>
                Open to dancers from all banis, the sessions move through <span className="font-bold">Prep</span>: which consists of comprehensive warm-ups and form-focused exercises, and <span className="font-bold">Practice</span>: which focuses on exploratory adavu work and jati/sequence building.
                <br/><br/>
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-normal text-peacock-teal mb-4">SCHEDULE</h2>
              <Accordion type="multiple" className="w-full" defaultValue={["august-2026", "september-2026"]}>
                <AccordionItem value="august-2026" className="border border-peacock-teal">
                  <AccordionTrigger className="px-4 py-4 text-left font-bold text-peacock-teal hover:no-underline">
                    AUGUST 2026
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <ul className="space-y-2">
                      <li><span className="font-bold">Sat Aug 8</span> | 2:30 PM @ Collective Space (101 Florence St)</li>
                      <li><span className="font-bold">Sun Aug 16</span> | 5 PM @ The Citadel (304 Parliament St)</li>
                      <li><span className="font-bold">Sun Aug 23</span> | 5 PM @ The Citadel (304 Parliament St)</li>
                    </ul>
                    <div className="mt-4">
                      <Link
                        href="https://forms.gle/sfCxzo2p4wcJGvDaA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block border border-peacock-teal bg-peacock-teal text-white px-6 py-2 hover:bg-white hover:text-peacock-teal transition-colors text-sm"
                      >
                        Register
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="september-2026" className="border border-peacock-teal">
                  <AccordionTrigger className="px-4 py-4 text-left font-bold text-peacock-teal hover:no-underline">
                    SEPTEMBER 2026
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <ul className="space-y-2">
                      <li><span className="font-bold">Sun Sept 6</span> | 5 PM @ The Citadel (304 Parliament St)</li>
                      <li><span className="font-bold">Sun Sept 13</span> | 5 PM @ The Fifth (366 Adelaide St E)</li>
                      <li><span className="font-bold">Sun Sept 20</span> | 5 PM @ The Citadel (304 Parliament St)</li>
                    </ul>
                    <div className="mt-4">
                      <Link
                        href="https://forms.gle/afsgGqpRxRxhhXm88"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block border border-peacock-teal bg-peacock-teal text-white px-6 py-2 hover:bg-white hover:text-peacock-teal transition-colors text-sm"
                      >
                        Register
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="october-2026" className="border border-peacock-teal">
                  <AccordionTrigger className="px-4 py-4 text-left font-bold text-peacock-teal hover:no-underline">
                    OCTOBER 2026
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <ul className="space-y-2">
                      <li><span className="font-bold">Sat Oct 10</span> | 5 PM @ The Citadel (304 Parliament St)</li>
                      <li><span className="font-bold">Sun Oct 25</span> | 5 PM @ The Citadel (304 Parliament St)</li>
                      <li><span className="font-bold">Sat Oct 31</span> | 4 PM @ The Citadel (304 Parliament St)</li>
                    </ul>
                    <div className="mt-4">
                      <Link
                        href="https://forms.gle/1uNVyjJ6EQUFX6fd7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block border border-peacock-teal bg-peacock-teal text-white px-6 py-2 hover:bg-white hover:text-peacock-teal transition-colors text-sm"
                      >
                        Register
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="november-2026" className="border border-peacock-teal">
                  <AccordionTrigger className="px-4 py-4 text-left font-bold text-peacock-teal hover:no-underline">
                    NOVEMBER 2026
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <ul className="space-y-2">
                      <li><span className="font-bold">Sat Nov 15</span> | 5 PM @ The Citadel (304 Parliament St)</li>
                      <li><span className="font-bold">Sat Nov 21</span> | 5 PM @ The Citadel (304 Parliament St)</li>
                      <li><span className="font-bold">Sun Nov 22</span> | 5 PM @ The Citadel (304 Parliament St)</li>
                    </ul>
                    <div className="mt-4">
                      <Link
                        href="https://forms.gle/FEeDkyHkbEHKytBA9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block border border-peacock-teal bg-peacock-teal text-white px-6 py-2 hover:bg-white hover:text-peacock-teal transition-colors text-sm"
                      >
                        Register
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
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
          </div>

          <div className="w-full md:w-2/5">
            <img
              src="/PP2026.png"
              alt="Prep + Practice promotional poster, August through November 2026"
              className="w-full h-auto"
            />
          </div>
        </div>
      </main>
    </div>
  )
}
