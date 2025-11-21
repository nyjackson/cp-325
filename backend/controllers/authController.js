// incomplete and untested, use for passwords! and usernames?
import bcrypt from "bcrypt";
import ClientAccount from "../models/clientAccount.js";
import accountController from "./accountController.js";
const saltRounds = 10;

const genHash = async (password) => {
  try {
    const hash = await bcrypt.hash(password, saltRounds);
    console.log("Hash Generated: ", hash);
    return hash;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

// Password Comparison

const comparePass = async (userInputPass, storedHashPass) => {
    console.log("In Compare Pass")
    console.log("Passwords. Hash:" , storedHashPass, "Input:", userInputPass)
    console.log("both are strings")
      try{
        const comparison = await bcrypt.compare(
        userInputPass,
        storedHashPass)
        return comparison
      }
      catch(e){
        console.log(e)
      }
};

const validate = async (req, res, next) => {
    const {username, password} = req.body
    console.log("In Validate")
    console.log(username, password)
    try{
        const client = await ClientAccount.find({username})
        console.log(client)
        console.log("Hashed Pass:", client[0].password.toString())
        const passCheck = await comparePass(password.toString(), client[0].password.toString()) // || password === client[0].password // remove or case, only for testing purposes
        passCheck ? req.user = client : ''
        next()
      }
    catch(e){
        console.log(e)
        res.status(404).json({message:e.message})
    }
}

// console.log("AUTHCONTROLLER TESTING")
// const hash = await genHash("fauth")
// const check = await comparePass("fauth", hash)
// console.log("Password Check: ", check)

// function comparePassEntry(storedHashPass, userInputPass) {
//   if (typeof storedHashPass == String && typeof userInputPass == String)
//     bcrypt.compare(userInputPass, storedHashPass, (err, result) => {
//       if (err) {
//         console.error("Error comparing passwords:", err);
//         return;
//       }

//       if (result) {
//         // Passwords match, authentication successful
//         console.log("Passwords match! User authenticated.");
//         return true;
//       } else {
//         // Passwords don't match, authentication failed
//         console.log("Passwords do not match! Authentication failed.");
//         return false;
//       }
//     });
// }

export default { genHash, comparePass, validate };


