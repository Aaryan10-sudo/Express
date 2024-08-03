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

export const findSpecificBookController = async (req, res, next) => {
  try {
    let result = await Book.findById(req.params.id);
    res.json({
      success: true,
      message: "Specific book read successful",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const updateBookController = async (req, res, next) => {
  try {
    let result = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({
      success: true,
      message: "Book updated successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteBookController = async (req, res, next) => {
  try {
    let result = await Book.findByIdAndDelete(req.params.id);
    res.json({
      success: true,
      message: "Book deleted successful",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
