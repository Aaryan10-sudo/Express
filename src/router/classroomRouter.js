import { Router } from "express";
import {
  classroomController,
  findAllClassroomController,
} from "../controller/classroomController.js";

let emplooyeRouter = Router();
emplooyeRouter.route("/employee").post(classroomController);
emplooyeRouter.route("/employee").get(findAllClassroomController);
export default emplooyeRouter;
