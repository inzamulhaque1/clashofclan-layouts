'use client';

import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useComments } from '@/hooks/useComments';

function StarRating({ rating, onRate, interactive = false, size = 'md' }) {
  const [hover, setHover] = useState(0);
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          disabled={!interactive}
          onClick={() => interactive && onRate?.(star)}
          onMouseEnter={() => interactive && setHover(star)}
          onMouseLeave={() => interactive && setHover(0)}
          className={`${interactive ? 'cursor-pointer hover:scale-110' : 'cursor-default'} transition-transform`}
        >
          <svg
            className={`${sizeClasses[size]} ${
              star <= (hover || rating)
                ? 'text-yellow-400'
                : 'text-surface-300'
            } transition-colors`}
            fill={star <= (hover || rating) ? 'currentColor' : 'none'}
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
        </button>
      ))}
    </div>
  );
}

function CommentCard({ comment, onDelete, currentUserId }) {
  const isOwner = currentUserId === comment.userId;
  const createdAt = comment.createdAt?.toDate
    ? comment.createdAt.toDate()
    : comment.createdAt instanceof Date
    ? comment.createdAt
    : new Date();

  return (
    <div
      className="p-4 rounded-xl"
      style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}
    >
      <div className="flex items-start gap-3">
        {/* Avatar */}
        {comment.userPhoto ? (
          <img
            src={comment.userPhoto}
            alt={comment.userName}
            className="w-10 h-10 rounded-full object-cover flex-shrink-0"
          />
        ) : (
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold"
            style={{ background: 'var(--primary)', color: '#000' }}
          >
            {comment.userName?.charAt(0) || 'U'}
          </div>
        )}

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 min-w-0">
              <span className="font-medium truncate" style={{ color: 'var(--text-primary)' }}>
                {comment.userName}
              </span>
              {comment.rating && (
                <StarRating rating={comment.rating} size="sm" />
              )}
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                {createdAt.toLocaleDateString()}
              </span>
              {isOwner && (
                <button
                  onClick={() => onDelete(comment.id)}
                  className="p-1 rounded hover:bg-red-500/10 transition-colors"
                  title="Delete comment"
                >
                  <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              )}
            </div>
          </div>
          <p className="mt-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
            {comment.text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function CommentsSection({ baseId }) {
  const { user, signInWithGoogle } = useAuth();
  const { comments, loading, addComment, deleteComment, averageRating, ratingsCount } = useComments(baseId);
  const [newComment, setNewComment] = useState('');
  const [newRating, setNewRating] = useState(0);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    setSubmitting(true);
    const result = await addComment(newComment, newRating || null);
    if (result.success) {
      setNewComment('');
      setNewRating(0);
    }
    setSubmitting(false);
  };

  const handleSignIn = async () => {
    await signInWithGoogle();
  };

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>
          Reviews & Comments
        </h3>
        {ratingsCount > 0 && (
          <div className="flex items-center gap-2">
            <StarRating rating={Math.round(averageRating)} size="sm" />
            <span className="text-sm" style={{ color: 'var(--text-muted)' }}>
              {averageRating.toFixed(1)} ({ratingsCount})
            </span>
          </div>
        )}
      </div>

      {/* Add Comment Form */}
      {user ? (
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="p-4 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
            <div className="flex items-center gap-3 mb-3">
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt={user.displayName}
                  className="w-8 h-8 rounded-full object-cover"
                />
              ) : (
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm"
                  style={{ background: 'var(--primary)', color: '#000' }}
                >
                  {user.displayName?.charAt(0) || 'U'}
                </div>
              )}
              <span className="font-medium text-sm" style={{ color: 'var(--text-primary)' }}>
                {user.displayName}
              </span>
            </div>

            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Rate this base:</span>
              <StarRating rating={newRating} onRate={setNewRating} interactive size="md" />
            </div>

            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Share your thoughts about this base..."
              rows={3}
              className="w-full px-4 py-3 rounded-xl text-sm resize-none"
              style={{
                background: 'var(--bg-primary)',
                border: '1px solid var(--border)',
                color: 'var(--text-primary)',
              }}
            />

            <div className="flex justify-end mt-3">
              <button
                type="submit"
                disabled={!newComment.trim() || submitting}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: 'var(--primary)',
                  color: '#000',
                }}
              >
                {submitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    Posting...
                  </span>
                ) : (
                  'Post Review'
                )}
              </button>
            </div>
          </div>
        </form>
      ) : (
        <div
          className="p-6 rounded-xl text-center mb-6"
          style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}
        >
          <p className="mb-4" style={{ color: 'var(--text-muted)' }}>
            Sign in to leave a review
          </p>
          <button
            onClick={handleSignIn}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all hover:scale-105"
            style={{ background: 'var(--surface-200)', border: '1px solid var(--border)' }}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Sign in with Google
          </button>
        </div>
      )}

      {/* Comments List */}
      {loading ? (
        <div className="flex justify-center py-8">
          <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      ) : comments.length > 0 ? (
        <div className="space-y-4">
          {comments.map((comment) => (
            <CommentCard
              key={comment.id}
              comment={comment}
              onDelete={deleteComment}
              currentUserId={user?.uid}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-8" style={{ color: 'var(--text-muted)' }}>
          <svg className="w-12 h-12 mx-auto mb-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <p>No reviews yet. Be the first to share your thoughts!</p>
        </div>
      )}
    </div>
  );
}
