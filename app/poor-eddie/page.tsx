import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
import { poorEddieContent } from "./content";

export const metadata: Metadata = {
  title: 'Poor Eddie - Free Physics Puzzle Game | Play Online Unblocked',
  description: 'Play Poor Eddie online for free - the ultimate ragdoll physics puzzle game! Master creative obstacles, enhanced physics mechanics, and hilarious puzzle challenges. Poor Eddie features improved gameplay, innovative puzzle design, and mobile optimization. No download required, play instantly in your browser!',
  openGraph: {
    title: 'Poor Eddie - Free Ragdoll Physics Puzzle Game | Play Online',
    description: 'Master Poor Eddie - the enhanced ragdoll physics puzzle adventure with creative obstacles and challenging gameplay. Play free online with improved mechanics and mobile support!',
    type: 'website',
    url: `${siteConfig.url}/poor-eddie`,
    siteName: siteConfig.name,
    images: [
      {
        url: `/assets/poor-eddie/poor-eddie.png`,
        width: 1200,
        height: 630,
        alt: 'Poor Eddie - Ragdoll Physics Puzzle Game Screenshot',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Poor Eddie - Free Ragdoll Physics Puzzle Game',
    description: 'Master Poor Eddie - enhanced ragdoll physics with creative puzzles. Play free online!',
    images: [`/assets/poor-eddie/poor-eddie.png`],
  },
  alternates: {
    canonical: 'https://plonky.top/',
  }
};

const gameConfig = {
  metadata: {
    title: "Poor Eddie",
    description: "Experience Poor Eddie, the ultimate ragdoll physics puzzle adventure with enhanced obstacle courses and improved gameplay mechanics. Navigate through creative traps, master challenging puzzles, and enjoy hilarious physics interactions in this free browser-based game.",
    url: "/poor-eddie"
  },
  content: poorEddieContent
};

export default function PoorEddiePage() {
  return <GamePageTemplate gameConfig={gameConfig} />;
}
