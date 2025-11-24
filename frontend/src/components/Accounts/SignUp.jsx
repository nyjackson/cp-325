import SignIn from "./SignIn";
import { Link } from "react-router";
import { useRef, useState, useEffect } from "react";
import { BACKEND_URL } from "../../App";
import MessageBox from "../MessageBox";
import {
  makeError,
  signupSuccess,
  setActive,
  selectMessage,
  displayMessageStatus,
} from "../slices/errorSlice";
import { useDispatch, useSelector } from "react-redux";

function SignUp() {
  const formRef = useRef();
  const dispatch = useDispatch();
  const messageBox = useSelector(selectMessage);
  const showMessage = useSelector(displayMessageStatus);
  useEffect(() => {
    //dispatch(setActive(false))
    console.log("display message?", showMessage);
    console.log("display message?", messageBox);
  }, [showMessage, messageBox]);

  function clearForm() {
    formRef.current[0].value = "";
    formRef.current[1].value = "";
    formRef.current[2].value = "";
    formRef.current[3].value = "";
    formRef.current[4].value = "";
    formRef.current[5].value = "";
    formRef.current[6].value = "";
  }

  async function handleForm(e) {
    e.preventDefault();
    console.log("handle Sign Up Form Submission");
    dispatch(setActive(false));
    const newAccount = {
      first_name: formRef.current[0].value,
      last_name: formRef.current[1].value,
      contact: {
        email: formRef.current[2].value,
        phone: formRef.current[3].value,
      },
      username: formRef.current[4].value,
      password: formRef.current[5].value, // add password logic here. (encrypt before transit)
    };
    console.log(formRef);
    console.log("display message?", showMessage);
    console.log("display message?", messageBox);
    try {
      const connection = await fetch(BACKEND_URL + "/account/register/client", {
        method: "POST",
        body: JSON.stringify(newAccount),
        headers: { "Content-Type": "application/json" },
      });
      const accountCreated = await connection.json();
      if(accountCreated.message?.includes("Unable")) { throw Error(accountCreated.message)}
      console.log("Account Creation Response",accountCreated)
      dispatch(signupSuccess("Profile Created."));
      dispatch(setActive(true));
      clearForm();
    } catch (e) {
      // not reaching the catch even though the response is giving 404
      console.log("Error Detected", e);
      dispatch(makeError(e.message));
      dispatch(setActive(true));
    }
    finally{
      window.scrollTo(0,0)
    }
  }

  return (
    <>
      {showMessage ? <MessageBox {...messageBox} /> : ""}
      <form ref={formRef} onSubmit={handleForm} id="sign-up">
        <h1> Client Sign Up Form</h1>
        <label htmlFor="fname">First Name: </label>
        <input
          type="text"
          id="fname"
          name="fname"
          placeholder="Bob"
          autoComplete="given-name"
        />
        <br></br>

        <label htmlFor="lname">Last Name: </label>
        <input
          type="text"
          id="lname"
          name="lname"
          placeholder="Bobberton"
          autoComplete="family-name"
        />
        <br></br>

        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="bboberton@mail.com"
          autoComplete="email"
        />
        <br></br>

        <label htmlFor="phone">Phone: </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="992-334-9830"
          autoComplete="tel"
        />
        <br></br>

        <label htmlFor="uname">Username: </label>
        <input
          type="text"
          id="uname"
          name="lname"
          placeholder="bboberton"
          autoComplete="off"
        />
        <br></br>

        <label htmlFor="pass">Password: </label>
        <input
          type="password"
          className="pass"
          name="password"
          autoComplete="new-password"
        />
        <br></br>

        <label htmlFor="pass">Confirm Password: </label>
        <input
          type="password"
          className="pass"
          name="new-password"
          autoComplete="new-password"
        />
        <br></br>

        <button className="tax-btn">
          {/* <Link to="/account" element={<Account />}>
            Sign Up
          </Link> */}
          Sign Up
        </button>
        <Link to="/login" element={<SignIn />}>
          {" "}
          Have an account?
        </Link>
      </form>
    </>
  );
}

export default SignUp;
