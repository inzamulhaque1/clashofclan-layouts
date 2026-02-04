'use client';

import { useState, useEffect } from 'react';

export default function PinterestTemplatesPage() {
  const [templates, setTemplates] = useState([]);
  const [bases, setBases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedBase, setSelectedBase] = useState(null);
  const [preview, setPreview] = useState(null);
  const [filter, setFilter] = useState({ type: '', level: '' });
  const [editingTemplate, setEditingTemplate] = useState(null);
  const [customContent, setCustomContent] = useState({ title: '', description: '' });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchTemplates();
    fetchBases();
  }, []);

  const fetchTemplates = async () => {
    try {
      const res = await fetch('/api/pinterest/templates');
      const data = await res.json();
      setTemplates(data.templates || []);
    } catch (err) {
      console.error('Failed to fetch templates:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchBases = async () => {
    try {
      const res = await fetch('/api/bases');
      const data = await res.json();
      setBases(data.bases || []);
    } catch (err) {
      console.error('Failed to fetch bases:', err);
    }
  };

  const generatePreview = async (base) => {
    try {
      const res = await fetch('/api/pinterest/templates', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ base }),
      });
      const data = await res.json();
      setPreview(data.preview);
      setCustomContent({
        title: data.preview.title,
        description: data.preview.description
      });
    } catch (err) {
      console.error('Failed to generate preview:', err);
    }
  };

  const handleSelectBase = (base) => {
    setSelectedBase(base);
    generatePreview(base);
  };

  const handleCreateTemplate = async () => {
    if (!selectedBase) return;
    setSaving(true);

    try {
      const res = await fetch('/api/pinterest/templates', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          base: selectedBase,
          customTitle: customContent.title !== preview?.title ? customContent.title : null,
          customDescription: customContent.description !== preview?.description ? customContent.description : null,
        }),
      });

      if (res.ok) {
        setShowCreateModal(false);
        setSelectedBase(null);
        setPreview(null);
        setCustomContent({ title: '', description: '' });
        fetchTemplates();
      }
    } catch (err) {
      console.error('Failed to create template:', err);
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteTemplate = async (id) => {
    if (!confirm('Delete this template?')) return;

    try {
      const res = await fetch(`/api/pinterest/templates?id=${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        fetchTemplates();
      }
    } catch (err) {
      console.error('Failed to delete template:', err);
    }
  };

  const filteredBases = bases.filter(base => {
    if (filter.type && base.baseType !== filter.type) return false;
    if (filter.level && base.hallLevel !== parseInt(filter.level)) return false;
    return true;
  });

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
          <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Pinterest Templates</h1>
          <p style={{ color: 'var(--text-muted)' }}>Create and manage pin templates from your bases.</p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="px-4 py-2 bg-primary text-black font-medium rounded-xl hover:bg-primary/90 transition-colors flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Create Template
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="rounded-xl p-4" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
          <div className="text-2xl font-bold text-primary">{templates.length}</div>
          <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Total Templates</div>
        </div>
        <div className="rounded-xl p-4" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
          <div className="text-2xl font-bold text-emerald-500">{templates.filter(t => t.status === 'ready').length}</div>
          <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Ready</div>
        </div>
        <div className="rounded-xl p-4" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
          <div className="text-2xl font-bold text-amber-500">{templates.filter(t => t.status === 'scheduled').length}</div>
          <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Scheduled</div>
        </div>
        <div className="rounded-xl p-4" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
          <div className="text-2xl font-bold text-blue-500">{templates.filter(t => t.status === 'posted').length}</div>
          <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Posted</div>
        </div>
      </div>

      {/* Templates Grid */}
      {templates.length === 0 ? (
        <div className="rounded-2xl p-12 text-center" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
          <svg className="w-16 h-16 mx-auto mb-4 opacity-50" style={{ color: 'var(--text-muted)' }} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
          </svg>
          <h2 className="text-xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>No templates yet</h2>
          <p style={{ color: 'var(--text-muted)' }}>Create your first Pinterest template from your bases.</p>
          <button
            onClick={() => setShowCreateModal(true)}
            className="mt-4 px-4 py-2 bg-primary text-black font-medium rounded-xl hover:bg-primary/90 transition-colors"
          >
            Create Template
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {templates.map((template) => (
            <div
              key={template._id}
              className="rounded-2xl overflow-hidden"
              style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}
            >
              {/* Image */}
              <div className="aspect-[4/3] bg-gray-800 relative">
                {template.imageUrl ? (
                  <img
                    src={template.imageUrl}
                    alt={template.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center" style={{ color: 'var(--text-muted)' }}>
                    No Image
                  </div>
                )}
                <span className={`absolute top-2 right-2 px-2 py-1 rounded-lg text-xs font-medium ${
                  template.status === 'ready' ? 'bg-emerald-500/20 text-emerald-400' :
                  template.status === 'scheduled' ? 'bg-amber-500/20 text-amber-400' :
                  template.status === 'posted' ? 'bg-blue-500/20 text-blue-400' :
                  'bg-gray-500/20 text-gray-400'
                }`}>
                  {template.status}
                </span>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold mb-1 line-clamp-2" style={{ color: 'var(--text-primary)' }}>
                  {template.title}
                </h3>
                <p className="text-sm line-clamp-2 mb-3" style={{ color: 'var(--text-muted)' }}>
                  {template.description?.split('\n')[0]}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs px-2 py-1 rounded-lg bg-primary/10 text-primary">
                    {template.hallType}{template.hallLevel} {template.baseType}
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleDeleteTemplate(template._id)}
                      className="p-2 rounded-lg text-red-400 hover:bg-red-500/10 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Create Template Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="rounded-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
            {/* Modal Header */}
            <div className="p-6 flex items-center justify-between" style={{ borderBottom: '1px solid var(--border)' }}>
              <h2 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>Create Pinterest Template</h2>
              <button
                onClick={() => {
                  setShowCreateModal(false);
                  setSelectedBase(null);
                  setPreview(null);
                }}
                className="p-2 rounded-lg transition-colors"
                style={{ color: 'var(--text-muted)' }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-auto p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left: Base Selection */}
                <div>
                  <h3 className="font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>1. Select a Base</h3>

                  {/* Filters */}
                  <div className="flex gap-3 mb-4">
                    <select
                      value={filter.type}
                      onChange={(e) => setFilter({ ...filter, type: e.target.value })}
                      className="px-3 py-2 rounded-lg text-sm"
                      style={{ background: 'var(--surface-100)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
                    >
                      <option value="">All Types</option>
                      <option value="war">War</option>
                      <option value="farm">Farm</option>
                      <option value="trophy">Trophy</option>
                    </select>
                    <select
                      value={filter.level}
                      onChange={(e) => setFilter({ ...filter, level: e.target.value })}
                      className="px-3 py-2 rounded-lg text-sm"
                      style={{ background: 'var(--surface-100)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
                    >
                      <option value="">All Levels</option>
                      {[18, 17, 16, 15, 14, 13, 12, 11, 10].map(l => (
                        <option key={l} value={l}>TH{l}</option>
                      ))}
                    </select>
                  </div>

                  {/* Base Grid */}
                  <div className="grid grid-cols-3 gap-2 max-h-[400px] overflow-y-auto p-1">
                    {filteredBases.slice(0, 30).map((base, index) => (
                      <div
                        key={index}
                        onClick={() => handleSelectBase(base)}
                        className={`cursor-pointer rounded-lg overflow-hidden transition-all ${
                          selectedBase === base ? 'ring-2 ring-primary' : ''
                        }`}
                        style={{ border: '1px solid var(--border)' }}
                      >
                        <div className="aspect-square bg-gray-800">
                          {(base.originalImageUrl || base.thumbnailUrl) && (
                            <img src={(base.originalImageUrl || base.thumbnailUrl)} alt="" className="w-full h-full object-cover" />
                          )}
                        </div>
                        <div className="p-2 text-xs" style={{ background: 'var(--surface-100)' }}>
                          <span style={{ color: 'var(--text-primary)' }}>{base.hallType}{base.hallLevel}</span>
                          <span className="ml-1" style={{ color: 'var(--text-muted)' }}>#{base.baseNumber}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Preview & Edit */}
                <div>
                  <h3 className="font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>2. Preview & Customize</h3>

                  {selectedBase && preview ? (
                    <div className="space-y-4">
                      {/* Preview Card */}
                      <div className="rounded-xl overflow-hidden" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
                        <div className="aspect-[4/3] bg-gray-800">
                          {preview.imageUrl && (
                            <img src={preview.imageUrl} alt="" className="w-full h-full object-cover" />
                          )}
                        </div>
                        <div className="p-4">
                          <div className="text-xs mb-2" style={{ color: 'var(--text-muted)' }}>Pinterest Preview</div>
                          <h4 className="font-semibold text-sm line-clamp-2" style={{ color: 'var(--text-primary)' }}>
                            {customContent.title}
                          </h4>
                        </div>
                      </div>

                      {/* Edit Fields */}
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>Title</label>
                        <input
                          type="text"
                          value={customContent.title}
                          onChange={(e) => setCustomContent({ ...customContent, title: e.target.value })}
                          maxLength={100}
                          className="w-full px-4 py-3 rounded-xl focus:outline-none focus:border-primary"
                          style={{ background: 'var(--surface-100)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
                        />
                        <div className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>{customContent.title.length}/100</div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>Description</label>
                        <textarea
                          value={customContent.description}
                          onChange={(e) => setCustomContent({ ...customContent, description: e.target.value })}
                          maxLength={500}
                          rows={6}
                          className="w-full px-4 py-3 rounded-xl focus:outline-none focus:border-primary resize-none"
                          style={{ background: 'var(--surface-100)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
                        />
                        <div className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>{customContent.description.length}/500</div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>Destination URL</label>
                        <input
                          type="text"
                          value={preview.destinationUrl}
                          readOnly
                          className="w-full px-4 py-3 rounded-xl"
                          style={{ background: 'var(--surface-100)', border: '1px solid var(--border)', color: 'var(--text-muted)' }}
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="rounded-xl p-12 text-center" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
                      <svg className="w-12 h-12 mx-auto mb-3 opacity-50" style={{ color: 'var(--text-muted)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p style={{ color: 'var(--text-muted)' }}>Select a base to see preview</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 flex justify-end gap-3" style={{ borderTop: '1px solid var(--border)' }}>
              <button
                onClick={() => {
                  setShowCreateModal(false);
                  setSelectedBase(null);
                  setPreview(null);
                }}
                className="px-4 py-2 rounded-xl transition-colors"
                style={{ background: 'var(--surface-100)', color: 'var(--text-primary)' }}
              >
                Cancel
              </button>
              <button
                onClick={handleCreateTemplate}
                disabled={!selectedBase || saving}
                className="px-6 py-2 bg-primary text-black font-medium rounded-xl hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                {saving ? 'Saving...' : 'Save Template'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
