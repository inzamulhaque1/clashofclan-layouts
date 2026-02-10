'use client';

import { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';

export default function AutoSchedulerPage() {
  const [days, setDays] = useState(30);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [scheduling, setScheduling] = useState(false);
  const [clearing, setClearing] = useState(false);
  const [message, setMessage] = useState(null);

  const fetchPreview = async () => {
    setLoading(true);
    setMessage(null);
    try {
      const res = await fetch(`/api/pinterest/auto-schedule?days=${days}`);
      const data = await res.json();
      if (res.ok) {
        setPreview(data);
      } else {
        setMessage({ type: 'error', text: data.error });
      }
    } catch (e) {
      setMessage({ type: 'error', text: e.message });
    }
    setLoading(false);
  };

  const executeSchedule = async () => {
    if (!confirm(`This will auto-schedule ${preview?.pinsToCreate || days * 10} pins over ${preview?.daysToSchedule || days} days. Continue?`)) return;

    setScheduling(true);
    setMessage(null);
    try {
      const res = await fetch('/api/pinterest/auto-schedule', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ days })
      });
      const data = await res.json();
      if (res.ok) {
        setMessage({ type: 'success', text: data.message });
        setPreview(null);
      } else {
        setMessage({ type: 'error', text: data.error });
      }
    } catch (e) {
      setMessage({ type: 'error', text: e.message });
    }
    setScheduling(false);
  };

  const clearSchedules = async (mode) => {
    const labels = {
      old: 'posted/failed schedules',
      pending: 'all pending schedules',
      all: 'ALL schedules and unused templates'
    };

    if (!confirm(`Clear ${labels[mode]}? This cannot be undone.`)) return;

    setClearing(true);
    setMessage(null);
    try {
      const res = await fetch(`/api/pinterest/auto-schedule?mode=${mode}`, {
        method: 'DELETE'
      });
      const data = await res.json();
      if (res.ok) {
        setMessage({ type: 'success', text: data.message });
        setPreview(null);
      } else {
        setMessage({ type: 'error', text: data.error });
      }
    } catch (e) {
      setMessage({ type: 'error', text: e.message });
    }
    setClearing(false);
  };

  return (
    <AdminLayout>
      <div style={{ maxWidth: '900px' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>
          Auto Scheduler
        </h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
          Automatically schedule pins from your base layouts. No duplicates, latest bases first.
        </p>

        {message && (
          <div style={{
            padding: '12px 16px',
            borderRadius: '8px',
            marginBottom: '1rem',
            background: message.type === 'success' ? '#dcfce7' : '#fee2e2',
            color: message.type === 'success' ? '#166534' : '#991b1b',
            border: `1px solid ${message.type === 'success' ? '#bbf7d0' : '#fecaca'}`
          }}>
            {message.text}
          </div>
        )}

        {/* Clear Old Schedules */}
        <div style={{
          background: 'var(--card-bg)',
          border: '1px solid var(--border)',
          borderRadius: '12px',
          padding: '1.25rem',
          marginBottom: '1rem'
        }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.75rem' }}>
            Clean Up Schedules
          </h2>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => clearSchedules('old')}
              disabled={clearing}
              style={{
                padding: '8px 16px',
                borderRadius: '8px',
                border: '1px solid var(--border)',
                background: 'var(--surface-100)',
                cursor: 'pointer',
                fontSize: '0.875rem'
              }}
            >
              Clear Posted/Failed
            </button>
            <button
              onClick={() => clearSchedules('pending')}
              disabled={clearing}
              style={{
                padding: '8px 16px',
                borderRadius: '8px',
                border: '1px solid #fbbf24',
                background: '#fffbeb',
                color: '#92400e',
                cursor: 'pointer',
                fontSize: '0.875rem'
              }}
            >
              Clear All Pending
            </button>
            <button
              onClick={() => clearSchedules('all')}
              disabled={clearing}
              style={{
                padding: '8px 16px',
                borderRadius: '8px',
                border: '1px solid #ef4444',
                background: '#fef2f2',
                color: '#991b1b',
                cursor: 'pointer',
                fontSize: '0.875rem'
              }}
            >
              Clear Everything + Templates
            </button>
          </div>
        </div>

        {/* Auto Schedule */}
        <div style={{
          background: 'var(--card-bg)',
          border: '1px solid var(--border)',
          borderRadius: '12px',
          padding: '1.25rem',
          marginBottom: '1rem'
        }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.75rem' }}>
            Auto Schedule Next {days} Days
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1rem' }}>
            Picks 10 latest unused bases per day. Spreads across 08:00 - 22:00 Bangladesh time. Never duplicates.
          </p>

          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '1rem' }}>
            <label style={{ fontSize: '0.875rem', fontWeight: '500' }}>Days:</label>
            <select
              value={days}
              onChange={(e) => setDays(parseInt(e.target.value))}
              style={{
                padding: '8px 12px',
                borderRadius: '8px',
                border: '1px solid var(--border)',
                background: 'var(--card-bg)',
                fontSize: '0.875rem'
              }}
            >
              <option value={7}>7 days (70 pins)</option>
              <option value={14}>14 days (140 pins)</option>
              <option value={30}>30 days (300 pins)</option>
              <option value={60}>60 days (600 pins)</option>
            </select>

            <button
              onClick={fetchPreview}
              disabled={loading}
              style={{
                padding: '8px 20px',
                borderRadius: '8px',
                border: 'none',
                background: '#3b82f6',
                color: 'white',
                cursor: 'pointer',
                fontSize: '0.875rem',
                fontWeight: '500'
              }}
            >
              {loading ? 'Loading...' : 'Preview'}
            </button>
          </div>
        </div>

        {/* Preview Results */}
        {preview && (
          <div style={{
            background: 'var(--card-bg)',
            border: '1px solid var(--border)',
            borderRadius: '12px',
            padding: '1.25rem',
            marginBottom: '1rem'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h2 style={{ fontSize: '1.1rem', fontWeight: '600' }}>Preview</h2>
              <button
                onClick={executeSchedule}
                disabled={scheduling || preview.pinsToCreate === 0}
                style={{
                  padding: '10px 24px',
                  borderRadius: '8px',
                  border: 'none',
                  background: scheduling ? '#9ca3af' : '#10b981',
                  color: 'white',
                  cursor: scheduling ? 'not-allowed' : 'pointer',
                  fontSize: '0.9rem',
                  fontWeight: '600'
                }}
              >
                {scheduling ? 'Scheduling...' : `Schedule ${preview.pinsToCreate} Pins`}
              </button>
            </div>

            {/* Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '0.75rem',
              marginBottom: '1rem'
            }}>
              {[
                { label: 'Pins to Create', value: preview.pinsToCreate, color: '#3b82f6' },
                { label: 'Days', value: preview.daysToSchedule, color: '#10b981' },
                { label: 'Available Bases', value: preview.totalAvailableBases, color: '#8b5cf6' },
                { label: 'Already Used', value: preview.totalAlreadyUsed, color: '#f59e0b' },
              ].map((stat, i) => (
                <div key={i} style={{
                  padding: '12px',
                  borderRadius: '8px',
                  background: 'var(--surface-100)',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: '700', color: stat.color }}>{stat.value}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Day-by-day preview */}
            <div style={{ maxHeight: '500px', overflowY: 'auto' }}>
              {preview.preview?.map((day, dayIdx) => (
                <div key={dayIdx} style={{
                  marginBottom: '0.75rem',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    padding: '8px 12px',
                    background: 'var(--surface-100)',
                    fontWeight: '600',
                    fontSize: '0.875rem',
                    borderBottom: '1px solid var(--border)'
                  }}>
                    {day.date} ({day.pins.length} pins)
                  </div>
                  <div style={{ padding: '8px 12px' }}>
                    {day.pins.map((pin, pinIdx) => (
                      <div key={pinIdx} style={{
                        display: 'flex',
                        gap: '0.75rem',
                        alignItems: 'center',
                        padding: '4px 0',
                        borderBottom: pinIdx < day.pins.length - 1 ? '1px solid var(--border)' : 'none',
                        fontSize: '0.8rem'
                      }}>
                        <span style={{
                          background: '#e0f2fe',
                          color: '#0369a1',
                          padding: '2px 8px',
                          borderRadius: '4px',
                          fontWeight: '600',
                          minWidth: '50px',
                          textAlign: 'center'
                        }}>
                          {pin.time}
                        </span>
                        <span style={{
                          background: pin.baseType === 'war' ? '#fee2e2' : pin.baseType === 'farm' ? '#dcfce7' : '#fef3c7',
                          color: pin.baseType === 'war' ? '#991b1b' : pin.baseType === 'farm' ? '#166534' : '#92400e',
                          padding: '2px 6px',
                          borderRadius: '4px',
                          fontSize: '0.7rem',
                          fontWeight: '600',
                          textTransform: 'uppercase'
                        }}>
                          {pin.baseType}
                        </span>
                        <span style={{ color: 'var(--text-secondary)' }}>{pin.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
