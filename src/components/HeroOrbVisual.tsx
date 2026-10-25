import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { PERSONAL_INFO } from '../data/portfolio';
import { User, MapPin, GraduationCap, X, Sparkles } from 'lucide-react';

export function HeroOrbVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const orb = orbRef.current;
    const ring = ringRef.current;
    if (!container || !orb || !ring) return;

    // Gentle floating animation only (NO spinning/rotation)
    gsap.to(orb, {
      y: -10,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);

      gsap.to(orb, {
        x: x * 10,
        y: y * 10 - 10,
        duration: 0.5,
        ease: 'power2.out'
      });

      gsap.to(ring, {
        x: x * 15,
        y: y * 15,
        duration: 0.6,
        ease: 'power2.out'
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (!cardRef.current) return;
    if (showDetails) {
      gsap.fromTo(cardRef.current, 
        { scale: 0.9, opacity: 0, y: 10 },
        { scale: 1, opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
      );
    }
  }, [showDetails]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full max-w-lg h-[460px] mx-auto rounded-3xl bg-[#0D0D0D]/90 border border-[#262626] backdrop-blur-2xl flex items-center justify-center overflow-hidden shadow-2xl group"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF3333]/10 via-transparent to-[#FF5C5C]/10 pointer-events-none" />

      {/* Crystalline corner framing elements */}
      <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#FF3333]/40 rounded-tl-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#FF3333]/40 rounded-tr-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[#FF3333]/40 rounded-bl-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#FF3333]/40 rounded-br-3xl pointer-events-none" />

      {/* Top Status Header */}
      <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-20">
        <div className="flex items-center space-x-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF3333] animate-pulse" />
          <span className="font-mono text-xs text-[#FF3333] tracking-widest">[ IMMERSION_LAB_01 ]</span>
        </div>
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="font-mono text-xs text-[#FF3333] bg-[#FF3333]/10 hover:bg-[#FF3333]/20 px-3 py-1 rounded-full border border-[#FF3333]/30 transition-colors cursor-pointer"
        >
          {showDetails ? 'CLOSE DETAILS' : 'VIEW PERSONAL DETAILS'}
        </button>
      </div>

      {/* Center 3D Iridescent Orb & Stationary Ring Visual OR Stationary Personal Details Card */}
      {!showDetails ? (
        <div 
          onClick={() => setShowDetails(true)}
          className="relative w-48 h-48 flex items-center justify-center cursor-pointer group/orb"
        >
          {/* Stationary Neon Ring */}
          <div 
            ref={ringRef}
            className="absolute w-64 h-20 rounded-full border border-[#FF3333]/60 shadow-[0_0_30px_rgba(255,51,51,0.3)] pointer-events-none transform rotate-12"
            style={{ transformStyle: 'preserve-3d' }}
          />

          {/* Red/Crimson Iridescent Orb */}
          <div 
            ref={orbRef}
            className="w-36 h-36 rounded-full bg-gradient-to-tr from-[#FF3333] via-[#FF5C5C] to-[#E7B75D] shadow-[0_0_60px_rgba(255,51,51,0.4)] relative flex items-center justify-center overflow-hidden transition-transform group-hover/orb:scale-105"
          >
            {/* Inner specular highlight */}
            <div className="absolute top-2 left-3 w-10 h-6 bg-white/40 rounded-full blur-md transform -rotate-45" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 pointer-events-none" />
          </div>
        </div>
      ) : (
        /* Stationary Popped-out Personal Details Card with Close Button on Top */
        <div 
          ref={cardRef}
          className="absolute inset-6 my-auto bg-[#050505]/98 border-2 border-[#FF3333] rounded-2xl p-6 shadow-[0_0_50px_rgba(255,51,51,0.3)] z-30 flex flex-col justify-between"
        >
          {/* Top Bar with Close Option */}
          <div className="flex items-center justify-between border-b border-[#262626] pb-3">
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4 text-[#FF3333]" />
              <span className="font-mono text-xs text-[#FF3333] tracking-widest">[ PERSONAL_DETAILS ]</span>
            </div>
            <button 
              onClick={() => setShowDetails(false)}
              className="p-1.5 text-[#A3A3A3] hover:text-[#FF3333] bg-[#0D0D0D] border border-[#262626] rounded-lg transition-colors flex items-center space-x-1 cursor-pointer"
              aria-label="Close details"
            >
              <X className="w-4 h-4" />
              <span className="font-mono text-[10px] pr-1">CLOSE</span>
            </button>
          </div>

          {/* Stationary Personal Info Content */}
          <div className="space-y-3 py-2">
            <div>
              <span className="font-mono text-[10px] text-[#737373] block">FULL_NAME</span>
              <h3 className="text-xl font-bold text-[#F5F5F5]">{PERSONAL_INFO.name}</h3>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <span className="font-mono text-[10px] text-[#737373] block">DEGREE</span>
                <span className="text-xs font-medium text-[#F5F5F5] flex items-center space-x-1 mt-0.5">
                  <GraduationCap className="w-3.5 h-3.5 text-[#FF3333] inline mr-1" />
                  B.Tech CSE
                </span>
              </div>
              <div>
                <span className="font-mono text-[10px] text-[#737373] block">LOCATION</span>
                <span className="text-xs font-medium text-[#F5F5F5] flex items-center space-x-1 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[#FF3333] inline mr-1" />
                  Puducherry, India
                </span>
              </div>
            </div>

            <div>
              <span className="font-mono text-[10px] text-[#737373] block">COLLEGE</span>
              <span className="text-xs font-medium text-[#F5F5F5] block truncate">{PERSONAL_INFO.college}</span>
            </div>

            <div>
              <span className="font-mono text-[10px] text-[#737373] block">EMAIL</span>
              <span className="text-xs font-mono text-[#FF3333] block">{PERSONAL_INFO.email}</span>
            </div>
          </div>

          <div className="pt-3 border-t border-[#262626] flex items-center justify-between">
            <span className="font-mono text-[10px] text-[#737373]">STATIONARY_VIEW</span>
            <span className="font-mono text-[10px] text-[#FF3333]">● ACTIVE</span>
          </div>
        </div>
      )}

      {/* Bottom Floating Caption */}
      <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#050505]/80 border border-[#262626] flex items-center justify-between z-20 pointer-events-none">
        <div>
          <span className="font-mono text-[10px] text-[#737373] block">IMMERSION LAB</span>
          <span className="font-mono text-xs text-[#F5F5F5]">Click orb or top button to view details</span>
        </div>
        <span className="font-mono text-xs text-[#FF3333] px-2.5 py-1 rounded-full bg-[#FF3333]/10 border border-[#FF3333]/20">
          {showDetails ? 'DETAILS OPEN' : 'READY'}
        </span>
      </div>
    </div>
  );
}
