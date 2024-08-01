import { Router } from "express";
import {
  employeeController,
  findAllEmployeeController,
} from "../controller/employeeController.js";

let emplooyeRouter = Router();
emplooyeRouter.route("/employee").post(employeeController);
emplooyeRouter.route("/employee").get(findAllEmployeeController);
export default emplooyeRouter;
