import { Router } from "express";
import { getColors } from "../controllers/colors/get-colors";
import { addColor } from "../controllers/colors/add-color";

const colors = Router();

colors.get("/", getColors);
colors.post("/", addColor);

export default colors;
