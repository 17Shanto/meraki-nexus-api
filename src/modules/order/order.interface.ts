import { Document, Types } from "mongoose";
import { INexus } from "../nexus/nexus.interface";
import { IUser } from "../user/user.interface";

export interface IOrder extends Document {
  nexus: Types.ObjectId | INexus;
  user: Types.ObjectId | IUser;
  quantity: number;
}
