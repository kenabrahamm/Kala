import Link from "next/link"
import { MainNav } from "@/app/components/main-nav"

export default function AnkuraPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1 p-8 md:p-16">
        <div className="mb-8">
          <Link href="/programs" className="text-sm hover:underline flex items-center">
            <span className="mr-2">←</span> Back to Programs
          </Link>
        </div>

        <h1 className="text-5xl font-normal tracking-tight mb-8">ANKURA</h1>

        <div className="flex flex-col md:flex-row gap-6 md:gap-12">
          <div className="w-full md:w-3/5">
            <div className="mb-8">
              <h2 className="text-xl font-normal mb-2 text-peacock-purple">PROGRAM DETAILS</h2>
              <p className="text-sm sm:text-base md:text-lg mb-6 space-y-4">
                Ankura is a collaborative workshop series designed to reunite the art forms of music and dance through the practice of improvisation. Inspired by the roots of Indian classical traditions where movement and sound existed in a state of constant, live exchange, creators Nidhi Baadkar and Rachana Joshi seek to rebuild that conversational spirit which often disappears in codified repertoire. The team at Kala Dance Collective have facilitated seven iterations since 2025 with diverse guest artists, like Rumi Jeraj (tap and contemporary dance artist) and Candance Kumar and Chloe Rondeau (Dancer and Musician respectively from Folklorico Filipino).
                <br/><br/>
                Ankura means &ldquo;sprout&rdquo; and that is the stage of creative working the program is interested in. The program is open to artists from all disciplines, experiences and relationships to dance and/or music. Ankura provides a low-stakes &ldquo;sandbox&rdquo; where artists can step away from formal constraints in service of presence and exchange. By utilizing facilitated games and structured play, the series breaks down the hierarchy between &ldquo;performer&rdquo; and &ldquo;accompaniment,&rdquo; allowing artists from varied backgrounds to discover new, holistic ways of working together.
                <br/><br/>
                Stay tuned for our next session!
              </p>
            </div>
          </div>

          <div className="w-full md:w-2/5">
            <img
              src="/Ankura.png"
              alt="Ankura promotional graphic"
              className="w-full h-auto"
            />
          </div>
        </div>
      </main>
    </div>
  )
}
