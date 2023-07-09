import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config";
import googleIcon from "../assets/svg/googleIcon.svg";
import { toast } from "react-toastify";
function OAuth() {
  const navigate = useNavigate();
  const location = useLocation();

  const onGoogleClick = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      // Checking for user
      const docRef = doc(db, "users", user.uid); //document reference
      const docSnap = await getDoc(docRef); //awaiting snapshot

      // if user doesn't exist create the user
      if (!docSnap.exists()) {
        await setDoc(doc(db, "users", user.uid), {
          name: user.displayName,
          email: user.email,
          timeStamp: serverTimestamp(),
        });

        navigate('/')
      }
    } catch (e) {
        toast.error("Could not authorize with Google");
    }
  };

  return (
    <div className="socialLogin">
      <p>Sign {location.pathname === "/sign-up" ? "up" : "in"} with</p>
      <button className="socialIcon" onClick={onGoogleClick}>
        <img src={googleIcon} alt="google" />
      </button>
    </div>
  );
}

export default OAuth;
