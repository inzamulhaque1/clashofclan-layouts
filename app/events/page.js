import { COC_EVENTS, EVENT_STYLES } from '@/lib/events';
import EventsClient from './EventsClient';
import CoCLiveStats from '@/components/CoCLiveStats';
import LookupSection from './LookupSection';

// SEO Metadata
export const metadata = {
  title: 'Clash of Clans Events 2026 - CWL, Clan Games, Season Challenges | CoC Bases',
  description: 'Stay updated with all Clash of Clans events in 2026. Track CWL dates, Clan Games schedules, seasonal challenges, boost events, and special promotions. Never miss an event!',
  keywords: [
    'clash of clans events',
    'coc events 2026',
    'cwl schedule 2026',
    'clan war league dates',
    'clan games schedule',
    'coc season challenges',
    'clash of clans boost events',
    'coc event calendar',
    'clash of clans updates',
    'supercell events'
  ],
  openGraph: {
    title: 'Clash of Clans Events Calendar 2026 | CoC Bases',
    description: 'Complete schedule of all Clash of Clans events. Track CWL, Clan Games, seasonal challenges, and boost events.',
    type: 'website',
    url: 'https://cocbases.com/events',
    images: [
      {
        url: 'https://coc.guide/static/imgs/other/town-hall-17.png',
        width: 512,
        height: 512,
        alt: 'Clash of Clans Events'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clash of Clans Events 2026',
    description: 'Never miss a CoC event! Track CWL, Clan Games, and more.'
  },
  alternates: {
    canonical: 'https://cocbases.com/events'
  }
};

// Structured Data for SEO
function generateEventsStructuredData() {
  const now = new Date();

  const eventItems = COC_EVENTS.map((event, index) => ({
    '@type': 'Event',
    name: event.name,
    description: event.description,
    startDate: event.startDate,
    endDate: event.endDate,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
    organizer: {
      '@type': 'Organization',
      name: 'Supercell',
      url: 'https://supercell.com'
    },
    location: {
      '@type': 'VirtualLocation',
      url: 'https://clashofclans.com'
    }
  }));

  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Clash of Clans Events 2026',
    description: 'Complete list of all Clash of Clans events and their schedules',
    numberOfItems: eventItems.length,
    itemListElement: eventItems.map((event, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: event
    }))
  };
}

function generateFAQStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'When is the next CWL in Clash of Clans?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Clan War Leagues (CWL) run monthly, typically from the 1st to the 10th of each month. Check our events page for the exact dates of the upcoming CWL season.'
        }
      },
      {
        '@type': 'Question',
        name: 'When are Clan Games in Clash of Clans?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Clan Games typically occur towards the end of each month and last for about 6 days. Players can complete challenges to earn rewards like magic items, books, and runes.'
        }
      },
      {
        '@type': 'Question',
        name: 'What are boost events in Clash of Clans?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Boost events provide temporary bonuses like reduced training time, builder discounts, or increased loot. These events help players progress faster during the event period.'
        }
      },
      {
        '@type': 'Question',
        name: 'How often does Clash of Clans have events?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Clash of Clans has events running almost constantly. Major events include monthly CWL, Clan Games, seasonal challenges (like Winter/Summer), and various boost events throughout the year.'
        }
      }
    ]
  };
}

