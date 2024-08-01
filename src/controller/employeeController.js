import { Employee } from "../schema/model.js";

export const employeeController = async (req, res, next) => {
  try {
    let result = await Employee.create(req.body);
    res.json({
      success: true,
      message: "Employee added successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const findAllEmployeeController = async (req, res, next) => {
  try {
    let result = await Employee.find({});
    res.json({
      success: true,
      message: "Employee read successful",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
