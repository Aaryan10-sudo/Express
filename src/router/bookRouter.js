import { Router } from "express";
import {
  bookController,
  deleteBookController,
  findBookController,
  findSpecificBookController,
  updateBookController,
} from "../controller/bookController.js";

let bookRouter = Router();
bookRouter.route("/book").post(bookController);
bookRouter.route("/book").get(findBookController);

bookRouter.route("/:id").get(findSpecificBookController);
bookRouter.route("/:id").patch(updateBookController);
bookRouter.route("/:id").delete(deleteBookController);
export default bookRouter;
