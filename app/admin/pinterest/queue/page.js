'use client';

import { useState, useEffect } from 'react';

export default function PinterestQueuePage() {
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('pending');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [bulkDeleting, setBulkDeleting] = useState(false);

  useEffect(() => {
    fetchSchedules();
  }, []);

  const fetchSchedules = async () => {
    try {
      const res = await fetch('/api/pinterest/schedule');
      const data = await res.json();
      setSchedules(data.schedules || []);
    } catch (err) {
      console.error('Failed to fetch schedules:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleRetry = async (id) => {
    try {
      const res = await fetch('/api/pinterest/schedule', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: 'pending' }),
      });
      if (res.ok) {
        fetchSchedules();
      }
    } catch (err) {
      console.error('Failed to retry:', err);
    }
  };

  const handlePostNow = async (id) => {
    if (!confirm('Post this pin to Pinterest now?')) return;

    try {
      const res = await fetch('/api/pinterest/cron', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ scheduleId: id }),
      });
      const data = await res.json();
      if (res.ok) {
        alert(`Pin posted successfully! ${data.pinUrl || ''}`);
        fetchSchedules();
      } else {
        alert(`Failed to post: ${data.error}`);
        fetchSchedules();
      }
    } catch (err) {
      console.error('Failed to post:', err);
      alert('Failed to post pin');
    }
  };

  const handleRunCron = async () => {
    if (!confirm('Run the cron job to process all pending pins for current time?')) return;

    try {
      const res = await fetch('/api/pinterest/cron');
      const data = await res.json();
      alert(`Cron completed: ${data.processed || 0} processed, ${data.success || 0} success, ${data.failed || 0} failed`);
      fetchSchedules();
    } catch (err) {
      console.error('Failed to run cron:', err);
      alert('Failed to run cron');
    }
  };

  const handleCancel = async (id) => {
    if (!confirm('Cancel this scheduled pin?')) return;

    try {
      const res = await fetch(`/api/pinterest/schedule?id=${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        fetchSchedules();
      }
    } catch (err) {
      console.error('Failed to cancel:', err);
    }
  };

  const handleBulkDelete = async () => {
    if (!fromDate) {
      alert('Please select a From date');
      return;
    }

    const params = new URLSearchParams({ from: fromDate, status: activeTab === 'posted' ? 'posted' : activeTab === 'failed' ? 'failed' : 'pending' });
    if (toDate) params.set('to', toDate);

    const statusLabel = activeTab === 'posted' ? 'posted' : activeTab === 'failed' ? 'failed' : 'pending';
    const dateRange = toDate ? `${fromDate} to ${toDate}` : `${fromDate} onwards`;

    if (!confirm(`Delete all ${statusLabel} schedules from ${dateRange}?`)) return;

    setBulkDeleting(true);
    try {
      const res = await fetch(`/api/pinterest/schedule?${params.toString()}`, { method: 'DELETE' });
      const data = await res.json();
      if (res.ok) {
        alert(`Deleted ${data.deleted} schedules`);
        fetchSchedules();
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (err) {
      alert('Failed to delete');
    }
    setBulkDeleting(false);
  };

  const pendingSchedules = schedules.filter(s => s.status === 'pending' || s.status === 'processing');
  const postedSchedules = schedules.filter(s => s.status === 'posted');
  const failedSchedules = schedules.filter(s => s.status === 'failed');

  const getFilteredSchedules = () => {
    switch (activeTab) {
      case 'pending': return pendingSchedules;
      case 'posted': return postedSchedules;
      case 'failed': return failedSchedules;
      default: return pendingSchedules;
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Queue & History</h1>
          <p style={{ color: 'var(--text-muted)' }}>Monitor scheduled, posted, and failed pins.</p>
        </div>
        <button
          onClick={handleRunCron}
          className="px-4 py-2 bg-primary text-black font-medium rounded-xl hover:bg-primary/90 transition-colors flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Run Cron Now
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="rounded-xl p-4" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
          <div className="text-2xl font-bold text-amber-500">{pendingSchedules.length}</div>
          <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Pending</div>
        </div>
        <div className="rounded-xl p-4" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
          <div className="text-2xl font-bold text-emerald-500">{postedSchedules.length}</div>
          <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Posted</div>
        </div>
        <div className="rounded-xl p-4" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
          <div className="text-2xl font-bold text-red-500">{failedSchedules.length}</div>
          <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Failed</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        {[
          { id: 'pending', label: 'Pending', count: pendingSchedules.length },
          { id: 'posted', label: 'Posted', count: postedSchedules.length },
          { id: 'failed', label: 'Failed', count: failedSchedules.length },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
              activeTab === tab.id ? 'bg-primary text-black' : ''
            }`}
            style={activeTab !== tab.id ? { background: 'var(--bg-secondary)', color: 'var(--text-primary)', border: '1px solid var(--border)' } : {}}
          >
            {tab.label} ({tab.count})
          </button>
        ))}
      </div>

      {/* Bulk Delete */}
      <div className="rounded-xl p-4 mb-6" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
        <h3 className="text-sm font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>Bulk Delete by Date Range</h3>
        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-2">
            <label className="text-sm" style={{ color: 'var(--text-muted)' }}>From:</label>
            <input
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              className="px-3 py-1.5 rounded-lg text-sm"
              style={{ background: 'var(--bg-primary)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="text-sm" style={{ color: 'var(--text-muted)' }}>To:</label>
            <input
              type="date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              className="px-3 py-1.5 rounded-lg text-sm"
              style={{ background: 'var(--bg-primary)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
            />
          </div>
          <button
            onClick={handleBulkDelete}
            disabled={bulkDeleting || !fromDate}
            className="px-4 py-1.5 rounded-lg text-sm font-medium transition-colors"
            style={{ background: '#ef4444', color: 'white', opacity: bulkDeleting || !fromDate ? 0.5 : 1 }}
          >
            {bulkDeleting ? 'Deleting...' : `Delete ${activeTab} in range`}
          </button>
        </div>
        <p className="text-xs mt-2" style={{ color: 'var(--text-muted)' }}>
          Deletes all <strong>{activeTab}</strong> schedules within the selected date range. Leave &quot;To&quot; empty to delete from that date onwards.
        </p>
      </div>

      {/* List */}
      <div className="rounded-2xl overflow-hidden" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
        {getFilteredSchedules().length === 0 ? (
          <div className="p-12 text-center">
            <svg className="w-16 h-16 mx-auto mb-4 opacity-50" style={{ color: 'var(--text-muted)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <h2 className="text-xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
              No {activeTab} pins
            </h2>
            <p style={{ color: 'var(--text-muted)' }}>
              {activeTab === 'pending' && 'Schedule some pins to see them here.'}
              {activeTab === 'posted' && 'Successfully posted pins will appear here.'}
              {activeTab === 'failed' && 'Failed pins will appear here for retry.'}
            </p>
          </div>
        ) : (
          <div className="divide-y" style={{ borderColor: 'var(--border)' }}>
            {getFilteredSchedules().map((schedule) => (
              <div key={schedule._id} className="p-4 flex items-center gap-4">
                {/* Image */}
                <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-800 flex-shrink-0">
                  {schedule.templateId?.imageUrl && (
                    <img src={schedule.templateId.imageUrl} alt="" className="w-full h-full object-cover" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium truncate" style={{ color: 'var(--text-primary)' }}>
                    {schedule.templateId?.title || 'Unknown Template'}
                  </h3>
                  <div className="flex items-center gap-4 mt-1 text-sm" style={{ color: 'var(--text-muted)' }}>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {new Date(schedule.scheduledDate).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {schedule.scheduledTime}
                    </span>
                  </div>
                  {schedule.error && (
                    <p className="text-sm text-red-400 mt-1">{schedule.error}</p>
                  )}
                  {schedule.pinterestUrl && (
                    <a
                      href={schedule.pinterestUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline mt-1 inline-block"
                    >
                      View on Pinterest
                    </a>
                  )}
                </div>

                {/* Status & Actions */}
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-lg text-xs font-medium ${
                    schedule.status === 'pending' ? 'bg-amber-500/20 text-amber-400' :
                    schedule.status === 'processing' ? 'bg-blue-500/20 text-blue-400' :
                    schedule.status === 'posted' ? 'bg-emerald-500/20 text-emerald-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {schedule.status}
                  </span>

                  {schedule.status === 'failed' && (
                    <button
                      onClick={() => handleRetry(schedule._id)}
                      className="px-3 py-1.5 rounded-lg text-sm font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                    >
                      Retry
                    </button>
                  )}

                  {schedule.status === 'pending' && (
                    <>
                      <button
                        onClick={() => handlePostNow(schedule._id)}
                        className="px-3 py-1.5 rounded-lg text-sm font-medium bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition-colors"
                      >
                        Post Now
                      </button>
                      <button
                        onClick={() => handleCancel(schedule._id)}
                        className="p-2 rounded-lg text-red-400 hover:bg-red-500/10 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
