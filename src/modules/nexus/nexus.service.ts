import { INexus } from "./nexus.interface";
import Nexus from "./nexus.model";

const createNexus = async (payload: INexus) => {
  const data = await Nexus.create(payload);
  return data;
};

export const nexusService = {
  createNexus,
};
