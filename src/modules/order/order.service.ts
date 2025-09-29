import { IOrder } from "./order.interface";
import Order from "./order.model";

const createOrder = async (payload: IOrder) => {
  const order = await Order.create(payload);
  return order;
};

export const orderService = {
  createOrder,
};
