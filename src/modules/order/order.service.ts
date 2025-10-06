import AppError from "../../error/AppError";
import { IOrder } from "./order.interface";
import Order from "./order.model";
import axios from "axios";

const createOrder = async (payload) => {
  const payment = {
    sender: payload.sender,
    receiver: payload.receiver,
    amount: payload.amount,
    senderPrivateKey: payload.senderPrivateKey,
  };

  const apiUrl = "https://meraki-nexus-blockchain-api.vercel.app/api/payment";
  const response = await axios.post(apiUrl, payment);
  if (response.txHash) {
    const order = {
      nexus: payload.nexus,
      user: payload.user,
      quantity: payload.quantity,
    };
    const data = await Order.create(order);
    return data;
  } else {
    throw new AppError(404, "Payment failed");
  }
};

const getOrderByUserId = async (userId: string) => {
  const data = await Order.find({ user: userId }).populate("nexus");
  return data;
};

const getOrderByNexusId = async (nexusId: string) => {
  const data = await Order.find({ nexus: nexusId })
    .populate("nexus")
    .populate("user", "firstName lastName email -_id");
  return data;
};

export const orderService = {
  createOrder,
  getOrderByUserId,
  getOrderByNexusId,
};
