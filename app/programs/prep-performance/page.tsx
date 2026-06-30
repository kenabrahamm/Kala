import Link from "next/link"
import { MainNav } from "@/app/components/main-nav"

export default function PrepPerformancePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1 p-8 md:p-16">
        <div className="mb-8">
          <Link href="/programs" className="text-sm hover:underline flex items-center">
            <span className="mr-2">←</span> Back to Programs
          </Link>
        </div>

        <h1 className="text-5xl font-normal tracking-tight mb-8">PREP + PERFORMANCE</h1>

        <div className="flex flex-col md:flex-row gap-6 md:gap-12">
          <div className="w-full md:w-3/5">
            <div className="mb-8">
              <h2 className="text-xl font-normal mb-2 text-peacock-purple">PROGRAM DETAILS</h2>
              <p className="text-sm sm:text-base md:text-lg mb-6 space-y-4">
                Prep + Performance is a high-intensity workshop series designed for advanced Bharatanatyam practitioners. While our Prep + Practice series focuses on foundational stamina and technique, this program shifts the lens towards understanding performance for an audience. Over a total of 14 hours, two selected cohorts will learn original choreography by Atri Nundy, to train and understand the nuances of ensemble performance.
                <br/><br/>
                The program explores how we dance together, how we navigate choreography, and how we negotiate space and is an examination of what being watched can offer us as dancers; individually and as a collective. Participants will be challenged to step into unfamiliar movement territory, adopting a specific choreographer&apos;s method to refine their spatial awareness, synchronization, and expressivity in relation to other dancers. The program culminates in an informal public showing.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-normal mb-4 text-peacock-gold">ELIGIBILITY</h2>
              <ul className="text-sm sm:text-base md:text-lg space-y-2 list-disc pl-5">
                <li>A minimum of 10 years of formal Bharatanatyam training.</li>
                <li>Performance experience within the last 5–8 years.</li>
                <li>The ability to commit to at least 10-hours in the 14-hour schedule</li>
              </ul>
            </div>

            <div className="mb-8">
              <p className="text-sm sm:text-base md:text-lg font-bold text-peacock-blue">
                APPLICATIONS ARE NOW CLOSED &gt; STAY TUNED FOR OUR NEXT ITERATION
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-normal mb-4 text-peacock-teal">2026 COHORT</h2>
              <p className="text-sm sm:text-base md:text-lg">
                Jainu Ajit, Krithika Iyer, Grihalakshmi Soundarapandian, Arun Sreekumar, Maharshee Karia, Anisha Manyal, Srushti Rajgopal, Pari Rajagopalan, Kiru Ratnasingam
              </p>
            </div>
          </div>

          <div className="w-full md:w-2/5">
            <img
              src="/PrepPerformance.png"
              alt="Prep + Performance Showcase promotional poster, May 9 2026 at The Citadel"
              className="w-full h-auto"
            />
          </div>
        </div>
      </main>
    </div>
  )
}
