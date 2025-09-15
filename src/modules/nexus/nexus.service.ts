import AppError from "../../error/AppError";
import { IArtist, INexus } from "./nexus.interface";
import Nexus from "./nexus.model";

const createNexus = async (payload: INexus) => {
  const data = await Nexus.create(payload);
  return data;
};

const getAllNexus = async () => {
  const data = await Nexus.find().populate<{ user: IArtist }>(
    "user",
    "firstName lastName email"
  );
  if (!data) {
    throw new AppError(404, "Nexus not Found");
  }
  return data.map((item) => ({
    ...item.toObject(),
    user: {
      name: `${item.user.firstName} ${item.user.lastName}`,
      email: item.user.email,
    },
  }));
};

export const nexusService = {
  createNexus,
  getAllNexus,
};
