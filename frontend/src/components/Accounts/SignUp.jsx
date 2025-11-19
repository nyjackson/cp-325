import Form from "../Form";
import Account from "./Account";
import SignIn from "./SignIn";
import { Link } from "react-router";
import {useRef} from 'react'

function SignUp() {
  const formRef = useRef()
  function handleForm(e) {
    e.preventDefault();
    console.log('handle Sign Up Form Submission')
  }
  return (
    <>
      <h1> Client Sign Up Form</h1>
      <form ref = {formRef} onSubmit={handleForm}>
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

        <button>
          <Link to="/account" element={<Account />}>Sign Up</Link>
        </button>
      </form>

      <Link to="/login" element={<SignIn />}>
        {" "}
        Have an account?
      </Link>
    </>
  );
}

export default SignUp;
