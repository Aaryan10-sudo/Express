import mongoose from "mongoose";

const connectDB = () => {
  mongoose.connect("your-mongoDB URL here");
  console.log("Connected to MongoDB ");
};

export default connectDB;
