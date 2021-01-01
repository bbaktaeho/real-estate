import databaseLoader from "./database.loader";
import expressLoader from "./express.loader";
import fsLoader from "./fs.loader";

export default async (app) => {
  expressLoader(app);
  fsLoader();
  await databaseLoader();
};
