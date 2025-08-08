import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-3xl text-center font-bold mb-6">Plonky Privacy Policy</h2>

          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
              <p>
                Welcome to Plonky. We respect your privacy and are committed to protecting your personal data while you enjoy Plonky in your browser. This policy explains how Plonky handles information and your privacy rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">2. Information We Collect</h2>
              <p className="mb-4">
                Like most browser games, Plonky collects non‑personally identifying information provided by web browsers and servers. This includes:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Browser type and version</li>
                <li>Language preferences</li>
                <li>Referring site</li>
                <li>Date and time of each request</li>
                <li>Screen resolution and device type</li>
                <li>Operating system</li>
              </ul>
              <p className="mb-4">
                Plonky uses this data to understand usage patterns and improve performance, controls, and overall gameplay experience.
              </p>
              <p>
                Aggregated, non‑identifying information may be published to highlight Plonky usage trends. This data cannot identify individual players.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">3. How We Use Your Information</h2>
              <p>Plonky uses collected data to:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Provide and maintain Plonky services</li>
                <li>Notify you about changes to Plonky</li>
                <li>Offer customer support</li>
                <li>Analyze performance to improve Plonky</li>
                <li>Monitor service stability and security</li>
                <li>Detect, prevent, and address technical issues</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">4. Cookies and Tracking</h2>
              <p>
                Plonky uses cookies and similar technologies for essential functionality and analytics. You can configure your browser to refuse cookies, but some Plonky features may not function correctly without them.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">5. Third‑Party Services</h2>
              <p>Plonky may use reputable third‑party providers to:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Facilitate gameplay delivery</li>
                <li>Provide the service on our behalf</li>
                <li>Perform service‑related tasks</li>
                <li>Help us analyze how Plonky is used</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">6. Security</h2>
              <p>
                We take reasonable measures to secure Plonky data; however, no transmission or storage method is 100% secure. We continuously improve Plonky to safeguard your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">7. Children’s Privacy</h2>
              <p>
                Plonky is intended for general audiences and does not knowingly collect personal information from children under 13. If you believe such data has been provided, contact us to remove it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">8. Changes to This Policy</h2>
              <p>
                We may update the Plonky Privacy Policy from time to time. Changes take effect upon posting on this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">9. Contact Us</h2>
              <p>If you have questions about Plonky privacy, contact us at:</p>
              <p className="mt-2">By email: support@plonky.top</p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;



