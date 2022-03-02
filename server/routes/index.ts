import express from "express";
import authenticationRoute from "./authentication.route";
import { IRoute } from "../interface/routes.type";
import authenticatedRoutes from "./AuthenticatedRoutes";

export default ({ config, db }: IRoute) => {
  let api = express.Router();

  api.use(authenticatedRoutes());
  api.use(authenticationRoute());

  return api;
};
