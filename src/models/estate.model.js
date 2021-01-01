import { executeQuery } from "./pool";

const TABLE = "trading_and_jeonse";

const Estate = {
  insertList: async (list) => {
    // 아파트, 평형
    const query =
      "insert into `trading_and_jeonse` (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, `as`, `at`, au, av, aw, ax, ay, az,ba, bb, bc, bd, be, bf, bg, bh, bi, bj, bk, bl, bm, bn, bo, bp, bq, br, bs, bt, bu, bv, bw, bx, `by`, bz, ca) values ?;";
    const values = list.map((e) => Object.values(e));
    return await executeQuery(query, [values]);
  },
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
