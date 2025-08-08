import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
import { crazyChickenContent } from "./content";

export const metadata: Metadata = {
  title: `Crazy Chicken 3D | Play Unblocked Game | ${siteConfig.domain}`,
  description: "Play Crazy Chicken 3D unblocked online for free! Control a wild chicken in this fun 3D action game. No download needed – start playing instantly in browser!",
  openGraph: {
    title: `Crazy Chicken 3D Unblocked | Play Free Game | ${siteConfig.domain}`,
    description: "Play Crazy Chicken 3D - a free physics-based battle game right in your browser. No downloads required.",
    type: 'website',
    url: `${siteConfig.url}/crazy-chicken-3d`,
    siteName: siteConfig.name,
    images: [
      {
        url: `/assets/crazy-chicken-3d/crazy-chicken-3d.webp`,
        alt: `Crazy Chicken 3D Screenshot`,
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crazy Chicken 3D - Free Online Unblocked Game',
    description: 'Play Crazy Chicken 3D free online game without download',
    images: [`/assets/crazy-chicken-3d/crazy-chicken-3d.webp`],
  },
  alternates: {
    canonical: 'https://plonky.top/',
  },
  robots: {
    index: true,
    follow: true,
  }
};

// 游戏页面配置
const gameConfig = {
  metadata: {
    title: "Crazy Chicken 3D",
    description: "Play Crazy Chicken 3D - a free physics-based action game right in your browser. No downloads required.",
    url: "/crazy-chicken-3d"
  },
  content: crazyChickenContent
};

export default function CrazyChicken3DPage() {
  return <GamePageTemplate gameConfig={gameConfig} />;
}




