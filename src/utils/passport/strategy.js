import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";

export const loadLocalStrategy = () =>
  new LocalStrategy(
    { usernameField: "email", passwordField: "password", session: false },
    async (email, password, done) => {
      try {
        // TODO: check DB
        const user = {};
        done(null, user);
      } catch (e) {
        done(e, false);
      }
    }
  );

export const jwtStrategy = () =>
  new JwtStrategy(
    { jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), secretOrKey: "test" },
    async (payload, done) => {
      try {
        // const user = await User.findOne({ attributes: { exclude: ['password'] }, where: { id: payload.id } })
        if (!user) done(null, false);
        else done(null, user);
      } catch (err) {
        done(err, false);
      }
    }
  );
