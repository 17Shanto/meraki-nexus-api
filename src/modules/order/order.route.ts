import { Router } from "express";
import { auth } from "../../middleware/auth";
import { UserRole } from "../user/user.constrain";
import {
  createOrder,
  getOrderByNexusId,
  getOrderByUserId,
} from "./order.controller";

export const orderRoute = Router();

orderRoute.post(
  "/",
  auth([UserRole.Admin, UserRole.Artist, UserRole.User]),
  createOrder
);

orderRoute.get(
  "/user/:userId",
  auth([UserRole.Admin, UserRole.Artist, UserRole.User]),
  getOrderByUserId
);

orderRoute.get(
  "/nexus/:nexusId",
  auth([UserRole.Admin, UserRole.Artist, UserRole.User]),
  getOrderByNexusId
);
