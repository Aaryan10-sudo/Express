import mongoose from "mongoose";
let collegeSchema = new mongoose.Schema({
  collegeName: {
    type: String,
    required: [true, "collegeName field is required"],
  },
  affiliatedUniversity: {
    type: String,
    required: [true, "affiliatedUniversity field is required"],
  },
  establishedYear: {
    type: Number,
    required: [true, "establishedYear field is required"],
  },
});
export default collegeSchema;
