import { Router } from "express";
import {
  createProductController,
  findAllProductController,
} from "../controller/productController.js";

let productRouter = Router();
productRouter.route("/product").post(createProductController);
productRouter.route("/read").get(findAllProductController);
export default productRouter;
