import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
import { mutilateADoll2Content } from "./content";

export const metadata: Metadata = {
  title: `Mutilate a Doll 2 | Play Unblocked Ragdoll Sandbox | ${siteConfig.domain}`,
  description: "Unleash your creativity in Mutilate a Doll 2! A ragdoll sandbox where you can build, destroy, and experiment with physics. Play online, free and unblocked.",
  openGraph: {
    title: `Mutilate a Doll 2 Unblocked | Play Free Ragdoll Sandbox | ${siteConfig.domain}`,
    description: "Play Mutilate a Doll 2 online for free. Enjoy ragdoll sandbox physics, creative destruction, and endless experiments. No download required.",
    type: 'website',
    url: `${siteConfig.url}/game/mutilate-a-doll-2`,
    siteName: siteConfig.name,
    images: [
      {
        url: `/assets/img/mutilate-a-doll-2.png`,
        alt: `Mutilate a Doll 2 Screenshot`,
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mutilate a Doll 2 - Free Online Ragdoll Sandbox',
    description: 'Play Mutilate a Doll 2 free online game without download',
    images: [`/assets/img/mutilate-a-doll-2.png`],
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
    title: "Mutilate a Doll 2",
    description: "Unleash your creativity in Mutilate a Doll 2! A ragdoll sandbox where you can build, destroy, and experiment with physics. Play online, free and unblocked.",
    url: "/game/mutilate-a-doll-2"
  },
  content: mutilateADoll2Content
};

export default function MutilateADoll2Page() {
  return <GamePageTemplate gameConfig={gameConfig} />;
}
