import { Router } from "express";
import authUserRouter from "./auth.user.router";
const router = Router();

export default (app) => {
  app.use("/users", router);
  authUserRouter(router);
};
