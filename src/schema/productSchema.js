import mongoose from "mongoose";
let product = new mongoose.Schema({
  productName: {
    type: String,
    required: [true, "productName is required"],
  },
  quantity: {
    type: Number,
    required: [true, "Please enter the quantity"],
  },
  price: {
    type: Number,
    required: [true, "Please enter the price"],
  },
});
export default product;
