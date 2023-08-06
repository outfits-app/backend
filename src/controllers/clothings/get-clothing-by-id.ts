import { NextFunction, Request, Response } from "express";
import { Clothing } from "../../models/Clothing";

export interface Params {
  id: string;
}

export const getClothingById = async (
  req: Request<Params, {}, {}, {}>,
  res: Response,
) => {
  try {
    const { id } = req.params;

    const clothing = await Clothing.findById(id);

    res.status(200).json(clothing);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
