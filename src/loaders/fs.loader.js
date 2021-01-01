import fs from "fs";
import { logger } from "../utils/winston";

export default () => {
  if (!fs.existsSync("upload")) fs.mkdirSync("upload");
  logger.info("File System loaded");
};
