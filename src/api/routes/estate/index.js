import { Router } from "express";
import config from "../../../config";
import EstateController from "../../controllers/estate.controller";
import { estateUpload } from "../../middlewares/multers/estate.multer";
const router = Router();

export default (app) => {
  app.use("/estates", router);

  router.post("/upload", estateUpload, EstateController.upload);
  router.get("/", EstateController.getList);
  router.post("/", (req, res) => {});
  router.delete("/:id", (req, res) => {});
  router.put("/:id", (req, res) => {});
};
