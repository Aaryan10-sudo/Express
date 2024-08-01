import { Book } from "../schema/model.js";

export const bookController = async (req, res, next) => {
  try {
    let result = await Book.create(req.body);
    res.json({
      success: true,
      message: "Book added successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
export const findBookController = async (req, res, next) => {
  try {
    let result = await Book.find({});
    res.json({
      success: true,
      message: "Book read successful ",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
