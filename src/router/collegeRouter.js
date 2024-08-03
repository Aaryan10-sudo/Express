import { Router } from "express";
import {
  collegeController,
  deleteCollegeController,
  findAllCollegeController,
  findSpecificCollegeController,
  updateCollegeController,
} from "../controller/collegeController.js";

let collegeRouter = Router();
collegeRouter.route("/college").post(collegeController);
collegeRouter.route("/college").get(findAllCollegeController);

collegeRouter.route("/:id").get(findSpecificCollegeController);
collegeRouter.route("/:id").patch(updateCollegeController);
collegeRouter.route("/:id").delete(deleteCollegeController);
export default collegeRouter;
