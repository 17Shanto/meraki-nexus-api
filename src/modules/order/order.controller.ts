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

export { createOrder };
