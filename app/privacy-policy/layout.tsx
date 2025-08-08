import { Metadata } from 'next';
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Plonky Privacy Policy | Your Privacy on ${siteConfig.name}`,
  description: `Read the Plonky Privacy Policy to learn how ${siteConfig.name} collects, uses, and protects your information while you play Plonky in your browser.`,
  alternates: {
    canonical: 'https://plonky.top/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Plonky Privacy Policy',
    description: 'Understand how Plonky handles data, cookies, and security for a safe browser gaming experience.',
    url: `${siteConfig.url}/privacy-policy`,
    siteName: siteConfig.name,
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
