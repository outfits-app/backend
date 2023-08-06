import { Router } from "express";
import { createClothing } from "../controllers/clothings/create-clothing";
import { getClothing } from "../controllers/clothings/get-clothings";
import { getClothingById } from "../controllers/clothings/get-clothing-by-id";
import { deleteClothingById } from "../controllers/clothings/delete-clothing";
import { addImageToClothing } from "../controllers/clothings/add-image-to-clothing";
import { upload } from "../middlewares/multer";

const clothings = Router();

clothings.get("/", getClothing);
clothings.get("/:id", getClothingById);
clothings.delete("/:id", deleteClothingById);
clothings.post("/", createClothing);
clothings.post("/image/:id", upload.single("my_file"), addImageToClothing);

export default clothings;
