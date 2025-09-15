import { Router } from "express";
import { validateRequest } from "../../middleware/validateRequest";
import { nexusUpdateSchema } from "./nexus.validate";
import { createNexus, getAllNexus } from "./nexus.controller";
import { auth } from "../../middleware/auth";
import { UserRole } from "../user/user.constrain";

export const nexusRoute = Router();

nexusRoute.post(
  "/",
  validateRequest(nexusUpdateSchema),
  auth([UserRole.Admin, UserRole.Artist]),
  createNexus
);

nexusRoute.get("/", getAllNexus);
