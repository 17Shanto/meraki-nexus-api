import axios from "axios";
import AppError from "../../error/AppError";
import { IArtist, INexus } from "./nexus.interface";
import Nexus from "./nexus.model";

const createNexus = async (payload: INexus) => {
  const apiUrl = "https://meraki-nexus-ai-1.onrender.com/nexus-ai/evaluate";

  try {
    const response = await axios.post(apiUrl, { image_url: payload.image_url });
    if (response.data.detail) {
      throw new AppError(404, response.data.detail);
    } else {
      payload.tags = response.data.predictions;
      const data = await Nexus.create(payload);
      return data;
    }
  } catch {
    throw new AppError(404, "prediction failed due to invalid img_url");
  }
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

const getNexusById = async (nexusId: string) => {
  const nexus = await Nexus.findById(nexusId);
  if (!nexus) {
    throw new AppError(404, "Nexus not found");
  }
  return nexus;
};

const updateNexusById = async (nexusId: string, body: any) => {
  const data = await Nexus.findByIdAndUpdate(nexusId, body, { new: true });
  if (!data) {
    throw new AppError(404, "Nexus not found");
  }
  return data;
};

const deleteNexusById = async (nexusId: string) => {
  const data = await Nexus.findByIdAndDelete(nexusId);
  if (!data) {
    throw new AppError(404, "Nexus not found");
  }
  return data;
};

export const nexusService = {
  createNexus,
  getAllNexus,
  getNexusById,
  updateNexusById,
  deleteNexusById,
};
