import fs from "fs";

export default () => {
  if (!fs.existsSync("upload")) fs.mkdirSync("upload");
};
