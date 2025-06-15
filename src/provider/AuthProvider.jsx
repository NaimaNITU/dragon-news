import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setUser] = useState(null);

  console.log(currentUser);

  //sign up a user by email and password
  const userRegistration = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //sign in a user by email and password
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //sign out a user
  const UserSignOut = () => {
    return signOut(auth);
  };

  //set a observer to get current user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const authData = {
    currentUser,
    setUser,
    userRegistration,
    userLogin,
    UserSignOut,
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
