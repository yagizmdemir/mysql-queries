import mysql = require('mysql');
import dotenv = require('dotenv');
dotenv.config();

export const mySqlConnection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});
