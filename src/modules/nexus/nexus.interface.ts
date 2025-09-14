import { Types } from "mongoose";

export interface IScore {
  aesthetic_score: number;
  sentiment_score: number;
  memorability_score: number;
  art_evaluation_score: number;
}

export interface INexus {
  title: string;
  artist: string;
  image_url: string;
  classification: string;
  classification_percentage: number;
  scores: IScore;
  art_value_usd: number;
  created_year: string;
  medium: string;
  tags: string[];
  user: Types.ObjectId;
}
