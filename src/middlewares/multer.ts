import Multer from "multer";

const storage = Multer.memoryStorage();
export const upload = Multer({
  storage,
});
