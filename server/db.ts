// const { db } = require('./config')
import config from "./config";
import mongoose from "mongoose";

export default async (callback: (connect: typeof mongoose) => void) => {
  const connect = await mongoose.connect(config.DB);

  callback(connect);
};
