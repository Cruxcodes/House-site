import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { setDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase.config";
import { getAuth, updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
export function Profile() {
  const [user, setUser] = useState<any>(null);
  const [changeDetails, setChangeDetails] = useState<boolean>(false);
  const navigate = useNavigate();

  const auth = getAuth();
  const [formData, setFormData] = useState<any>({
    name: auth.currentUser?.displayName,
    email: auth.currentUser?.email,
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData((prev: any) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  // Destructured the form data
  const { name, email } = formData;

  const logOut = () => {
    auth.signOut();
    navigate("/sign-in");
  };

  const onSubmit = async (e:any ) => {
    e.preventDefault();
    try {
      if (auth.currentUser?.displayName !== name) {
        // Update display name in firebase
        await updateProfile(auth.currentUser!, {
          displayName: name,
        });

        // Update in firestore
        const userRef = doc(db, "users", auth.currentUser!.uid);
        await updateDoc(userRef, {
          name: name,
        });
        console.log(auth.currentUser)
        setChangeDetails((prev) => !prev);
      }
    } catch (ex) {
      toast.error('Could not update the user profile')
    }
  };
  useEffect(() => {
    setUser(auth.currentUser);
  }, []);

  return (
    <div className="profile">
      <header className="profile__header">
        <p className="pageHeader">My Profile</p>
        <button type="button" onClick={logOut} className="logOut">
          Logout
        </button>
      </header>
      <main>
        <div className="profile__details details">
          <p className="details__text">Personal Details</p>
          <p
            className="details__changePersonalDetails"
            onClick={() => setChangeDetails((prev) => !prev)}
          >
            {changeDetails ? "Done" : "Change"}
          </p>
        </div>

        <div className="profile__card card">
          <form action="" autoComplete="off" onSubmit={onSubmit}>
            <label htmlFor="name">Profile Name:</label>
            <input
              type="text"
              id="name"
              className={!changeDetails ? "card__name" : "card__name-active"}
              disabled={!changeDetails}
              value={name}
              onChange={onChange}
            />
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              id="email"
              className={!changeDetails ? "card__email" : "card__email-active"}
              disabled={!changeDetails}
              value={email}
              onChange={onChange}
            />
            <button type="submit">Submit</button>
            {/* <input type="submit" value="Make Changes" onClick={onSubmit} /> */}
          </form>
        </div>
      </main>
    </div>
  );
}
