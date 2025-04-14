import { MainNav } from "@/components/main-nav"
import { TorontoSkyline } from "@/components/toronto-skyline"
import { RaccoonIcon } from "@/components/raccoon-icon"
import Image from "next/image"
import Link from "next/link"
import { performances } from "@/app/data/performances"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row h-[calc(100vh-53px)]">
          <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col">
            <div className="flex-grow">
              <h1 className="text-[8rem] leading-[0.9] font-normal tracking-tight">
                Kala
                <br />
                Collective
              </h1>
            </div>
            <div className="mt-auto max-w-2xl">
              <p className="text-lg">
              Our mission is to preserve and promote the rich tradition of Bharatanatyam, ensuring its vitality and relevance in contemporary diasporic contexts. We strive to support and celebrate the cultural torchbearers who keep this art form alive, while fostering innovation, inclusivity, and dialogue within the broader artistic and cultural landscapes.
              </p>
              <div className="mt-6 flex items-center text-peacock-teal">
                <span className="mr-2">Toronto, Canada</span>
                {/* <TorontoSkyline className="h-6 w-24" /> */}
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative">
            <Image
              src="/placeholder.svg?height=1000&width=800"
              alt="Dancer performing"
              width={800}
              height={1000}
              className="w-full h-full object-cover"
              priority
            />
            <div className="absolute top-4 right-4">
              {/* <RaccoonIcon className="text-peacock-gold" /> */}
            </div>
          </div>
        </section>

        {/* Prep + Practice Section */}
        <section className="p-8 md:p-16 border-t border-black">
          <h2 className="text-5xl font-normal tracking-tight mb-8 text-peacock-orange">PREP + PRACTICE</h2>

          <div className="flex flex-col md:flex-row gap-12">
            <div className="w-full md:w-2/3">
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

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="border-t border-peacock-teal pt-4">
                  <h3 className="text-lg font-bold mb-2 text-peacock-teal">Schedule</h3>
                  <p>
                    Mondays 6:30 PM (Beginner)
                    <br />
                    Wednesdays 6:30 PM (Beginner)
                    <br />
                    Saturdays 10:00 AM (Beginner)
                  </p>
                </div>
                <div className="border-t border-peacock-purple pt-4">
                  <h3 className="text-lg font-bold mb-2 text-peacock-purple">Location</h3>
                  <p>
                    Kala Studio
                    <br />
                    123 Dance Street
                    <br />
                    Toronto, ON
                  </p>
                </div>
                <div className="border-t border-peacock-blue pt-4">
                  <h3 className="text-lg font-bold mb-2 text-peacock-blue">Cost</h3>
                  <p>
                    Drop-in: Free!
                
                  </p>
                </div>
              </div>

              <Link
                href="/programs/prep-practice"
                className="inline-block border border-peacock-purple bg-peacock-purple text-white px-8 py-3 hover:bg-white hover:text-peacock-purple transition-colors"
              >
                Learn More
              </Link>
            </div>
            <div className="w-full md:w-1/3">
              <div className="relative">
                <img
                  src="/placeholder.svg?height=400&width=300"
                  alt="Prep + Practice class"
                  className="w-full aspect-[3/4] object-cover"
                />
                <div className="absolute bottom-4 right-4">
                  <RaccoonIcon className="text-peacock-gold" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Performances Grid Section */}
        <section className="p-8 md:p-16 border-t border-black">
          <h2 className="text-5xl font-normal tracking-tight mb-12 text-peacock-blue">PERFORMANCES</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {performances.slice(0, 2).map((performance) => {
              const bgColor = performance.color === 'peacock-teal' ? 'bg-peacock-teal' : 
                             performance.color === 'peacock-purple' ? 'bg-peacock-purple' :
                             performance.color === 'peacock-blue' ? 'bg-peacock-blue' : 'bg-peacock-gold';
              
              const textColor = performance.color === 'peacock-teal' ? 'text-peacock-teal' : 
                              performance.color === 'peacock-purple' ? 'text-peacock-purple' :
                              performance.color === 'peacock-blue' ? 'text-peacock-blue' : 'text-peacock-gold';

              return (
                <div key={performance.title}>
                  <div className="relative">
                    <img
                      src={performance.image}
                      alt={performance.title}
                      className="w-full aspect-video object-cover mb-4"
                    />
                    <div className={`absolute top-4 left-4 ${bgColor} text-white px-3 py-1`}>
                      {performance.monthYear}
                    </div>
                  </div>
                  <h3 className={`text-xl uppercase ${textColor}`}>{performance.title}</h3>
                  <p className="text-sm">{performance.date}, {performance.venue}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-8">
            <Link
              href="/performances"
              className="inline-block border border-peacock-blue bg-peacock-blue text-white px-8 py-3 hover:bg-white hover:text-peacock-blue transition-colors"
            >
              View All Performances
            </Link>
          </div>
        </section>

        {/* Team Preview Section */}
        <section className="p-8 md:p-16 border-t border-black">
          <h2 className="text-5xl font-normal tracking-tight mb-12 text-peacock-teal">TEAM</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="relative">
                <img
                  src="/placeholder.svg?height=400&width=300"
                  alt="Maya Patel"
                  className="w-full aspect-[3/4] object-cover mb-4"
                />
                <div className="absolute bottom-4 right-4 bg-peacock-teal/80 text-white p-1 rounded-full">
                  <RaccoonIcon className="h-6 w-6" />
                </div>
              </div>
              <h3 className="text-xl font-normal text-peacock-teal">MAYA PATEL</h3>
              <p className="text-sm">FOUNDER & ARTISTIC DIRECTOR</p>
            </div>
            <div>
              <img
                src="/placeholder.svg?height=400&width=300"
                alt="Aisha Johnson"
                className="w-full aspect-[3/4] object-cover mb-4 border-t-4 border-peacock-purple"
              />
              <h3 className="text-xl font-normal text-peacock-purple">AISHA JOHNSON</h3>
              <p className="text-sm">LEAD CHOREOGRAPHER</p>
            </div>
            <div>
              <img
                src="/placeholder.svg?height=400&width=300"
                alt="David Chen"
                className="w-full aspect-[3/4] object-cover mb-4 border-t-4 border-peacock-blue"
              />
              <h3 className="text-xl font-normal text-peacock-blue">DAVID CHEN</h3>
              <p className="text-sm">CHOREOGRAPHER & INSTRUCTOR</p>
            </div>
            <div>
              <img
                src="/placeholder.svg?height=400&width=300"
                alt="Carlos Rodriguez"
                className="w-full aspect-[3/4] object-cover mb-4 border-t-4 border-peacock-gold"
              />
              <h3 className="text-xl font-normal text-peacock-gold">CARLOS RODRIGUEZ</h3>
              <p className="text-sm">YOUTH PROGRAM DIRECTOR</p>
            </div>
          </div>

          <div className="mt-8 flex items-center">
            <Link
              href="/about"
              className="inline-block border border-peacock-teal bg-peacock-teal text-white px-8 py-3 hover:bg-white hover:text-peacock-teal transition-colors mr-4"
            >
              Meet Our Team
            </Link>
            <TorontoSkyline className="h-8 w-32 text-peacock-gold" />
          </div>
        </section>

        {/* Toronto Footer */}
        <div className="border-t border-black py-4 px-8 flex justify-between items-center bg-gradient-to-r from-peacock-teal/10 via-peacock-purple/10 to-peacock-blue/10">
          <div className="flex items-center">
            <RaccoonIcon className="text-peacock-gold mr-2" />
            <span>Toronto, Canada</span>
          </div>
          <TorontoSkyline className="h-6 w-24 text-peacock-blue" />
        </div>
      </main>
    </div>
  )
}
