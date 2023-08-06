import { Router } from "express";
import clothings from "./clothings";
import outfits from "./outfits";
import colors from "./colors";
import categories from "./categories";

const router = Router();

router.use("/clothings", clothings);
router.use("/outfits", outfits);
router.use("/colors", colors);
router.use("/categories", categories);

export default router;
