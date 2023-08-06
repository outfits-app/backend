import * as express from "express";
import envs from "./config/index";
import routes from "./routes/index";
import { connect } from "./db";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: envs.CLOUDINARY_CLOUD_NAME,
  api_key: envs.CLOUDINARY_API_KEY,
  api_secret: envs.CLOUDINARY_API_SECRET,
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", routes);

connect();

app.listen(envs.port, () => {
  console.log("Application is running on port " + envs.port);
});
