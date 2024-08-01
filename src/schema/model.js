import bookSchema from "./bookSchema.js";
import employeeSchema from "./employeeSchema.js";
import product from "./productSchema.js";
import teacherSchema from "./teacherSchema.js";
import userSchema from "./userSchema.js"; //importing from file must include .js
import mongoose from "mongoose";
import webUserSchema from "./webUserSchema.js";

export const User = mongoose.model("User", userSchema);
export const Product = mongoose.model("Product", product);
export const Book = mongoose.model("Test", bookSchema);
export const Employee = mongoose.model("Employee", employeeSchema);
export const Teacher = mongoose.model("Teacher", teacherSchema);
export const WebUser = mongoose.model("WebUser", webUserSchema);
