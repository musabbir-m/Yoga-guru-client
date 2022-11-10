import { createContext, useEffect, useState } from "react";
import app from "../../Pages/firebase/firebase.config";
import {
    createUserWithEmailAndPassword,
    getAuth,
    GithubAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
  } from "firebase/auth";


  export const AuthContext = createContext();
  const auth = getAuth(app);
  
  const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
  
    

    //for github
    const githubProvider= new GithubAuthProvider()
    const githubSignIn= ()=>{
        setLoading(true)
        return signInWithPopup(auth,githubProvider)
    }
    //for signup
    const signUp = (email, password) => {
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password);
    };
    
    //for login
    const Login = (email, password) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password);
    };
    //logout
  const logOut= ()=>{
    setLoading(true)
    return signOut(auth)
  }
    //mangage user, user logged in or not
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log(currentUser);
        setUser(currentUser);
        setLoading(false)  
      });
      return () => {
        unsubscribe();
      };
    }, []);
    const authInfo = {
      user,
      loading,
      signUp,
      Login,
      logOut,
      githubSignIn
    };
    return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
  };
  
  export default AuthProvider;
