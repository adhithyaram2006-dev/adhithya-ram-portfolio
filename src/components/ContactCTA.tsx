import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolio';
import { Mail, Github, Linkedin, Copy, Check, ArrowUpRight } from 'lucide-react';

export function ContactCTA() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF3333]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-6">
          <span className="font-mono text-xs text-[#FF3333] tracking-widest px-3 py-1 rounded-full bg-[#FF3333]/10 border border-[#FF3333]/20">
            08 — GET IN TOUCH
          </span>
          <span className="h-[1px] w-24 bg-[#262626]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#F5F5F5] leading-tight">
              HAVE AN IDEA? <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3333] to-[#FF5C5C]">
                LET'S BUILD IT.
              </span>
            </h2>

            <p className="text-lg text-[#A3A3A3] max-w-xl font-light leading-relaxed">
              Whether you want to discuss a project, explore a technology rabbit hole, or connect over computer science, my inbox is always open.
            </p>

            {/* Email Copy Interaction */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="px-6 py-3.5 rounded-xl bg-[#FF3333] text-[#050505] font-semibold text-sm tracking-wider hover:bg-[#FF3333]/90 transition-all flex items-center space-x-2 shadow-xl shadow-[#FF3333]/20 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>{PERSONAL_INFO.email}</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="px-6 py-3.5 rounded-xl bg-[#0D0D0D] border border-[#262626] text-[#F5F5F5] font-medium text-sm tracking-wider hover:border-[#FF3333]/50 transition-all flex items-center space-x-2 cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-[#FF3333]" /> : <Copy className="w-4 h-4 text-[#A3A3A3]" />}
                <span>{copied ? '✓ COPIED' : 'COPY EMAIL'}</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col space-y-4">
            <div className="glass-panel p-8 rounded-2xl border border-[#262626] space-y-6">
              <div className="font-mono text-xs text-[#FF3333] tracking-widest">[ DIRECT_CHANNELS ]</div>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#050505] border border-[#262626] hover:border-[#FF3333]/50 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center space-x-3">
                  <Github className="w-5 h-5 text-[#FF3333]" />
                  <span className="font-bold text-[#F5F5F5]">GitHub Repository</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#737373] group-hover:text-[#FF3333] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#050505] border border-[#262626] hover:border-[#FF3333]/50 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center space-x-3">
                  <Linkedin className="w-5 h-5 text-[#FF3333]" />
                  <span className="font-bold text-[#F5F5F5]">LinkedIn Profile</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#737373] group-hover:text-[#FF3333] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
