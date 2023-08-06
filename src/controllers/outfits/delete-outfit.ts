import { Request, Response } from "express";
import { Outfit } from "../../models/Outfit";

export interface Params {
  id: string;
}

export const deleteOutfitById = async (
  req: Request<Params, {}, {}, {}>,
  res: Response,
) => {
  try {
    const { id } = req.params;

    const outfit = await Outfit.findByIdAndDelete(id);
    res.status(200).json(outfit);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
