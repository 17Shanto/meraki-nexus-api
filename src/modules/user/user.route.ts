import { Router } from "express";
import { validateRequest } from "../../middleware/validateRequest";
import { userZodSchema } from "./user.validate";
import {
  getAllUser,
  getUserById,
  loginUser,
  registerUser,
  updateUserById,
} from "./user.controller";
import { auth } from "../../middleware/auth";
import { UserRole } from "./user.constrain";
const userRoute = Router();

userRoute.post(
  "/",
  validateRequest(userZodSchema.userCreateZodSchema),
  registerUser
);

userRoute.post(
  "/login",
  validateRequest(userZodSchema.userLoginZodSchema),
  loginUser
);

userRoute.get("/:userId", auth([UserRole.Admin, UserRole.User]), getUserById);

userRoute.get("/", auth([UserRole.Admin]), getAllUser);

userRoute.patch(
  "/:userId",
  auth([UserRole.Admin, UserRole.User]),
  updateUserById
);

export default userRoute;
