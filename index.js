import express, { json } from "express";
import connectDB from "./src/ConnectDatabase/ConnectMongo.js";
import userRouter from "./src/router/userRouter.js";
import productRouter from "./src/router/productRouter.js";
import bookRouter from "./src/router/bookRouter.js";
import emplooyeRouter from "./src/router/classroomRouter.js";
import teacherRouter from "./src/router/teacherRouter.js";
import webUserRouter from "./src/router/webUserRouter.js";
import collegeRouter from "./src/router/collegeRouter.js";
connectDB();

const app = express();
const port = 5000;
app.use(json()); //reads json data

app.use("/home", productRouter);
app.use("/home", userRouter);
app.use("/book", bookRouter);
app.use("/home", emplooyeRouter);
app.use("/teacher", teacherRouter);
app.use("/web-user", webUserRouter);
app.use("/college", collegeRouter);

app.listen(port, () => {
  console.log(`express is running at port ${port}`);
});
