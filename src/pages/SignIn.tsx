import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
import visibilityIcon from "../assets/svg/visibilityIcon.svg";
import user from '../assets/svg/personIcon.svg'
import hide from '../assets/svg/lockIcon.svg'
import { toast } from "react-toastify";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { sign } from "crypto";
import OAuth from "../components/OAuth";

export function SignIn() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const { email, password } = formData;
  const navigate = useNavigate();

  //

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e:any) =>{
    e.preventDefault();
    try{
      const auth = getAuth();
      const signIn = await signInWithEmailAndPassword(auth, email, password);
      if(signIn.user){
        navigate('/');
      }
    }catch(ex){
      toast.error("Bad User Credentials");
    }
  }

  return (
    <>
      <div className="container">
        <header>
          <p className="container__title">Welcome Back</p>
        </header>

        <main className="sign">
          <form action="#" className="sign__form" onSubmit={handleSubmit}> 
            <div className="sign__form-div">
              <img src={user} alt="" style={{marginLeft:'5px'}}/>
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
              <img src={hide} alt=""  className="hide"/>
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

            <Link to="/forgot-password" className="sign__forgotPassword">
              Forgot Password?
            </Link>

            <div className="sign__Bar">
              <p className="sign__Bar-text sign__forgotPassword">Sign In</p>
              <button className="sign__Bar-button" type="submit">
                <ArrowIcon fill="#ffffff" width="34px" height="34px" className="sign__Bar-arrow"/>
              </button>
            </div>
          </form>
          {/* Google Oauth */}

          <OAuth/> 
          <Link to="/sign-up" className="sign__forgotPassword">
            Sign Up Instead
          </Link>
        </main>
      </div>
    </>
  );
}
