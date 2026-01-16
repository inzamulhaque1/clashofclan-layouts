'use client';

import { getActiveEvents, getUpcomingEvents, EVENT_STYLES, getEventDaysRemaining, getEventDaysUntil } from '@/lib/events';

export default function CoCEvents() {
  const activeEvents = getActiveEvents();
  const upcomingEvents = getUpcomingEvents();

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>
              CoC Events
            </h2>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              Stay updated with current and upcoming events
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>Live</span>
          </div>
        </div>

        {/* Active Events */}
        {activeEvents.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg">🔥</span>
              <h3 className="font-semibold" style={{ color: 'var(--text-primary)' }}>Active Now</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {activeEvents.map((event) => {
                const style = EVENT_STYLES[event.type];
                const daysLeft = getEventDaysRemaining(event.endDate);

                return (
                  <div
                    key={event.id}
                    className="rounded-xl p-5 transition-all hover:-translate-y-1"
                    style={{
                      background: style.bg,
                      border: `1px solid ${style.border}`
                    }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{event.icon}</span>
                        <div>
                          <h4 className="font-bold" style={{ color: 'var(--text-primary)' }}>
                            {event.name}
                          </h4>
                          <span
                            className="text-xs font-medium px-2 py-0.5 rounded-full"
                            style={{ background: style.border, color: style.text }}
                          >
                            {style.label}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>
                      {event.description}
                    </p>

                    {/* Time remaining */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-sm" style={{ color: style.text }}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="font-medium">
                          {daysLeft === 0 ? 'Ends today!' : daysLeft === 1 ? '1 day left' : `${daysLeft} days left`}
                        </span>
                      </div>
                      <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    </div>

                    {/* Rewards preview */}
                    {event.rewards && (
                      <div className="mt-3 pt-3" style={{ borderTop: `1px solid ${style.border}` }}>
                        <p className="text-xs mb-1" style={{ color: 'var(--text-muted)' }}>Rewards:</p>
                        <div className="flex flex-wrap gap-1">
                          {event.rewards.slice(0, 3).map((reward, i) => (
                            <span
                              key={i}
                              className="text-xs px-2 py-0.5 rounded"
                              style={{ background: 'rgba(0,0,0,0.2)', color: 'var(--text-secondary)' }}
                            >
                              {reward}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Upcoming Events */}
        {upcomingEvents.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg">📅</span>
              <h3 className="font-semibold" style={{ color: 'var(--text-primary)' }}>Coming Soon</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {upcomingEvents.slice(0, 4).map((event) => {
                const style = EVENT_STYLES[event.type];
                const daysUntil = getEventDaysUntil(event.startDate);

                return (
                  <div
                    key={event.id}
                    className="rounded-xl p-4 transition-all hover:-translate-y-1"
                    style={{
                      background: 'var(--card-bg)',
                      border: '1px solid var(--border)'
                    }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{event.icon}</span>
                      <div>
                        <h4 className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>
                          {event.name}
                        </h4>
                        <span
                          className="text-xs font-medium"
                          style={{ color: style.text }}
                        >
                          {style.label}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs mb-2 line-clamp-2" style={{ color: 'var(--text-muted)' }}>
                      {event.description}
                    </p>

                    <div className="flex items-center gap-1 text-xs" style={{ color: 'var(--text-secondary)' }}>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>
                        {daysUntil === 0 ? 'Starts today!' : daysUntil === 1 ? 'Starts tomorrow' : `In ${daysUntil} days`}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* No events fallback */}
        {activeEvents.length === 0 && upcomingEvents.length === 0 && (
          <div className="text-center py-8" style={{ color: 'var(--text-muted)' }}>
            <span className="text-4xl mb-2 block">📭</span>
            <p>No events scheduled at this time</p>
          </div>
        )}
      </div>
    </section>
  );
}
