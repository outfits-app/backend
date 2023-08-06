import { Request, Response } from "express";
import { v2 as cloudinary } from "cloudinary";
import { Clothing } from "../../models/Clothing";

export const addImageToClothing = async (
  req: Request<any, {}, any, any>,
  res: Response,
) => {
  try {
    const { id } = req.params;

    const clothing = await Clothing.findById(id);

    if (!clothing) {
      throw new Error("Clothing not found");
    }

    const b64 = Buffer.from(req.file!.buffer).toString("base64");

    let dataURI = "data:" + req.file!.mimetype + ";base64," + b64;

    await cloudinary.uploader.upload(dataURI, {
      resource_type: "auto",
      public_id: id,
      overwrite: true,
    });

    const image_url = cloudinary.url(id);

    clothing.image_url = image_url;

    await clothing.save();
    const clothingToSend = await (await clothing.populate("category")).populate("color");

    return res.status(200).json(clothingToSend);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
