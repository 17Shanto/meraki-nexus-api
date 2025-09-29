import { Router } from "express";
import userRoute from "../user/user.route";
import authRouter from "../auth/auth.route";
import { nexusRoute } from "../nexus/nexus.route";
import { orderRoute } from "../order/order.route";

const routes = Router();
routes.use("/user", userRoute);
routes.use("/auth", authRouter);
routes.use("/nexus", nexusRoute);
routes.use("/order", orderRoute);

export default routes;
