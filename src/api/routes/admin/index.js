import { Router } from "express";
import authAdminRouter from "./auth.admin.router";
const router = Router();

export default (app) => {
  app.use("/admin", router);
  router.get("/", (req, res) => {
    res.json({ d: "d" });
  });
  authAdminRouter(router);
};
