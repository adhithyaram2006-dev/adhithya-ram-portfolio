import React from 'react';
import { ArrowRight, Github, Linkedin, MapPin, GraduationCap } from 'lucide-react';
import { HeroOrbVisual } from './HeroOrbVisual';
import { PERSONAL_INFO } from '../data/portfolio';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center bg-grid-pattern overflow-hidden">
      {/* Glow background elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#FF3333]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#FF5C5C]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            {/* Eyebrow */}
            <div className="flex items-center space-x-3">
              <span className="font-mono text-xs text-[#FF3333] tracking-widest px-3 py-1 rounded-full bg-[#FF3333]/10 border border-[#FF3333]/20">
                01 — COMPUTER SCIENCE
              </span>
              <span className="h-[1px] w-12 bg-[#262626]" />
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#F5F5F5] leading-[1.1]">
              BUILDING SYSTEMS.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3333] to-[#FF5C5C]">
                SOLVING PROBLEMS.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg md:text-xl text-[#A3A3A3] max-w-2xl font-light leading-relaxed">
              I'm <strong className="text-[#F5F5F5] font-semibold">{PERSONAL_INFO.name}</strong>, a Computer Science & Engineering student exploring software development, cybersecurity, AI/ML and systems.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => scrollToSection('work')}
                className="px-6 py-3.5 rounded-xl bg-[#FF3333] text-[#050505] font-semibold text-sm tracking-wider hover:bg-[#FF3333]/90 transition-all flex items-center space-x-2 shadow-xl shadow-[#FF3333]/20 group cursor-pointer"
              >
                <span>VIEW MY WORK</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('about')}
                className="px-6 py-3.5 rounded-xl bg-[#0D0D0D] border border-[#262626] text-[#F5F5F5] font-medium text-sm tracking-wider hover:border-[#FF3333]/50 transition-all cursor-pointer"
              >
                ABOUT ME
              </button>

              <div className="flex items-center space-x-3 ml-2">
                <a 
                  href={PERSONAL_INFO.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 rounded-xl bg-[#0D0D0D] border border-[#262626] text-[#A3A3A3] hover:text-[#FF3333] hover:border-[#FF3333]/40 transition-all"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href={PERSONAL_INFO.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 rounded-xl bg-[#0D0D0D] border border-[#262626] text-[#A3A3A3] hover:text-[#FF3333] hover:border-[#FF3333]/40 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Hero Metadata */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-[#262626]">
              <div>
                <span className="font-mono text-[10px] text-[#737373] uppercase block mb-1">BASED IN</span>
                <span className="text-sm font-medium text-[#F5F5F5] flex items-center space-x-1">
                  <MapPin className="w-3.5 h-3.5 text-[#FF3333] inline mr-1" />
                  Puducherry, India
                </span>
              </div>
              <div>
                <span className="font-mono text-[10px] text-[#737373] uppercase block mb-1">EDUCATION</span>
                <span className="text-sm font-medium text-[#F5F5F5] flex items-center space-x-1">
                  <GraduationCap className="w-3.5 h-3.5 text-[#FF3333] inline mr-1" />
                  B.Tech CSE
                </span>
              </div>
              <div>
                <span className="font-mono text-[10px] text-[#737373] uppercase block mb-1">STATUS</span>
                <span className="text-sm font-medium text-[#FF3333] flex items-center space-x-1">
                  <span className="w-2 h-2 rounded-full bg-[#FF3333] animate-pulse inline-block mr-1" />
                  Building / Learning
                </span>
              </div>
              <div>
                <span className="font-mono text-[10px] text-[#737373] uppercase block mb-1">FOCUS</span>
                <span className="text-sm font-medium text-[#F5F5F5] truncate block">
                  Web · Security · AI
                </span>
              </div>
            </div>

          </div>

          {/* Right Visualization Column */}
          <div className="lg:col-span-5">
            <HeroOrbVisual />
          </div>

        </div>
      </div>
    </section>
  );
}
