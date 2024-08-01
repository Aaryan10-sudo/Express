import mongoose from "mongoose";
let bookSchema = new mongoose.Schema({
  bookTitle: {
    type: String,
    required: [true, "bookTitle field is required"],
  },
  author: {
    type: String,
    required: [true, "author field is required"],
  },
  price: {
    type: Number,
    requuired: [true, "Enter the price"],
  },
});
export default bookSchema;
