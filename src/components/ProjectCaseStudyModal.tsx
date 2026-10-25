import React, { useEffect } from 'react';
import { Project } from '../data/portfolio';
import { X, ExternalLink, Github, CheckCircle2, Code, Layers, ShieldCheck } from 'lucide-react';

interface ProjectCaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectCaseStudyModal({ project, onClose }: ProjectCaseStudyModalProps) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#050505]/90 backdrop-blur-xl flex justify-center items-center p-4 sm:p-6 overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-4xl bg-[#0D0D0D] border border-[#262626] rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#262626] bg-[#050505]/60 sticky top-0 z-20 backdrop-blur-md">
          <div>
            <span className="font-mono text-xs text-[#FF3333] tracking-widest">{project.category}</span>
            <h3 className="text-2xl font-extrabold text-[#F5F5F5] mt-1">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#A3A3A3] hover:text-[#FF3333] bg-[#050505] border border-[#262626] rounded-lg transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          
          {/* Status & Tech tags */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-[#050505] border border-[#262626]">
            <div>
              <span className="font-mono text-[10px] text-[#737373] block mb-1">PROJECT STATUS</span>
              <span className="font-mono text-xs text-[#FF3333] px-3 py-1 rounded-full bg-[#FF3333]/10 border border-[#FF3333]/20">
                {project.status}
              </span>
            </div>
            <div>
              <span className="font-mono text-[10px] text-[#737373] block mb-1">TECHNOLOGIES</span>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="font-mono text-xs px-2 py-0.5 rounded bg-[#141414] text-[#A3A3A3] border border-[#262626]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Overview Description */}
          <div>
            <h4 className="font-mono text-xs text-[#FF3333] tracking-widest mb-2">01 — OVERVIEW</h4>
            <p className="text-lg text-[#F5F5F5] leading-relaxed font-light">{project.description}</p>
          </div>

          {/* Problem & Approach */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-[#050505] border border-[#262626]">
              <h4 className="font-mono text-xs text-[#E7B75D] tracking-widest mb-3 flex items-center space-x-2">
                <span>02 — THE PROBLEM</span>
              </h4>
              <p className="text-sm text-[#A3A3A3] leading-relaxed">{project.problem}</p>
            </div>

            <div className="p-6 rounded-xl bg-[#050505] border border-[#262626]">
              <h4 className="font-mono text-xs text-[#FF3333] tracking-widest mb-3 flex items-center space-x-2">
                <span>03 — APPROACH & SOLUTION</span>
              </h4>
              <p className="text-sm text-[#A3A3A3] leading-relaxed">{project.approach}</p>
            </div>
          </div>

          {/* What I Built */}
          <div className="p-6 rounded-xl bg-[#050505] border border-[#262626]">
            <h4 className="font-mono text-xs text-[#FF5C5C] tracking-widest mb-3">04 — WHAT I BUILT</h4>
            <p className="text-sm text-[#F5F5F5] mb-4">{project.whatIBuilt}</p>
            <ul className="space-y-2">
              {project.implementationDetails.map((detail, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-sm text-[#A3A3A3]">
                  <CheckCircle2 className="w-4 h-4 text-[#FF3333] shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What I Learned */}
          <div>
            <h4 className="font-mono text-xs text-[#FF3333] tracking-widest mb-2">05 — WHAT I LEARNED</h4>
            <p className="text-sm text-[#A3A3A3] bg-[#050505] p-4 rounded-xl border border-[#262626] leading-relaxed">
              {project.whatILearned}
            </p>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#262626]">
            <a
              href={project.sourceCode}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[#050505] border border-[#262626] text-[#F5F5F5] font-medium text-xs tracking-wider hover:border-[#FF3333] transition-all flex items-center space-x-2"
            >
              <Github className="w-4 h-4 text-[#FF3333]" />
              <span>SOURCE CODE</span>
            </a>

            <a
              href={project.liveDemo === "Coming soon" ? "#" : project.liveDemo}
              target={project.liveDemo === "Coming soon" ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className={`px-6 py-3 rounded-xl font-semibold text-xs tracking-wider transition-all flex items-center space-x-2 ${
                project.liveDemo === "Coming soon"
                  ? 'bg-[#262626]/40 text-[#737373] cursor-not-allowed border border-[#262626]'
                  : 'bg-[#FF3333] text-[#050505] hover:bg-[#FF3333]/90 shadow-lg shadow-[#FF3333]/20'
              }`}
            >
              <span>{project.liveDemo === "Coming soon" ? "DEMO: COMING SOON" : "VIEW LIVE DEMO"}</span>
              {project.liveDemo !== "Coming soon" && <ExternalLink className="w-4 h-4" />}
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
