import express from "express";
import config from "./config";
import initializeDb from "./db";
import api from "./routes";

const app = express();

(async () => {
  try {
    await initializeDb((db) => {
      app.use("/", api({ config, db }));
    });
  } catch (e: any) {
    throw new Error(e);
  }
})();

app.listen(config.PORT, () => {
  console.log("I am running on port " + config.PORT);
});
