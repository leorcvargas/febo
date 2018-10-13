import { Document, Schema, model } from 'mongoose';

export interface TrackModel extends Document {
  _id: string;
  name: string;
  img: string;
  path: string;
  audio: string;
  createdAt: Date;
  updatedAt: Date;
}

const TrackSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  audio: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
  path: {
    type: String,
    required: true,
  }
}, { timestamps: true });

export const Track = model<TrackModel>('tracks', TrackSchema);
