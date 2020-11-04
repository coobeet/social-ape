import { useState, useEffect } from 'react';

import firebase from '../services/firebase';

export default function useIsSignedIn() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => setIsSignedIn(!!user));

    return () => unregisterAuthObserver();
  }, []);

  return { isSignedIn, setIsSignedIn };
}
