import { createContext, useEffect, useState } from "react";
import { auth, db } from "../config/firebase";
import { collection, setDoc, doc } from "firebase/firestore";
import {
  GoogleAuthProvider,
  isSignInWithEmailLink,
  sendSignInLinkToEmail,
  signInWithEmailLink,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

export const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  const [user] = useAuthState(auth);
  const [email, setEmail] = useState("");
  const [isEmailLinkLoadong, setIsEmailLinkLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [alertMsg, setAlertMsg] = useState("");
  const { search } = useLocation();
  const navigate = useNavigate("");

  const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.

    url: "https://groupgo.netlify.app/create",
    // NOTE!!! ( comment out the above line for development )

    // url: "http://localhost:5173/create",
    // NOTE!!! ( comment out the above line for production )

    handleCodeInApp: true,
  };

  useEffect(() => {
    if (user) {
      createUserDocument(user);
    } else {
      console.log("no user doc to create");
    }
  }, [user]);

  const sendEmailLink = async (event, email) => {
    event.preventDefault();
    setIsEmailLinkLoading(true);
    await sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
        // The link was successfully sent. Inform the user.
        // Save the email locally so you don't need to ask the user for it again
        // if they open the link on the same device.
        console.log(user);
        window.localStorage.setItem("emailForSignIn", email);
        setAlertMsg("we have sent you an email with a link to sign in");
        setIsEmailLinkLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setErrorMsg(`Sign in error :- ${err.message}`);
      });
  };

  const handleSignInUser = () => {
    if (user) {
      return;
    } else {
      // Confirm the link is a sign-in with email link.

      if (isSignInWithEmailLink(auth, window.location.href)) {
        // Get the email if available. This should be available if the user completes
        // the flow on the same device where they started it.
        let email = window.localStorage.getItem("emailForSignIn");
        if (!email) {
          // User opened the link on a different device. To prevent session fixation
          // attacks, ask the user to provide the associated email again.
          email = window.prompt("Please provide your email for confirmation");
        }
        signInWithEmailLink(auth, email, window.location.href)
          .then((result) => {
            // const newUser = result.user
            // createUserDocument(newUser.uid, newUser.email, newUser.photoURL, newUser.displayName)
            // Clear email from storage
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

  const handleLogOut = () => {
    if (user) {
      signOut(auth);
      navigate("/");
    } else {
      return;
    }
  };

  const createUserDocument = async (user) => {
    const docRef = doc(db, "users", user.uid);
    const userObj = {
      uid: user.uid,
      email: user.email,
      photoURL: user.photoURL,
      displayName: user.displayName,
    };
    await setDoc(docRef, userObj);
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
        isEmailLinkLoadong,
        setIsEmailLinkLoading,
        handleLogOut,
        errorMsg,
        setErrorMsg,
        createUserDocument,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
