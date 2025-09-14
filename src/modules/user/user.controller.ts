import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { userService } from "./user.service";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status";
import config from "../../config";

const registerUser = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const data = await userService.registerUser(payload);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User Registered Successfully",
    data,
  });
});

const loginUser = async (req: Request, res: Response) => {
  const payload = req.body;

  const data = await userService.loginUser(payload);

  res.cookie("accessToken", data.accessToken, {
    secure: config.node_env !== "development",
    httpOnly: true,
    sameSite: "lax",
  });

  res.cookie("refreshToken", data.refreshToken, {
    secure: config.node_env !== "development",
    httpOnly: true,
  });

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User Login Successfully",
    data,
  });
};

const getUserById = async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const data = await userService.getUserById(userId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User Retrieved successfully",
    data,
  });
};

const getAllUser = async (req: Request, res: Response) => {
  const data = await userService.getAllUser();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Users retrieved successfully",
    data,
  });
};

export { registerUser, loginUser, getUserById, getAllUser };
