import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { orderService } from "./order.service";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status";

const createOrder = catchAsync(async (req: Request, res: Response) => {
  const order = req.body;
  const data = await orderService.createOrder(order);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Order has been placed",
    data,
  });
});

const getOrderByUserId = catchAsync(async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const data = await orderService.getOrderByUserId(userId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Retrieved order by user id",
    data,
  });
});

const getOrderByNexusId = catchAsync(async (req: Request, res: Response) => {
  const nexusId = req.params.nexusId;
  const data = await orderService.getOrderByNexusId(nexusId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Retrieved order by nexus id",
    data,
  });
});
export { createOrder, getOrderByUserId, getOrderByNexusId };
