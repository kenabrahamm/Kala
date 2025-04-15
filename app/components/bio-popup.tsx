'use client'

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useRef, useEffect, useState } from 'react'

interface BioPopupProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  bio: string;
  color: string;
}

export function BioPopup({ isOpen, onClose, name, bio, color }: BioPopupProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number>(0);

  useEffect(() => {
    if (contentRef.current && isOpen) {
      // Get the content height + some padding
      const height = contentRef.current.scrollHeight + 100; // 100px for header and padding
      // Limit to 90vh on mobile, 85vh on desktop
      const maxHeight = window.innerWidth >= 640 ? window.innerHeight * 0.85 : window.innerHeight * 0.9;
      setContentHeight(Math.min(height, maxHeight));
    }
  }, [isOpen, bio]);

  return (
    <Sheet open={isOpen} onOpenChange={onClose} modal={true}>
      <SheetContent 
        side="bottom" 
        className="rounded-t-[20px] overflow-hidden"
        style={{ height: contentHeight ? `${contentHeight}px` : 'auto' }}
      >
        <SheetHeader className="mb-4">
          <SheetTitle className={`text-xl sm:text-2xl font-normal text-${color}`}>
            {name}
          </SheetTitle>
        </SheetHeader>
        <ScrollArea className="h-[calc(100%-80px)]">
          <div 
            ref={contentRef}
            className="text-gray-700 leading-relaxed text-base sm:text-lg space-y-4 pr-4"
          >
            {bio.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
} 