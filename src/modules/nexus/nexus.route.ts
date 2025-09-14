import { Router } from "express";
import { validateRequest } from "../../middleware/validateRequest";
import { nexusUpdateSchema } from "./nexus.validate";
import { createNexus } from "./nexus.controller";

export const nexusRoute = Router();

nexusRoute.post("/", validateRequest(nexusUpdateSchema), createNexus);
