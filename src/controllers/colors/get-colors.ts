import { Request, Response } from "express";
import { Color } from "../../models/Colors";

export const getColors = async (
  req: Request<{}, {}, {}, {}>,
  res: Response,
) => {
  try {
    const colors = await Color.find();

    res.status(200).json(colors);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
