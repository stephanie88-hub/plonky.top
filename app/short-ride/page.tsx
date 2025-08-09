import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
import { shortRideContent } from "./content";

export const metadata: Metadata = {
  title: 'Short Ride - Free Physics Bike Game | Play Online Unblocked',
  description: 'Play Short Ride online for free - the ultimate ragdoll physics bike game! Master bike obstacles and enhanced physics mechanics.',
  openGraph: {
    title: 'Short Ride - Free Ragdoll Physics Bike Game | Play Online',
    description: 'Master Short Ride - the enhanced ragdoll physics bike adventure with creative obstacles and fast-paced gameplay.',
    type: 'website',
    url: `${siteConfig.url}/short-ride`,
    siteName: siteConfig.name,
    images: [
      {
        url: `/assets/short-ride/short-ride.png`,
        width: 1200,
        height: 630,
        alt: 'Short Ride - Ragdoll Physics Bike Game Screenshot',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Short Ride - Free Ragdoll Physics Bike Game',
    description: 'Master Short Ride - enhanced ragdoll physics with fast-paced bike action. Play free online!',
    images: [`/assets/short-ride/short-ride.png`],
  },
  alternates: {
    canonical: 'https://plonky.top/',
  },
  robots: {
  }
};

const gameConfig = {
  metadata: {
    title: "Short Ride",
    description: "Experience Short Ride, the ultimate ragdoll physics bike adventure with enhanced obstacle courses and improved gameplay mechanics.",
    url: "/short-ride"
  },
  content: shortRideContent
};

export default function ShortRidePage() {
  return <GamePageTemplate gameConfig={gameConfig} />;
}
