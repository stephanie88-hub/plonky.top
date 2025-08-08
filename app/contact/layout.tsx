import { Metadata } from 'next';
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Contact Plonky | Get in Touch`,
  description: `Contact the Plonky team. Share feedback, report issues, or ask questions about playing Plonky online.`,
  alternates: {
    canonical: 'https://plonky.top/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Contact Plonky',
    description: 'Reach the Plonky team for support, feedback, and partnership inquiries.',
    url: `${siteConfig.url}/contact`,
    siteName: siteConfig.name,
  }
};

export default function ContactPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
