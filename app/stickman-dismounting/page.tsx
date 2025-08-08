import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
import { stickmanDismountingContent } from "./content";

export const metadata: Metadata = {
  title: `Stickman Dismounting | Play Unblocked Ragdoll Crash | ${siteConfig.domain}`,
  description: "Crash, flip, and break bones in Stickman Dismounting! Enjoy ragdoll physics and creative crash scenarios. Play free, unblocked, and online.",
  openGraph: {
    title: `Stickman Dismounting Unblocked | Play Free Ragdoll Crash | ${siteConfig.domain}`,
    description: "Play Stickman Dismounting online for free. Enjoy ragdoll crash physics, creative levels, and funny stickman destruction. No download required.",
    type: 'website',
    url: `${siteConfig.url}/game/stickman-dismounting`,
    siteName: siteConfig.name,
    images: [
      {
        url: `/assets/img/stickman-dismounting.png`,
        alt: `Stickman Dismounting Screenshot`,
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stickman Dismounting - Free Online Ragdoll Crash',
    description: 'Play Stickman Dismounting free online game without download',
    images: [`/assets/img/stickman-dismounting.png`],
  },
  alternates: {
    canonical: 'https://plonky.top/',
  },
  robots: {
    index: true,
    follow: true,
  }
};

const gameConfig = {
  metadata: {
    title: "Stickman Dismounting",
    description: "Crash, flip, and break bones in Stickman Dismounting! Enjoy ragdoll physics and creative crash scenarios. Play free, unblocked, and online.",
    url: "/game/stickman-dismounting"
  },
  content: stickmanDismountingContent
};

export default function StickmanDismountingPage() {
  return <GamePageTemplate gameConfig={gameConfig} />;
}
