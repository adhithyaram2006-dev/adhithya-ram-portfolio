import React from 'react';
import { PERSONAL_INFO } from '../data/portfolio';
import { Code2, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#050505] border-t border-[#262626] py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-[#262626]">
          
          <div className="md:col-span-6 flex flex-col space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-[#0D0D0D] border border-[#262626] flex items-center justify-center text-[#FF3333]">
                <Code2 className="w-4 h-4" />
              </div>
              <span className="font-bold tracking-wider text-[#F5F5F5]">{PERSONAL_INFO.name}</span>
            </div>
            <p className="text-sm text-[#A3A3A3] max-w-sm font-light">
              {PERSONAL_INFO.degree} student at {PERSONAL_INFO.college}, {PERSONAL_INFO.location}. Building systems and learning continuously.
            </p>
          </div>

          <div className="md:col-span-6 flex flex-col sm:flex-row justify-between gap-8">
            <div>
              <span className="font-mono text-xs text-[#FF3333] tracking-widest block mb-4">NAVIGATION</span>
              <ul className="space-y-2">
                {['WORK', 'ABOUT', 'SKILLS', 'JOURNEY', 'CONTACT'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="font-mono text-xs text-[#A3A3A3] hover:text-[#FF3333] transition-colors cursor-pointer"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="font-mono text-xs text-[#FF3333] tracking-widest block mb-4">CONNECT</span>
              <ul className="space-y-2 font-mono text-xs">
                <li><a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-[#A3A3A3] hover:text-[#FF3333]">GitHub</a></li>
                <li><a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#A3A3A3] hover:text-[#FF3333]">LinkedIn</a></li>
                <li><a href={`mailto:${PERSONAL_INFO.email}`} className="text-[#A3A3A3] hover:text-[#FF3333]">Email</a></li>
              </ul>
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#737373] font-mono">
          <p>© 2026 {PERSONAL_INFO.name}. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="mt-4 sm:mt-0 flex items-center space-x-2 text-[#A3A3A3] hover:text-[#FF3333] transition-colors bg-[#0D0D0D] px-4 py-2 rounded-lg border border-[#262626] cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
