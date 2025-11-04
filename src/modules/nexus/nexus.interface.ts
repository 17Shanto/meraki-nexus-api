import { Document, Types } from "mongoose";

export interface IArtist {
  firstName: string;
  lastName: string;
  email: string;
}
// export interface IScore {
//   aesthetic_score: number;
//   sentiment_score: number;
//   memorability_score: number;
//   art_evaluation_score: number;
// }

export interface IPrediction {
  class_name: string;
  confidence: number;
}

export interface INexus extends Document {
  title: string;
  artist: string;
  image_url: string;
  // scores: IScore;
  art_value_usd: number;
  created_year: string;
  medium: string;
  tags: IPrediction[];
  user: Types.ObjectId | IArtist;
  available: number;
  price_per_unit: number;
}
