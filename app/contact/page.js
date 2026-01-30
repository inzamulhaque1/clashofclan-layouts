import { generatePageMeta } from '@/lib/seo';
import Link from 'next/link';

export const metadata = generatePageMeta({
  title: 'Contact Us - Game365Hub',
  description: 'Contact Game365Hub for questions, feedback, or business inquiries. We\'d love to hear from you!',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <div className="min-h-[80vh]">
      {/* Hero Section with Gradient Background */}
      <div
        className="relative overflow-hidden py-20"
        style={{
          background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(99, 102, 241, 0.1) 50%, transparent 100%)'
        }}
      >
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full blur-3xl opacity-20" style={{ background: 'var(--game-primary)' }} />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full blur-3xl opacity-10" style={{ background: '#6366F1' }} />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm mb-8 px-4 py-2 rounded-full transition-all hover:scale-105"
            style={{ background: 'var(--surface-100)', color: 'var(--text-muted)' }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>

          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 shadow-lg" style={{ background: 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)' }}>
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Get in Touch
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            Have a question, feedback, or want to work with us? We&apos;d love to hear from you!
          </p>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 -mt-8">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Email Card */}
          <div
            className="group relative overflow-hidden rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" style={{ background: '#8B5CF6' }} />

            <div className="relative">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{ background: 'rgba(139, 92, 246, 0.15)' }}
              >
                <svg className="w-7 h-7" style={{ color: '#8B5CF6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>

              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                Email Us
              </h3>
              <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
                For general inquiries, feedback, content suggestions, or bug reports.
              </p>

              <a
                href="mailto:inzamulhaque1002@gmail.com"
                className="inline-flex items-center gap-2 font-medium group/link"
                style={{ color: '#8B5CF6' }}
              >
                inzamulhaque1002@gmail.com
                <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* WhatsApp Card */}
          <div
            className="group relative overflow-hidden rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" style={{ background: '#25D366' }} />

            <div className="relative">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{ background: 'rgba(37, 211, 102, 0.15)' }}
              >
                <svg className="w-7 h-7" style={{ color: '#25D366' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>

              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                WhatsApp
              </h3>
              <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
                For quick responses, business inquiries, or partnerships.
              </p>

              <a
                href="https://wa.me/8801728005274"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-medium group/link"
                style={{ color: '#25D366' }}
              >
                +880 1728 005274
                <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ / What We Help With */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-10" style={{ color: 'var(--text-primary)' }}>
          What Can We Help With?
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: '💡', title: 'Content Requests', desc: 'Suggest new guides or game coverage' },
            { icon: '🐛', title: 'Bug Reports', desc: 'Something broken? Let us know' },
            { icon: '💬', title: 'Feedback', desc: 'Help us improve the site' },
            { icon: '📢', title: 'Advertising', desc: 'Reach our gaming audience' },
            { icon: '🤝', title: 'Partnerships', desc: 'Collaborate with us' },
            { icon: '⚖️', title: 'Copyright', desc: 'DMCA and content concerns' },
          ].map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 p-4 rounded-xl transition-colors"
              style={{ background: 'var(--surface-50)' }}
            >
              <span className="text-2xl">{item.icon}</span>
              <div>
                <h3 className="font-medium mb-1" style={{ color: 'var(--text-primary)' }}>{item.title}</h3>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Response Time Notice */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div
          className="relative overflow-hidden rounded-2xl p-8 text-center"
          style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}
        >
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full" style={{ background: 'linear-gradient(135deg, #8B5CF6, #6366F1)' }} />
          </div>

          <div className="relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ background: 'rgba(139, 92, 246, 0.15)', color: '#8B5CF6' }}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Response Time
            </div>
            <p className="text-lg mb-2" style={{ color: 'var(--text-primary)' }}>
              We typically respond within <strong>24-48 hours</strong>
            </p>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              For faster response, message us on WhatsApp
            </p>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <p className="text-center mb-4" style={{ color: 'var(--text-muted)' }}>
          You might also find these helpful:
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/about"
            className="px-5 py-2.5 rounded-xl text-sm font-medium transition-all hover:scale-105"
            style={{ background: 'var(--surface-100)', color: 'var(--text-primary)', border: '1px solid var(--border)' }}
          >
            About Us
          </Link>
          <Link
            href="/privacy"
            className="px-5 py-2.5 rounded-xl text-sm font-medium transition-all hover:scale-105"
            style={{ background: 'var(--surface-100)', color: 'var(--text-primary)', border: '1px solid var(--border)' }}
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="px-5 py-2.5 rounded-xl text-sm font-medium transition-all hover:scale-105"
            style={{ background: 'var(--surface-100)', color: 'var(--text-primary)', border: '1px solid var(--border)' }}
          >
            Terms of Service
          </Link>
          <Link
            href="/clash-of-clans/guides"
            className="px-5 py-2.5 rounded-xl text-sm font-medium transition-all hover:scale-105"
            style={{ background: 'var(--surface-100)', color: 'var(--text-primary)', border: '1px solid var(--border)' }}
          >
            Guides
          </Link>
        </div>
      </div>
    </div>
  );
}
