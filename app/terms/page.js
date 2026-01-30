import { generatePageMeta } from '@/lib/seo';
import Link from 'next/link';

export const metadata = generatePageMeta({
  title: 'Terms of Service - Game365Hub',
  description: 'Terms of Service for Game365Hub. Read our terms and conditions for using our gaming resource website.',
  path: '/terms',
});

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <Link
        href="/"
        className="text-sm transition-colors mb-4 inline-flex items-center gap-2"
        style={{ color: 'var(--text-muted)' }}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Home
      </Link>

      <h1 className="text-3xl font-bold mb-8" style={{ color: 'var(--text-primary)' }}>Terms of Service</h1>

      <div className="space-y-8" style={{ color: 'var(--text-secondary)' }}>
        <p style={{ color: 'var(--text-muted)' }}>
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>1. Acceptance of Terms</h2>
          <p>
            By accessing and using Game365Hub (&quot;the Website&quot;), you accept and agree to be bound by these Terms of Service.
            If you do not agree to these terms, please do not use our website.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>2. Description of Service</h2>
          <p>
            Game365Hub provides gaming resources including base layouts, guides, tier lists, strategies, and other content
            for popular mobile games including Clash of Clans, Brawl Stars, Clash Royale, and others.
            Our service allows users to browse gaming content for personal, non-commercial use.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>3. User Conduct</h2>
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
          <h2 className="text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>4. Intellectual Property</h2>
          <p>
            The content displayed on our website is shared for community use. All game names, logos,
            and related marks are trademarks of their respective owners (Supercell, Garena, PUBG Corporation, etc.).
            We do not claim ownership of any game intellectual property.
          </p>
          <p>
            Our website design, code, and original content are protected by copyright and may not be reproduced
            without permission.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>5. Disclaimer</h2>
          <p>
            <strong>Not Affiliated with Game Developers:</strong> Game365Hub is a fan-made website and is not affiliated with,
            endorsed, sponsored, or specifically approved by Supercell, Garena, PUBG Corporation, or any other game developer.
          </p>
          <p>
            <strong>No Guarantees:</strong> We do not guarantee that any strategy, layout, or guide will perform in a specific way
            in-game. Effectiveness depends on many factors including player skill, game updates, and other variables.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>6. Limitation of Liability</h2>
          <p>
            The Website and its content are provided &quot;as is&quot; without warranties of any kind. We shall not be liable
            for any direct, indirect, incidental, special, or consequential damages arising from the use of our website.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>7. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the content or
            practices of these external sites and encourage you to review their terms of service.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>8. Advertisements</h2>
          <p>
            We display advertisements on our website to support our service. These ads are served by third-party
            advertising networks. By using our website, you agree to view these advertisements.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>9. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately
            upon posting. Your continued use of the website after changes constitutes acceptance of the new terms.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>10. Termination</h2>
          <p>
            We reserve the right to terminate or restrict your access to the website at any time, without notice,
            for any reason, including violation of these Terms of Service.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>11. Governing Law</h2>
          <p>
            These Terms of Service shall be governed by and construed in accordance with applicable laws,
            without regard to conflicts of law principles.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>12. Contact Us</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us at:
          </p>
          <p>
            <Link href="/contact" style={{ color: 'var(--game-primary)' }} className="hover:underline">
              Contact Page
            </Link>
          </p>
        </section>
      </div>
    </div>
  );
}
