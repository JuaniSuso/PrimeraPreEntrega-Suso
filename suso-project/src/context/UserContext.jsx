import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    email: null,
    logged: false,
    uid: null,
  });

  const login = (values) => {
    signInWithEmailAndPassword(auth, values.email, values.password)



  };

  const register = (values) => {
    createUserWithEmailAndPassword(auth, values.email, values.password)
  }

  const logout = () => {
    signOut(auth)
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) =>{
        if (user) {
            setUser({
                email: user.email,
                uid: user.uid,
                logged: true,
              })
        } else {
            setUser({
                email: null,
                uid: null,
                logged: false,
              })
        }
        
    })
  }, [])
  

  return (
    <UserContext.Provider value={{ user, login, register, logout }}>
      {children}
    </UserContext.Provider>
  );
};
