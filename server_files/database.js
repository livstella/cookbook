const { Pool } = require("pg");

const pool = new Pool({
  user: "mkyetkss",
  host: "rogue.db.elephantsql.com",
  database: "mkyetkss",
  password: "nHHgWKj4gtcTT3Cjjdy34C5j14De-hu4",
  port: 5432,
});

module.exports = pool;
