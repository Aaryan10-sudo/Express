import { Router } from "express";
import { createProductController } from "../controller/productController.js";

let productRouter = Router();
productRouter.route("/product").post(createProductController);
export default productRouter;
