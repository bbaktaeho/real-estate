import express from "express";
import loaders from "./loaders";
import { logger } from "./utils/winston";

(async () => {
  const app = express();
  const port = 9000;

  await loaders(app);

  // process event
  process.on("SIGINT", async () => {
    await app.close();
    process.exit(0);
  });

  // port binding
  app.listen(port, (err) => {
    if (err) {
      console.error(err.message);
      process.exit(0);
    } else {
      logger.info(`Server listening on port ${port}`);
      process.send("ready");
    }
  });
})();
