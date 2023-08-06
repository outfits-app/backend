import { Schema, model } from "mongoose";

export const clothingSchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
  },
  color: {
    type: Schema.Types.ObjectId,
    ref: "Colors",
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Categories",
    required: true,
  },
  image_url: {
    type: Schema.Types.String,
    default: ""
  },
});

export const Clothing = model("Clothing", clothingSchema, "clothings");
