// database name and password to be replaced
import mysql from "mysql2";
import "dotenv/config";
import fs from "fs/promises";

const dbConfig = {
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  database: process.env.MYSQL_DATABASE,
  password: process.env.MYSQL_PASSWORD,
  multipleStatements: true,
};

const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
  if (err) {
    console.error("Fejl ved oprettelse af forbindelse til database: " + err);
  } else {
    console.log("Forbindelse til database er oprettet.");
  }
});

export default connection;
