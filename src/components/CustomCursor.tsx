import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable on touch devices or reduced motion
    if (window.matchMedia('(pointer: coarse)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    gsap.set(cursor, { xPercent: -50, yPercent: -50 });
    gsap.set(follower, { xPercent: -50, yPercent: -50 });

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1, overwrite: 'auto' });
      gsap.to(follower, { x: e.clientX, y: e.clientY, duration: 0.4, ease: 'power2.out', overwrite: 'auto' });
    };

    window.addEventListener('mousemove', onMouseMove);

    // Expand on interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, input, textarea, [data-cursor="hover"]')) {
        gsap.to(follower, { scale: 1.8, borderColor: '#FF3333', backgroundColor: 'rgba(255, 51, 51, 0.05)', duration: 0.2 });
        gsap.to(cursor, { scale: 0.5, duration: 0.2 });
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, input, textarea, [data-cursor="hover"]')) {
        gsap.to(follower, { scale: 1, borderColor: 'rgba(255, 51, 51, 0.5)', backgroundColor: 'transparent', duration: 0.2 });
        gsap.to(cursor, { scale: 1, duration: 0.2 });
      }
    };

    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  if (typeof window !== 'undefined' && (window.matchMedia('(pointer: coarse)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches)) {
    return null;
  }

  return (
    <>
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-2 h-2 bg-[#FF3333] rounded-full pointer-events-none z-50 hidden md:block mix-blend-difference"
      />
      <div 
        ref={followerRef} 
        className="fixed top-0 left-0 w-8 h-8 border border-[#FF3333]/50 rounded-full pointer-events-none z-50 hidden md:block transition-colors duration-200"
      />
    </>
  );
}
