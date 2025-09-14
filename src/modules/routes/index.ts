import { Router } from "express";
import userRoute from "../user/user.route";
import authRouter from "../auth/auth.route";

const routes = Router();
routes.use("/user", userRoute);
routes.use("/auth", authRouter);

export default routes;
