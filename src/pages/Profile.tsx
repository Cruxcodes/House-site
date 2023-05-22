import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
export function Profile() {
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  const auth = getAuth();
  const [formData, setFormData] = useState<any>({
    name: auth.currentUser?.displayName,
    email: auth.currentUser?.email,
  });


  const {name,email} = formData;
  const logOut = () =>{
    auth.signOut();
    navigate('/sign-in');
  }
  useEffect(() => {
    console.log(auth.currentUser);
    setUser(auth.currentUser);
  }, []);

  return (
    <div className="profile">
      <header className="profile__header">
        <p className="pageHeader">
          My Profile
        </p>
        <button type="button" onClick={logOut} className="logOut">
          Logout
        </button>
      </header>
    </div>
  );
}
