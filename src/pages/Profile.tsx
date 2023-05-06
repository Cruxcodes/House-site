import React,{useEffect, useState} from 'react'
import { getAuth } from 'firebase/auth'
export function Profile() {
  const [user,setUser] = useState<any>();

  const auth = getAuth();
  useEffect(() => {
    setUser(auth.currentUser);
  },[]);

  return (
    <div>
      <h1>Profile</h1>
      <p>{user ? user.displayName : 'Not logged In Yet'}</p>
    </div>
  );
}
