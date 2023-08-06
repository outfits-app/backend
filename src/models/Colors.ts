import { Schema, model } from "mongoose";

export const colorSchema = new Schema({
  color: {
    type: Schema.Types.String,
    required: true,
  },
});

export const Color = model("Colors", colorSchema, "colors");
