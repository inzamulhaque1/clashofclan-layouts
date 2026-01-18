'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext({
  user: null,
  loading: true,
  signInWithGoogle: async () => {},
  signOut: async () => {},
});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let unsubscribe = null;

    // Dynamic import Firebase only on client side
    const initAuth = async () => {
      try {
        const { auth, db } = await import('@/lib/firebase');
        const { onAuthStateChanged, getRedirectResult } = await import('firebase/auth');
        const { doc, getDoc, setDoc, serverTimestamp } = await import('firebase/firestore');

        if (!auth) {
          setLoading(false);
          return;
        }

        // Set up auth state listener first
        unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
          if (firebaseUser) {
            // Get additional user data from Firestore
            try {
              const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
              const userData = userDoc.exists() ? userDoc.data() : {};

              setUser({
                uid: firebaseUser.uid,
                email: firebaseUser.email,
                displayName: firebaseUser.displayName,
                photoURL: firebaseUser.photoURL,
                ...userData,
              });
            } catch (error) {
              setUser({
                uid: firebaseUser.uid,
                email: firebaseUser.email,
                displayName: firebaseUser.displayName,
                photoURL: firebaseUser.photoURL,
              });
            }
          } else {
            setUser(null);
          }
          setLoading(false);
        });

        // Handle redirect result (for users returning from Google sign-in)
        try {
          const result = await getRedirectResult(auth);
          if (result?.user) {
            // Create/update user document on successful redirect sign-in
            await setDoc(doc(db, 'users', result.user.uid), {
              email: result.user.email,
              displayName: result.user.displayName,
              photoURL: result.user.photoURL,
              lastLogin: serverTimestamp(),
              updatedAt: serverTimestamp(),
            }, { merge: true });

            const userDoc = await getDoc(doc(db, 'users', result.user.uid));
            if (!userDoc.data()?.createdAt) {
              await setDoc(doc(db, 'users', result.user.uid), {
                createdAt: serverTimestamp(),
                favorites: [],
              }, { merge: true });
            }
          }
        } catch (error) {
          // Ignore redirect errors - user might not be coming from redirect
          if (error.code !== 'auth/popup-closed-by-user') {
            console.error('Redirect result error:', error);
          }
        }
      } catch (error) {
        console.error('Auth init error:', error);
        setLoading(false);
      }
    };

    initAuth();

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, []);

  const signInWithGoogle = async () => {
    try {
      const { auth, googleProvider } = await import('@/lib/firebase');
      const { signInWithRedirect } = await import('firebase/auth');

      if (!auth) return { success: false, error: 'Auth not initialized' };

      // Use redirect instead of popup to avoid COOP issues
      await signInWithRedirect(auth, googleProvider);

      // The page will redirect, so this won't return
      return { success: true };
    } catch (error) {
      console.error('Google sign-in error:', error);
      return { success: false, error: error.message };
    }
  };

  const signOut = async () => {
    try {
      const { auth } = await import('@/lib/firebase');
      const { signOut: firebaseSignOut } = await import('firebase/auth');

      if (!auth) return { success: false, error: 'Auth not initialized' };

      await firebaseSignOut(auth);
      setUser(null);
      return { success: true };
    } catch (error) {
      console.error('Sign out error:', error);
      return { success: false, error: error.message };
    }
  };

  const value = {
    user,
    loading,
    signInWithGoogle,
    signOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
