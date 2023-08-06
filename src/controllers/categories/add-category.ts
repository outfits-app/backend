import { Request, Response } from "express";
import { Categories } from "../../models/Categories";

export interface Category {
  category: string;
}

export const addCategory = async (
  req: Request<{}, {}, Category, {}>,
  res: Response,
) => {
  try {
    const category = req.body;

    const newCategory = new Categories(category);

    const savedCategory = await newCategory.save();

    res.status(201).json(savedCategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
