import { Router } from "express";
import { getCategories } from "../controllers/categories/get-category";
import { addCategory } from "../controllers/categories/add-category";

const categories = Router();

categories.get("/", getCategories);
categories.post("/", addCategory);

export default categories;
