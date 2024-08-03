import mongoose from "mongoose";
let employeeSchema = new mongoose.Schema({
  employeeName: {
    type: String,
    required: [true, "employeeName field is required"],
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

export default employeeSchema;
