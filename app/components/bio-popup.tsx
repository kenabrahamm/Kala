'use client'

import { useState, useEffect } from 'react'

interface BioPopupProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  bio: string;
  color: string;
}

export function BioPopup({ isOpen, onClose, name, bio, color }: BioPopupProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white max-w-2xl w-full rounded-lg shadow-xl relative">
        <button
          onClick={onClose}
          className={`absolute -top-4 -right-4 w-8 h-8 rounded-full bg-${color} text-white flex items-center justify-center hover:bg-black transition-colors`}
        >
          ×
        </button>
        <div className="p-6">
          <h3 className={`text-2xl font-normal mb-4 text-${color}`}>{name}</h3>
          <p className="text-gray-700 leading-relaxed">{bio}</p>
        </div>
      </div>
    </div>
  )
} 