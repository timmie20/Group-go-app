import { createContext, useState } from "react";
import { auth } from "../config/firebase";
import {
  GoogleAuthProvider,
  isSignInWithEmailLink,
  sendSignInLinkToEmail,
  signInWithEmailLink,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

export const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  const [user] = useAuthState(auth);
  const [email, setEmail] = useState("");
  const [alertMsg, setAlertMsg] = useState("");
  const { search } = useLocation();
  const navigate = useNavigate("");

  const actionCodeSettings = {
    url: "http://localhost:5173/create",
    handleCodeInApp: true,
  };

  const sendEmailLink = async (event, email) => {
    event.preventDefault();
    await sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
        window.localStorage.setItem("emailForSignIn", email);
        setAlertMsg("we have sent you an email with a link to sign in");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleSignInUser = () => {
    if (user) {
      return;
    } else {
      if (isSignInWithEmailLink(auth, window.location.href)) {
        let email = window.localStorage.getItem("emailForSignIn");
        if (!email) {
          email = window.prompt("Please provide your email for confirmation");
        }
        signInWithEmailLink(auth, email, window.location.href)
          .then((result) => {
            console.log(result.user);
            window.localStorage.removeItem("emailForSignIn");
            navigate("/create");
          })
          .catch((err) => {
            console.log(err);
            navigate("/login");
          });
      } else {
        console.log("pls sign in");
      }
    }
  };

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };
  return (
    <AuthContext.Provider
      value={{
        sendEmailLink,
        email,
        setEmail,
        handleSignInUser,
        user,
        navigate,
        search,
        alertMsg,
        signInWithGoogle,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
