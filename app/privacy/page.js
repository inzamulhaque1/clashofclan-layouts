import { generatePageMeta } from '@/lib/seo';
import Link from 'next/link';

export const metadata = generatePageMeta({
  title: 'Privacy Policy - CoC Bases',
  description: 'Privacy Policy for CoC Bases. Learn how we collect, use, and protect your data when you use our Clash of Clans base layout website.',
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <Link href="/" className="text-sm text-muted hover:text-white transition-colors mb-4 inline-block">
        ← Back to Home
      </Link>

      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

      <div className="prose prose-invert max-w-none space-y-6" style={{ color: 'var(--text-secondary)' }}>
        <p className="text-muted">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">1. Information We Collect</h2>
          <p>
            We collect information to provide better services to our users. The types of information we collect include:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Usage Data:</strong> We automatically collect information about how you interact with our website, including pages visited, time spent on pages, and navigation patterns.</li>
            <li><strong>Device Information:</strong> We collect device-specific information such as your browser type, operating system, and screen resolution.</li>
            <li><strong>Cookies:</strong> We use cookies and similar technologies to enhance your experience and collect usage data.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">2. How We Use Your Information</h2>
          <p>We use the collected information to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide and improve our services</li>
            <li>Analyze website usage and trends</li>
            <li>Personalize your experience</li>
            <li>Display relevant advertisements</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">3. Google Analytics</h2>
          <p>
            We use Google Analytics to understand how visitors interact with our website. Google Analytics collects information such as how often users visit the site, what pages they visit, and what other sites they used prior to coming to our site.
          </p>
          <p>
            Google Analytics uses cookies to collect this information. You can opt-out of Google Analytics by installing the Google Analytics Opt-out Browser Add-on.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">4. Advertising</h2>
          <p>
            We use third-party advertising companies, including Google AdSense, to serve ads when you visit our website. These companies may use information about your visits to this and other websites to provide relevant advertisements.
          </p>
          <p>
            Google&apos;s use of advertising cookies enables it and its partners to serve ads based on your visit to our site and/or other sites on the Internet. You may opt out of personalized advertising by visiting Google&apos;s Ads Settings.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">5. Cookies</h2>
          <p>
            Cookies are small text files stored on your device. We use cookies for:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Remembering your preferences (like theme settings)</li>
            <li>Analytics and performance tracking</li>
            <li>Advertising purposes</li>
          </ul>
          <p>
            You can control cookies through your browser settings. However, disabling cookies may affect the functionality of our website.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">6. Third-Party Services</h2>
          <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to read the privacy policies of any website you visit.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">7. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">8. Children&apos;s Privacy</h2>
          <p>
            Our website is not intended for children under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">10. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p className="text-primary">contact@cocbases.com</p>
        </section>
      </div>
    </div>
  );
}
