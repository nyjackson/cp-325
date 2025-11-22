import Account from "./Account";
import SignIn from "./SignIn";
import { Link } from "react-router";
import { useRef } from "react";
import { BACKEND_URL } from "../../App";

function SignUp() {

  const formRef = useRef();

  async function handleForm(e) {
    e.preventDefault();
    console.log("handle Sign Up Form Submission");
    const newAccount = {
      "first_name": formRef.current[0].value,
      "last_name": formRef.current[1].value,
      "contact": {"email":formRef.current[2].value , "phone":formRef.current[3].value},
      "username": formRef.current[4].value,
      "password": formRef.current[5].value, // add password logic here. (encrypt before transit)
    }
    console.log(formRef)
    try{
     const response = await fetch(BACKEND_URL+"/account/register/client", {method: "post", body: JSON.stringify(newAccount), headers: {'Content-Type':'application/json'}})
     const accountCreated = await response.json()

     console.log("Account Created:", accountCreated)

     // reducer here to add the new account to accounts 
    }
    catch(e){
      console.log("Error Detected", e)
    }
  }

  return (
    <>
      
      <form ref={formRef} onSubmit={handleForm} id = "sign-up">
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

        <button>
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
