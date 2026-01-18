'use client';

import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '@/contexts/AuthContext';

export function useFavorites() {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch favorites from Firestore
  useEffect(() => {
    async function fetchFavorites() {
      if (!user?.uid) {
        setFavorites([]);
        setLoading(false);
        return;
      }

      try {
        const { db } = await import('@/lib/firebase');
        const { doc, getDoc } = await import('firebase/firestore');

        if (!db) {
          setLoading(false);
          return;
        }

        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
          setFavorites(userDoc.data().favorites || []);
        }
      } catch (error) {
        console.error('Error fetching favorites:', error);
      }
      setLoading(false);
    }

    fetchFavorites();
  }, [user?.uid]);

  // Check if a base is favorited
  const isFavorite = useCallback((baseId) => {
    return favorites.some(fav => fav.id === baseId);
  }, [favorites]);

  // Add to favorites
  const addFavorite = useCallback(async (base) => {
    if (!user?.uid) return { success: false, error: 'Not logged in' };

    const favoriteData = {
      id: base.id || `${base.hallType}${base.hallLevel}-${base.baseType}-${base.baseNumber}`,
      hallType: base.hallType,
      hallLevel: base.hallLevel,
      baseType: base.baseType,
      baseNumber: base.baseNumber,
      thumbnailUrl: base.thumbnailUrl || base.originalImageUrl,
      addedAt: new Date().toISOString(),
    };

    try {
      const { db } = await import('@/lib/firebase');
      const { doc, setDoc, arrayUnion } = await import('firebase/firestore');

      if (!db) return { success: false, error: 'Database not initialized' };

      // Use setDoc with merge to create doc if it doesn't exist
      await setDoc(doc(db, 'users', user.uid), {
        favorites: arrayUnion(favoriteData),
      }, { merge: true });

      setFavorites(prev => [...prev, favoriteData]);
      return { success: true };
    } catch (error) {
      console.error('Error adding favorite:', error);
      return { success: false, error: error.message };
    }
  }, [user?.uid]);

  // Remove from favorites
  const removeFavorite = useCallback(async (baseId) => {
    if (!user?.uid) return { success: false, error: 'Not logged in' };

    const favoriteToRemove = favorites.find(fav => fav.id === baseId);
    if (!favoriteToRemove) return { success: false, error: 'Not found' };

    try {
      const { db } = await import('@/lib/firebase');
      const { doc, setDoc, arrayRemove } = await import('firebase/firestore');

      if (!db) return { success: false, error: 'Database not initialized' };

      // Use setDoc with merge
      await setDoc(doc(db, 'users', user.uid), {
        favorites: arrayRemove(favoriteToRemove),
      }, { merge: true });

      setFavorites(prev => prev.filter(fav => fav.id !== baseId));
      return { success: true };
    } catch (error) {
      console.error('Error removing favorite:', error);
      return { success: false, error: error.message };
    }
  }, [user?.uid, favorites]);

  // Toggle favorite
  const toggleFavorite = useCallback(async (base) => {
    const baseId = base.id || `${base.hallType}${base.hallLevel}-${base.baseType}-${base.baseNumber}`;
    if (isFavorite(baseId)) {
      return removeFavorite(baseId);
    } else {
      return addFavorite(base);
    }
  }, [isFavorite, addFavorite, removeFavorite]);

  return {
    favorites,
    loading,
    isFavorite,
    addFavorite,
    removeFavorite,
    toggleFavorite,
  };
}
