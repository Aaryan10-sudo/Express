import mongoose from "mongoose";
let teacherSchema = new mongoose.Schema({
  teacherName: {
    type: String,
    required: [true, "teacherName field is required"],
  },
  position: {
    type: String,
    required: [true, "position field is required"],
  },
  salary: {
    type: Number,
    required: [true, "salary field is required"],
  },
});

export default teacherSchema;
