import express from "express";
import loaders from "./loaders";
import { logger } from "./utils/winston";

(async () => {
  const app = express();
  const port = 9000;

  await loaders(app);

  app.listen(port, (err) => {
    if (err) {
      console.error(err.message);
      process.exit(1);
    } else logger.info(`Server listening on port ${port}`);
  });
})();
