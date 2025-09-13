import { Router } from "express";
import { validateRequest } from "../../middleware/validateRequest";
import { userZodSchema } from "./user.validate";
import { registerUser } from "./user.controller";
const userRoute = Router();

userRoute.post(
  "/",
  validateRequest(userZodSchema.userCreateZodSchema),
  registerUser
);

export default userRoute;
