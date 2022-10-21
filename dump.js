// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'abc',
  password: 'password'
});

connection.query('CREATE DATABASE IF NOT EXISTS sample');

console.log('DB INITIALIZED')

connection.query('CREATE TABLE IF NOT EXISTS sample.sample (id INT NOT NULL AUTO_INCREMENT, name VARCHAR(255), PRIMARY KEY (id))');

console.log('TABLE CREATED');

process.exit(0);