import { generatePageMeta } from '@/lib/seo';
import Link from 'next/link';

export const metadata = generatePageMeta({
  title: 'Terms of Service - CoC Bases',
  description: 'Terms of Service for CoC Bases. Read our terms and conditions for using our Clash of Clans base layout website.',
  path: '/terms',
});

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <Link href="/" className="text-sm text-muted hover:text-white transition-colors mb-4 inline-block">
        ← Back to Home
      </Link>

      <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>

      <div className="prose prose-invert max-w-none space-y-6" style={{ color: 'var(--text-secondary)' }}>
        <p className="text-muted">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">1. Acceptance of Terms</h2>
          <p>
            By accessing and using CoC Bases (&quot;the Website&quot;), you accept and agree to be bound by these Terms of Service.
            If you do not agree to these terms, please do not use our website.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">2. Description of Service</h2>
          <p>
            CoC Bases provides a collection of Clash of Clans base layouts with copy links for personal,
            non-commercial use. Our service allows users to browse and copy base layouts directly into their game.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">3. User Conduct</h2>
          <p>You agree not to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use the website for any unlawful purpose</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Interfere with the proper functioning of the website</li>
            <li>Scrape, copy, or redistribute our content without permission</li>
            <li>Use automated systems to access the website in a manner that sends more requests than a human can reasonably produce</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">4. Intellectual Property</h2>
          <p>
            The base layouts displayed on our website are shared for community use. Clash of Clans, its logo,
            and all related marks are trademarks of Supercell. We do not claim ownership of any Clash of Clans
            intellectual property.
          </p>
          <p>
            Our website design, code, and original content are protected by copyright and may not be reproduced
            without permission.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">5. Disclaimer</h2>
          <p>
            <strong>Not Affiliated with Supercell:</strong> CoC Bases is a fan-made website and is not affiliated with,
            endorsed, sponsored, or specifically approved by Supercell. Clash of Clans is a registered trademark of Supercell Oy.
          </p>
          <p>
            <strong>No Guarantees:</strong> We do not guarantee that any base layout will perform in a specific way
            in the game. Base effectiveness depends on many factors including attacker skill, troop levels, and game updates.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">6. Limitation of Liability</h2>
          <p>
            The Website and its content are provided &quot;as is&quot; without warranties of any kind. We shall not be liable
            for any direct, indirect, incidental, special, or consequential damages arising from the use of our website.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">7. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the content or
            practices of these external sites and encourage you to review their terms of service.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">8. Advertisements</h2>
          <p>
            We display advertisements on our website to support our service. These ads are served by third-party
            advertising networks. By using our website, you agree to view these advertisements.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">9. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately
            upon posting. Your continued use of the website after changes constitutes acceptance of the new terms.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">10. Termination</h2>
          <p>
            We reserve the right to terminate or restrict your access to the website at any time, without notice,
            for any reason, including violation of these Terms of Service.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">11. Governing Law</h2>
          <p>
            These Terms of Service shall be governed by and construed in accordance with applicable laws,
            without regard to conflicts of law principles.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">12. Contact Information</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us at:
          </p>
          <p className="text-primary">contact@cocbases.com</p>
        </section>
      </div>
    </div>
  );
}
