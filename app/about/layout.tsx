import { Metadata } from 'next';
import { siteConfig } from "@/config/site"; // Assuming siteConfig provides the domain/name

export const metadata: Metadata = {
  title: `About Plonky | About Us - ${siteConfig.name}`,
  description: `Learn about Plonky: who we are, our mission, and how Plonky brings free physics puzzle fun to your browser. Discover the team behind Plonky and our commitment to players.`,
  alternates: {
    canonical: 'https://plonky.top/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: `About Plonky | Our Mission & Team`,
    description: `Get to know Plonky – the browser-based physics puzzle experience and the team creating it.`,
    url: `${siteConfig.url}/about`,
    siteName: siteConfig.name,
  }
};

export default function AboutPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
