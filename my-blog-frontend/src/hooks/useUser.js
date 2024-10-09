import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';

const useUser = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), user => { // if user is logged in, user will be an object, otherwise it will be null
      setUser(user);
      setIsLoading(false); 
    });

    return unsubscribe;
  }, []);

  return { user, isLoading };
}

export default useUser;
