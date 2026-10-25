import React, { useState, useEffect } from 'react';
import { Menu, Terminal, Code2 } from 'lucide-react';
import { MobileMenu } from './MobileMenu';
import { PERSONAL_INFO } from '../data/portfolio';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#050505]/90 backdrop-blur-md border-b border-[#262626] py-4 shadow-xl shadow-black/40' 
          : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo / Brand */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="flex items-center space-x-3 group text-left cursor-pointer"
          >
            <div className="w-9 h-9 rounded-lg bg-[#0D0D0D] border border-[#262626] flex items-center justify-center text-[#FF3333] group-hover:border-[#FF3333] transition-colors">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold tracking-wider text-[#F5F5F5] block text-sm">ADHITHYA RAM</span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {['WORK', 'ABOUT', 'SKILLS', 'JOURNEY', 'CONTACT'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="font-mono text-xs text-[#A3A3A3] hover:text-[#FF3333] transition-colors tracking-widest relative py-1 group cursor-pointer"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#FF3333] transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Action button */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-4 py-2 rounded-lg bg-[#FF3333] text-[#050505] font-semibold text-xs tracking-wider hover:bg-[#FF3333]/90 transition-colors shadow-lg shadow-[#FF3333]/20 cursor-pointer"
            >
              GET IN TOUCH
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 md:hidden text-[#F5F5F5] hover:text-[#FF3333] bg-[#0D0D0D] border border-[#262626] rounded-lg transition-colors cursor-pointer"
            aria-label="Open mobile menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onNavigate={scrollToSection}
      />
    </>
  );
}
