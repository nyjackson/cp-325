
function passwordStrengthCheck(password){
const weakCheck = ""
const mediumCheck = ""
const heavyCheck = ""

}

export default passwordStrengthCheck


// import { useState } from "react";

// function PasswordStrengthChecker() {
//  // const [password, setPassword] = useState("");
//   const [strengthLevel, setStrengthLevel] = useState("none");
//   let passwordClass;
// function getColor(strengthLevel){
//     console.log(strengthLevel.toLowerCase())
// switch(strengthLevel.toLowerCase()){
//     case 'weak':
//         return 'red'
//     case 'medium':
//         return 'yellow'
//     case 'strong':
//         return 'green'
//     default:
//         return 'black'
// }
// }
//   function handleStrengthCheck(e) {
//     //console.log(e.target.value);
//     let password = e.target.value;
//     const hasLetters = /[A-Za-z]/;
//     const hasNumbers = /[0-9]/;
//     const hasSpecials = /[^a-zA-Z0-9]/;
//     let weakCheck = password.match(hasLetters) && password.length < 6;
//     let mediumCheck = password.match(hasLetters) && password.match(hasNumbers) && password.length > 5
//     let strongCheck = password.match(hasLetters) && password.match(hasNumbers) && password.match(hasSpecials) && password.length > 7;
//     if (password.length > 0) {
//       if(strongCheck){
//           passwordClass = "Strong"
//           setStrengthLevel(passwordClass)
//       }
//       else if (mediumCheck) {
//         passwordClass = "Medium";
//         setStrengthLevel(passwordClass);
//       }
//       else if (weakCheck) {
//         passwordClass = "Weak";
//         setStrengthLevel(passwordClass);
//       } 
//     }
//      else {
//         setStrengthLevel("None");
//       }
//   }

//   return (
//     <>
//       <input type="text" onChange={handleStrengthCheck}></input>
//       <p>
//         Strength:  <span style={{ color: getColor(strengthLevel) }}>{strengthLevel}</span>
//       </p>
//     </>
//   );
// }

// export default PasswordStrengthChecker;
