import { NextFunction, Request, Response } from "express";
import { Clothing } from "../../models/Clothing";

export interface Params {
  id: string;
}

export const deleteClothingById = async (
  req: Request<Params, {}, {}, {}>,
  res: Response,
) => {
  try {
    const { id } = req.params;

    const clothing = await Clothing.findByIdAndDelete(id);

    res.status(200).json(clothing);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
