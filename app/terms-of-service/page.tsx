import React from 'react';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-3xl text-center font-bold mb-6">Plonky Terms of Service</h2>

          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing and using Plonky on this website, you accept and agree to be bound by these terms. If you do not agree, please refrain from using Plonky or related services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">2. Use License</h2>
              <p className="mb-4">
                Permission is granted to temporarily access Plonky and related materials for personal, non‑commercial, transitory viewing only. This is a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Modify or copy Plonky materials</li>
                <li>Use Plonky for any commercial purpose</li>
                <li>Attempt to decompile or reverse engineer any Plonky software</li>
                <li>Remove any copyright or proprietary notices</li>
                <li>Transfer Plonky materials or mirror them elsewhere</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">3. User Conduct</h2>
              <p className="mb-4">When using Plonky, you agree not to:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Interfere with the proper working of Plonky</li>
                <li>Introduce malicious software</li>
                <li>Attempt to gain unauthorized access to any portion of the service</li>
                <li>Use Plonky for unlawful purposes</li>
                <li>Harass, abuse, or harm another person</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">4. Disclaimer</h2>
              <p>
                Plonky and all materials are provided on an “as is” basis without warranties of any kind, express or implied.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">5. Limitations</h2>
              <p>
                In no event shall we be liable for damages arising out of the use or inability to use Plonky, even if advised of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">6. Accuracy of Materials</h2>
              <p>
                Plonky materials may include technical or typographical errors. We may make changes at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">7. Links</h2>
              <p>
                External links are not reviewed. Inclusion of any link does not imply endorsement. Use at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">8. Modifications</h2>
              <p>
                We may revise these Plonky terms at any time. Continued use of Plonky constitutes acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">9. Governing Law</h2>
              <p>
                These terms are governed by applicable laws, and you submit to the exclusive jurisdiction of the relevant courts.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">10. Contact Us</h2>
              <p>
                Questions about these Plonky Terms of Service? Contact us at support@plonky.top.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;





