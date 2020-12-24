import { Router } from "express";
const router = Router();

export default (app) => {
  app.use("/auth", router);

  /**
   * @route POST /v1/api/admin/auth/login
   * @description 관리자 로그인
   */
  router.post("/login", (req, res, next) => {});

  /**
   * @route POST /v1/api/admin/auth/register
   * @description 관리자 회원가입
   */
  router.post("/register", (req, res, next) => {});
};
