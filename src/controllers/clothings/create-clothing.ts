import { Request, Response } from "express";
import { Clothing } from "../../models/Clothing";

export interface Clothing {
  name: string;
  color: string;
  category: string;
  image_url?: string;
}

export const createClothing = async (
  req: Request<{}, {}, Clothing, {}>,
  res: Response,
) => {
  try {
    const clothing = req.body;

    const newClothing = new Clothing({...clothing, image_url:""});

    const savedClothing = await newClothing.save();

    res.status(201).json(savedClothing);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
