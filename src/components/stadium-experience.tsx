"use client";

import { AnalyticsSection } from "@/components/analytics/analytics-section";
import { Footer } from "@/components/footer";
import { HighlightsGallery } from "@/components/gallery/highlights-gallery";
import { HeroSection } from "@/components/hero/hero-section";
import { SeasonHub } from "@/components/hub/season-hub";
import { SiteHeader } from "@/components/layout/site-header";
import { PlayerSpotlight } from "@/components/players/player-spotlight";
import { LiveMatchSection } from "@/components/scoreboard/live-match-section";
import { TeamShowcase } from "@/components/teams/team-showcase";

export function StadiumExperience() {
  return (
    <main id="top" className="relative isolate overflow-x-clip">
      <SiteHeader />
      <HeroSection />
      <LiveMatchSection />
      <SeasonHub />
      <TeamShowcase />
      <PlayerSpotlight />
      <AnalyticsSection />
      <HighlightsGallery />
      <Footer />
    </main>
  );
}
