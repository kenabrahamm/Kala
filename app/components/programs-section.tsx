export function ProgramsSection() {
  return (
    <section id="programs" className="w-full py-24 lg:py-32 bg-teal-900 text-white">
      <div className="container px-4 md:px-6">
        <h2 className="text-5xl font-bold tracking-tight mb-16">Our Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Contemporary</h3>
            <p className="text-teal-100">
              Explore fluid movements and creative expression through contemporary dance techniques.
            </p>
            <div className="pt-4">
              <a href="#" className="text-white hover:text-teal-200 transition-colors inline-flex items-center">
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1 h-4 w-4"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Classical Indian</h3>
            <p className="text-teal-100">
              Learn the rich traditions and precise techniques of classical Indian dance forms.
            </p>
            <div className="pt-4">
              <a href="#" className="text-white hover:text-teal-200 transition-colors inline-flex items-center">
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1 h-4 w-4"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Youth Program</h3>
            <p className="text-teal-100">
              Nurture creativity and build confidence through our specialized youth dance programs.
            </p>
            <div className="pt-4">
              <a href="#" className="text-white hover:text-teal-200 transition-colors inline-flex items-center">
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1 h-4 w-4"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
