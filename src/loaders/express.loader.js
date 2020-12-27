import { json, urlencoded } from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import hpp from "hpp";
import passportConfig from "../utils/passport";
import routes from "../api/routes";
import passport from "passport";

export default (app) => {
  // Application middleware
  app.use(helmet());
  app.use(cors());
  app.use(hpp());
  app.use(morgan("dev"));
  app.use(json());
  app.use(urlencoded({ extended: true }));
  app.use(passport.initialize());
  passportConfig();

  // router
  app.use("/v1/api", routes());
  app.use("/favicon.ico", (req, res, next) => res.status(204));
  app.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
  });

  // error handler
  app.use((err, rq, rs, n) => {
    console.error(err.message);
    if (err.errno == 1062) rs.status(409).json({ success: false, message: "중복" });
    else rs.status(err.status || 500).json({ success: false, message: err.message });
  });
};
