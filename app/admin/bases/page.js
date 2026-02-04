'use client';

import { useState, useEffect } from 'react';

export default function BasesPage() {
  const [bases, setBases] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState({ type: '', level: '' });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  useEffect(() => {
    fetchBases();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);

  const fetchBases = async () => {
    try {
      const res = await fetch('/api/bases');
      const data = await res.json();
      setBases(data.bases || []);
      setStats(data.stats);
    } catch (err) {
      console.error('Failed to fetch bases:', err);
    } finally {
      setLoading(false);
    }
  };

  const deleteBase = async (copyLink) => {
    if (!confirm('Delete this base?')) return;

    try {
      const res = await fetch('/api/bases', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ copyLink }),
      });

      if (res.ok) {
        fetchBases();
      }
    } catch (err) {
      console.error('Failed to delete base:', err);
    }
  };

  const filteredBases = bases.filter(base => {
    if (filter.type && base.baseType !== filter.type) return false;
    if (filter.level && base.hallLevel !== parseInt(filter.level)) return false;
    return true;
  });

  // Pagination
  const totalPages = Math.ceil(filteredBases.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedBases = filteredBases.slice(startIndex, startIndex + itemsPerPage);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let end = Math.min(totalPages, start + maxVisible - 1);

    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
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
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Bases</h1>
        <p style={{ color: 'var(--text-muted)' }}>Manage all scraped base layouts.</p>
      </div>

      {/* Stats */}
      {stats && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="rounded-xl p-4" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
            <div className="text-2xl font-bold text-primary">{stats.total}</div>
            <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Total Bases</div>
          </div>
          <div className="rounded-xl p-4" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
            <div className="text-2xl font-bold text-red-500">{stats.byType?.war || 0}</div>
            <div className="text-sm" style={{ color: 'var(--text-muted)' }}>War Bases</div>
          </div>
          <div className="rounded-xl p-4" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
            <div className="text-2xl font-bold text-emerald-500">{stats.byType?.farm || 0}</div>
            <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Farm Bases</div>
          </div>
          <div className="rounded-xl p-4" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
            <div className="text-2xl font-bold text-amber-500">{stats.byType?.trophy || 0}</div>
            <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Trophy Bases</div>
          </div>
        </div>
      )}

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <select
          value={filter.type}
          onChange={(e) => setFilter({ ...filter, type: e.target.value })}
          className="px-4 py-2.5 rounded-xl focus:outline-none focus:border-primary"
          style={{
            background: 'var(--surface-100)',
            border: '1px solid var(--border)',
            color: 'var(--text-primary)'
          }}
        >
          <option value="">All Types</option>
          <option value="war">War</option>
          <option value="farm">Farm</option>
          <option value="trophy">Trophy</option>
        </select>
        <select
          value={filter.level}
          onChange={(e) => setFilter({ ...filter, level: e.target.value })}
          className="px-4 py-2.5 rounded-xl focus:outline-none focus:border-primary"
          style={{
            background: 'var(--surface-100)',
            border: '1px solid var(--border)',
            color: 'var(--text-primary)'
          }}
        >
          <option value="">All Levels</option>
          {[18, 17, 16, 15, 14, 13, 12, 11, 10].map(l => (
            <option key={l} value={l}>TH{l}</option>
          ))}
        </select>
        <div className="ml-auto text-sm self-center" style={{ color: 'var(--text-muted)' }}>
          Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredBases.length)} of {filteredBases.length}
        </div>
      </div>

      {/* Table */}
      <div className="rounded-2xl overflow-hidden" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
        <table className="w-full">
          <thead style={{ background: 'var(--surface-100)' }}>
            <tr>
              <th className="px-6 py-4 text-left text-sm font-medium" style={{ color: 'var(--text-muted)' }}>Base</th>
              <th className="px-6 py-4 text-left text-sm font-medium" style={{ color: 'var(--text-muted)' }}>Type</th>
              <th className="px-6 py-4 text-left text-sm font-medium" style={{ color: 'var(--text-muted)' }}>Copy Link</th>
              <th className="px-6 py-4 text-left text-sm font-medium" style={{ color: 'var(--text-muted)' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedBases.map((base, index) => (
              <tr
                key={index}
                className="transition-colors"
                style={{ borderTop: '1px solid var(--border)' }}
              >
                <td className="px-6 py-4">
                  <div className="font-medium" style={{ color: 'var(--text-primary)' }}>{base.hallType}{base.hallLevel}</div>
                  <div className="text-sm" style={{ color: 'var(--text-muted)' }}>#{base.baseNumber}</div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2.5 py-1 rounded-lg text-xs font-medium ${
                    base.baseType === 'war' ? 'bg-red-500/15 text-red-600 dark:text-red-400' :
                    base.baseType === 'farm' ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400' :
                    'bg-amber-500/15 text-amber-600 dark:text-amber-400'
                  }`}>
                    {base.baseType}
                  </span>
                </td>
                <td className="px-6 py-4">
                  {base.copyLink ? (
                    <span className="text-emerald-600 dark:text-emerald-400 text-sm font-medium">Available</span>
                  ) : (
                    <span className="text-red-600 dark:text-red-400 text-sm font-medium">Missing</span>
                  )}
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => deleteBase(base.copyLink)}
                    className="px-3 py-1.5 text-sm font-medium rounded-lg bg-red-500/10 text-red-600 dark:text-red-400 hover:bg-red-500/20 transition-colors"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredBases.length === 0 && (
          <div className="p-12 text-center" style={{ color: 'var(--text-muted)' }}>
            No bases found matching your filters.
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-6">
          <div className="text-sm" style={{ color: 'var(--text-muted)' }}>
            Page {currentPage} of {totalPages}
          </div>
          <div className="flex items-center gap-2">
            {/* First & Previous */}
            <button
              onClick={() => goToPage(1)}
              disabled={currentPage === 1}
              className="p-2 rounded-lg transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              style={{ background: 'var(--surface-100)', color: 'var(--text-primary)' }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 rounded-lg transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              style={{ background: 'var(--surface-100)', color: 'var(--text-primary)' }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Page Numbers */}
            <div className="flex items-center gap-1">
              {getPageNumbers().map((page) => (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${
                    currentPage === page
                      ? 'bg-primary text-black'
                      : ''
                  }`}
                  style={currentPage !== page ? {
                    background: 'var(--surface-100)',
                    color: 'var(--text-primary)'
                  } : {}}
                >
                  {page}
                </button>
              ))}
            </div>

            {/* Next & Last */}
            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              style={{ background: 'var(--surface-100)', color: 'var(--text-primary)' }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button
              onClick={() => goToPage(totalPages)}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              style={{ background: 'var(--surface-100)', color: 'var(--text-primary)' }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
