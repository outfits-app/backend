import { Router } from "express";
import { createOutfit } from "../controllers/outfits/create-outfit";
import { getOutfits } from "../controllers/outfits/get-outfits";
import { getOutfitById } from "../controllers/outfits/get-outfit-by-id";
import { deleteOutfitById } from "../controllers/outfits/delete-outfit";
import { editOutfit } from "../controllers/outfits/edit-outfit";

const outfits = Router();

outfits.get("/", getOutfits);
outfits.get("/:id", getOutfitById);
outfits.delete("/:id", deleteOutfitById);
outfits.post("/", createOutfit);
outfits.put("/:id", editOutfit);

export default outfits;
