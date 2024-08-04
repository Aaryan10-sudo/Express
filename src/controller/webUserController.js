import { WebUser } from "../schema/model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { secretKey } from "../utils/constant.js";
import { sendEmail } from "../utils/sendEmail.js";
export const createWebUserController = async (req, res, next) => {
  try {
    let data = req.body;
    let hashedPassword = await bcrypt.hash(data.password, 10);

    data = {
      ...data,
      isVerifiedEmail: false,
      password: hashedPassword,
    };

    let result = await WebUser.create(data);

    //Generate Token
    let infoObj = {
      id: result._id,
    };
    let expiryInfo = {
      expiresIn: "1d",
    };
    let token = await jwt.sign(infoObj, secretKey, expiryInfo);

    //send mail

    await sendEmail({
      to: data.email,
      subject: "Account Registration",
      html: `<h1>Account has been successfully registered </h1> 
      <a href="http://localhost:5000/verify-email?token=${token}">
      href=http://localhost:5000/verify-email?token=${token}
      </a>`,
    });

    res.json({
      success: true,
      message: "WebUser created successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const verifyMailController = async (req, res, next) => {
  try {
    let tokenString = req.headers.authorization;
    let tokenArray = tokenString.split(" ");
    let token = tokenArray[1];

    let infoObj = await jwt.verify(token, secretKey);
    let userId = infoObj.id;
    // console.log(infoObj);
    let result = await WebUser.findByIdAndUpdate(userId, {
      isVerifiedEmail: true,
    });
    res.status(200).json({
      success: true,
      message: "Email verified successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const findAllWebUserController = async (req, res, next) => {
  try {
    let result = await WebUser.find({});
    res.json({
      success: true,
      message: "All web user found",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const findSpecificWebUser = async (req, res, next) => {
  try {
    let result = await WebUser.findById(req.params.id);
    res.json({
      success: true,
      message: `${result.fullName}'s Id found`,
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const updateWebUser = async (req, res, next) => {
  try {
    let result = await WebUser.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({
      success: true,
      message: `${result.fullName}'s Id updated successfully`,
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteWebUser = async (req, res, next) => {
  try {
    let result = await WebUser.findByIdAndDelete(req.params.id);
    res.json({
      success: true,
      message: `${result.fullName}'s Id deleted successfully`,
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
