import { Router } from "express";
const router = Router();

export default (app) => {
  app.use("/users", router);

  /**
   * @route GET /v1/api/admin/users
   * @description 모든 유저 조회
   */
  router.get("/", (req, res, next) => {});

  /**
   * @route GET /v1/api/admin/users/{id}
   * @description 특정 유저 상세 조회
   */
  router.get("/:id", (req, res, next) => {});
};
