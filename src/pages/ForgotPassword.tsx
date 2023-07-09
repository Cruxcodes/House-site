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
    <div className="forgot">
      <h1>Forgot Password</h1>
      <form action="#" onSubmit={onSubmit}>
        <label htmlFor="email">Email address</label>
        <input type="email" value={email} onChange={onChange}name="email" id="email" />
        <button type="submit">Reset password</button>
        <button className="resend">Resend password link</button>
      </form>
      <Link to="/sign-in">Sign In</Link>
    </div>
  );
}
