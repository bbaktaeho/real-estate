import passport from "passport";
import { jwtStrategy, loadLocalStrategy } from "./strategy";

export default () => {
  // Load Strategy
  passport.use(loadLocalStrategy());

  // jwt
  passport.use(jwtStrategy());
};
