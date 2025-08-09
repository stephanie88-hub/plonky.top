import { HomeTemplate } from "@/components/home/HomeTemplate";

export const metadata = {
  alternates: {
    canonical: 'https://plonky.top/',
  },
  title: 'Plonky - Free Physics Puzzle Game | Play Online Unblocked',
  description: 'Play this free physics puzzle game online - the ultimate ragdoll physics adventure! Master physics mechanics and solve creative puzzles.',
  openGraph: {
    title: 'Plonky - Free Physics Puzzle Game | Play Online',
    description: 'Master ragdoll physics in this ultimate puzzle adventure game. Solve creative challenges and conquer 50+ levels for free!',
    type: 'website',
    url: 'https://plonky.top',
    siteName: 'Plonky',
    images: [
      {
        url: '/assets/img/plonky.png',
        width: 1200,
        height: 630,
        alt: 'Physics Puzzle Game Screenshot - Ragdoll Physics Adventure',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Plonky - Free Physics Puzzle Game',
    description: 'Master ragdoll physics in this ultimate puzzle adventure game. Play free online!',
    images: ['/assets/img/plonky.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <HomeTemplate />;
}
