import UserService from "../services/user.service";
import passport from "passport";
import { logger } from "../../utils/winston";
import jwt from "jsonwebtoken";
import config from "../../config";

const signOps = {
  expiresIn: "1h",
};

const UserController = {
  login: (req, res, next) => {
    passport.authenticate("local", { session: false }, (err, user, info) => {
      if (err || !user) return res.status(400).json({ success: false, message: info });
      req.login(user, { session: false }, (e) => {
        if (e) return next(e);
        const token = jwt.sign({ id: user.id, name: user.name, admin: user.admin }, config.jwt.secret, signOps);
        return res.status(201).json({ success: true, token });
      });
    })(req, res);
  },

  register: async (req, res, next) => {
    try {
      const { userId, name, password, admin } = req.body;
      await UserService.register(userId, name, password, admin);
      res.status(200).json({ success: true });
    } catch (e) {
      next(e);
    }
  },
};

export default UserController;
