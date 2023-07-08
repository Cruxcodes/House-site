import { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
export function ForgotPassword() {
  const [email, setEmail] = useState<string>("");
  const onChange = (e: any) => {};

  const onSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <div >
      <h1>Forgot Password</h1>
    </div>
  );
}
