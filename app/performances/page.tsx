import { MainNav } from "@/components/main-nav"
import { TorontoSkyline } from "@/components/toronto-skyline"
import { RaccoonIcon } from "@/components/raccoon-icon"
import { performances } from "@/app/data/performances"
import { Footer } from "@/components/footer"
export default function PerformancesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1 p-8 md:p-16">
        <div className="mb-16 flex items-end">
          <h1 className="text-[8rem] leading-[0.9] font-normal tracking-tight text-peacock-blue">Performances</h1>
          
        </div>

        {performances.map((performance, index) => {
          const borderColor = performance.color === 'peacock-teal' ? 'border-peacock-teal' : 
                            performance.color === 'peacock-purple' ? 'border-peacock-purple' :
                            performance.color === 'peacock-blue' ? 'border-peacock-blue' : 'border-peacock-gold';
          
          const textColor = performance.color === 'peacock-teal' ? 'text-peacock-teal' : 
                          performance.color === 'peacock-purple' ? 'text-peacock-purple' :
                          performance.color === 'peacock-blue' ? 'text-peacock-blue' : 'text-peacock-gold';

          return (
            <div key={performance.title} className={`border-t ${borderColor} py-8`}>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/2">
                  <div className="relative">
                    <img
                      src={performance.image}
                      alt={performance.title}
                      className="w-full aspect-video object-cover"
                    />
                    <div className={`absolute ${index % 2 === 0 ? 'top-4 left-4' : 'bottom-4 right-4 bg-white/80 p-1 rounded-full'}`}>
                      {/* <RaccoonIcon className={`${textColor} ${index % 2 === 1 ? 'h-8 w-8' : ''}`} /> */}
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <div className={`inline-block border ${borderColor} ${textColor} px-4 py-1 mb-4`}>
                    {performance.tag}
                  </div>
                  <h2 className={`text-3xl font-normal mb-2 ${textColor}`}>{performance.title}</h2>
                  <p className="uppercase mb-6">{performance.date}, {performance.venue}</p>
                  {performance.description.map((paragraph, i) => (
                    <p key={i} className="mb-6">{paragraph}</p>
                  ))}
                  {performance.videoUrl && (
                    <div className="flex items-center gap-4">
                      <a
                        href={performance.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-block border ${borderColor} ${textColor} px-8 py-3 hover:bg-${performance.color} hover:text-white transition-colors`}
                      >
                        Watch Trailer
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </main>
      <Footer />
    </div>
  )
}
