import db from "mysql2/promise";
import config from "../config";
import { logger } from "../utils/winston";

export default async () => {
  const connDB = await db.createConnection({
    ...config.db,
  });
  /**
   * @description create database schema
   */
  await connDB.execute(`CREATE DATABASE IF NOT EXISTS ${config.dbSchema}`);
  logger.info(`CREATE DATABASE IF NOT EXISTS ...`);
  await connDB.end();
  const connTABLE = await db.createConnection({
    ...config.db,
    database: config.dbSchema,
  });
  const tables = [
    `CREATE TABLE IF NOT EXISTS trading_and_jeonse (
        id int(11) NOT NULL AUTO_INCREMENT,
        a varchar(100) DEFAULT NULL,
        b varchar(100) DEFAULT NULL,
        c varchar(100) DEFAULT NULL,
        d varchar(100) DEFAULT NULL,
        e varchar(100) DEFAULT NULL,
        f varchar(100) DEFAULT NULL,
        g varchar(100) DEFAULT NULL,
        h varchar(100) DEFAULT NULL,
        i float DEFAULT NULL,
        j int(11) DEFAULT NULL,
        k int(11) DEFAULT NULL,
        l varchar(100) DEFAULT NULL,
        m float DEFAULT NULL,
        n float DEFAULT NULL,
        o float DEFAULT NULL,
        p float DEFAULT NULL,
        q int(11) DEFAULT NULL,
        r float DEFAULT NULL,
        s float DEFAULT NULL,
        t float DEFAULT NULL,
        u float DEFAULT NULL,
        v int(11) DEFAULT NULL,
        w int(11) DEFAULT NULL,
        x int(11) DEFAULT NULL,
        y int(11) DEFAULT NULL,
        z int(11) DEFAULT NULL,
        aa int(11) DEFAULT NULL,
        ab float DEFAULT NULL,
        ac varchar(100) DEFAULT NULL,
        ad varchar(100) DEFAULT NULL,
        ae varchar(100) DEFAULT NULL,
        af datetime DEFAULT NULL,
        ag datetime DEFAULT NULL,
        ah int(11) DEFAULT NULL,
        ai float DEFAULT NULL,
        aj float DEFAULT NULL,
        ak varchar(100) DEFAULT NULL,
        al varchar(100) DEFAULT NULL,
        am int(11) DEFAULT NULL,
        an varchar(100) DEFAULT NULL,
        ao varchar(100) DEFAULT NULL,
        ap varchar(100) DEFAULT NULL,
        aq varchar(100) DEFAULT NULL,
        ar varchar(100) DEFAULT NULL,
        \`as\` int(11) DEFAULT NULL,
        at varchar(100) DEFAULT NULL,
        au int(11) DEFAULT NULL,
        av varchar(100) DEFAULT NULL,
        aw int(11) DEFAULT NULL,
        ax int(11) DEFAULT NULL,
        ay int(11) DEFAULT NULL,
        az int(11) DEFAULT NULL,
        ba int(11) DEFAULT NULL,
        bb int(11) DEFAULT NULL,
        bc int(11) DEFAULT NULL,
        bd int(11) DEFAULT NULL,
        be int(11) DEFAULT NULL,
        bf int(11) DEFAULT NULL,
        bg int(11) DEFAULT NULL,
        bh int(11) DEFAULT NULL,
        bi varchar(100) DEFAULT NULL,
        bj varchar(100) DEFAULT NULL,
        bk float DEFAULT NULL,
        bl int(11) DEFAULT NULL,
        bm int(11) DEFAULT NULL,
        bn int(11) DEFAULT NULL,
        bo int(11) DEFAULT NULL,
        bp float DEFAULT NULL,
        bq float DEFAULT NULL,
        br float DEFAULT NULL,
        bs float DEFAULT NULL,
        bt float DEFAULT NULL,
        bu float DEFAULT NULL,
        bv float DEFAULT NULL,
        bw float DEFAULT NULL,
        bx float DEFAULT NULL,
        \`by\` float DEFAULT NULL,
        bz float DEFAULT NULL,
        ca float DEFAULT NULL,
        created_at timestamp NOT NULL DEFAULT current_timestamp(),
        updated_at timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
        PRIMARY KEY (id),
        UNIQUE KEY a (a,f,g)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8`,
    `
      CREATE TABLE IF NOT EXISTS user (
          id int(11) NOT NULL AUTO_INCREMENT,
          user_id varchar(255) NOT NULL,
          name varchar(255) NOT NULL,
          password varchar(255) NOT NULL,
          admin tinyint NOT NULL,
          created_at timestamp NOT NULL DEFAULT current_timestamp(),
          updated_at timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
          PRIMARY KEY (id),
          UNIQUE KEY (user_id)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8
    `,
  ];

  await Promise.all(tables.map((i) => connTABLE.execute(i)));
  await connTABLE.end();
  logger.info(`CREATE TABLE IF NOT EXISTS ...`);
  logger.info("Database loaded");
};
