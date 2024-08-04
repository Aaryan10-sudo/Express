import { Router } from "express";
import {
  createWebUserController,
  deleteWebUser,
  findAllWebUserController,
  findSpecificWebUser,
  updateWebUser,
  verifyMailController,
} from "../controller/webUserController.js";

let webUserRouter = Router();
webUserRouter
  .route("/")
  .post(createWebUserController)
  .get(findAllWebUserController);

webUserRouter.route("/verify-mail").post(verifyMailController);

webUserRouter
  .route("/:id")
  .get(findSpecificWebUser)
  .patch(updateWebUser)
  .delete(deleteWebUser);
export default webUserRouter;
