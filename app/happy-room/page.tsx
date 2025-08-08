import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
import { happyRoomContent } from "./content";

export const metadata: Metadata = {
  title: 'Happy Room - Free Physics Sandbox Game | Play Online Unblocked',
  description: 'Play Happy Room online for free - the ultimate ragdoll physics sandbox game! Master creative experiments, enhanced physics mechanics, and endless sandbox challenges. Happy Room features improved gameplay, innovative sandbox design, and mobile optimization. No download required, play instantly in your browser!',
  openGraph: {
    title: 'Happy Room - Free Ragdoll Physics Sandbox Game | Play Online',
    description: 'Master Happy Room - the enhanced ragdoll physics sandbox adventure with creative experiments and endless possibilities. Play free online with improved mechanics and mobile support!',
    type: 'website',
    url: `${siteConfig.url}/happy-room`,
    siteName: siteConfig.name,
    images: [
      {
        url: `/assets/happy-room/happy-room.png`,
        width: 1200,
        height: 630,
        alt: 'Happy Room - Ragdoll Physics Sandbox Game Screenshot',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Happy Room - Free Ragdoll Physics Sandbox Game',
    description: 'Master Happy Room - enhanced ragdoll physics with creative sandbox experiments. Play free online!',
    images: [`/assets/happy-room/happy-room.png`],
  },
  alternates: {
    canonical: 'https://plonky.top/',
  }
};

const gameConfig = {
  metadata: {
    title: "Happy Room",
    description: "Experience Happy Room, the ultimate ragdoll physics sandbox adventure with enhanced experiment courses and improved gameplay mechanics. Navigate through creative experiments, master challenging sandbox levels, and enjoy endless physics interactions in this free browser-based game.",
    url: "/happy-room"
  },
  content: happyRoomContent
};

export default function HappyRoomPage() {
  return <GamePageTemplate gameConfig={gameConfig} />;
}
