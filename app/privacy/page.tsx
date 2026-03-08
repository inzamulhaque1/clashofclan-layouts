import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata = createMetadata({
  title: `Privacy Policy - ${SITE_NAME}`,
  description: `Privacy Policy for ${SITE_NAME}. Learn how we collect, use, and protect your personal information.`,
  path: "/privacy",
});

const sections = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: "Information We Collect",
    content: (
      <>
        <p>
          When you visit {SITE_NAME} ({SITE_URL}), we may collect certain
          information automatically, including:
        </p>
        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            "Browser type & language",
            "Device type & OS",
            "Pages visited & time spent",
            "Referring website or source",
            "IP address (anonymized)",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              {item}
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "How We Use Your Information",
    content: (
      <>
        <p>We use the collected information to:</p>
        <ul className="mt-3 space-y-2">
          {[
            "Improve our website content and user experience",
            "Analyze site traffic and usage patterns",
            "Prevent spam and maintain security",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Google Analytics",
    content: (
      <p>
        We use Google Analytics to understand how visitors interact with our
        website. Google Analytics uses cookies to collect anonymous usage data.
        You can opt out by installing the{" "}
        <a
          href="https://tools.google.com/dlpage/gaoptout"
          className="text-primary font-medium hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Analytics Opt-out Browser Add-on
        </a>
        .
      </p>
    ),
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
    title: "Advertising",
    content: (
      <p>
        We may display advertisements through third-party advertising networks
        such as Google AdSense. These networks may use cookies and similar
        technologies to serve ads based on your prior visits to our site or
        other websites. You can manage your ad preferences through{" "}
        <a
          href="https://adssettings.google.com"
          className="text-primary font-medium hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Ads Settings
        </a>
        .
      </p>
    ),
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "Cookies",
    content: (
      <div>
        <p>
          Our website uses cookies to enhance your browsing experience. Cookies
          are small text files stored on your device.
        </p>
        <div className="mt-3 bg-amber-50 border border-amber-200 rounded-xl p-4">
          <p className="text-sm text-amber-800">
            <span className="font-semibold">Tip:</span> You can control cookie
            settings through your browser preferences. Disabling cookies may
            affect some features of the site.
          </p>
        </div>
      </div>
    ),
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    ),
    title: "Third-Party Links",
    content: (
      <p>
        Our site may contain links to third-party websites. We are not
        responsible for the privacy practices or content of these external sites.
        We encourage you to review their privacy policies before sharing any
        personal information.
      </p>
    ),
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Children's Privacy",
    content: (
      <p>
        Our website is not directed at children under 13. We do not knowingly
        collect personal information from children. If you believe a child has
        provided us with personal data, please contact us so we can remove it.
      </p>
    ),
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Changes to This Policy",
    content: (
      <p>
        We may update this privacy policy from time to time. Any changes will be
        posted on this page with a revised &quot;Last updated&quot; date. We
        recommend checking back periodically.
      </p>
    ),
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Contact Us",
    content: (
      <p>
        If you have questions about this privacy policy, please contact us at{" "}
        <a
          href="mailto:inzamul.dev@gmail.com"
          className="text-primary font-medium hover:underline"
        >
          inzamul.dev@gmail.com
        </a>
        .
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
      <div className="container-custom py-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-1">Privacy Policy</h1>
          <p className="text-muted text-sm mb-8">Last updated: March 8, 2026</p>
          {/* Quick Summary */}
          <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-10">
            <h2 className="text-sm font-bold text-green-800 uppercase tracking-wide mb-2">
              Your Privacy Matters
            </h2>
            <p className="text-sm text-green-700 leading-relaxed">
              We only collect anonymous analytics data to improve our site. We do
              not sell your data. We use Google Analytics and may show ads via
              Google AdSense. You can opt out of tracking anytime.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-6">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-gray-300 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    {section.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg font-bold text-light mb-2">
                      {index + 1}. {section.title}
                    </h2>
                    <div className="text-muted text-sm leading-relaxed">
                      {section.content}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
  );
}
