import mongoose from "mongoose";

const connectDB = () => {
  mongoose.connect("mongodb://localhost:27017/aaryan-sharma");
  console.log("Connected to MongoDB ");
};

export default connectDB;
