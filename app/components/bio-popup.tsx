'use client'

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/app/components/ui/sheet"

interface BioPopupProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  bio: string;
  color: string;
}

export function BioPopup({ isOpen, onClose, name, bio, color }: BioPopupProps) {
  return (
    <Sheet open={isOpen} onOpenChange={onClose} modal={true}>
      <SheetContent 
        side="bottom" 
        className="rounded-t-[20px] p-0 h-[60vh] flex flex-col"
      >
        <SheetHeader className="px-6 py-4 border-b shrink-0 bg-white">
          <SheetTitle className={`text-xl sm:text-2xl font-normal text-${color}`}>
            {name}
          </SheetTitle>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto webkit-overflow-scrolling-touch">
          <div className="px-6 py-4">
            <div className="text-gray-700 leading-relaxed text-base sm:text-lg space-y-3">
              {bio.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
} 