import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Test } from "../schema/model.js";
import { secretKey } from "../utils/constant.js";
import { sendEmail } from "../utils/sendEmail.js";
export const testController = async (req, res, next) => {
  try {
    let data = req.body;
    let hashedPassword = await bcrypt.hash(data.password, 10);
    data = {
      ...data,
      password: hashedPassword,
    };
    let result = await Test.create(data);

    let infoObj = {
      id: result._id,
    };
    let expiryInfo = {
      expiresIn: "2d",
    };
    let token = await jwt.sign(infoObj, secretKey, expiryInfo);
    await sendEmail({
      to: data.email,
      subject: "Account Registration",
      html: `<h1>Account Registration Successfull</h1><p>Use below link to verify your email address ${data.password}</p>
      <a href="http://localhost:5000/verify-mail?token=${token}">
      href=http://localhost:5000/verify-mail?token=${token}</a>`,
    });
    res.json({
      success: true,
      message: `Verification Mail sent to ${data.email}`,
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
