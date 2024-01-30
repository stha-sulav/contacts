import mongoose from "mongoose";
import env from "../utils/validateEnv";

export const connectDb = async () => {
  try {
    await mongoose.connect(env.MONGO_URI);
    console.log("Connected to database");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
