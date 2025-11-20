// incomplete and untested, use for passwords! and usernames? 
import bcrypt from "bcrypt";
// https://www.freecodecamp.org/news/how-to-hash-passwords-with-bcrypt-in-nodejs/
const saltRounds = 10;


async function genHash(attempted_password){
let salt;
await bcrypt.genSalt(saltRounds, (err, salt) => {
if (err) {
    console.log(err)
    return;
}
// Salt generation successful, proceed to hash the password
console.log("Salt generation succesful, proceed to hashing..")
console.log(salt)

bcrypt.hash(attempted_password, salt, (err, hash) => {
    if (err) {
        console.log(err)
        return;
    }
console.log("Hashing Succesful")
console.log('Hashed password:', hash);
});
});
}

// Password Comparison

async function comparePassEntry(storedHashPass, userInputPass){
  if(typeof storedHashPass == String && typeof userInputPass == String)
  await bcrypt.compare(userInputPass, storedHashPass, (err, result) => {
    if (err) {
        console.error('Error comparing passwords:', err);
        return;
    }

if (result) {
    // Passwords match, authentication successful
    console.log('Passwords match! User authenticated.');
} else {
    // Passwords don't match, authentication failed
    console.log('Passwords do not match! Authentication failed.');
}
});

}

