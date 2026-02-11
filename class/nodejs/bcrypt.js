import bcrypt from "bcryptjs";

const password = "mySuperSecretPassword123";
const saltRounds = 10;

(async () => {
  try {
    console.log("Original Password:", password);

   
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    console.log("Hashed Password:", hashedPassword);

    const inputPasswordStart = "mySuperSecretPassword123"; 
    const inputPasswordWrong = "wrongPassword"; 


    const isMatch = await bcrypt.compare(inputPasswordStart, hashedPassword);
    console.log(`Did the password '${inputPasswordStart}' match?`, isMatch);

   
    const isMatchWrong = await bcrypt.compare(
      inputPasswordWrong,
      hashedPassword,
    );
    console.log(
      `Did the password '${inputPasswordWrong}' match?`,
      isMatchWrong,
    ); 
  } catch (error) {
    console.error("Error:", error);
  }
})();