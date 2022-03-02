import express from "express";
import passport from "passport";

export default () => {
  let router = express.Router();
  router.get("/", (req, res) => {
    res.status(200).json({ req: req.session, profile: req.user });
  });
  return router;
};
