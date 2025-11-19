import SignUp from "./SignUp";
import {Link} from 'react-router'
function SignIn() {
  function handleSubmit() {}
  return (<>
  <h1>Sign In Here</h1>
    <button>Sign Up</button>
  <Link to = "/register" element = {<SignUp />}>Don't have an account? </Link>
  </>
  );
}

export default SignIn;
