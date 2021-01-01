import passport from "passport";
import { logger } from "../../../utils/winston";
import jwt from "jsonwebtoken";
import config from "../../../config";

const noSession = { session: false };
// 임시 옵션
// const ops = {}

export const authenticateJwt = (req, res, next) =>
  passport.authenticate("jwt", noSession, (err, user) => {
    if (err) return next(err);
    if (!user) return res.status(401).json({ success: false, message: "Unauthorized" });
    req.user = user;
    next();
  })(req, res, next);
