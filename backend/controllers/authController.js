// incomplete and untested, use for passwords! and usernames?
import bcrypt from "bcrypt";
import ClientAccount from "../models/clientAccount.js";
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
    console.log(" Passwords. Hash" , storedHashPass, "Input:", userInputPass)
  if (typeof storedHashPass == "string" && typeof userInputPass == "string") {
    console.log("both are strings")
      const comparison = await bcrypt.compare(
        userInputPass,
        storedHashPass, function(err, result) {
        if (err) { throw (err); }
        console.log(result);
    }); 
      return comparison
}
};

const validate = async (req, res, next) => {
    const {username, password} = req.body
    console.log("In Validate")
    console.log(username, password)
    try{
        const client = await ClientAccount.find({username})
        console.log(client)
        const passCheck = await comparePass(password, client[0].password) || password === client[0].password // remove or case, only for testing purposes
        console.log("Password Check", passCheck)
    }
    catch(e){
        console.log(e)
        res.status(404).json({message:e.message})
    }
    next()
}


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


