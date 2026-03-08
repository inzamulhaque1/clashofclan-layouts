import { createMetadata } from "@/lib/seo";
import { SITE_NAME } from "@/lib/constants";

export const metadata = createMetadata({
  title: `Contact Us - ${SITE_NAME}`,
  description: `Get in touch with the ${SITE_NAME} team. Questions, feedback, or business inquiries — we'd love to hear from you.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="container-custom py-10">
      <div className="max-w-3xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Contact <span className="text-primary">Us</span>
        </h1>
        <p className="text-muted text-sm mb-10">
          Have a question, suggestion, or feedback? We would love to hear from you.
        </p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          <a
            href="mailto:inzamul.dev@gmail.com"
            className="border border-gray-200 rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-bold text-light mb-1">General Inquiries</h3>
            <p className="text-xs text-muted mb-3">
              Questions, feedback, bug reports, or content suggestions
            </p>
            <span className="text-primary text-sm font-medium group-hover:underline">
              inzamul.dev@gmail.com
            </span>
          </a>

          <a
            href="mailto:inzamul.dev@gmail.com?subject=Business Inquiry - Game365Hub"
            className="border border-gray-200 rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-bold text-light mb-1">Business & Partnerships</h3>
            <p className="text-xs text-muted mb-3">
              Advertising, sponsorship, collaborations, or media inquiries
            </p>
            <span className="text-primary text-sm font-medium group-hover:underline">
              inzamul.dev@gmail.com
            </span>
          </a>
        </div>

        {/* Response Time */}
        <div className="bg-[#1B1C3C] text-white rounded-2xl p-6 mb-10">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-sm mb-1">Response Time</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                We typically respond within 24-48 hours. For urgent matters,
                please include &quot;URGENT&quot; in your email subject line.
                We read every message and appreciate your patience.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-xl font-bold text-light mb-5">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: "Can I contribute guides or articles?",
                a: "Absolutely! If you are an experienced player and want to share your knowledge, send us an email with your game, topic idea, and a brief writing sample. We are always looking for passionate contributors.",
              },
              {
                q: "How often is content updated?",
                a: "We update our guides and tier lists regularly, especially after major game updates, balance changes, and new season releases. Our goal is to keep all content as current as possible.",
              },
              {
                q: "Found an error or outdated info in a guide?",
                a: "Please let us know via email with the article link and the correction. We take accuracy seriously and will update the content as soon as possible. We appreciate the help!",
              },
              {
                q: "Can I use your content on my website or YouTube channel?",
                a: "You may quote small excerpts with proper attribution and a link back to the original article. Full reproduction or translation requires written permission. See our Terms of Service for details.",
              },
              {
                q: "Do you cover PC or console games?",
                a: "Currently we focus exclusively on mobile games. We may expand to other platforms in the future based on demand.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-xl p-5"
              >
                <h3 className="font-bold text-light text-sm mb-2">{faq.q}</h3>
                <p className="text-muted text-xs leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
