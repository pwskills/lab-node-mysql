const connection = require('./db');

connection.query('CREATE DATABASE IF NOT EXISTS sample');
connection.query('USE sample');
connection.query('CREATE TABLE IF NOT EXISTS sample (id INT NOT NULL AUTO_INCREMENT, name VARCHAR(255), PRIMARY KEY (id))');