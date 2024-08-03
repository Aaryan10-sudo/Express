import { College } from "../schema/model.js";

export const collegeController = async (req, res, next) => {
  try {
    let result = await College.create(req.body);
    res.json({
      success: true,
      message: "College added successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const findAllCollegeController = async (req, res, next) => {
  try {
    let result = await College.find({});
    res.json({
      success: true,
      message: "All Id read successful",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const findSpecificCollegeController = async (req, res, next) => {
  try {
    let result = await College.findById(req.params.id);
    res.json({
      success: true,
      message: "All Id read successfull",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const updateCollegeController = async (req, res, next) => {
  try {
    let result = await College.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({
      success: true,
      message: `${result.collegeName} updated successfully`,
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteCollegeController = async (req, res, next) => {
  try {
    let result = await College.findByIdAndDelete(req.params.body);
    res.json({
      success: true,
      message: `${result.collegeName} deleted successfully`,
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
