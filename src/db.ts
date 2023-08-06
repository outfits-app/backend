import mongoose from "mongoose";
import envs from "./config/index";

export const connect = async () => {
  try {
    await mongoose.connect(envs.DB!);

    mongoose.set("toJSON", {
      virtuals: true,
      transform: (_doc, converted) => {
        delete converted._id;
        delete converted.__v;
      },
    });

    mongoose.set("toObject", {
      virtuals: true,
      transform: (_doc, converted) => {
        delete converted._id;
        delete converted.__v;
      },
    });
    console.log(">>> DB is connected");
  } catch (error) {
    console.log(error);
  }
};
