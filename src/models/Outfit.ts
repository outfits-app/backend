import mongoose, { Schema } from "mongoose";

export const outfitSchema = new mongoose.Schema({
  name: String,
  clothings: [
    {
      type: Schema.Types.ObjectId,
      ref: "Clothing",
      required: true,
    },
  ],
});

export const Outfit = mongoose.model("Outfit", outfitSchema, "outfits");
