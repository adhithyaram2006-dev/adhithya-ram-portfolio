/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useLenis } from './hooks/useLenis';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgress } from './components/ScrollProgress';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { StatementSection } from './components/StatementSection';
import { AboutPreview } from './components/AboutPreview';
import { SelectedWork } from './components/SelectedWork';
import { SkillConstellation } from './components/SkillConstellation';
import { ProcessTimeline } from './components/ProcessTimeline';
import { JourneyTimeline } from './components/JourneyTimeline';
import { HackathonSection } from './components/HackathonSection';
import { TerminalCard } from './components/TerminalCard';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';

export default function App() {
  useLenis();

  return (
    <div className="min-h-screen bg-[#07111F] text-[#F4F7FA] relative selection:bg-[#35D0BA]/30 selection:text-[#35D0BA]">
      <CustomCursor />
      <ScrollProgress />
      <Navigation />
      <main>
        <Hero />
        <StatementSection />
        <AboutPreview />
        <SelectedWork />
        <SkillConstellation />
        <ProcessTimeline />
        <JourneyTimeline />
        <HackathonSection />
        <TerminalCard />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
