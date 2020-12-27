import mysql2, { format } from "mysql2/promise";
import config from "../../config";

const pool = mysql2.createPool({
  ...config.db,
  database: "real_estate",
  connectionLimit: 10,
  waitForConnections: true,
});

export const executeQuery = (query, values = []) =>
  new Promise(async (resolve, reject) => {
    let conn;
    try {
      conn = await pool.getConnection();
      const sql = format(query, values);
      const [result] = await conn.execute(sql);
      conn.release();
      resolve(result);
    } catch (e) {
      if (conn) conn.release();
      reject(e);
    }
  });
