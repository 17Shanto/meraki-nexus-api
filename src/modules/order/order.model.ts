import { model, Schema } from "mongoose";
import { IOrder } from "./order.interface";
import Nexus from "../nexus/nexus.model";
import AppError from "../../error/AppError";
const orderSchema = new Schema<IOrder>({
  nexus: {
    type: Schema.Types.ObjectId,
    ref: "Nexus",
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  quantity: { type: Number, required: true },
});

orderSchema.pre<IOrder>("save", async function (next) {
  try {
    const isAvailable = await Nexus.findById(this.nexus);

    if (!isAvailable) {
      return next(new AppError(404, "Nexus is not found"));
    }

    if (
      isAvailable.available < 1 ||
      isAvailable.available - this.quantity < 0
    ) {
      return next(new AppError(404, "Nexus is not available"));
    }

    const newCopies = isAvailable.available - this.quantity;
    await Nexus.findByIdAndUpdate(this.nexus, { available: newCopies });

    next();
  } catch (err) {
    next(err);
  }
});

const Order = model<IOrder>("Order", orderSchema);
export default Order;
