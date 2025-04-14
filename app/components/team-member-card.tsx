'use client'

import { useState } from 'react'
import { RaccoonIcon } from "@/components/raccoon-icon"
import { BioPopup } from "@/app/components/bio-popup"
import { type TeamMember } from "@/app/data/team"

interface TeamMemberCardProps {
  member: TeamMember;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { name, role, image, color, bio, type } = member;
  
  const getColorClasses = (color: TeamMember['color']) => ({
    border: `border-${color}`,
    text: `text-${color}`,
    hover: `hover:text-${color}`
  });

  const colors = getColorClasses(color);
  
  return (
    <>
      <button
        onClick={() => setIsPopupOpen(true)}
        className={`w-full text-left group transition-all duration-300 ease-in-out
          hover:-translate-y-1 hover:shadow-lg cursor-pointer`}
      >
        <div className={`border-t ${colors.border} pt-4 pr-4 pb-12 
          transition-colors duration-300 group-hover:bg-gray-50`}>
          <div className={`uppercase text-sm mb-2 ${colors.text}`}>
            {/* {role.department} */}
            <br />
            {role.title}
            {type !== 'core' && (
              <span className="inline-block ml-2 text-xs px-2 py-1 rounded-full bg-gray-100">
                {type}
              </span>
            )}
          </div>
          <div className="aspect-[3/4] bg-gray-100 mb-4 relative overflow-hidden">
            <img
              src={image}
              alt={`${name.first} ${name.last}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-2 right-2">
              {/* <RaccoonIcon className={`${colors.text}/80`} /> */}
            </div>
          </div>
          <div>
            <h2 className={`text-3xl font-normal ${colors.text}`}>
              {name.first}
              <br />
              {name.last}
            </h2>
            <span className={`inline-flex items-center gap-2 mt-2 text-sm 
              opacity-0 group-hover:opacity-100 transition-all duration-300 ${colors.text}`}>
              Read bio 
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </button>

      <BioPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        name={`${name.first} ${name.last}`}
        bio={bio}
        color={color}
      />
    </>
  )
} 