export default function EventsPage() {
  const eventsStructuredData = generateEventsStructuredData();
  const faqStructuredData = generateFAQStructuredData();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(eventsStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 lg:py-24">
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="events-bg-gradient"></div>
            <div className="events-floating-orb events-orb-1"></div>
            <div className="events-floating-orb events-orb-2"></div>
            <div className="events-floating-orb events-orb-3"></div>
          </div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center events-fade-in">
              {/* Live Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 events-pulse-badge">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                Live Events Tracking
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="events-text-gradient">Clash of Clans</span>
                <br />
                <span style={{ color: 'var(--text-primary)' }}>Events Calendar 2026</span>
              </h1>

              <p className="text-lg lg:text-xl max-w-2xl mx-auto mb-8" style={{ color: 'var(--text-muted)' }}>
                Never miss an event! Track CWL schedules, Clan Games, seasonal challenges,
                boost events, and special promotions all in one place.
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap justify-center gap-6 events-slide-up">
                <div className="events-stat-card">
                  <span className="text-2xl font-bold text-primary">{COC_EVENTS.filter(e => {
                    const now = new Date();
                    const start = new Date(e.startDate);
                    const end = new Date(e.endDate);
                    return now >= start && now <= end;
                  }).length}</span>
                  <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Active Now</span>
                </div>
                <div className="events-stat-card">
                  <span className="text-2xl font-bold text-purple-400">{COC_EVENTS.filter(e => {
                    const now = new Date();
                    const start = new Date(e.startDate);
                    return now < start;
                  }).length}</span>
                  <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Upcoming</span>
                </div>
                <div className="events-stat-card">
                  <span className="text-2xl font-bold text-emerald-400">24/7</span>
                  <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Updated</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Live Game Stats from Official CoC API - PRIORITY */}
        <CoCLiveStats />

        {/* Player & Clan Lookup - PRIORITY */}
        <LookupSection />

        {/* Events Content - Client Component for interactivity */}
        <EventsClient events={COC_EVENTS} eventStyles={EVENT_STYLES} />

        {/* SEO Content Section */}
        <section className="py-16 border-t" style={{ borderColor: 'var(--border)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
              About Clash of Clans Events
            </h2>

            <div className="prose-custom space-y-6" style={{ color: 'var(--text-muted)' }}>
              <p>
                Clash of Clans features a variety of recurring and special events throughout the year.
                Understanding the event schedule helps players maximize their progress and rewards.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4" style={{ color: 'var(--text-primary)' }}>
                Types of Events in Clash of Clans
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="card p-5">
                  <h4 className="font-semibold mb-2 text-primary">Clan War Leagues (CWL)</h4>
                  <p className="text-sm">
                    Monthly competitive event where clans battle for League Medals.
                    Runs from the 1st to 10th of each month with 7 war days.
                  </p>
                </div>

                <div className="card p-5">
                  <h4 className="font-semibold mb-2 text-purple-400">Clan Games</h4>
                  <p className="text-sm">
                    Community event where clan members complete challenges for shared rewards.
                    Typically runs for 6 days near the end of each month.
                  </p>
                </div>

                <div className="card p-5">
                  <h4 className="font-semibold mb-2 text-emerald-400">Boost Events</h4>
                  <p className="text-sm">
                    Temporary bonuses like reduced training time, builder discounts,
                    or increased loot that help accelerate progress.
                  </p>
                </div>

                <div className="card p-5">
                  <h4 className="font-semibold mb-2 text-rose-400">Seasonal Challenges</h4>
                  <p className="text-sm">
                    Special events tied to seasons or holidays featuring unique
                    rewards like hero skins, decorations, and magic items.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold mt-8 mb-4" style={{ color: 'var(--text-primary)' }}>
                Frequently Asked Questions
              </h3>

              <div className="space-y-4">
                <details className="card p-4 cursor-pointer">
                  <summary className="font-medium" style={{ color: 'var(--text-primary)' }}>
                    When is the next CWL in Clash of Clans?
                  </summary>
                  <p className="mt-3 text-sm">
                    Clan War Leagues run monthly from the 1st to the 10th. Sign-ups begin 2 days before.
                    Check our active events section above for the current or next CWL dates.
                  </p>
                </details>

                <details className="card p-4 cursor-pointer">
                  <summary className="font-medium" style={{ color: 'var(--text-primary)' }}>
                    When are Clan Games in Clash of Clans?
                  </summary>
                  <p className="mt-3 text-sm">
                    Clan Games typically start around the 22nd-24th of each month and last for about 6 days.
                    Complete challenges to earn points and unlock tier rewards.
                  </p>
                </details>

                <details className="card p-4 cursor-pointer">
                  <summary className="font-medium" style={{ color: 'var(--text-primary)' }}>
                    How do I get event notifications?
                  </summary>
                  <p className="mt-3 text-sm">
                    Enable notifications in Clash of Clans settings. Bookmark this page and check regularly
                    for the latest event updates and schedules.
                  </p>
                </details>

                <details className="card p-4 cursor-pointer">
                  <summary className="font-medium" style={{ color: 'var(--text-primary)' }}>
                    What rewards can I get from events?
                  </summary>
                  <p className="mt-3 text-sm">
                    Events offer various rewards including League Medals, Magic Items, Books, Runes,
                    Hero Skins, Gems, and exclusive decorations depending on the event type.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="events-cta-card rounded-2xl p-8 lg:p-12 text-center">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                Ready to Dominate Events?
              </h2>
              <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
                Get the best base layouts for CWL and war events
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/th/18"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-black font-semibold rounded-xl hover:bg-primary/90 transition-all hover:scale-105"
                >
                  Browse TH18 War Bases
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a
                  href="/guides/cwl-base-building-tips"
                  className="inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-xl transition-all hover:scale-105"
                  style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}
                >
                  CWL Building Guide
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
