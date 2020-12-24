import { Router } from "express";
const router = Router();

export default (app) => {
  app.use("/auth", router);
  router.post("/login", (req, res, next) => {});
  router.post("/register", (req, res, next) => {});
};
