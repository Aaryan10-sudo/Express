import product from "./productSchema.js";
import userSchema from "./userSchema.js"; //importing from file must include .js
import mongoose from "mongoose";

export const User = mongoose.model("User", userSchema);
export const Product = mongoose.model("Product", product);
