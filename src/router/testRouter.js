import { Router } from "express";
import { testController } from "../controller/testController.js";

let testRouter = Router();
testRouter.route("/").post(testController);

export default testRouter;
