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

const getAllNexus = catchAsync(async (req: Request, res: Response) => {
  const data = await nexusService.getAllNexus();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    data,
  });
});

const getNexusById = catchAsync(async (req: Request, res: Response) => {
  const nexusId = req.params.nexusId;
  const data = await nexusService.getNexusById(nexusId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    data,
  });
});

export { createNexus, getAllNexus, getNexusById };
