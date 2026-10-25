import React from 'react';
import { Cpu, Terminal, Shield, ArrowUpRight, Zap } from 'lucide-react';

export function HackathonSection() {
  return (
    <section className="py-24 bg-[#0D0D0D]/40 border-y border-[#262626] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-6">
          <span className="font-mono text-xs text-[#FF3333] tracking-widest px-3 py-1 rounded-full bg-[#FF3333]/10 border border-[#FF3333]/20">
            07 — HACKATHON & PROTOTYPE
          </span>
          <span className="h-[1px] w-24 bg-[#262626]" />
        </div>

        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-[#262626] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF3333]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 flex flex-col space-y-6">
              <div className="flex items-center space-x-3">
                <Zap className="w-5 h-5 text-[#FF3333]" />
                <span className="font-mono text-xs text-[#FF3333]">BUILD UNDER CONSTRAINTS</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F5]">
                AI-Powered Procurement ERP
              </h2>

              <p className="text-base text-[#A3A3A3] leading-relaxed font-light">
                Developed as a high-intensity prototype focusing on intelligent purchasing workflows, supplier information processing, and automated decision support systems under tight time constraints.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#262626]">
                <div>
                  <span className="font-mono text-[10px] text-[#737373] block mb-1">PROJECT TYPE</span>
                  <span className="text-sm font-medium text-[#F5F5F5]">Hackathon Prototype</span>
                </div>
                <div>
                  <span className="font-mono text-[10px] text-[#737373] block mb-1">MY ROLE</span>
                  <span className="text-sm font-medium text-[#F5F5F5]">Developer / Builder</span>
                </div>
                <div>
                  <span className="font-mono text-[10px] text-[#737373] block mb-1">TECH STACK</span>
                  <span className="text-sm font-medium text-[#F5F5F5]">React · Python · AI</span>
                </div>
                <div>
                  <span className="font-mono text-[10px] text-[#737373] block mb-1">STATUS</span>
                  <span className="text-sm font-medium text-[#FF3333]">Active Prototype</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center items-center bg-[#050505] p-8 rounded-2xl border border-[#262626] text-center">
              <div className="w-12 h-12 rounded-2xl bg-[#FF3333]/10 border border-[#FF3333]/30 flex items-center justify-center text-[#FF3333] mb-4">
                <Cpu className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-[#F5F5F5] text-lg mb-2">System Design Focus</h4>
              <p className="text-xs text-[#A3A3A3] mb-6">Built with modular component architecture and efficient state management.</p>
              <a
                href="https://github.com/adhithyaram2006-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-[#FF3333] text-[#050505] font-semibold text-xs tracking-wider hover:bg-[#FF3333]/90 transition-all flex items-center space-x-2 cursor-pointer"
              >
                <span>VIEW REPOSITORY</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
