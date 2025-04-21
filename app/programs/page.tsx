import { MainNav } from "@/app/components/main-nav"
import { programs } from "@/app/data/programs"

export default function ProgramsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1">
        <div className="p-4 sm:p-8 md:p-16">
          <div className="mb-8 md:mb-16">
            <h1 className="text-4xl sm:text-6xl md:text-[8rem] leading-[0.9] font-normal tracking-tight">Programs</h1>
          </div>

          {/* Programs List */}
          <div className="border-t border-black">
            {programs.map((program) => {
              const borderColor = program.color === 'peacock-teal' ? 'border-peacock-teal' : 
                                program.color === 'peacock-purple' ? 'border-peacock-purple' :
                                program.color === 'peacock-blue' ? 'border-peacock-blue' : 'border-peacock-gold';
              
              const textColor = program.color === 'peacock-teal' ? 'text-peacock-teal' : 
                              program.color === 'peacock-purple' ? 'text-peacock-purple' :
                              program.color === 'peacock-blue' ? 'text-peacock-blue' : 'text-peacock-gold';

              return (
                <a 
                  key={program.title} 
                  href={program.link}
                  className="block p-4 border-b border-black hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <div className={`text-lg sm:text-xl font-normal ${textColor}`}>{program.title}</div>
                    <div className="text-sm sm:text-base text-left md:text-right mt-1 md:mt-0">{program.subtitle}</div>
                    <div className="text-left md:text-right md:w-32 mt-2 md:mt-0">
                      <span className={`inline-flex items-center gap-1 text-sm sm:text-base hover:underline ${textColor}`}>
                        MORE <span className="text-base">+</span>
                      </span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Programs Grid */}
          {/* <div className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {programs.map((program) => {
              const textColor = program.color === 'peacock-teal' ? 'text-peacock-teal' : 
                              program.color === 'peacock-purple' ? 'text-peacock-purple' :
                              program.color === 'peacock-blue' ? 'text-peacock-blue' : 'text-peacock-gold';

              return (
                <div key={program.title}>
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full aspect-square object-cover mb-3 md:mb-4"
                  />
                  <h3 className={`text-base sm:text-lg md:text-xl font-normal ${textColor}`}>{program.title}</h3>
                  <p className="text-sm mt-2">{program.description}</p>
                </div>
              );
            })}
          </div> */}
        </div>
      </main>
    </div>
  )
}
