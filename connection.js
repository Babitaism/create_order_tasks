const mysql = require("mysql");
const util = require("util");

const connectionStr = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "babita_360703",
  database: "voxxcall",
});

const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : 'localhost',
      port : 3306,
      user : 'root',
      password : "babita_360703",
      database : "voxxcall"
    }
  });

  const query = util.promisify(connectionStr.query).bind(connectionStr);

  connectionStr.connect((err) => {
    if (err) {
      throw err;
    }
    console.log("MYSQL Connected");
  });

  module.exports = query;
