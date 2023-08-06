import { Request, Response } from "express";
import { Outfit } from "../../models/Outfit";

export interface Outfit {
  name: string;
  clothings: string[];
}

export interface Params {
  id: string;
}

export const editOutfit = async (
  req: Request<Params, {}, Outfit, {}>,
  res: Response,
) => {
  try {
    const { id } = req.params;
    const outfit = req.body;

    console.log(id);

    const editedOutfit = await Outfit.findByIdAndUpdate(id, outfit, {
      new: true,
    });

    res.status(201).json(editedOutfit);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
