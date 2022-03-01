import express from "express";
import passport from "passport";
import { IRoute } from "../interface/routes.type";

export default ({ config, db }: IRoute) => {
  const router = express.Router();

  router.get("/login/google", passport.authenticate("google"));
  router.get(
    "/oauth2/redirect/google",
    passport.authenticate("google", {
      failureRedirect: "/",
      failureMessage: true,
    }),
    (req, res) => {
      //   console.log(res);
      res.redirect('/');
    }
  );
  return router;
};
