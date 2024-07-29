import express, { json } from "express";
import connectDB from "./src/ConnectDatabase/ConnectMongo.js";
import userRouter from "./src/router/userRouter.js";
import productRouter from "./src/router/productRouter.js";
connectDB();

const app = express();
const port = 5000;
app.use(json()); //reads json data

app.use("/yoyo", productRouter);
app.use("/home", userRouter);

app.listen(port, () => {
  console.log(`express is running at port ${port}`);
});
