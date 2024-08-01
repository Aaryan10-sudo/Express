import { User } from "../schema/model.js";

export const createUserController = async (req, res, next) => {
  try {
    let result = await User.create(req.body);
    res.json({
      success: true,
      message: "User created successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const findAllUserController = async (req, res, next) => {
  try {
    let result = await User.find({});
    res.json({
      success: true,
      message: "User read successful",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const findSpecificUserController = async (req, res, find) => {
  try {
    let result = await User.findById(req.params.id);
    res.json({
      success: true,
      message: "User read successful",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const updateUserController = async (req, res, next) => {
  try {
    let result = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({
      success: true,
      message: "Product Updated Successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteUserController = async (req, res, next) => {
  try {
    let result = await User.findByIdAndDelete(req.params.id);
    res.json({
      success: true,
      message: "User deleted successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
