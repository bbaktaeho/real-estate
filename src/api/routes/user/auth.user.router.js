import { Router } from "express";
import UserController from "../../controllers/user.controller";
const router = Router();

export default (app) => {
  app.use("/auth", router);
  router.post("/login", UserController.login);
  router.post("/register", UserController.register);
};
