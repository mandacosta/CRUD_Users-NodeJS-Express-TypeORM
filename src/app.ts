import "express-async-errors";
import "reflect-metadata";
import express from "express";
import userRouter from "./routers/user/user.routes";
import { errorHandler } from "./errors";
import loginRoute from "./routers/login/login.routes";

const app = express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/login", loginRoute);

app.use(errorHandler);

export default app;
