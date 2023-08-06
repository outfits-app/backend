import { Request, Response } from "express";
import { Color } from "../../models/Colors";

export interface Color {
  color: string;
}

export const addColor = async (
  req: Request<{}, {}, Color, {}>,
  res: Response,
) => {
  try {
    const color = req.body;

    const newColor = new Color(color);

    const savedColor = await newColor.save();

    res.status(201).json(savedColor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
