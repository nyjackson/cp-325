// incomplete and untested, use for passwords! and usernames?
import bcrypt from "bcrypt";

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

const comparePass = async (storedHashPass, userInputPass) => {
  try {
    if (typeof storedHashPass == String && typeof userInputPass == String) {
      const comparison = bcrypt.compare(
        userInputPass,
        storedHashPass,
        (err, result) => {
          if (err) {
            console.error("Error comparing passwords:", err);
            return;
          }

          if (result) {
            // Passwords match, authentication successful
            console.log("Passwords match! User authenticated.");
            return true;
          } else {
            // Passwords don't match, authentication failed
            console.log("Passwords do not match! Authentication failed.");
            return false;
          }
        }
      );
      return comparison;
    }
  } catch (e) {
    console.log(e);
    throw e;
  }
};

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

export default { genHash, comparePass };
