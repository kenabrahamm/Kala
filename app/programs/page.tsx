import { MainNav } from "@/components/main-nav"

export default function ProgramsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1">
        <div className="p-8 md:p-16">
          <div className="mb-16">
            <h1 className="text-[8rem] leading-[0.9] font-normal tracking-tight">Programs</h1>
          </div>

          {/* Programs List */}
          <div className="border-t border-black">
            <div className="flex flex-col md:flex-row justify-between py-6 border-b border-black">
              <div className="text-xl font-normal">PREP + PRACTICE</div>
              <div className="text-right">WEEKLY CLASSES</div>
              <div className="text-right md:w-32">
                <a href="/programs/prep-practice" className="hover:underline">
                  MORE +
                </a>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between py-6 border-b border-black">
              <div className="text-xl font-normal">SUMMER INTENSIVE</div>
              <div className="text-right">WORKSHOP SERIES</div>
              <div className="text-right md:w-32">
                <a href="#" className="hover:underline">
                  MORE +
                </a>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between py-6 border-b border-black">
              <div className="text-xl font-normal">YOUTH DANCE</div>
              <div className="text-right">AGES 7-16</div>
              <div className="text-right md:w-32">
                <a href="#" className="hover:underline">
                  MORE +
                </a>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between py-6 border-b border-black">
              <div className="text-xl font-normal">PROFESSIONAL DEVELOPMENT</div>
              <div className="text-right">ADVANCED TRAINING</div>
              <div className="text-right md:w-32">
                <a href="#" className="hover:underline">
                  MORE +
                </a>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between py-6 border-b border-black">
              <div className="text-xl font-normal">COMMUNITY OUTREACH</div>
              <div className="text-right">FREE PROGRAMS</div>
              <div className="text-right md:w-32">
                <a href="#" className="hover:underline">
                  MORE +
                </a>
              </div>
            </div>
          </div>

          {/* Programs Grid */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Prep + Practice"
                className="w-full aspect-square object-cover mb-4"
              />
              <h3 className="text-xl font-normal">PREP + PRACTICE</h3>
              <p className="text-sm mt-2">Weekly technique classes for all levels</p>
            </div>
            <div>
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Summer Intensive"
                className="w-full aspect-square object-cover mb-4"
              />
              <h3 className="text-xl font-normal">SUMMER INTENSIVE</h3>
              <p className="text-sm mt-2">Immersive workshop series</p>
            </div>
            <div>
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Youth Dance"
                className="w-full aspect-square object-cover mb-4"
              />
              <h3 className="text-xl font-normal">YOUTH DANCE</h3>
              <p className="text-sm mt-2">Creative movement for young dancers</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
