import { RaccoonIcon } from "@/app/components/raccoon-icon"

const socialLinks = [
  { name: 'Instagram', url: 'https://www.instagram.com/kaladancecollective' },

  { name: 'Contact', url: 'mailto:kaladancecollective@gmail.com' }
]

export function Footer() {
  return (
    <footer className="border-t border-black bg-black text-white p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex items-center gap-4">
            
            <span>Toronto, Canada</span>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target={link.name === 'Contact' ? undefined : "_blank"}
                rel={link.name === 'Contact' ? undefined : "noopener noreferrer"}
                className="hover:text-peacock-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/20">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} Kala Dance Collective. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 