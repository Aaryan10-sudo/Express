import mongoose from "mongoose";

let userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Fullname field is required"],
  },
  address: {
    type: String,
    required: [true, "Address field is required"],
  },
  isMarried: {
    type: Boolean,
    required: [true, "This field is required"],
  },
});

export default userSchema;
