import Link from "next/link"
import { MainNav } from "@/components/main-nav"
import { TorontoSkyline } from "@/components/toronto-skyline"
import { RaccoonIcon } from "@/components/raccoon-icon"

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
              <p className="text-lg mb-6">
              Join us for "Prep+Practice," a unique initiative offered by Kala Dance Collective, designed to deepen your understanding and practice of Bharatanatyam. This program, led by artist, teacher, and choreographer Atri Nundy, comprises intensive classes focusing on the preparation for the practice of Bharatanatyam, with an emphasis on the exploration of its grammar and technique.
              <br/>
              <br/>
              "Prep+Practice" is an opportunity for intermediate and advanced Bharatanatyam dancers; from all banis, to come together, learn, and grow in a supportive and community-oriented environment.
              <br/>
              <br/>
              The classes aim to build a strong foundation through comprehensive warm-ups, form-focused exercises, and an exploratory adavu practice. 
              Kala Dance Collective aims to foster a supportive community for Bharatantyam dancers to practice and flourish in Toronto.
              Full schedule and registrations opening soon. 

              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-normal mb-2 text-peacock-teal">SCHEDULE</h2>
              <div className="border-t border-peacock-teal">
                <div className="flex justify-between py-4 border-b border-peacock-teal">
                  <div>Mondays</div>
                  <div>6:30 PM - 8:00 PM</div>
                  <div>Beginner</div>
                </div>
                <div className="flex justify-between py-4 border-b border-peacock-teal">
                  <div>Wednesdays</div>
                  <div>6:30 PM - 8:00 PM</div>
                  <div>Beginner</div>
                </div>
                <div className="flex justify-between py-4 border-b border-peacock-teal">
                  <div>Saturdays</div>
                  <div>10:00 AM - 12:00 PM</div>
                  <div>Beginner</div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-normal mb-2 text-peacock-blue">LOCATION</h2>
              <p>
                Kala Studio
                <br />
                123 Dance Street
                <br />
                Toronto, ON M5V 2K6
              </p>
              <div className="mt-2">
                
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-normal mb-2 text-peacock-gold">COST</h2>
              <div className="border-t border-peacock-gold">
                <div className="flex justify-between py-4 border-b border-peacock-gold">
                  <div>Drop-in</div>
                  <div>Free! </div>
                </div>
           
              </div>
            </div>

            <div>
              <a
                href="https://forms.google.com"
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
            src="/space.jpg"
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
