import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";
import Link from "next/link"; // Import Link for internal navigation

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-4xl text-center font-bold mb-10">Contact Plonky</h2> {/* Increased mb slightly */}

          {/* Retaining simpler structure, applying richer text content */}
          <div className="space-y-8 text-lg"> {/* Increased space-y for more separation between sections */}
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Need Assistance? We're Here to Help!</h2>
              <p className="leading-relaxed">
                If you have any inquiries about Plonky, comments, or proposals on how we can improve our game and platform, please don't hesitate to contact us. 
                You can drop us a line at <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline font-medium">{siteConfig.email}</a>, and we'll reply promptly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">About {siteConfig.name}</h2>
              <p className="leading-relaxed">
                Plonky is a browser‑based physics puzzle experience designed for fast, accessible play on any device. We aim to keep Plonky polished, responsive, and enjoyable for players around the world.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Feedback and Suggestions</h2>
              <p className="leading-relaxed">
                We highly value your feedback! If you have suggestions for improving Plonky, ideas for new levels, or any other thoughts you'd like to share, please let us know. Your input helps us make Plonky better for everyone.
              </p>
            </section>
            
            <section className="mt-6 bg-muted/50 p-6 rounded-lg border border-border"> {/* Styled thank you block */}
              <p className="italic text-foreground/80 leading-relaxed">
                Thank you for playing Plonky. We hope you enjoy your time here and continue to love our game!
              </p>
            </section>

            <section className="mt-8 border-t border-border pt-8">
              <p className="leading-relaxed">
                For more information, please visit our <Link href="/about" className="text-primary hover:underline font-medium">About Plonky</Link> page. 
                You can also review our <Link href="/privacy-policy" className="text-primary hover:underline font-medium">Plonky Privacy Policy</Link> and <Link href="/terms-of-service" className="text-primary hover:underline font-medium">Plonky Terms of Service</Link>.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
