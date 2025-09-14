import { model, Schema } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema<IUser>(
  {
    firstName: { type: String, required: true, trim: true, min: 2, max: 30 },
    lastName: { type: String, required: true, trim: true, min: 2, max: 30 },
    email: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
        },
        message: (props) => `${props.value} is not a valid email`,
      },
      unique: true,
      immutable: true,
    },
    phone: {
      type: String,
      required: [true, "Your Phone Number is not valid"],
      unique: true,
    },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: {
        values: ["Admin", "User"],
        message: "{VALUE} is not acceptable",
      },
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const User = model<IUser>("user", userSchema);
export default User;
