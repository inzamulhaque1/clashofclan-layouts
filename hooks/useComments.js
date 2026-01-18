'use client';

import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '@/contexts/AuthContext';

export function useComments(baseId) {
  const { user } = useAuth();
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch comments for the base
  useEffect(() => {
    async function fetchComments() {
      if (!baseId) {
        setLoading(false);
        return;
      }

      try {
        const { db } = await import('@/lib/firebase');
        const { collection, query, where, orderBy, getDocs } = await import('firebase/firestore');

        if (!db) {
          setLoading(false);
          return;
        }

        const commentsRef = collection(db, 'comments');
        const q = query(
          commentsRef,
          where('baseId', '==', baseId),
          orderBy('createdAt', 'desc')
        );
        const snapshot = await getDocs(q);
        const commentsData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setComments(commentsData);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
      setLoading(false);
    }

    fetchComments();
  }, [baseId]);

  // Add a new comment
  const addComment = useCallback(async (text, rating = null) => {
    if (!user?.uid || !baseId) {
      return { success: false, error: 'Not logged in' };
    }

    if (!text.trim()) {
      return { success: false, error: 'Comment cannot be empty' };
    }

    try {
      const { db } = await import('@/lib/firebase');
      const { collection, addDoc, serverTimestamp } = await import('firebase/firestore');

      if (!db) return { success: false, error: 'Database not initialized' };

      const commentData = {
        baseId,
        userId: user.uid,
        userName: user.displayName || 'Anonymous',
        userPhoto: user.photoURL || null,
        text: text.trim(),
        rating,
        createdAt: serverTimestamp(),
      };

      const docRef = await addDoc(collection(db, 'comments'), commentData);

      // Add to local state immediately
      setComments(prev => [{
        id: docRef.id,
        ...commentData,
        createdAt: new Date(),
      }, ...prev]);

      return { success: true };
    } catch (error) {
      console.error('Error adding comment:', error);
      return { success: false, error: error.message };
    }
  }, [user, baseId]);

  // Delete a comment
  const deleteComment = useCallback(async (commentId) => {
    if (!user?.uid) {
      return { success: false, error: 'Not logged in' };
    }

    const comment = comments.find(c => c.id === commentId);
    if (!comment || comment.userId !== user.uid) {
      return { success: false, error: 'Not authorized' };
    }

    try {
      const { db } = await import('@/lib/firebase');
      const { doc, deleteDoc } = await import('firebase/firestore');

      if (!db) return { success: false, error: 'Database not initialized' };

      await deleteDoc(doc(db, 'comments', commentId));
      setComments(prev => prev.filter(c => c.id !== commentId));
      return { success: true };
    } catch (error) {
      console.error('Error deleting comment:', error);
      return { success: false, error: error.message };
    }
  }, [user, comments]);

  // Calculate average rating
  const averageRating = comments.length > 0
    ? comments.filter(c => c.rating).reduce((acc, c) => acc + c.rating, 0) /
      comments.filter(c => c.rating).length
    : 0;

  const ratingsCount = comments.filter(c => c.rating).length;

  return {
    comments,
    loading,
    addComment,
    deleteComment,
    averageRating,
    ratingsCount,
  };
}
