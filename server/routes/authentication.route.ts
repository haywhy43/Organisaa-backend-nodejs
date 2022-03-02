import express from "express";
import passport from "passport";
import { IRoute } from "../interface/routes.type";

export default () => {
  const router = express.Router();

  router.get("/login/google", passport.authenticate("google"));

  router.get(
    "/oauth2/redirect/google",
    passport.authenticate("google", {
      failureRedirect: "/",
      failureMessage: true,
    }),
    (req, res) => {
      res.redirect("/");
    }
  );

  router.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });
  return router;
};
