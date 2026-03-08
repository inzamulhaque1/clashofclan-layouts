import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata = createMetadata({
  title: `Terms of Service - ${SITE_NAME}`,
  description: `Terms of Service for ${SITE_NAME}. Read our terms and conditions for using our gaming resource hub.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <div className="container-custom py-10">
      <div className="max-w-3xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-1">Terms of Service</h1>
        <p className="text-muted text-sm mb-8">Last updated: March 8, 2026</p>

        {/* Quick Summary */}
        <div className="bg-[#1B1C3C] text-white rounded-2xl p-6 mb-10">
          <p className="text-sm font-semibold text-primary mb-1">TL;DR</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            {SITE_NAME} is a free gaming resource website. You can read and share
            our content for personal use. Do not copy or sell it. We are not
            affiliated with any game company. Use the site at your own
            discretion.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-10">
          <p className="text-sm font-bold text-light mb-3">On this page</p>
          <div className="grid grid-cols-2 gap-x-6 gap-y-2">
            {[
              "Acceptance of Terms",
              "Use of Content",
              "User Conduct",
              "Intellectual Property",
              "Disclaimer & Warranties",
              "Limitation of Liability",
              "External Links",
              "Account & Access",
              "Governing Law",
              "Changes to Terms",
              "Contact",
            ].map((item, i) => (
              <a
                key={i}
                href={`#section-${i + 1}`}
                className="text-sm text-muted hover:text-primary transition-colors"
              >
                {i + 1}. {item}
              </a>
            ))}
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {/* 1 */}
          <section id="section-1">
            <h2 className="text-xl font-bold text-light mb-3 flex items-center gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary text-white text-sm font-bold flex items-center justify-center">1</span>
              Acceptance of Terms
            </h2>
            <div className="text-muted text-sm leading-relaxed space-y-3 pl-11">
              <p>
                By accessing, browsing, or using {SITE_NAME} located at{" "}
                <span className="font-medium text-light">{SITE_URL}</span>, you
                acknowledge that you have read, understood, and agree to be
                legally bound by these Terms of Service and our{" "}
                <Link href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
              <p>
                If you do not agree with any part of these terms, you must
                immediately stop using our website. Your continued use of the
                site constitutes your acceptance of these terms as they may be
                modified from time to time.
              </p>
            </div>
          </section>

          {/* 2 */}
          <section id="section-2">
            <h2 className="text-xl font-bold text-light mb-3 flex items-center gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary text-white text-sm font-bold flex items-center justify-center">2</span>
              Use of Content
            </h2>
            <div className="text-muted text-sm leading-relaxed space-y-3 pl-11">
              <p>
                All content published on {SITE_NAME} including but not limited to
                game guides, strategy articles, tier lists, images, graphics, and
                videos is provided strictly for informational and educational
                purposes. Our content is designed to help mobile gamers improve
                their skills and enjoy their gaming experience.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <p className="text-xs font-bold text-green-800 uppercase tracking-wide mb-2">Permitted Use</p>
                  <ul className="text-sm text-green-700 space-y-2">
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      Read and use guides for personal gaming improvement
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      Share direct links to our articles on social media
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      Quote small excerpts with proper attribution and link back
                    </li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <p className="text-xs font-bold text-red-800 uppercase tracking-wide mb-2">Prohibited Use</p>
                  <ul className="text-sm text-red-700 space-y-2">
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                      Copy, scrape, or republish our content without written permission
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                      Use our content for any commercial or monetization purpose
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                      Modify, translate, or create derivative works from our content
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 3 */}
          <section id="section-3">
            <h2 className="text-xl font-bold text-light mb-3 flex items-center gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary text-white text-sm font-bold flex items-center justify-center">3</span>
              User Conduct
            </h2>
            <div className="text-muted text-sm leading-relaxed space-y-3 pl-11">
              <p>
                When using {SITE_NAME}, you agree to behave responsibly and
                lawfully. You agree not to:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Attempt to gain unauthorized access to any part of the website, server, or database
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Use automated tools, bots, or scrapers to extract content from the site
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Introduce malware, viruses, or any harmful code
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Engage in any activity that disrupts or interferes with the website&apos;s functionality
                </li>
              </ul>
              <p>
                We reserve the right to restrict access to any user who violates
                these guidelines.
              </p>
            </div>
          </section>

          {/* 4 */}
          <section id="section-4">
            <h2 className="text-xl font-bold text-light mb-3 flex items-center gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary text-white text-sm font-bold flex items-center justify-center">4</span>
              Intellectual Property
            </h2>
            <div className="text-muted text-sm leading-relaxed space-y-3 pl-11">
              <p>
                All original content on {SITE_NAME}, including text, graphics,
                logos, page layouts, and software, is the intellectual property of
                {SITE_NAME} and is protected by applicable copyright laws.
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="text-sm text-amber-800">
                  <span className="font-semibold">Third-Party Trademarks:</span>{" "}
                  Game names, logos, characters, and images (Clash of Clans, Brawl
                  Stars, Clash Royale, Free Fire, PUBG Mobile, etc.) are
                  trademarks of their respective owners including Supercell Oy,
                  Garena International, and Krafton Inc. {SITE_NAME} is an
                  independent fan-made resource and is not endorsed by, affiliated
                  with, or sponsored by any game developer or publisher.
                </p>
              </div>
            </div>
          </section>

          {/* 5 */}
          <section id="section-5">
            <h2 className="text-xl font-bold text-light mb-3 flex items-center gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary text-white text-sm font-bold flex items-center justify-center">5</span>
              Disclaimer & Warranties
            </h2>
            <div className="text-muted text-sm leading-relaxed space-y-3 pl-11">
              <p>
                The information on {SITE_NAME} is provided on an &quot;as
                is&quot; and &quot;as available&quot; basis without warranties of
                any kind, either express or implied, including but not limited to
                warranties of merchantability, fitness for a particular purpose,
                or non-infringement.
              </p>
              <p>
                Gaming strategies, tier lists, base layouts, and meta analyses
                are subject to change with game updates, patches, and balance
                changes. While we strive to keep our content accurate and
                up-to-date, we cannot guarantee that all information reflects the
                current state of any game at all times.
              </p>
              <p>
                We do not guarantee that using our strategies will result in
                specific in-game outcomes such as wins, rank increases, or trophy
                gains.
              </p>
            </div>
          </section>

          {/* 6 */}
          <section id="section-6">
            <h2 className="text-xl font-bold text-light mb-3 flex items-center gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary text-white text-sm font-bold flex items-center justify-center">6</span>
              Limitation of Liability
            </h2>
            <div className="text-muted text-sm leading-relaxed space-y-3 pl-11">
              <p>
                To the fullest extent permitted by applicable law, {SITE_NAME},
                its owners, contributors, and affiliates shall not be liable for
                any direct, indirect, incidental, special, consequential, or
                punitive damages, including but not limited to loss of data, loss
                of profits, or loss of in-game progress, arising from:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Your use of or inability to use our website or content
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Any errors, inaccuracies, or omissions in our content
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Unauthorized access to or alteration of your data
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Any third-party conduct or content on our website
                </li>
              </ul>
            </div>
          </section>

          {/* 7 */}
          <section id="section-7">
            <h2 className="text-xl font-bold text-light mb-3 flex items-center gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary text-white text-sm font-bold flex items-center justify-center">7</span>
              External Links
            </h2>
            <div className="text-muted text-sm leading-relaxed space-y-3 pl-11">
              <p>
                Our website may contain hyperlinks to third-party websites,
                services, or resources that are not owned or controlled by{" "}
                {SITE_NAME}. These links are provided for convenience and
                reference only.
              </p>
              <p>
                We have no control over the content, privacy practices, or
                availability of these external sites. Inclusion of any link does
                not imply endorsement or recommendation. We strongly encourage
                you to review the terms and privacy policies of any third-party
                website you visit through links on our site.
              </p>
            </div>
          </section>

          {/* 8 */}
          <section id="section-8">
            <h2 className="text-xl font-bold text-light mb-3 flex items-center gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary text-white text-sm font-bold flex items-center justify-center">8</span>
              Account & Access
            </h2>
            <div className="text-muted text-sm leading-relaxed space-y-3 pl-11">
              <p>
                {SITE_NAME} currently does not require user accounts for
                accessing content. All guides, articles, and resources are
                freely available without registration.
              </p>
              <p>
                Should we introduce account features in the future, additional
                terms regarding account creation, security, and responsibilities
                will be provided at that time. We reserve the right to restrict
                or terminate access to any user at our sole discretion.
              </p>
            </div>
          </section>

          {/* 9 */}
          <section id="section-9">
            <h2 className="text-xl font-bold text-light mb-3 flex items-center gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary text-white text-sm font-bold flex items-center justify-center">9</span>
              Governing Law
            </h2>
            <div className="text-muted text-sm leading-relaxed space-y-3 pl-11">
              <p>
                These Terms of Service shall be governed by and construed in
                accordance with applicable international laws. Any disputes
                arising from or related to the use of {SITE_NAME} shall be
                resolved through good-faith negotiation. If a resolution cannot
                be reached, the matter shall be subject to the jurisdiction of
                the applicable courts.
              </p>
            </div>
          </section>

          {/* 10 */}
          <section id="section-10">
            <h2 className="text-xl font-bold text-light mb-3 flex items-center gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary text-white text-sm font-bold flex items-center justify-center">10</span>
              Changes to Terms
            </h2>
            <div className="text-muted text-sm leading-relaxed space-y-3 pl-11">
              <p>
                We reserve the right to update, modify, or replace any part of
                these Terms of Service at our sole discretion and at any time.
                Changes will take effect immediately upon being posted on this
                page. The &quot;Last updated&quot; date at the top of this page
                will be revised accordingly.
              </p>
              <p>
                It is your responsibility to review these terms periodically. Your
                continued use of {SITE_NAME} after any changes constitutes
                acceptance of the updated terms.
              </p>
            </div>
          </section>

          {/* 11 */}
          <section id="section-11">
            <h2 className="text-xl font-bold text-light mb-3 flex items-center gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary text-white text-sm font-bold flex items-center justify-center">11</span>
              Contact
            </h2>
            <div className="text-muted text-sm leading-relaxed space-y-3 pl-11">
              <p>
                If you have any questions, concerns, or feedback regarding these
                Terms of Service, please do not hesitate to reach out to us:
              </p>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                <p className="text-sm">
                  <span className="font-semibold text-light">Email:</span>{" "}
                  <a href="mailto:inzamul.dev@gmail.com" className="text-primary hover:underline">
                    inzamul.dev@gmail.com
                  </a>
                </p>
                <p className="text-sm mt-1">
                  <span className="font-semibold text-light">Website:</span>{" "}
                  <Link href="/contact" className="text-primary hover:underline">
                    {SITE_URL}/contact
                  </Link>
                </p>
              </div>
            </div>
          </section>
        </div>

      </div>
    </div>
  );
}
