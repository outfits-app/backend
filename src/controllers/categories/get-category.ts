import { Request, Response } from "express";
import { Categories } from "../../models/Categories";

export const getCategories = async (
  req: Request<{}, {}, {}, {}>,
  res: Response,
) => {
  try {
    const categories = await Categories.find();

    res.status(200).json(categories);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
