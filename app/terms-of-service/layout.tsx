import { Metadata } from 'next';
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Plonky Terms of Service | Use of ${siteConfig.name}`,
  description: 'Read the Plonky Terms of Service. These terms govern access to and use of Plonky and related services offered on this website.',
  alternates: {
    canonical: 'https://plonky.top/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Plonky Terms of Service',
    description: 'Understand your rights and responsibilities when using Plonky.',
    url: `${siteConfig.url}/terms-of-service`,
    siteName: siteConfig.name,
  },
};

export default function TermsOfServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
