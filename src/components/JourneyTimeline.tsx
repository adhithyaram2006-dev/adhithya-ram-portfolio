import React from 'react';
import { JOURNEY_TIMELINE } from '../data/portfolio';
import { GraduationCap, Calendar, CheckCircle } from 'lucide-react';

export function JourneyTimeline() {
  return (
    <section id="journey" className="py-24 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-6">
          <span className="font-mono text-xs text-[#FF3333] tracking-widest px-3 py-1 rounded-full bg-[#FF3333]/10 border border-[#FF3333]/20">
            06 — ACADEMIC JOURNEY
          </span>
          <span className="h-[1px] w-24 bg-[#262626]" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F5F5]">
              EVOLUTION & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3333] to-[#FF5C5C]">
                MILESTONES
              </span>
            </h2>
          </div>
          <p className="text-sm text-[#A3A3A3] max-w-md mt-4 md:mt-0 font-light">
            Tracing my progression from foundational programming to active software engineering and systems exploration.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative border-l border-[#262626] ml-4 md:ml-8 space-y-12">
          {JOURNEY_TIMELINE.map((item, idx) => (
            <div key={item.period} className="relative pl-8 md:pl-12 group">
              
              {/* Timeline Node Dot */}
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#FF3333] border-4 border-[#050505] group-hover:scale-150 transition-transform" />

              <div className="glass-panel p-6 md:p-8 rounded-2xl border border-[#262626] group-hover:border-[#FF3333]/40 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="font-mono text-xs text-[#FF3333] px-3 py-1 rounded-full bg-[#FF3333]/10 border border-[#FF3333]/20">
                    {item.period}
                  </span>
                  <span className="font-mono text-xs text-[#737373]">MILESTONE_0{idx + 1}</span>
                </div>

                <h3 className="text-2xl font-bold text-[#F5F5F5] mb-2">{item.title}</h3>
                <p className="text-sm text-[#A3A3A3] leading-relaxed mb-6 font-light">{item.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[#262626]">
                  {item.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-center space-x-2 text-xs text-[#F5F5F5]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF3333]" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
