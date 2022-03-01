import express from "express";
import authenticationRoute from "./authentication.route";
import { IRoute } from "../interface/routes.type";
// import passport from "~/configurations/passport";
import passport from "passport";

export default ({ config, db }: IRoute) => {
  let api = express.Router();
//   api.get('/login/google', passport.authenticate('google'))
  api.use(authenticationRoute({ config, db }));
  return api;
};
