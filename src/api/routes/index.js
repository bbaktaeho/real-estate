import { Router } from "express";
import estate from "./estate";
import user from "./user";
const app = Router();

export default () => {
  user(app);
  estate(app);
  return app;
};
