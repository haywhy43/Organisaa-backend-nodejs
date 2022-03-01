import express from "express";
import config from "./config";
import passportConfig from "./configurations/passport";
import initializeDb from "./db";
import api from "./routes";
import session from "express-session";

const app = express();

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: {},
  })
);

(async () => {
  try {
    await initializeDb((db) => {
      app.use("/", api({ config, db }));

      passportConfig();
    });
  } catch (e: any) {
    throw new Error(e);
  }
})();

app.listen(config.PORT, () => {
  console.log("I am running on port " + config.PORT);
});
