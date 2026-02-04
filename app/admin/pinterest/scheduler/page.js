'use client';

import { useState, useEffect } from 'react';

export default function PinterestSchedulerPage() {
  const [bases, setBases] = useState([]);
  const [schedules, setSchedules] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [selectedBases, setSelectedBases] = useState([]);
  const [selectedTimes, setSelectedTimes] = useState([]);
  const [saving, setSaving] = useState(false);
  const [filter, setFilter] = useState({ type: '', level: '' });
  const [showAllBases, setShowAllBases] = useState(false);

  const [customTime, setCustomTime] = useState('');
  const [availableTimes, setAvailableTimes] = useState([
    '08:00',  // Early morning
    '09:30',  // Morning peak
    '11:00',  // Late morning
    '12:30',  // Lunch break
    '14:00',  // Afternoon
    '15:30',  // Mid afternoon
    '17:00',  // Evening commute
    '19:00',  // Dinner time
    '20:30',  // Evening peak
    '22:00',  // Night owls
  ]);

  const addCustomTime = () => {
    if (customTime && !availableTimes.includes(customTime)) {
      setAvailableTimes(prev => [...prev, customTime].sort());
      setCustomTime('');
    }
  };

  const removeTime = (time) => {
    setAvailableTimes(prev => prev.filter(t => t !== time));
    setSelectedTimes(prev => prev.filter(t => t !== time));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [basesRes, schedulesRes] = await Promise.all([
        fetch('/api/bases'),
        fetch('/api/pinterest/schedule'),
      ]);
      const basesData = await basesRes.json();
      const schedulesData = await schedulesRes.json();
      setBases(basesData.bases || []);
      setSchedules(schedulesData.schedules || []);
    } catch (err) {
      console.error('Failed to fetch data:', err);
    } finally {
      setLoading(false);
    }
  };

  // Check if base was scheduled on any day (ever)
  const isBaseScheduledEver = (base) => {
    const baseId = base.copyLink || `${base.hallType}${base.hallLevel}-${base.baseNumber}`;
    return schedules.some(s =>
      s.templateId?.baseId === baseId
    );
  };

  const filteredBases = bases.filter(base => {
    if (filter.type && base.baseType !== filter.type) return false;
    if (filter.level && base.hallLevel !== parseInt(filter.level)) return false;
    // Hide already scheduled bases unless showAllBases is true
    if (!showAllBases && isBaseScheduledEver(base)) return false;
    return true;
  });

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();

    const days = [];
    // Previous month days
    for (let i = 0; i < startingDay; i++) {
      const prevDate = new Date(year, month, -startingDay + i + 1);
      days.push({ date: prevDate, isCurrentMonth: false });
    }
    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({ date: new Date(year, month, i), isCurrentMonth: true });
    }
    // Next month days
    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      days.push({ date: new Date(year, month + 1, i), isCurrentMonth: false });
    }
    return days;
  };

  const getSchedulesForDate = (date) => {
    return schedules.filter(s => {
      const scheduleDate = new Date(s.scheduledDate);
      return scheduleDate.toDateString() === date.toDateString();
    });
  };

  const toggleTime = (time) => {
    setSelectedTimes(prev => {
      if (prev.includes(time)) {
        return prev.filter(t => t !== time);
      } else {
        // Check daily limit
        const alreadyScheduled = getSchedulesForDate(selectedDate).length;
        const totalAfterAdd = alreadyScheduled + prev.length + 1;
        if (totalAfterAdd > 10) {
          alert('Daily limit is 10 pins. Cannot add more.');
          return prev;
        }
        return [...prev, time].sort();
      }
    });
  };

  const toggleBase = (base) => {
    const baseId = base.copyLink || `${base.hallType}${base.hallLevel}-${base.baseNumber}`;
    const isSelected = selectedBases.some(b =>
      (b.copyLink || `${b.hallType}${b.hallLevel}-${b.baseNumber}`) === baseId
    );

    if (isSelected) {
      // Remove base and its corresponding time
      const baseIndex = selectedBases.findIndex(b =>
        (b.copyLink || `${b.hallType}${b.hallLevel}-${b.baseNumber}`) === baseId
      );
      setSelectedBases(prev => prev.filter((_, i) => i !== baseIndex));
      setSelectedTimes(prev => prev.filter((_, i) => i !== baseIndex));
    } else {
      // Check if already scheduled for this date
      const alreadyScheduledToday = getSchedulesForDate(selectedDate);
      const isScheduledToday = alreadyScheduledToday.some(s =>
        s.templateId?.baseId === baseId
      );

      if (isScheduledToday) {
        alert('This base is already scheduled for this date!');
        return;
      }

      // Check daily limit
      const alreadyScheduled = alreadyScheduledToday.length;
      const totalAfterAdd = alreadyScheduled + selectedBases.length + 1;
      if (totalAfterAdd > 10) {
        alert('Daily limit is 10 pins. Cannot add more bases.');
        return;
      }

      // Auto-select next available time
      const scheduledTimes = alreadyScheduledToday.map(s => s.scheduledTime);
      const usedTimes = [...scheduledTimes, ...selectedTimes];
      const nextAvailableTime = availableTimes.find(t => !usedTimes.includes(t));

      if (!nextAvailableTime) {
        alert('No more time slots available for this date!');
        return;
      }

      setSelectedBases(prev => [...prev, base]);
      setSelectedTimes(prev => [...prev, nextAvailableTime]);
    }
  };

  const removeSelectedBase = (base) => {
    const baseId = base.copyLink || `${base.hallType}${base.hallLevel}-${base.baseNumber}`;
    setSelectedBases(prev => prev.filter(b =>
      (b.copyLink || `${b.hallType}${b.hallLevel}-${b.baseNumber}`) !== baseId
    ));
  };

  const isBaseSelected = (base) => {
    const baseId = base.copyLink || `${base.hallType}${base.hallLevel}-${base.baseNumber}`;
    return selectedBases.some(b =>
      (b.copyLink || `${b.hallType}${b.hallLevel}-${b.baseNumber}`) === baseId
    );
  };

  const isBaseScheduledToday = (base) => {
    const baseId = base.copyLink || `${base.hallType}${base.hallLevel}-${base.baseNumber}`;
    return getSchedulesForDate(selectedDate).some(s =>
      s.templateId?.baseId === baseId
    );
  };

  const selectAllTimes = () => {
    const unscheduledTimes = availableTimes.filter(time =>
      !getSchedulesForDate(selectedDate).find(s => s.scheduledTime === time)
    );
    // Limit to 10 minus already scheduled
    const alreadyScheduled = getSchedulesForDate(selectedDate).length;
    const maxCanSelect = 10 - alreadyScheduled;
    setSelectedTimes(unscheduledTimes.slice(0, maxCanSelect));
  };

  const handleSchedulePin = async () => {
    if (selectedBases.length === 0 || !selectedDate || selectedTimes.length === 0) return;

    // Check if we have enough time slots for bases
    if (selectedBases.length > selectedTimes.length) {
      alert(`You selected ${selectedBases.length} bases but only ${selectedTimes.length} time slots. Add more times or remove some bases.`);
      return;
    }

    setSaving(true);

    try {
      let successCount = 0;
      let errors = [];

      // Schedule each base at a different time
      for (let i = 0; i < selectedBases.length; i++) {
        const base = selectedBases[i];
        const time = selectedTimes[i];

        try {
          // Create template from base
          const templateRes = await fetch('/api/pinterest/templates', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ base }),
          });

          const templateData = await templateRes.json();

          if (!templateRes.ok) {
            errors.push(`Base #${base.baseNumber}: ${templateData.error}`);
            continue;
          }

          // Schedule it
          const scheduleRes = await fetch('/api/pinterest/schedule', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              templateId: templateData.template._id,
              scheduledDate: selectedDate.toISOString(),
              scheduledTime: time,
            }),
          });

          if (scheduleRes.ok) {
            successCount++;
          } else {
            const data = await scheduleRes.json();
            errors.push(`${time}: ${data.error}`);
          }
        } catch (err) {
          errors.push(`Base #${base.baseNumber}: ${err.message}`);
        }
      }

      if (successCount > 0) {
        setShowScheduleModal(false);
        setSelectedBases([]);
        setSelectedTimes([]);
        fetchData();
        if (errors.length > 0) {
          alert(`Scheduled ${successCount} pins. Errors: ${errors.join(', ')}`);
        }
      } else {
        alert('Failed to schedule: ' + errors.join(', '));
      }
    } catch (err) {
      console.error('Failed to schedule pin:', err);
      alert('Failed to schedule pin');
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteSchedule = async (id) => {
    if (!confirm('Remove this scheduled pin?')) return;

    try {
      const res = await fetch(`/api/pinterest/schedule?id=${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        fetchData();
      }
    } catch (err) {
      console.error('Failed to delete schedule:', err);
    }
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const isToday = (date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const isPast = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const days = getDaysInMonth(currentDate);
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Pinterest Scheduler</h1>
        <p style={{ color: 'var(--text-muted)' }}>Schedule your pins on the calendar. Click a date to add pins.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="rounded-xl p-4" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
          <div className="text-2xl font-bold text-primary">{bases.length}</div>
          <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Available Bases</div>
        </div>
        <div className="rounded-xl p-4" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
          <div className="text-2xl font-bold text-amber-500">{schedules.filter(s => s.status === 'pending').length}</div>
          <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Scheduled</div>
        </div>
        <div className="rounded-xl p-4" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
          <div className="text-2xl font-bold text-emerald-500">
            {getSchedulesForDate(new Date()).length}/10
          </div>
          <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Today's Pins</div>
        </div>
        <div className="rounded-xl p-4" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
          <div className="text-2xl font-bold text-blue-500">{schedules.filter(s => s.status === 'posted').length}</div>
          <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Posted</div>
        </div>
      </div>

      {/* Calendar */}
      <div className="rounded-2xl overflow-hidden" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
        {/* Calendar Header */}
        <div className="p-4 flex items-center justify-between" style={{ borderBottom: '1px solid var(--border)' }}>
          <button onClick={prevMonth} className="p-2 rounded-lg transition-colors" style={{ background: 'var(--surface-100)' }}>
            <svg className="w-5 h-5" style={{ color: 'var(--text-primary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h2 className="text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>
          <button onClick={nextMonth} className="p-2 rounded-lg transition-colors" style={{ background: 'var(--surface-100)' }}>
            <svg className="w-5 h-5" style={{ color: 'var(--text-primary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Day Headers */}
        <div className="grid grid-cols-7" style={{ borderBottom: '1px solid var(--border)' }}>
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="p-3 text-center text-sm font-medium" style={{ color: 'var(--text-muted)' }}>
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7">
          {days.map((day, index) => {
            const daySchedules = getSchedulesForDate(day.date);
            const past = isPast(day.date);

            return (
              <div
                key={index}
                onClick={() => {
                  if (!past && day.isCurrentMonth) {
                    setSelectedDate(day.date);
                    setSelectedTimes([]);
                    setSelectedBases([]);
                    setShowScheduleModal(true);
                  }
                }}
                className={`min-h-[100px] p-2 cursor-pointer transition-colors ${
                  !day.isCurrentMonth ? 'opacity-40' : ''
                } ${past ? 'cursor-not-allowed' : 'hover:bg-primary/5'}`}
                style={{ borderTop: '1px solid var(--border)', borderRight: index % 7 !== 6 ? '1px solid var(--border)' : 'none' }}
              >
                <div className={`text-sm font-medium mb-1 ${
                  isToday(day.date) ? 'w-7 h-7 rounded-full bg-primary text-black flex items-center justify-center' : ''
                }`} style={{ color: isToday(day.date) ? undefined : 'var(--text-primary)' }}>
                  {day.date.getDate()}
                </div>
                <div className="space-y-1">
                  {daySchedules.slice(0, 3).map((schedule, i) => (
                    <div
                      key={i}
                      className={`text-xs px-1.5 py-0.5 rounded truncate ${
                        schedule.status === 'posted' ? 'bg-emerald-500/20 text-emerald-400' :
                        schedule.status === 'failed' ? 'bg-red-500/20 text-red-400' :
                        'bg-primary/20 text-primary'
                      }`}
                      title={schedule.scheduledTime}
                    >
                      {schedule.scheduledTime}
                    </div>
                  ))}
                  {daySchedules.length > 3 && (
                    <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
                      +{daySchedules.length - 3} more
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Schedule Modal */}
      {showScheduleModal && selectedDate && (
        <div className="fixed inset-0 bg-black/50 flex items-start md:items-center justify-center z-50 p-2 md:p-4 overflow-y-auto">
          <div className="rounded-2xl w-full max-w-2xl my-2 md:my-4 flex flex-col max-h-[95vh]" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
            {/* Modal Header */}
            <div className="p-4 md:p-6 flex items-center justify-between flex-shrink-0" style={{ borderBottom: '1px solid var(--border)' }}>
              <div>
                <h2 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>Schedule Pin</h2>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                  {selectedDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>
              <button
                onClick={() => {
                  setShowScheduleModal(false);
                  setSelectedBases([]);
                  setSelectedTimes([]);
                }}
                className="p-2 rounded-lg transition-colors"
                style={{ color: 'var(--text-muted)' }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto">
              {/* Scheduled for this date */}
              {getSchedulesForDate(selectedDate).length > 0 && (
                <div className="p-3 md:p-4" style={{ borderBottom: '1px solid var(--border)' }}>
                  <h3 className="text-sm font-medium mb-2" style={{ color: 'var(--text-muted)' }}>Already Scheduled ({getSchedulesForDate(selectedDate).length}/10)</h3>
                  <div className="space-y-2 max-h-[120px] overflow-y-auto">
                    {getSchedulesForDate(selectedDate).map((schedule) => (
                      <div key={schedule._id} className="flex items-center justify-between p-2 rounded-lg" style={{ background: 'var(--surface-100)' }}>
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-medium text-primary">{schedule.scheduledTime}</span>
                          <span className="text-sm" style={{ color: 'var(--text-primary)' }}>
                            {schedule.templateId?.title?.substring(0, 40) || 'Scheduled Pin'}
                          </span>
                        </div>
                        <button
                          onClick={() => handleDeleteSchedule(schedule._id)}
                          className="p-1 text-red-400 hover:bg-red-500/10 rounded"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Add New Schedule */}
              <div className="p-4 md:p-6 space-y-4">
              {/* Select Time - Multiple Selection */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                    Posting Times (select multiple, max 10/day)
                  </label>
                  <button
                    onClick={selectAllTimes}
                    className="text-xs text-primary hover:underline"
                  >
                    Select All Available
                  </button>
                </div>

                {/* Time slots */}
                <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3">
                  {availableTimes.map(time => {
                    const isScheduled = getSchedulesForDate(selectedDate).find(s => s.scheduledTime === time);
                    const isSelected = selectedTimes.includes(time);
                    return (
                      <div key={time} className="relative group">
                        <button
                          onClick={() => !isScheduled && toggleTime(time)}
                          disabled={isScheduled}
                          className={`px-2 md:px-4 py-1.5 md:py-2 rounded-lg text-xs md:text-sm font-medium transition-colors ${
                            isSelected ? 'bg-primary text-black' : ''
                          } ${isScheduled ? 'opacity-40 cursor-not-allowed line-through' : ''}`}
                          style={!isSelected ? { background: 'var(--surface-100)', color: 'var(--text-primary)' } : {}}
                          title={isScheduled ? 'Already scheduled' : 'Click to select'}
                        >
                          {time}
                          {isSelected && (
                            <svg className="w-4 h-4 inline ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </button>
                        {/* Remove time button */}
                        {!isScheduled && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              removeTime(time);
                            }}
                            className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white rounded-full text-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                            title="Remove this time"
                          >
                            ×
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Add custom time */}
                <div className="flex flex-wrap gap-2 items-center">
                  <input
                    type="time"
                    value={customTime}
                    onChange={(e) => setCustomTime(e.target.value)}
                    className="px-2 py-1.5 rounded-lg text-sm"
                    style={{ background: 'var(--surface-100)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
                  />
                  <button
                    onClick={addCustomTime}
                    disabled={!customTime || availableTimes.includes(customTime)}
                    className="px-2 py-1.5 bg-primary text-black text-xs md:text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
                  >
                    + Add
                  </button>
                  <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                    {availableTimes.length} times
                  </span>
                </div>

                {selectedTimes.length > 0 && (
                  <p className="text-xs mt-2 text-primary font-medium">
                    {selectedTimes.length} time(s) selected: {selectedTimes.join(', ')}
                  </p>
                )}

                {getSchedulesForDate(selectedDate).length >= 10 && (
                  <p className="text-xs mt-2 text-red-400">Daily limit of 10 pins reached for this date</p>
                )}
              </div>

              {/* Select Base */}
              <div>
                <label className="block text-xs md:text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>Select Base Layout</label>

                {/* Filters */}
                <div className="flex flex-wrap gap-1.5 md:gap-2 mb-2">
                  <select
                    value={filter.type}
                    onChange={(e) => setFilter({ ...filter, type: e.target.value })}
                    className="px-2 py-1.5 rounded-lg text-xs md:text-sm"
                    style={{ background: 'var(--surface-100)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
                  >
                    <option value="">All</option>
                    <option value="war">War</option>
                    <option value="farm">Farm</option>
                    <option value="trophy">Trophy</option>
                  </select>
                  <select
                    value={filter.level}
                    onChange={(e) => setFilter({ ...filter, level: e.target.value })}
                    className="px-2 py-1.5 rounded-lg text-xs md:text-sm"
                    style={{ background: 'var(--surface-100)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
                  >
                    <option value="">All TH</option>
                    {[18, 17, 16, 15, 14, 13, 12, 11, 10].map(l => (
                      <option key={l} value={l}>TH{l}</option>
                    ))}
                  </select>

                  {/* Show All Toggle */}
                  <label className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg cursor-pointer" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
                    <input
                      type="checkbox"
                      checked={showAllBases}
                      onChange={(e) => setShowAllBases(e.target.checked)}
                      className="w-3.5 h-3.5 accent-primary"
                    />
                    <span className="text-xs" style={{ color: 'var(--text-primary)' }}>Scheduled</span>
                  </label>

                  <span className="self-center text-xs" style={{ color: 'var(--text-muted)' }}>
                    {filteredBases.length}
                  </span>
                </div>

                {filteredBases.length === 0 ? (
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>No bases found. Scrape some bases first.</p>
                ) : (
                  <div className="grid grid-cols-3 md:grid-cols-4 gap-2 max-h-[150px] md:max-h-[200px] overflow-y-auto p-1">
                    {filteredBases.slice(0, 50).map((base, index) => {
                      const selected = isBaseSelected(base);
                      const scheduledToday = isBaseScheduledToday(base);
                      const disabled = selected || scheduledToday;

                      return (
                        <div
                          key={index}
                          onClick={() => !disabled && toggleBase(base)}
                          className={`rounded-lg overflow-hidden transition-all ${
                            disabled ? 'cursor-not-allowed' : 'cursor-pointer hover:ring-2 hover:ring-primary/50'
                          } ${selected ? 'ring-2 ring-primary' : ''}`}
                          style={{ border: '1px solid var(--border)' }}
                        >
                          <div className={`aspect-square bg-gray-800 relative ${disabled ? 'opacity-40 blur-[1px]' : ''}`}>
                            {(base.originalImageUrl || base.thumbnailUrl) && (
                              <img src={(base.originalImageUrl || base.thumbnailUrl)} alt="" className="w-full h-full object-cover" />
                            )}
                            <span className={`absolute bottom-1 right-1 px-1.5 py-0.5 rounded text-[10px] font-medium ${
                              base.baseType === 'war' ? 'bg-red-500/80 text-white' :
                              base.baseType === 'farm' ? 'bg-emerald-500/80 text-white' :
                              'bg-amber-500/80 text-white'
                            }`}>
                              {base.baseType}
                            </span>
                            {selected && (
                              <div className="absolute inset-0 bg-primary/30 flex items-center justify-center">
                                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                            )}
                            {scheduledToday && !selected && (
                              <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                                <span className="text-[10px] text-white bg-black/80 px-2 py-1 rounded">Scheduled</span>
                              </div>
                            )}
                          </div>
                          <div className="p-1.5 text-center" style={{ background: 'var(--surface-100)' }}>
                            <span className="text-xs font-medium" style={{ color: 'var(--text-primary)' }}>
                              {base.hallType}{base.hallLevel}
                            </span>
                            <span className="text-xs ml-1" style={{ color: 'var(--text-muted)' }}>
                              #{base.baseNumber}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Selected Bases List at Bottom */}
                {selectedBases.length > 0 && (
                  <div className="mt-3 p-2 md:p-3 rounded-lg max-h-[120px] overflow-y-auto" style={{ background: 'var(--surface-100)', border: '1px solid var(--primary)' }}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs md:text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                        Selected ({selectedBases.length})
                      </span>
                      <button
                        onClick={() => { setSelectedBases([]); setSelectedTimes([]); }}
                        className="text-xs text-red-400 hover:underline"
                      >
                        Clear
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedBases.map((base, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-1 px-1.5 py-1 rounded-lg"
                          style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}
                        >
                          <div className="w-6 h-6 rounded overflow-hidden bg-gray-800 flex-shrink-0">
                            {(base.originalImageUrl || base.thumbnailUrl) && (
                              <img src={(base.originalImageUrl || base.thumbnailUrl)} alt="" className="w-full h-full object-cover" />
                            )}
                          </div>
                          <span className="text-[10px] font-medium" style={{ color: 'var(--text-primary)' }}>
                            {base.hallType}{base.hallLevel}
                          </span>
                          <span className="text-[9px] px-1 py-0.5 rounded font-medium" style={{ background: 'var(--primary)', color: 'black' }}>
                            {selectedTimes[index] || '—'}
                          </span>
                          <button
                            onClick={() => toggleBase(base)}
                            className="text-red-400 hover:text-red-300 p-0.5"
                          >
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* End Scrollable Content */}
            </div>

            {/* Modal Footer */}
            <div className="p-3 md:p-4 flex justify-end gap-2 md:gap-3 flex-shrink-0" style={{ borderTop: '1px solid var(--border)' }}>
              <button
                onClick={() => {
                  setShowScheduleModal(false);
                  setSelectedBases([]);
                  setSelectedTimes([]);
                }}
                className="px-3 md:px-4 py-2 rounded-xl transition-colors text-sm"
                style={{ background: 'var(--surface-100)', color: 'var(--text-primary)' }}
              >
                Cancel
              </button>
              <button
                onClick={handleSchedulePin}
                disabled={selectedBases.length === 0 || selectedTimes.length === 0 || selectedBases.length > selectedTimes.length || saving || getSchedulesForDate(selectedDate).length >= 10}
                className="px-4 md:px-6 py-2 bg-primary text-black font-medium rounded-xl hover:bg-primary/90 transition-colors disabled:opacity-50 text-sm"
              >
                {saving ? 'Saving...' : `Schedule ${selectedBases.length}`}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
