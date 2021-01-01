import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import config from "../../config";
import User from "../../models/user.model";
import bcrypt from "bcrypt";

export const loadLocalStrategy = () =>
  new LocalStrategy(
    { usernameField: "userId", passwordField: "password", session: false },
    async (userId, password, done) => {
      try {
        const user = await User.getUserByUserId(userId);
        if (!user) return done(null, false, { message: "!user" });
        if (!bcrypt.compareSync(password, user.password)) return done(null, false, { message: "!bcrypt" });
        done(null, user);
      } catch (e) {
        done(e);
      }
    }
  );

export const jwtStrategy = () =>
  new JwtStrategy(
    { jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), secretOrKey: config.jwt.secret },
    async (payload, done) => {
      try {
        const user = await User.getUserById(payload.id);
        if (!user) return done(null, false, { message: "!user" });
        done(null, user);
      } catch (e) {
        done(e);
      }
    }
  );
