'use client';

import { useState, useEffect } from 'react';

export default function EventsClient({ events, eventStyles }) {
  const [filter, setFilter] = useState('all');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Calculate event status based on dates
  const getEventStatus = (event) => {
    const now = new Date();
    const start = new Date(event.startDate);
    const end = new Date(event.endDate);

    if (now < start) return 'upcoming';
    if (now > end) return 'ended';
    return 'active';
  };

  // Get days remaining or until
  const getDaysInfo = (event) => {
    const now = new Date();
    const start = new Date(event.startDate);
    const end = new Date(event.endDate);
    const status = getEventStatus(event);

    if (status === 'upcoming') {
      const days = Math.ceil((start - now) / (1000 * 60 * 60 * 24));
      return { text: days === 0 ? 'Starts today!' : days === 1 ? 'Starts tomorrow' : `Starts in ${days} days`, days, type: 'until' };
    } else if (status === 'active') {
      const days = Math.ceil((end - now) / (1000 * 60 * 60 * 24));
      return { text: days === 0 ? 'Ends today!' : days === 1 ? '1 day left' : `${days} days left`, days, type: 'remaining' };
    }
    return { text: 'Event ended', days: 0, type: 'ended' };
  };

  // Filter and sort events
  const processedEvents = events
    .map(event => ({
      ...event,
      calculatedStatus: getEventStatus(event),
      daysInfo: getDaysInfo(event)
    }))
    .filter(event => {
      if (filter === 'all') return event.calculatedStatus !== 'ended';
      if (filter === 'active') return event.calculatedStatus === 'active';
      if (filter === 'upcoming') return event.calculatedStatus === 'upcoming';
      return event.type === filter;
    })
    .sort((a, b) => {
      // Active first, then upcoming
      if (a.calculatedStatus === 'active' && b.calculatedStatus !== 'active') return -1;
      if (a.calculatedStatus !== 'active' && b.calculatedStatus === 'active') return 1;
      // Then by start date
      return new Date(a.startDate) - new Date(b.startDate);
    });

  const activeEvents = processedEvents.filter(e => e.calculatedStatus === 'active');
  const upcomingEvents = processedEvents.filter(e => e.calculatedStatus === 'upcoming');

  if (!mounted) {
    return <div className="py-16 text-center">Loading events...</div>;
  }

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 events-fade-in">
          {[
            { id: 'all', label: 'All Events', icon: '🎯' },
            { id: 'active', label: 'Active Now', icon: '🔥' },
            { id: 'upcoming', label: 'Coming Soon', icon: '📅' },
            { id: 'competitive', label: 'Competitive', icon: '🏆' },
            { id: 'seasonal', label: 'Seasonal', icon: '🌟' },
            { id: 'boost', label: 'Boosts', icon: '⚡' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`events-filter-btn ${filter === tab.id ? 'events-filter-btn-active' : ''}`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Active Events */}
        {activeEvents.length > 0 && (filter === 'all' || filter === 'active' || activeEvents.some(e => e.type === filter)) && (
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="events-section-icon events-section-icon-active">
                <span className="text-2xl">🔥</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>Active Events</h2>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Happening right now - don't miss out!</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeEvents.map((event, index) => (
                <EventCard key={event.id} event={event} eventStyles={eventStyles} index={index} />
              ))}
            </div>
          </div>
        )}

        {/* Upcoming Events */}
        {upcomingEvents.length > 0 && (filter === 'all' || filter === 'upcoming' || upcomingEvents.some(e => e.type === filter)) && (
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="events-section-icon events-section-icon-upcoming">
                <span className="text-2xl">📅</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>Upcoming Events</h2>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Mark your calendar for these events</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {upcomingEvents.map((event, index) => (
                <UpcomingEventCard key={event.id} event={event} eventStyles={eventStyles} index={index} />
              ))}
            </div>
          </div>
        )}

        {/* No Events Message */}
        {processedEvents.length === 0 && (
          <div className="text-center py-16 events-fade-in">
            <span className="text-6xl mb-4 block">📭</span>
            <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>No Events Found</h3>
            <p style={{ color: 'var(--text-muted)' }}>Try selecting a different filter</p>
          </div>
        )}

        {/* Event Timeline */}
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="events-section-icon" style={{ background: 'rgba(99, 102, 241, 0.15)' }}>
              <span className="text-2xl">📊</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>Event Timeline</h2>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Visual overview of all events</p>
            </div>
          </div>

          <div className="events-timeline">
            {[...activeEvents, ...upcomingEvents].slice(0, 6).map((event, index) => (
              <TimelineItem key={event.id} event={event} eventStyles={eventStyles} index={index} isLast={index === Math.min(5, activeEvents.length + upcomingEvents.length - 1)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function EventCard({ event, eventStyles, index }) {
  const style = eventStyles[event.type] || eventStyles.special;

  return (
    <div
      className="events-card events-card-active group"
      style={{
        '--delay': `${index * 100}ms`,
        background: style.bg,
        border: `1px solid ${style.border}`
      }}
    >
      {/* Status Badge */}
      <div className="absolute top-4 right-4">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
      </div>

      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <div className="events-icon-wrapper" style={{ background: style.border }}>
          <span className="text-3xl">{event.icon}</span>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold mb-1" style={{ color: 'var(--text-primary)' }}>
            {event.name}
          </h3>
          <span
            className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full"
            style={{ background: style.border, color: style.text }}
          >
            {style.label}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
        {event.description}
      </p>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex justify-between text-xs mb-1" style={{ color: 'var(--text-muted)' }}>
          <span>Progress</span>
          <span style={{ color: style.text }}>{event.daysInfo.text}</span>
        </div>
        <div className="h-2 rounded-full overflow-hidden" style={{ background: 'rgba(0,0,0,0.2)' }}>
          <div
            className="h-full rounded-full events-progress-bar"
            style={{
              width: `${Math.max(10, 100 - (event.daysInfo.days / 10) * 100)}%`,
              background: `linear-gradient(90deg, ${style.text}, ${style.border})`
            }}
          ></div>
        </div>
      </div>

      {/* Dates */}
      <div className="flex items-center gap-2 text-xs mb-4" style={{ color: 'var(--text-muted)' }}>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span>{formatDate(event.startDate)} - {formatDate(event.endDate)}</span>
      </div>

      {/* Rewards */}
      {event.rewards && (
        <div className="pt-4" style={{ borderTop: `1px solid ${style.border}` }}>
          <p className="text-xs font-medium mb-2" style={{ color: 'var(--text-muted)' }}>Rewards:</p>
          <div className="flex flex-wrap gap-2">
            {event.rewards.map((reward, i) => (
              <span
                key={i}
                className="events-reward-tag"
              >
                {reward}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function UpcomingEventCard({ event, eventStyles, index }) {
  const style = eventStyles[event.type] || eventStyles.special;

  return (
    <div
      className="events-card events-card-upcoming group"
      style={{ '--delay': `${index * 100}ms` }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <span className="text-2xl">{event.icon}</span>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-sm truncate" style={{ color: 'var(--text-primary)' }}>
            {event.name}
          </h3>
          <span className="text-xs" style={{ color: style.text }}>
            {style.label}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-xs mb-3 line-clamp-2" style={{ color: 'var(--text-muted)' }}>
        {event.description}
      </p>

      {/* Countdown */}
      <div className="events-countdown" style={{ borderColor: style.border }}>
        <svg className="w-4 h-4" fill="none" stroke={style.text} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="font-medium" style={{ color: style.text }}>
          {event.daysInfo.text}
        </span>
      </div>

      {/* Date */}
      <div className="mt-3 text-xs" style={{ color: 'var(--text-muted)' }}>
        Starts {formatDate(event.startDate)}
      </div>
    </div>
  );
}

function TimelineItem({ event, eventStyles, index, isLast }) {
  const style = eventStyles[event.type] || eventStyles.special;
  const isActive = event.calculatedStatus === 'active';

  return (
    <div className="events-timeline-item" style={{ '--delay': `${index * 150}ms` }}>
      {/* Timeline Line */}
      {!isLast && (
        <div className="events-timeline-line" style={{ background: isActive ? style.text : 'var(--border)' }}></div>
      )}

      {/* Timeline Dot */}
      <div
        className={`events-timeline-dot ${isActive ? 'events-timeline-dot-active' : ''}`}
        style={{ background: style.text, boxShadow: isActive ? `0 0 0 4px ${style.border}` : 'none' }}
      >
        {isActive && (
          <span className="absolute inset-0 rounded-full animate-ping" style={{ background: style.text, opacity: 0.4 }}></span>
        )}
      </div>

      {/* Content */}
      <div className="events-timeline-content">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-lg">{event.icon}</span>
          <h4 className="font-semibold" style={{ color: 'var(--text-primary)' }}>{event.name}</h4>
          {isActive && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 font-medium">
              LIVE
            </span>
          )}
        </div>
        <p className="text-sm mb-2" style={{ color: 'var(--text-muted)' }}>{event.description}</p>
        <div className="flex items-center gap-4 text-xs" style={{ color: 'var(--text-muted)' }}>
          <span>{formatDate(event.startDate)} - {formatDate(event.endDate)}</span>
          <span style={{ color: style.text }}>{event.daysInfo.text}</span>
        </div>
      </div>
    </div>
  );
}

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}
