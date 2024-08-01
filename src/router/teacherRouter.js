import { Router } from "express";
import {
  deleteTeacherController,
  findAllTeacherController,
  findSpecificTeacherController,
  teacherController,
  UpdateTeacherController,
} from "../controller/teacherController.js";

let teacherRouter = Router();
teacherRouter.route("/teacher").post(teacherController);
teacherRouter.route("/teacher").get(findAllTeacherController);

//dynamic route
teacherRouter.route("/:id").get(findSpecificTeacherController);
teacherRouter.route("/:id").patch(UpdateTeacherController);
teacherRouter.route("/:id").delete(deleteTeacherController);
export default teacherRouter;
