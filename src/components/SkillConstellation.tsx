import React, { useState } from 'react';
import { SKILLS_DATA, TECHNICAL_DEPTH, Skill } from '../data/portfolio';
import { Cpu, Code, Database, Shield, Wrench, Layers } from 'lucide-react';

export function SkillConstellation() {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = ['ALL', 'Languages', 'Web', 'Data', 'Security', 'Tools'];

  const filteredSkills = activeCategory === 'ALL' 
    ? SKILLS_DATA 
    : SKILLS_DATA.filter(s => s.category === activeCategory);

  const getStatusColor = (status: Skill['status']) => {
    switch (status) {
      case 'FOUNDATION': return 'bg-[#FF5C5C]/10 text-[#FF5C5C] border-[#FF5C5C]/20';
      case 'ACTIVE LEARNING': return 'bg-[#FF3333]/10 text-[#FF3333] border-[#FF3333]/20';
      case 'BUILDING': return 'bg-[#E7B75D]/10 text-[#E7B75D] border-[#E7B75D]/20';
      case 'EXPLORING': return 'bg-[#F5F5F5]/10 text-[#A3A3A3] border-[#F5F5F5]/20';
    }
  };

  return (
    <section id="skills" className="py-24 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-6">
          <span className="font-mono text-xs text-[#FF3333] tracking-widest px-3 py-1 rounded-full bg-[#FF3333]/10 border border-[#FF3333]/20">
            04 — SKILLS & CONSTELLATION
          </span>
          <span className="h-[1px] w-24 bg-[#262626]" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F5F5]">
              TECHNICAL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3333] to-[#FF5C5C]">
                STACK & DEPTH
              </span>
            </h2>
          </div>
          <p className="text-sm text-[#A3A3A3] max-w-md mt-4 md:mt-0 font-light">
            No fake proficiency percentages. Honest representation of foundations, active learning, and building status as a B.Tech CSE student.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 border-b border-[#262626] pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl font-mono text-xs tracking-wider transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#FF3333] text-[#050505] font-semibold shadow-lg shadow-[#FF3333]/20'
                  : 'bg-[#0D0D0D] text-[#A3A3A3] border border-[#262626] hover:border-[#FF3333]/50 hover:text-[#F5F5F5]'
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="p-6 rounded-2xl bg-[#0D0D0D]/70 border border-[#262626] hover:border-[#FF3333]/50 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-[#737373]">{skill.category}</span>
                  <span className={`font-mono text-[10px] px-2.5 py-0.5 rounded-full border ${getStatusColor(skill.status)}`}>
                    {skill.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#F5F5F5] group-hover:text-[#FF3333] transition-colors mb-2">
                  {skill.name}
                </h3>
                <p className="text-xs text-[#A3A3A3] leading-relaxed font-light">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Depth Progression */}
        <div className="mt-16">
          <div className="flex items-center space-x-2 mb-6">
            <Layers className="w-5 h-5 text-[#FF3333]" />
            <h3 className="font-mono text-xs text-[#FF3333] tracking-widest uppercase">TECHNICAL_DEPTH_PROGRESSION</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
            {TECHNICAL_DEPTH.map((depth) => (
              <div 
                key={depth.level}
                className="p-4 rounded-xl bg-[#0D0D0D] border border-[#262626] flex flex-col justify-between relative group hover:border-[#FF3333] transition-all"
              >
                <div>
                  <span className="font-mono text-[10px] text-[#FF3333] block mb-2">{depth.level} — STEP</span>
                  <h4 className="font-bold text-[#F5F5F5] text-sm mb-2">{depth.title}</h4>
                </div>
                <p className="text-[11px] text-[#A3A3A3] leading-tight font-light">{depth.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
