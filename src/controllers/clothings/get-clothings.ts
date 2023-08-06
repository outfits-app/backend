import { NextFunction, Request, Response } from "express";
import { Clothing } from "../../models/Clothing";

export interface SearchQueryParams {
  name?: string | { $regex: string; $options: string };
  color?: string;
  category?: string;
}

export const getClothing = async (
  req: Request<{}, {}, {}, SearchQueryParams>,
  res: Response,
) => {
  try {
    const { name, color, category } = req.query;

    const dbQuery: SearchQueryParams = {};

    if (name) dbQuery.name = { $regex: name as string, $options: "i" };
    if (color) dbQuery.color = color as string;
    if (category) dbQuery.category = category as string;

    const clothings = await Clothing.find(dbQuery)
      .populate("category")
      .populate("color");

    res.status(200).json(clothings);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
