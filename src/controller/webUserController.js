import { WebUser } from "../schema/model.js";
import bcrypt from "bcrypt";
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
