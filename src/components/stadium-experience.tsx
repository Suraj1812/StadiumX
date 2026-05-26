"use client";

import { AnalyticsSection } from "@/components/analytics/analytics-section";
import { CursorGlow } from "@/components/effects/cursor-glow";
import { FanExperience } from "@/components/fan-experience";
import { Footer } from "@/components/footer";
import { HighlightsGallery } from "@/components/gallery/highlights-gallery";
import { HeroSection } from "@/components/hero/hero-section";
import { SiteHeader } from "@/components/layout/site-header";
import { PlayerSpotlight } from "@/components/players/player-spotlight";
import { LiveMatchSection } from "@/components/scoreboard/live-match-section";
import { TeamShowcase } from "@/components/teams/team-showcase";
import { TournamentTimeline } from "@/components/timeline/tournament-timeline";

export function StadiumExperience() {
  return (
    <main id="top" className="relative isolate overflow-x-clip">
      <CursorGlow />
      <SiteHeader />
      <HeroSection />
      <LiveMatchSection />
      <TeamShowcase />
      <PlayerSpotlight />
      <TournamentTimeline />
      <AnalyticsSection />
      <HighlightsGallery />
      <FanExperience />
      <Footer />
    </main>
  );
}
