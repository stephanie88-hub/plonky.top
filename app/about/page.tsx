import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-4xl text-center font-bold mb-8">About Plonky</h2>

          <div className="space-y-6 text-lg">
            <section>
              <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
              <p>
                Plonky exists to deliver fun, accessible, and engaging browser-based physics puzzle experiences for everyone. We believe Plonky can bring joy, challenge minds, and connect people. Our focus is creating innovative, instant‑play games that work right in your browser without downloads or barriers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Who We Are</h2>
              <p>
                We are a small, dedicated team of developers and designers behind Plonky. What began as a passion project became Plonky – a polished, shareable game experience built with care and long‑term community support in mind.
              </p>
              <p className="mt-4">
                While Plonky champions physics‑based puzzle gameplay, we continue exploring new ideas to keep Plonky fresh and fun for players of all levels.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Our Games</h2>
              <p>
                Plonky centers on precise physics, creative level design, and instant play. Every update to Plonky focuses on polish, performance, and replayability so players can enjoy quick sessions on desktop or mobile.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3">Our Commitment</h2>
              <p>
                We’re committed to keeping Plonky fast, safe, and free to play. Your feedback helps us improve Plonky’s controls, levels, and performance across devices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
              <p>
                Have questions about Plonky or ideas for new features? We’d love to hear from you!
              </p>
              <p className="mt-2">
                You can reach us by email at: <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">{siteConfig.email}</a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
