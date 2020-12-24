import { executeQuery } from "./pool";

const TABLE = "trading_and_jeonse";

const Estate = {
  getList: async (offset, limit) => {
    const query = `SELECT * FROM ${TABLE} LIMIT ?, ?;`;
    return await executeQuery(query, [offset, limit]);
  },
  getListByArg: async (arg, range) => {
    const query = `SELECT * FROM ${TABLE} WHERE ${arg} BETWEEN ? AND ?;`;
    const values = range.split("~").map((e) => +e);
    return await executeQuery(query, values);
  },
  getListByArgs: async (arg1, arg2, range1, range2) => {
    const query = `SELECT * FROM ${TABLE} WHERE ${arg1} BETWEEN ? AND ? AND ${arg2} BETWEEN ? AND ?;`;
    const values = [...range1.split("~").map((e) => +e), ...range2.split("~").map((e) => +e)];
    return await executeQuery(query, values);
  },
};
export default Estate;
