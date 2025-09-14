import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { nexusService } from "./nexus.service";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status";

const createNexus = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const data = await nexusService.createNexus(payload);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Nexus created successfully",
    data,
  });
});

export { createNexus };
