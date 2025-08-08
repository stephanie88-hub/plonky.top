import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
import { shortLifeContent } from "./content";

export const metadata: Metadata = {
  title: 'Short Life 2 - Free Physics Ragdoll Game | Play Online Unblocked',
  description: 'Play Short Life 2 online for free - the ultimate ragdoll physics obstacle course game! Master deadly traps, enhanced physics mechanics, and hilarious death animations. Short Life 2 features improved gameplay, creative level design, and mobile optimization. No download required, play instantly in your browser!',
  openGraph: {
    title: 'Short Life 2 - Free Ragdoll Physics Game | Play Online',
    description: 'Master Short Life 2 - the enhanced ragdoll physics adventure with deadly obstacles and hilarious gameplay. Play free online with improved mechanics and mobile support!',
    type: 'website',
    url: `${siteConfig.url}/short-life-2`,
    siteName: siteConfig.name,
    images: [
      {
        url: `/assets/short-life-2/short-life-2.png`,
        width: 1200,
        height: 630,
        alt: 'Short Life 2 - Ragdoll Physics Game Screenshot',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Short Life 2 - Free Ragdoll Physics Game',
    description: 'Master Short Life 2 - enhanced ragdoll physics with deadly obstacles. Play free online!',
    images: [`/assets/short-life-2/short-life-2.png`],
  },
  alternates: {
    canonical: 'https://plonky.top/',
  }
};

const gameConfig = {
  metadata: {
    title: "Short Life 2",
    description: "Experience Short Life 2, the ultimate ragdoll physics adventure with enhanced obstacle courses and improved gameplay mechanics. Navigate through deadly traps, master challenging puzzles, and enjoy hilarious death animations in this free browser-based game.",
    url: "/short-life-2"
  },
  content: shortLifeContent
};

export default function ShortLifePage() {
  return <GamePageTemplate gameConfig={gameConfig} />;
}
