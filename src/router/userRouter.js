import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  findAllUserController,
  findSpecificUserController,
  updateUserController,
} from "../controller/userController.js";

let userRouter = Router();
userRouter.route("/user").post(createUserController);
userRouter.route("/user").get(findAllUserController);

//Dynamic route => it is always placed at last
userRouter.route("/:id").get(findSpecificUserController);
userRouter.route("/:id").patch(updateUserController);
userRouter.route("/:id").delete(deleteUserController);

export default userRouter;
