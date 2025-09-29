import { Router } from "express";
import { auth } from "../../middleware/auth";
import { UserRole } from "../user/user.constrain";
import { createOrder } from "./order.controller";

export const orderRoute = Router();

orderRoute.post(
  "/",
  auth([UserRole.Admin, UserRole.Artist, UserRole.User]),
  createOrder
);
