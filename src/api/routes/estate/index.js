import { Router } from "express";
import EstateController from "../../controllers/estate.controller";
import { authenticateJwt } from "../../middlewares/auth";
import { estateUpload } from "../../middlewares/multers/estate.multer";
const router = Router();

export default (app) => {
  app.use("/estates", router);

  router.use(authenticateJwt);

  router.post("/upload", estateUpload, EstateController.upload);
  router.get("/", EstateController.getList);
  router.post("/", (req, res) => {});
  router.delete("/:id", (req, res) => {});
  router.put("/:id", (req, res) => {});
};
