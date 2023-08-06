import { Request, Response } from "express";
import { Outfit } from "../../models/Outfit";

export interface Outfit {
  name: string;
  clothings: string[];
}

export const createOutfit = async (
  req: Request<{}, {}, Outfit, {}>,
  res: Response,
) => {
  try {
    const outfit = req.body;

    const newOutfit = new Outfit(outfit);

    const savedOutfit = await newOutfit.save();

    res.status(201).json(savedOutfit);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
