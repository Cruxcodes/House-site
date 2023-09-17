import { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
export function ForgotPassword() {
  const [email, setEmail] = useState<string>("");
  const onChange = (e: any) => {
    setEmail(e.target.value);
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success("Email was sent");
      console.log(auth)
    } catch (error) {
      toast.error("Could not send reset email");
      console.log(error);

    }
  };
  return (
    <div className="forgot container">
      <header>
        <p className="container__title">Forgot Password</p>
      </header>
      <main className="sign">
        <form action="#" className="sign__form" onSubmit={onSubmit}>
          <label htmlFor="email">
            <p>Email address</p>
          </label>
          <input
            type="email"
            value={email}
            required
            onChange={onChange}
            name="email"
            id="email"
          />
          <div className="buttons">
            <button type="submit">Reset password</button>
            <button className="resend">Resend password link</button>
          </div>
        </form>
        <Link to="/sign-in" className="sign-in">Sign In Instead?</Link>
      </main>
    </div>
  );
}
