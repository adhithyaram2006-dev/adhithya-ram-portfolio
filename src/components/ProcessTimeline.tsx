import React, { useState } from 'react';
import { PROBLEM_SOLVING_STEPS } from '../data/portfolio';
import { Cpu, CheckCircle, ArrowRight } from 'lucide-react';

export function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 bg-[#0D0D0D]/50 border-y border-[#262626] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-6">
          <span className="font-mono text-xs text-[#FF3333] tracking-widest px-3 py-1 rounded-full bg-[#FF3333]/10 border border-[#FF3333]/20">
            05 — HOW I WORK
          </span>
          <span className="h-[1px] w-24 bg-[#262626]" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F5F5]">
              PROBLEM-SOLVING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3333] to-[#FF5C5C]">
                METHODOLOGY
              </span>
            </h2>
          </div>
          <p className="text-sm text-[#A3A3A3] max-w-md mt-4 md:mt-0 font-light">
            A structured, repeatable approach to breaking down computational problems, researching solutions, and building reliable code.
          </p>
        </div>

        {/* Steps Grid / Interactive Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Steps List */}
          <div className="lg:col-span-6 flex flex-col space-y-4">
            {PROBLEM_SOLVING_STEPS.map((step, idx) => (
              <button
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`p-5 rounded-2xl border text-left transition-all flex items-center justify-between group cursor-pointer ${
                  activeStep === idx
                    ? 'bg-[#050505] border-[#FF3333] shadow-lg shadow-[#FF3333]/10'
                    : 'bg-[#050505]/50 border-[#262626] hover:border-[#333333]'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <span className={`font-mono text-sm font-bold ${activeStep === idx ? 'text-[#FF3333]' : 'text-[#737373]'}`}>
                    {step.number}
                  </span>
                  <span className={`text-lg font-bold ${activeStep === idx ? 'text-[#F5F5F5]' : 'text-[#A3A3A3]'}`}>
                    {step.title}
                  </span>
                </div>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                  activeStep === idx ? 'bg-[#FF3333]/20 text-[#FF3333]' : 'bg-[#0D0D0D] text-[#737373]'
                }`}>
                  <ArrowRight className={`w-4 h-4 transition-transform ${activeStep === idx ? 'translate-x-0.5' : ''}`} />
                </div>
              </button>
            ))}
          </div>

          {/* Active Step Inspector Card */}
          <div className="lg:col-span-6">
            <div className="p-8 rounded-2xl bg-[#050505] border border-[#FF3333]/40 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 font-mono text-5xl font-black text-[#FF3333]/10 pointer-events-none">
                {PROBLEM_SOLVING_STEPS[activeStep].number}
              </div>

              <div className="flex items-center space-x-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF3333] animate-pulse" />
                <span className="font-mono text-xs text-[#FF3333] tracking-widest">
                  STAGE_INSPECTOR [{PROBLEM_SOLVING_STEPS[activeStep].number}]
                </span>
              </div>

              <h3 className="text-3xl font-extrabold text-[#F5F5F5] mb-4">
                {PROBLEM_SOLVING_STEPS[activeStep].title}
              </h3>

              <p className="text-base text-[#A3A3A3] leading-relaxed font-light mb-8">
                {PROBLEM_SOLVING_STEPS[activeStep].desc}
              </p>

              <div className="p-4 rounded-xl bg-[#0D0D0D] border border-[#262626] flex items-center justify-between">
                <span className="font-mono text-xs text-[#737373]">ENGINEERING_STATE</span>
                <span className="font-mono text-xs text-[#FF3333]">ACTIVE_WORKFLOW</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
