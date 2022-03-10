import React, { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import { auth } from "firebaseConfig";
import { AuthContext } from "context/AuthContext";

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<firebase.User | null>(null);
  const [loadingAuth, setLoadingAuth] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
      setLoadingAuth(false);
    });

    return unsubscribe;
  }, [firebase]);

  return <AuthContext.Provider value={{ user, loadingAuth }}>{children}</AuthContext.Provider>;
};
