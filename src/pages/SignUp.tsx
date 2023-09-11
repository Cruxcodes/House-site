import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { db, app } from "../firebase.config";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { ReactComponent as ArrowIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
import visibilityIcon from "../assets/svg/visibilityIcon.svg";
import user from "../assets/svg/personIcon.svg";
import hide from "../assets/svg/lockIcon.svg";
import nameIcon from "../assets/svg/badgeIcon.svg";
import { light } from "../styles/Style";

interface FormData {
  name: string;
  email: string;
  password?: string;
}

export function SignUp() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;
  const navigate = useNavigate();

  //

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const auth = getAuth(app);
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password!
      );
      
      const user = userCredentials.user;
      updateProfile(auth.currentUser!, { displayName: name });

      const formDataCopy: any = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timeStamp = serverTimestamp();

      await setDoc(doc(db, 'users' , user.uid), formDataCopy);
      navigate("/sign-in");
    } catch (ex) {
      toast.error('Something went wrong with registration');
    }
  };

  return (
    <>
      <div className="container ${light}">
        <header>
          <p className="container__title">Let's get you started!!</p>
        </header>

        <main className="sign">
          <form action="#" className="sign__form" onSubmit={handleSubmit}>
            <div className="sign__form-div">
              <img src={nameIcon} alt="" style={{ marginLeft: "5px" }} />
              <input
                type="text"
                name="nameInput"
                id="name"
                placeholder="Name"
                value={name}
                onChange={onChange}
              />
              <div className="effect"></div>
            </div>
            <div className="sign__form-div">
              <img src={user} alt="" style={{ marginLeft: "5px" }} />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={onChange}
              />
              <div className="effect"></div>
            </div>

            <div className="sign__form-passwordInputDiv sign__form-div">
              <img src={hide} alt="" className="hide" />
              <input
                type={showPassword ? "text" : "password"}
                className="passwordInpuDiv__input"
                placeholder="password"
                id="password"
                value={password}
                onChange={onChange}
              />
              <div className="effect"></div>
              <img
                src={visibilityIcon}
                alt="show"
                onClick={() => setShowPassword((prevState) => !prevState)}
                className="showPassword"
              />
            </div>

            <div className="sign__Bar">
              <p className="sign__Bar-text sign__forgotPassword">Sign Up</p>
              <button className="sign__Bar-button" type="submit">
                <ArrowIcon
                  fill="#ffffff"
                  width="34px"
                  height="34px"
                  className="sign__Bar-arrow"
                />
              </button>
            </div>
          </form>
          {/* Google Oauth */}

          <Link to="/sign-in" className="sign__forgotPassword">
            Already Have An Account? Sign in
          </Link>
        </main>
      </div>
    </>
  );
}
