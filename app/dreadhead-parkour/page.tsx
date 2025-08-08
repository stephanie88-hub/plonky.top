import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
import { dreadheadParkourContent } from "./content";

export const metadata: Metadata = {
  title: 'Dreadhead Parkour - Free Physics Runner Game | Play Online Unblocked',
  description: 'Play Dreadhead Parkour online for free - the ultimate ragdoll physics runner game! Master parkour obstacles, enhanced physics mechanics, and fast-paced runner challenges. Dreadhead Parkour features improved gameplay, creative level design, and mobile optimization. No download required, play instantly in your browser!',
  openGraph: {
    title: 'Dreadhead Parkour - Free Ragdoll Physics Runner Game | Play Online',
    description: 'Master Dreadhead Parkour - the enhanced ragdoll physics runner adventure with creative obstacles and fast-paced gameplay. Play free online with improved mechanics and mobile support!',
    type: 'website',
    url: `${siteConfig.url}/dreadhead-parkour`,
    siteName: siteConfig.name,
    images: [
      {
        url: `/assets/dreadhead-parkour/dreadhead-parkour.png`,
        width: 1200,
        height: 630,
        alt: 'Dreadhead Parkour - Ragdoll Physics Runner Game Screenshot',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dreadhead Parkour - Free Ragdoll Physics Runner Game',
    description: 'Master Dreadhead Parkour - enhanced ragdoll physics with fast-paced runner action. Play free online!',
    images: [`/assets/dreadhead-parkour/dreadhead-parkour.png`],
  },
  alternates: {
    canonical: 'https://plonky.top/',
  }
};

const gameConfig = {
  metadata: {
    title: "Dreadhead Parkour",
    description: "Experience Dreadhead Parkour, the ultimate ragdoll physics runner adventure with enhanced parkour courses and improved gameplay mechanics. Navigate through creative obstacles, master challenging runner levels, and enjoy fast-paced physics interactions in this free browser-based game.",
    url: "/dreadhead-parkour"
  },
  content: dreadheadParkourContent
};

export default function DreadheadParkourPage() {
  return <GamePageTemplate gameConfig={gameConfig} />;
}
