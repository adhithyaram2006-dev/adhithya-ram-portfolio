import React from 'react';
import { Terminal, Lightbulb } from 'lucide-react';

export function StatementSection() {
  return (
    <section className="py-24 bg-[#0D0D0D]/50 border-y border-[#262626] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FF3333]/10 border border-[#FF3333]/20 mb-6">
          <Lightbulb className="w-3.5 h-3.5 text-[#FF3333]" />
          <span className="font-mono text-xs text-[#FF3333] tracking-widest">ENGINEERING PHILOSOPHY</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F5F5F5] mb-8 leading-tight">
          I LIKE UNDERSTANDING <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3333] to-[#FF5C5C]">
            HOW THINGS WORK.
          </span>
        </h2>

        <p className="text-lg md:text-xl text-[#A3A3A3] max-w-3xl mx-auto font-light leading-relaxed">
          True learning happens when you break systems down, examine their inner workings, experiment with code, rebuild from scratch, and understand the fundamentals beneath the surface.
        </p>
      </div>
    </section>
  );
}
