import React, { useEffect } from 'react';
import { X, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
}

export function MobileMenu({ isOpen, onClose, onNavigate }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const navLinks = [
    { name: 'WORK', id: 'work' },
    { name: 'ABOUT', id: 'about' },
    { name: 'SKILLS', id: 'skills' },
    { name: 'JOURNEY', id: 'journey' },
    { name: 'CONTACT', id: 'contact' },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-[#050505]/98 backdrop-blur-2xl flex flex-col justify-between p-6 md:hidden animate-fade-in">
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-[#262626] pb-4">
        <span className="font-mono text-xs text-[#FF3333] tracking-widest">[ NAVIGATION_MENU ]</span>
        <button 
          onClick={onClose}
          className="p-2 text-[#F5F5F5] hover:text-[#FF3333] transition-colors rounded-lg bg-[#0D0D0D] border border-[#262626] cursor-pointer"
          aria-label="Close menu"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Nav Links */}
      <div className="flex flex-col space-y-6 my-auto py-8">
        {navLinks.map((link, index) => (
          <button
            key={link.id}
            onClick={() => {
              onNavigate(link.id);
              onClose();
            }}
            className="text-left group flex items-center justify-between py-2 border-b border-[#262626]/40 hover:border-[#FF3333] transition-all cursor-pointer"
          >
            <span className="font-mono text-xs text-[#737373] group-hover:text-[#FF3333]">0{index + 1}</span>
            <span className="text-2xl font-bold tracking-wider text-[#F5F5F5] group-hover:text-[#FF3333] transition-colors">
              {link.name}
            </span>
            <span className="font-mono text-xs text-[#FF3333] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
          </button>
        ))}
      </div>

      {/* Footer Info inside mobile menu */}
      <div className="border-t border-[#262626] pt-6 flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs text-[#A3A3A3]">{PERSONAL_INFO.name}</span>
          <span className="font-mono text-xs text-[#FF3333]">{PERSONAL_INFO.location}</span>
        </div>
        <div className="flex items-center space-x-4 pt-2">
          <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-[#0D0D0D] rounded-lg border border-[#262626] text-[#A3A3A3] hover:text-[#FF3333]">
            <Github className="w-5 h-5" />
          </a>
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-[#0D0D0D] rounded-lg border border-[#262626] text-[#A3A3A3] hover:text-[#FF3333]">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href={`mailto:${PERSONAL_INFO.email}`} className="p-2 bg-[#0D0D0D] rounded-lg border border-[#262626] text-[#A3A3A3] hover:text-[#FF3333]">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
