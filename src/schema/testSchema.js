import mongoose from "mongoose";
let testSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "email is needed"],
  },
  password: {
    type: String,
    required: [true, "password field is required"],
  },
});
export default testSchema;
