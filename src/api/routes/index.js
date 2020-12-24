import { Router } from "express";
import admin from "./admin";
import estate from "./estate";
import user from "./user";
const app = Router();

export default () => {
  admin(app);
  user(app);
  estate(app);
  return app;
};
