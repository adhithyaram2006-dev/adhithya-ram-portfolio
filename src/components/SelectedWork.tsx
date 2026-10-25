import React, { useState } from 'react';
import { PROJECTS, Project } from '../data/portfolio';
import { ProjectCaseStudyModal } from './ProjectCaseStudyModal';
import { ArrowUpRight } from 'lucide-react';

export function SelectedWork() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="work" className="py-24 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-6">
          <span className="font-mono text-xs text-[#FF3333] tracking-widest px-3 py-1 rounded-full bg-[#FF3333]/10 border border-[#FF3333]/20">
            03 — SELECTED WORK
          </span>
          <span className="h-[1px] w-24 bg-[#262626]" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F5F5]">
              FEATURED <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3333] to-[#FF5C5C]">
                CASE STUDIES
              </span>
            </h2>
          </div>
          <p className="text-sm text-[#A3A3A3] max-w-md mt-4 md:mt-0 font-light">
            Original conceptual architectures and workflow diagrams explaining each project's actual engineering design.
          </p>
        </div>

        {/* 3 Large Case Study Sections with Image Left / Details Right */}
        <div className="space-y-16">
          {PROJECTS.map((project) => {
            // Image assignment per project
            let imageSrc = '';
            let imageAlt = '';
            if (project.id === 'personal-portfolio') {
              imageSrc = '/public/assets/aistudio/Screenshot_2026-10-25_215518_73430cc6.png';
              imageAlt = 'Personal Portfolio Website Visual';
            } else if (project.id === 'ai-procurement-system') {
              imageSrc = '/public/assets/aistudio/ai_procurment_a94a8b1b.jpeg';
              imageAlt = 'AI-Powered Procurement System Visual';
            } else if (project.id === 'upi-fraud-detection') {
              imageSrc = '/public/assets/aistudio/upi_fraud_e2bf4bca.webp';
              imageAlt = 'UPI Fraud Detection System Visual';
            }

            return (
              <div
                key={project.id}
                className="glass-panel p-8 md:p-12 rounded-3xl border border-[#262626] hover:border-[#FF3333]/40 transition-all group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF3333]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Image Column on Left */}
                  <div className="lg:col-span-5 h-full">
                    <div className="w-full h-full min-h-[320px] bg-[#050505] rounded-2xl border border-[#262626] overflow-hidden relative group/img shadow-2xl">
                      <img 
                        src={imageSrc} 
                        alt={imageAlt}
                        className="w-full h-full min-h-[320px] object-cover group-hover/img:scale-105 transition-transform duration-700 filter brightness-95 contrast-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                        <span className="font-mono text-xs text-[#FF3333] bg-[#050505]/90 px-3 py-1 rounded-full border border-[#262626]">
                          [ {project.id.toUpperCase()}_VISUAL ]
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Text Details Column on Right */}
                  <div className="lg:col-span-7 flex flex-col space-y-6">
                    
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-[#FF3333] tracking-widest">{project.category}</span>
                      <span className="font-mono text-[10px] px-3 py-1 rounded-full bg-[#050505] border border-[#262626] text-[#A3A3A3]">
                        {project.status}
                      </span>
                    </div>

                    <div className="flex items-baseline space-x-4">
                      <span className="font-mono text-2xl font-black text-[#FF3333]/40">{project.number}</span>
                      <h3 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F5] group-hover:text-[#FF3333] transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-base text-[#A3A3A3] leading-relaxed font-light">
                      {project.description}
                    </p>

                    {/* Use / Purpose */}
                    <div className="p-4 rounded-xl bg-[#050505] border border-[#262626]">
                      <span className="font-mono text-[10px] text-[#FF3333] block mb-1 uppercase tracking-wider">PURPOSE / WHAT IT DOES</span>
                      <p className="text-xs text-[#F5F5F5]">{project.usePurpose}</p>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="font-mono text-xs px-3 py-1 rounded-lg bg-[#050505] text-[#A3A3A3] border border-[#262626]">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* VIEW PROJECT Interaction */}
                    <div className="pt-4">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="px-6 py-3 rounded-xl bg-[#FF3333] text-[#050505] font-semibold text-xs tracking-wider hover:bg-[#FF3333]/90 transition-all flex items-center space-x-2 shadow-lg shadow-[#FF3333]/20 group/btn cursor-pointer"
                      >
                        <span>VIEW PROJECT</span>
                        <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </button>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      <ProjectCaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
