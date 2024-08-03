import { Router } from "express";
import {
  createWebUserController,
  deleteWebUser,
  findAllWebUserController,
  findSpecificWebUser,
  updateWebUser,
} from "../controller/webUserController.js";

let webUserRouter = Router();
webUserRouter.route("/").post(createWebUserController);
webUserRouter.route("/").get(findAllWebUserController);

webUserRouter.route("/:id").get(findSpecificWebUser);
webUserRouter.route("/:id").patch(updateWebUser);
webUserRouter.route("/:id").delete(deleteWebUser);
export default webUserRouter;
