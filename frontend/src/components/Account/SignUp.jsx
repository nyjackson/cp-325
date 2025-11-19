import Form from "../Form";
import SignIn from "./SignIn";
import {Link} from 'react-router'

function SignUp() {
  return (<>
  <h1> Client Sign Up Form</h1>
  <Form />
  <button>Sign Up</button>
  <Link to = "/login" element = {<SignIn />}> Have an account?</Link>
  </>);
}

export default SignUp;
