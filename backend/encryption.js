// incomplete and untested, use for passwords! and usernames? 
import bcrypt from "bcrypt";
// https://www.freecodecamp.org/news/how-to-hash-passwords-with-bcrypt-in-nodejs/
const saltRounds = 10;

bcrypt.genSalt(saltRounds, (err, salt) => {
  if (err) {
    // Handle error
    console.log(err);
    return;
  }
  console.log("Salt Successful. Proceeding...");
  // Salt generation successful, proceed to hash the password
});

//const userPassword = "user_password"; // Replace with the actual password
const encryption = (userPassword) => bcrypt.hash(userPassword, salt, (err, hash) => {
  if (err) {
    // Handle error
    return;
  }

  // Hashing successful, 'hash' contains the hashed password
  console.log("Hashed password:", hash);
});

const decryption = bcrypt.compare(
  userInputPassword,
  storedHashedPassword,
  (err, result) => {
    if (err) {
      // Handle error
      console.error("Error comparing passwords:", err);
      return;
    }

    if (result) {
      // Passwords match, authentication successful
      console.log("Passwords match! User authenticated.");
    } else {
      // Passwords don't match, authentication failed
      console.log("Passwords do not match! Authentication failed.");
    }
  }
);
