import bcrypt from "bcrypt";
let password = "aaryan@123";
let hashedPassword = await bcrypt.hash(password, 10);
console.log(hashedPassword);

//compare hash code. compare always gives boolean value
let loginPassword = "aaryan@123";
let validPassword = await bcrypt.compare(loginPassword, hashedPassword);
console.log(validPassword);
