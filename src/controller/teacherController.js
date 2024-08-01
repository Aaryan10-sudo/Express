import { Teacher } from "../schema/model.js";

export const teacherController = async (req, res, next) => {
  try {
    let result = await Teacher.create(req.body);
    res.json({
      success: true,
      message: "Teacher added successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const findAllTeacherController = async (req, res, next) => {
  try {
    let result = await Teacher.find({});
    res.json({
      sucess: true,
      message: "Teacher find successful",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const findSpecificTeacherController = async (req, res, next) => {
  try {
    let result = await Teacher.findById(req.params.id);
    res.json({
      sucess: true,
      message: "Teacher find successful",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const UpdateTeacherController = async (req, res, next) => {
  try {
    let result = await Teacher.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({
      sucess: true,
      message: "Teacher find successful",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteTeacherController = async (req, res, next) => {
  try {
    let result = await Teacher.findByIdAndDelete(req.params.id);
    res.json({
      sucess: true,
      message: "Teacher Delete successful",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
