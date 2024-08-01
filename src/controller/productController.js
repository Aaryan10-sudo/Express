import { Product } from "../schema/model.js";

export const createProductController = async (req, res, next) => {
  try {
    let result = await Product.create(req.body);
    res.json({
      success: true,
      message: "Product added succesfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const findAllProductController = async (req, res, next) => {
  try {
    let result = await Product.find({});
    res.json({
      success: true,
      message: "Product read successful",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
