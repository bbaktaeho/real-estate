import dotenv from "dotenv";
import dbConfig from "./db.config";
import jwtConfig from "./jwt.config";
const env = dotenv.config();
if (env.error) throw new Error(".env 없음");

process.env.NODE_ENV = process.env.NODE_ENV || "development";

export default {
  // server port
  port: parseInt(process.env.PORT, 10),

  // multer fieldName
  excelFieldName: process.env.EXCEL_FIELD_NAME,

  // database
  db: dbConfig,

  // database schema
  dbSchema: process.env.DB_SCHEMA,

  // jwt
  jwt: jwtConfig,
};
