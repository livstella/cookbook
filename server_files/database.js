const { Pool } = require("pg");

const pool = new Pool({
  user: "mkyetkss",
  host: "rogue.db.elephantsql.com",
  database: "mkyetkss",
  password: process.env.DB_PASS,
  port: 5432,
});

module.exports = pool;
