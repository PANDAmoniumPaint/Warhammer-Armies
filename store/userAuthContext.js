import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";

// Prep userAuthContext using React's createContext hook
const userAuthContext = createContext();

// Export the functions used for logIn, signUp, and logOut
export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Set up login using email and password values, return using firebase auth tools
  function logIn(email, password) {
    setIsLoggedIn(true);
    return signInWithEmailAndPassword(auth, email, password);
  }
  // Set up signup using email and password values, return using firebase auth tools
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  // Set up logout return using firebase auth tools
  function logOut() {
    setIsLoggedIn(false);
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider value={{ user, isLoggedIn: isLoggedIn, logIn, signUp, logOut }}>
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
