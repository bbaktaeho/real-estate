import { Router } from "express";
import EstateController from "../../controllers/estate.controller";
const router = Router();

export default (app) => {
  app.use("/estates", router);

  router.post("/upload", (req, res) => {});
  router.get("/", EstateController.getList);
  router.post("/", (req, res) => {});
  router.delete("/:id", (req, res) => {});
  router.put("/:id", (req, res) => {});
};
