import jwt from "jsonwebtoken";

//Generate token
let infoObj = {
  id: "123",
};

let secretKey = "Aaryan";

let expiryInfo = {
  expiresIn: "1d",
};

let token = jwt.sign(infoObj, secretKey, expiryInfo);
console.log(token);

//Verifying Token
//To verify a token , a token must be made from given secret key and it should not exceed timelimit
let verifyToken1 =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMyIsImlhdCI6MTcyMjUwMzM0OSwiZXhwIjoxNzIyNTg5NzQ5fQ.j9gUtC07BIFBkKJYHlEzZGNYnCHdwFN4JkcFE1-9BZQ";
try {
  let infoObj = jwt.verify(verifyToken1, "Aaryan");
  console.log(infoObj);
} catch (error) {
  console.log(error.message);
}
