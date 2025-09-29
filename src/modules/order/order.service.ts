import { IOrder } from "./order.interface";
import Order from "./order.model";

const createOrder = async (payload: IOrder) => {
  const order = await Order.create(payload);
  return order;
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
