const mysql2 = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

const dbConnection = mysql2.createPool({
  user: process.env.USER,
  database: process.env.DATABASE,
  host: process.env.HOST,
  password: process.env.PASSWORD,
  port: process.env.PORT,
  connectionLimit: 10,
  //   socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
});
console.log(process.env.DB_PASSWORD);

// module.exports = dbConnection;
module.exports = dbConnection.promise();
