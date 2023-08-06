import { Request, Response } from "express";
import { Outfit } from "../../models/Outfit";

export interface SearchQueryParams {
  name?: string;
  color?: string;
  category?: string;
}

interface OutfitsInterface {
  name: string;
  clothings: {
    color: {
      color: string;
      id: string;
    };
    category: {
      category: string;
      id: string;
    };
  }[];
}

export const getOutfits = async (
  req: Request<{}, {}, {}, SearchQueryParams>,
  res: Response,
) => {
  try {
    const { name, color, category } = req.query;

    const dbQuery: any = {};

    if (name) dbQuery.name = { $regex: name as string, $options: "i" };

    const outfits = await Outfit.find(dbQuery)
      .populate({
        path: "clothings",
        populate: {
          path: "category",
        },
      })
      .populate({
        path: "clothings",
        populate: {
          path: "color",
        },
      });

    const destructuredOutfits: OutfitsInterface[] = [...outfits] as any;

    const outfitsToSend = destructuredOutfits.filter((outfit) => {
      if (color) {
        const colorExists = outfit.clothings.find(
          (clothing) => clothing.color.id === color,
        );
        if (!colorExists) return false;
      }

      if (category) {
        const categoryExists = outfit.clothings.find(
          (clothing) => clothing.category.id === category,
        );
        if (!categoryExists) return false;
      }

      return true;
    });

    res.status(200).json(outfitsToSend);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
