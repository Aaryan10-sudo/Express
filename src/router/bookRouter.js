import { Router } from "express";
import {
  bookController,
  findBookController,
} from "../controller/bookController.js";

let bookRouter = Router();
bookRouter.route("/book").post(bookController);
bookRouter.route("/book").get(findBookController);
export default bookRouter;
