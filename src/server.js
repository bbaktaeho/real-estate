import express from "express";
import loaders from "./loaders";

(async () => {
  const app = express();
  const port = 9000;

  await loaders(app);

  app.listen(port, (err) => {
    if (err) {
      console.error(err.message);
      process.exit(1);
    } else console.log("실행 중");
  });
})();
