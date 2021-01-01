import dotenv from "dotenv";
import dbConfig from "./db.config";
const env = dotenv.config();
if (env.error) throw new Error(".env 없음");

process.env.NODE_ENV = process.env.NODE_ENV || "development";

export default {
  port: parseInt(process.env.PORT, 10),
  excelFieldName: process.env.EXCEL_FIELD_NAME,
  db: dbConfig,
  dbSchema: process.env.DB_SCHEMA,
};
