import http from "http";
import express from "express";
import config from "./config";
import passportConfig from "./configurations/passportConfig";
import initializeDb from "./db";
import api from "./routes";
import session from "express-session";
import passport from "passport";

const app = express();
app.server = http.createServer(app);

app.use(
  session({
    // genid: function (req) {
    //   return genuuid(); // use UUIDs for session IDs
    // },
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: {},
  })
);

app.use(
  passport.authenticate("session", {
    failureRedirect: "/login/google",
    failureMessage: true,
  })
);

(async () => {
  try {
    await initializeDb((db) => {
      app.use((req, res, next) => {
        let exclude = ["/login/google", "/oauth2/redirect/google", "/logout"];

        if (!exclude.includes(req.path)) {
          if (req.isAuthenticated()) return next();

          // res.redirect("/login/google");
          res.status(401).json({ messsage: "Unauthorized" });
        } else {
          next();
        }
      });
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
