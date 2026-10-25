import React, { useState } from 'react';
import { PERSONAL_INFO, AREAS_OF_EXPLORATION } from '../data/portfolio';
import { User, MapPin, GraduationCap, Building2, Mail, ArrowUpRight } from 'lucide-react';

export function AboutPreview() {
  const [selectedArea, setSelectedArea] = useState(AREAS_OF_EXPLORATION[0]);

  return (
    <section id="about" className="py-24 relative bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-6">
          <span className="font-mono text-xs text-[#FF3333] tracking-widest px-3 py-1 rounded-full bg-[#FF3333]/10 border border-[#FF3333]/20">
            02 — ABOUT
          </span>
          <span className="h-[1px] w-24 bg-[#262626]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Bio & Details */}
          <div className="lg:col-span-6 flex flex-col space-y-8">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F5F5]">
              CURIOUS BY DEFAULT. <br />
              <span className="text-[#FF3333]">BUILDING BY DOING.</span>
            </h2>

            <div className="space-y-4 text-[#A3A3A3] text-base leading-relaxed font-light">
              <p>
                I am <strong className="text-[#F5F5F5] font-medium">{PERSONAL_INFO.name}</strong>, a dedicated <strong className="text-[#F5F5F5] font-medium">{PERSONAL_INFO.role}</strong> currently studying at <strong className="text-[#F5F5F5] font-medium">{PERSONAL_INFO.college}</strong> in <strong className="text-[#F5F5F5] font-medium">{PERSONAL_INFO.location}</strong>.
              </p>
              <p>
                My journey in computer science is driven by an insatiable curiosity about how software, hardware, networks, and data interact. Rather than just memorizing syntax, I enjoy building hands-on projects, exploring cybersecurity principles, experimenting with web interfaces, and understanding systems from the ground up.
              </p>
            </div>

            {/* Student Info Card */}
            <div className="glass-panel p-6 rounded-2xl border border-[#262626] space-y-4">
              <div className="font-mono text-xs text-[#FF3333] tracking-widest">[ STUDENT_PROFILE ]</div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start space-x-3">
                  <User className="w-5 h-5 text-[#FF3333] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-mono text-[10px] text-[#737373] block">FULL NAME</span>
                    <span className="text-sm font-medium text-[#F5F5F5]">{PERSONAL_INFO.name}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <GraduationCap className="w-5 h-5 text-[#FF3333] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-mono text-[10px] text-[#737373] block">DEGREE</span>
                    <span className="text-sm font-medium text-[#F5F5F5]">B.Tech — CSE</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Building2 className="w-5 h-5 text-[#FF3333] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-mono text-[10px] text-[#737373] block">COLLEGE</span>
                    <span className="text-sm font-medium text-[#F5F5F5]">{PERSONAL_INFO.college}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#FF3333] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-mono text-[10px] text-[#737373] block">LOCATION</span>
                    <span className="text-sm font-medium text-[#F5F5F5]">{PERSONAL_INFO.location}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Areas I'm Exploring */}
          <div className="lg:col-span-6 flex flex-col space-y-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs text-[#FF3333] tracking-widest">AREAS OF EXPLORATION</span>
              <span className="font-mono text-xs text-[#737373]">HOVER_TO_INSPECT</span>
            </div>

            <div className="flex flex-col space-y-3">
              {AREAS_OF_EXPLORATION.map((area) => (
                <div
                  key={area.id}
                  onMouseEnter={() => setSelectedArea(area)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                    selectedArea.id === area.id 
                      ? 'bg-[#0D0D0D] border-[#FF3333] shadow-lg shadow-[#FF3333]/10' 
                      : 'bg-[#0D0D0D]/40 border-[#262626] hover:border-[#333333]'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <span className="font-mono text-xs text-[#737373]">{area.id}</span>
                    <span className="font-bold text-[#F5F5F5] text-base">{area.title}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className={`font-mono text-[10px] px-2 py-0.5 rounded-full ${
                      area.status === 'BUILDING' ? 'bg-[#FF3333]/10 text-[#FF3333] border border-[#FF3333]/20' :
                      area.status === 'EXPLORING' ? 'bg-[#FF5C5C]/10 text-[#FF5C5C] border border-[#FF5C5C]/20' :
                      'bg-[#E7B75D]/10 text-[#E7B75D] border border-[#E7B75D]/20'
                    }`}>
                      {area.status}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#737373]" />
                  </div>
                </div>
              ))}
            </div>

            {/* Active Area Details Box */}
            <div className="bg-[#0D0D0D] p-5 rounded-xl border border-[#FF3333]/30 mt-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[10px] text-[#FF3333]">ACTIVE_INSPECTION [{selectedArea.id}]</span>
                <span className="font-mono text-[10px] text-[#E7B75D]">{selectedArea.status}</span>
              </div>
              <h4 className="font-bold text-[#F5F5F5] text-lg mb-1">{selectedArea.title}</h4>
              <p className="text-sm text-[#A3A3A3]">{selectedArea.desc}</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
